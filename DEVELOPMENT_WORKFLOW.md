# Development Workflow Guide

This guide outlines a comprehensive workflow for developing new features and maintaining your Next.js application using OpenSpec for documentation and Task Master for task management.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Workflow Overview](#workflow-overview)
3. [1. Planning with OpenSpec](#1-planning-with-openspec)
4. [2. Task Management with Task Master](#2-task-management-with-task-master)
5. [3. Development Process](#3-development-process)
6. [4. Code Review & Testing](#4-code-review--testing)
7. [5. Documentation & Handoff](#5-documentation--handoff)
8. [Example: Implementing a New Feature](#example-implementing-a-new-feature)

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- VS Code (recommended) or your preferred IDE
- Task Master CLI installed: `npm install -g @task-master/cli`

## Workflow Overview

1. **Plan** with OpenSpec
2. **Break down** work with Task Master
3. **Develop** features
4. **Review** and test
5. **Document** and hand off

## 1. Planning with OpenSpec

### Creating a New Specification

1. Create a new directory in `openspec/changes/` for your feature:
   ```bash
   mkdir -p openspec/changes/feature-name/specs/feature
   ```

2. Create a proposal file:
   ```bash
   touch openspec/changes/feature-name/proposal.md
   ```

3. Populate the proposal with:
   ```markdown
   # Feature Name
   
   ## Problem Statement
   [Describe the problem being solved]
   
   ## Proposed Solution
   [Outline your solution]
   
   ## Technical Details
   - Technologies: [List technologies]
   - Dependencies: [List dependencies]
   - Performance Impact: [Any performance considerations]
   
   ## Acceptance Criteria
   - [ ] Criteria 1
   - [ ] Criteria 2
   ```

## 2. Task Management with Task Master

### Initializing Task Master

If not already initialized:

```bash
# Install Task Master globally
npm install -g @task-master/cli

# Initialize in your project
mcp7_initialize_project --projectRoot $(pwd) --yes
```

### Creating Tasks from OpenSpec

1. Create a main task for the feature:
   ```bash
   # Using natural language
   task-master add-task "Implement [Feature Name]" --description "[Brief description from OpenSpec]" --tag enhancement
   
   # Or using MCP7 command
   mcp7_add_task --title "Implement [Feature Name]" --description "[Brief description from OpenSpec]" --tag "enhancement" --projectRoot $(pwd)
   ```

2. Break it down into subtasks:
   ```bash
   # Using natural language
   task-master add-subtask "[Subtask 1]" --parent-id 1 --description "[Description]"
   
   # Or using MCP7 command
   mcp7_add_subtask --title "[Subtask 1]" --description "[Description]" --parentId 1 --projectRoot $(pwd)
   ```

3. Set task dependencies:
   ```bash
   # Make task 2 depend on task 1
   task-master add-dependency --id 2 --depends-on 1
   ```

## 3. Development Process

### Starting Work on a Task

1. Find the next task to work on:
   ```bash
   mcp7_next_task --projectRoot $(pwd)
   ```

2. Mark task as in progress:
   ```bash
   mcp7_set_task_status --id [TASK_ID] --status "in-progress" --projectRoot $(pwd)
   ```

3. Create a feature branch:
   ```bash
   git checkout -b feature/feature-name
   ```

### During Development

- Commit frequently with descriptive messages
- Reference task IDs in commit messages: `[TASK-1] Add login form component`
- Update task status as you make progress

## 4. Code Review & Testing

1. Run tests:
   ```bash
   npm test
   ```

2. Lint and format code:
   ```bash
   npm run lint
   npm run format
   ```

3. Create a pull request with:
   - Description linking to the OpenSpec
   - Task IDs in the PR description
   - Screenshots/videos for UI changes

## 5. Documentation & Handoff

1. Update OpenSpec with implementation details
2. Add or update relevant documentation
3. Mark tasks as complete:
   ```bash
   mcp7_set_task_status --id [TASK_ID] --status "done" --projectRoot $(pwd)
   ```

## Example: Implementing a New Feature

### 1. Create OpenSpec Proposal
```bash
mkdir -p openspec/changes/chat-reactions/specs/chat
touch openspec/changes/chat-reactions/proposal.md
```

### 2. Create Tasks
```bash
# Main task
mcp7_add_task --title "Implement Chat Reactions" --description "Add emoji reactions to chat messages" --tag "enhancement" --projectRoot $(pwd)

# Subtasks
mcp7_add_subtask --title "Design reaction picker UI" --parentId 1 --projectRoot $(pwd)
mcp7_add_subtask --title "Implement reaction storage" --parentId 1 --projectRoot $(pwd)
mcp7_add_subtask --title "Add real-time updates" --parentId 1 --projectRoot $(pwd)
```

### 3. Start Development
```bash
# Check next task
mcp7_next_task --projectRoot $(pwd)

# Mark as in progress
mcp7_set_task_status --id 2 --status "in-progress" --projectRoot $(pwd)

# Create feature branch
git checkout -b feature/chat-reactions
```

### 4. After Completion
```bash
# Mark task as done
mcp7_set_task_status --id 2 --status "done" --projectRoot $(pwd)

# Create PR
git push -u origin feature/chat-reactions
# Then create PR on GitHub/GitLab
```

## Tips for Success

- Keep tasks small and focused (1-2 days of work max)
- Update OpenSpec as you discover new requirements
- Use Task Master's dependency feature to manage task order
- Regularly sync with your team on progress
- Document any architectural decisions in OpenSpec

## Troubleshooting

If Task Master commands aren't working:
1. Ensure you're in the project root
2. Verify Task Master is installed: `mcp7 --version`
3. Check for a `.taskmaster` directory in your project root

For OpenSpec issues:
- Follow the directory structure strictly
- Keep files in Markdown format
- Reference other specs using relative paths

---

This workflow combines the power of OpenSpec for documentation and Task Master for task management, providing a structured approach to development that scales with your project.
