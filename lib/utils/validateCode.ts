/**
 * Validates generated React code against project standards
 */

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates React component code against project standards
 */
export function validateReactCode(code: string): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  // Check for React imports
  const reactImportRegex = /import\s+(?:React|{.*}\s+from\s+['"]react['"]|\*\s+as\s+React\s+from\s+['"]react['"])/g;
  if (reactImportRegex.test(code)) {
    result.errors.push(
      'React imports are not allowed. React is globally available and should not be imported.'
    );
    result.isValid = false;
  }

  // Check for external image assets
  const imageImportRegex = /import\s+.*\.(png|jpg|jpeg|gif|svg|webp|ico|bmp)(\?.*)?['"]/g;
  if (imageImportRegex.test(code)) {
    result.errors.push(
      'Image imports are not allowed. Use inline SVGs instead.'
    );
    result.isValid = false;
  }

  // Check for external SVG imports
  const svgImportRegex = /import\s+.*\.svg(\?.*)?['"]/g;
  if (svgImportRegex.test(code)) {
    result.errors.push(
      'SVG imports are not allowed. Use inline SVGs with proper accessibility attributes instead.'
    );
    result.isValid = false;
  }

  // Check for common React import patterns that might be missed
  const reactPatterns = [
    /from\s+['"]react-dom['"]/g,
    /from\s+['"](@)?react-.*['"]/g,
    /import\s+.*\/node_modules\/react\//g
  ];

  reactPatterns.forEach((pattern) => {
    if (pattern.test(code)) {
      result.errors.push(
        `Found disallowed React-related import: ${pattern.toString()}. React and its dependencies are globally available.`
      );
      result.isValid = false;
    }
  });

  return result;
}

/**
 * Validates SVG code for proper attributes and structure
 */
export function validateSvgCode(svg: string): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  // Check for required SVG attributes
  const svgElement = svg.match(/<svg[^>]*>/)?.[0] || '';
  
  // Check for viewBox attribute
  if (!/viewBox=['"]\s*[\d.]+\s+[\d.]+\s+[\d.]+\s+[\d.]+\s*['"]/i.test(svgElement)) {
    result.warnings.push(
      'SVG should include a viewBox attribute for proper scaling. Example: viewBox="0 0 24 24"'
    );
  }

  // Check for accessibility attributes
  const hasAriaLabel = /aria-label=['"][^'"]+['"]/i.test(svgElement);
  const hasRole = /role=['"]img['"]/i.test(svgElement);
  
  if (!hasAriaLabel && !/aria-labelledby=['"][^'"]+['"]/i.test(svgElement)) {
    result.warnings.push(
      'SVG should include an aria-label or aria-labelledby attribute for accessibility.'
    );
  }
  
  if (!hasRole) {
    result.warnings.push(
      'SVG should include role="img" for proper accessibility.'
    );
  }

  return result;
}

/**
 * Validates both React and SVG code
 */
export function validateCode(code: string): ValidationResult {
  const reactResult = validateReactCode(code);
  
  // Extract SVG content for additional validation
  const svgMatches = code.match(/<svg[\s\S]*?<\/svg>/g) || [];
  const svgResults = svgMatches.map(validateSvgCode);
  
  // Combine all results
  const combinedResult: ValidationResult = {
    isValid: reactResult.isValid && svgResults.every(r => r.isValid),
    errors: [...reactResult.errors],
    warnings: [...reactResult.warnings]
  };
  
  svgResults.forEach(result => {
    combinedResult.errors.push(...result.errors);
    combinedResult.warnings.push(...result.warnings);
  });
  
  return combinedResult;
}
