# Business Stalker Development Instructions

Business Stalker is an application designed to interact better with business relations. This repository is currently in early planning phase with minimal code structure established.

**ALWAYS follow these instructions first and fallback to additional search and context gathering only if the information in these instructions is incomplete or found to be in error.**

## Repository Current State

This repository is in the initial development phase with basic project structure:
- README.md: Basic project description
- agents.md: Planned agent architecture documentation  
- .gitignore: Configured for Node.js project (indicates planned technology stack)
- LICENSE: MIT License

**CRITICAL**: There is currently NO package.json, source code, build scripts, or CI/CD pipelines. All build/test instructions below are for future development phases.

## Working Effectively

### Prerequisites and Environment Setup
- Node.js v20.19.4 and npm 10.8.2 are available and validated to work
- Git 2.51.0 is available and validated
- curl 8.5.0 and wget available for downloading dependencies
- vim editor available for file editing

### Initial Project Setup (When Adding Code)
When this project gets actual code, follow these steps:

1. **Initialize Node.js project** (if not done):
   ```bash
   npm init -y
   ```
   - Takes approximately 0.5 seconds
   - Creates package.json with default configuration

2. **Install dependencies** (when package.json exists):
   ```bash
   npm install
   ```
   - **TIMING**: Typical npm install takes 3-5 seconds for small projects, 30+ seconds for larger projects
   - **NEVER CANCEL**: Set timeout to 60+ minutes for large dependency trees
   - For development dependencies: `npm install --save-dev [package]`

3. **Project structure validation**:
   ```bash
   ls -la
   ```
   - Takes < 0.01 seconds
   - Validates current project structure

### Git Operations (Currently Working)
These git commands are validated to work in current state:

```bash
git status
```
- Takes < 0.01 seconds
- Shows current repository status

```bash
git log --oneline -10
```
- Shows recent commit history
- Current history shows initial project setup

```bash
git branch -a
```
- Shows available branches
- Currently on copilot/fix-3 branch

## Build and Test Process (Future)

**CURRENT STATE**: No build or test processes exist yet. The following are guidelines for when code is added:

### Build Commands (When Implemented)
- **NEVER CANCEL**: All build commands should have 60+ minute timeouts
- Expected build time: TBD (will update when build process is implemented)
- Build command: TBD (likely `npm run build` based on .gitignore structure)

### Test Commands (When Implemented)  
- **NEVER CANCEL**: Test suites should have 30+ minute timeouts
- Test command: TBD (likely `npm test` or `npm run test`)
- Expected test time: TBD (will update when tests are implemented)

### Linting (When Implemented)
- Lint command: TBD (likely `npm run lint`)
- Format command: TBD (likely `npm run format`)

## Running the Application (Future)

**CURRENT STATE**: No application exists yet. The following are expectations based on project planning:

### Development Server (When Implemented)
Based on agents.md, this will likely be a web application with frontend and backend components:
- Frontend development: TBD
- Backend development: TBD  
- Expected startup time: TBD

## Validation Requirements

### Manual Testing Scenarios (When Application Exists)
**CRITICAL**: After making changes to the application (when it exists), always run through these validation scenarios:

1. **Basic Functionality Test**: TBD (will define when application features are implemented)
2. **Agent Communication Test**: TBD (based on agents.md, test frontend-backend agent interaction)
3. **User Interaction Test**: TBD (test complete user workflows)

**CURRENT VALIDATION**: Only git operations and basic file system operations can be validated.

## Common Tasks

### Validated Commands (Current State)
The following commands are tested and work in the current repository state:

```bash
# View repository structure (< 0.01 seconds)
ls -la

# Check git status (< 0.01 seconds)  
git status

# View project documentation (< 0.01 seconds)
cat README.md
cat agents.md

# View git history
git log --oneline -10

# Check Node.js environment
node --version  # Returns: v20.19.4
npm --version   # Returns: 10.8.2
```

### Repository Structure Reference
```
.
├── .git/           # Git repository metadata
├── .github/        # GitHub configuration (including this file)
├── .gitignore      # Ignore rules for Node.js project
├── LICENSE         # MIT License
├── README.md       # Basic project description (2 lines)
└── agents.md       # Agent architecture documentation (15 lines)
```

### Technology Stack (Planned)
Based on .gitignore and project documentation:
- **Runtime**: Node.js (confirmed available)
- **Package Manager**: npm (confirmed available)
- **Architecture**: Multi-agent system (Frontend Agent, Backend Agent)
- **Build Output**: dist/ and build/ directories (per .gitignore)
- **Environment**: .env file support (per .gitignore)

## Critical Reminders

- **NEVER CANCEL**: When build/test processes are implemented, always set 60+ minute timeouts
- **VALIDATE EVERYTHING**: Test all commands before committing changes
- **TIMING DOCUMENTATION**: Update this file with actual timing measurements when processes are implemented
- **SCENARIO TESTING**: Always run complete user scenarios after changes (when application exists)

## Future Updates Required

This instruction file MUST be updated when:
1. package.json is added with actual scripts
2. Source code is implemented  
3. Build processes are established
4. Test suites are created
5. CI/CD pipelines are added
6. Application deployment is configured

**UPDATE RESPONSIBILITY**: Any developer adding build/test/run processes must update these instructions with validated commands and timing measurements.