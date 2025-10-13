## ADDED Requirements

### Requirement: React Import Rules
AI-generated components MUST NOT include React imports since they are already globally available in the project.

#### Scenario: Generating a new component
- **WHEN** the AI generates a new React component
- **THEN** it MUST NOT include any React imports (e.g., `import React from 'react'`)

#### Scenario: Updating an existing component
- **WHEN** the AI modifies an existing component
- **THEN** it MUST remove any redundant React imports

### Requirement: SVG Usage
AI-generated components MUST use inline SVGs instead of external image assets when possible.

#### Scenario: Adding an icon
- **WHEN** the AI adds an icon to a component
- **THEN** it MUST use an inline SVG with appropriate accessibility attributes

#### Scenario: Using complex graphics
- **WHEN** the AI needs to include a complex graphic
- **THEN** it SHOULD use a well-structured SVG with proper viewBox and accessibility attributes

## MODIFIED Requirements

### Requirement: Code Generation Standards
AI-generated code MUST follow enhanced coding standards for better maintainability and performance.

#### Scenario: Generating component code
- **WHEN** the AI generates a new component
- **THEN** it MUST follow these rules:
  - No React imports
  - Use inline SVGs for icons and graphics
  - Include proper accessibility attributes
  - Follow the project's coding style guide

## REMOVED Requirements

### Requirement: External Image Assets
**Reason**: To improve performance and maintainability
**Migration**: Replace all external image assets with inline SVGs or optimized image components
