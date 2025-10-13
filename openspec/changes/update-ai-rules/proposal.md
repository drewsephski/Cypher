## Why
Enhance the AI coding assistant's behavior to be more efficient and consistent by:
1. Preventing redundant React imports since they're already globally available
2. Encouraging the use of inline SVGs for better performance and customization
3. Improving code quality and maintainability through consistent patterns

## What Changes
- Add system prompt rules to prevent React imports
- Enforce using inline SVGs instead of external image assets
- Update documentation to reflect these coding standards
- Add validation to ensure compliance with these rules

## Impact
- **Affected specs**: AI Components, Code Generation
- **Affected code**: System prompts, AI response handlers, component templates
- **Breaking changes**: No, this is an enhancement to existing functionality
