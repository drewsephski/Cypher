import { describe, it, expect } from 'vitest';
import { validateReactCode, validateSvgCode, validateCode } from '../validateCode';

declare global {
  interface Window {
    default: any;
  }
}

describe('validateReactCode', () => {
  it('should allow valid React code without imports', () => {
    const code = `
      function MyComponent() {
        return <div>Hello World</div>;
      }
      window.default = MyComponent;
    `;
    const result = validateReactCode(code);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should reject React imports', () => {
    const code = `
      import React from 'react';
      function MyComponent() {
        return <div>Hello World</div>;
      }
      window.default = MyComponent;
    `;
    const result = validateReactCode(code);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain(
      'React imports are not allowed. React is globally available and should not be imported.'
    );
  });

  it('should reject external image imports', () => {
    const code = `
      import logo from './logo.png';
      function MyComponent() {
        return <img src={logo} alt="Logo" />;
      }
      window.default = MyComponent;
    `;
    const result = validateReactCode(code);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain(
      'Image imports are not allowed. Use inline SVGs instead.'
    );
  });
});

describe('validateSvgCode', () => {
  it('should validate SVG with proper attributes', () => {
    const svg = `
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor"
        aria-label="User icon"
        role="img"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    `;
    const result = validateSvgCode(svg);
    expect(result.isValid).toBe(true);
    expect(result.warnings).toHaveLength(0);
  });

  it('should warn about missing accessibility attributes', () => {
    const svg = `
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    `;
    const result = validateSvgCode(svg);
    expect(result.isValid).toBe(true);
    expect(result.warnings).toContain(
      'SVG should include an aria-label or aria-labelledby attribute for accessibility.'
    );
    expect(result.warnings).toContain(
      'SVG should include role="img" for proper accessibility.'
    );
  });
});

describe('validateCode', () => {
  it('should combine validation results', () => {
    const code = `
      import React from 'react';
      
      function MyComponent() {
        return (
          <div>
            <svg width="24" height="24">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        );
      }
      
      window.default = MyComponent;
    `;
    
    const result = validateCode(code);
    
    // Should have React import error
    expect(result.errors).toContain(
      'React imports are not allowed. React is globally available and should not be imported.'
    );
    
    // Should have SVG warnings
    expect(result.warnings).toContain(
      'SVG should include a viewBox attribute for proper scaling. Example: viewBox="0 0 24 24"'
    );
    expect(result.warnings).toContain(
      'SVG should include an aria-label or aria-labelledby attribute for accessibility.'
    );
    
    // Overall should be invalid due to React import
    expect(result.isValid).toBe(false);
  });
});
