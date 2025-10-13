## MODIFIED Requirements
### Requirement: Error Handling
The system SHALL provide specific and informative error messages to the user.

#### Scenario: API request fails
- WHEN the API request fails
- THEN the user SHALL see an error message that includes the status code and a brief explanation of the error.

#### Scenario: Invalid input
- WHEN the user enters invalid input
- THEN the user SHALL see an error message that explains what input is required.

## MODIFIED Requirements
### Requirement: Loading State
The system SHALL provide a visual indication of the loading progress.

#### Scenario: Component is loading
- WHEN the component is loading
- THEN the user SHALL see a progress bar or a detailed loading animation.

## ADDED Requirements
### Requirement: Contextual Suggestions
The system SHALL provide contextual suggestions to the user.

#### Scenario: User has entered a previous request
- WHEN the user has entered a previous request
- THEN the system SHALL suggest prompts that are relevant to the previous request.