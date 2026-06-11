# GitHub Actions Examples 🚀

[![View Presentation](https://img.shields.io/badge/View-Live_Presentation-blueviolet?style=for-the-badge&logo=github)](https://gjarunselvan.github.io/Github_Action_Example/)

Welcome to the **GitHub Action Example** repository! This project serves as a comprehensive demonstration of various GitHub Actions use-cases, complete with explanations.

## 🌟 Interactive Presentation
Want a beautiful, high-level overview to present to your team or leadership? 
👉 **[Click here to view the Interactive Presentation](https://gjarunselvan.github.io/Github_Action_Example/)** 

## 📂 Workflows Included

All workflows are located in the `.github/workflows/` directory.

### 1. Basic CI Pipeline (`01-ci-pipeline.yml`)
- **What it does**: Checks out the code, sets up a specific Python version, installs dependencies, and runs tests. Ideal for validating code changes before merging.

### 2. Scheduled Job (`02-scheduled-job.yml`)
- **What it does**: Runs a script automatically every day at 12:00 UTC using cron.

### 3. Manual Trigger (`03-manual-trigger.yml`)
- **What it does**: Allows you to run the workflow manually from the GitHub UI with custom inputs (e.g., environment and debug mode).

### 4. Matrix Strategy (`04-matrix-strategy.yml`)
- **What it does**: Runs jobs across multiple OS (`ubuntu`, `windows`, `macos`) and Node.js versions simultaneously.

### 5. Issue Management (`05-issue-management.yml`)
- **What it does**: Uses `github-script` to automatically welcome users who open a new issue.

### 6. Docker Build and Publish (`06-docker-publish.yml`)
- **What it does**: Builds a Docker image and publishes it to DockerHub when a new tag is pushed.

### 7. Reusable Workflows (`07-reusable-workflow.yml` & `07-caller-workflow.yml`)
- **What it does**: Demonstrates how to create a template workflow and call it from another workflow, passing inputs and secrets.

### 8. Contexts and Expressions (`08-contexts-expressions.yml`)
- **What it does**: Dumps the `github` context to logs and uses expressions to run steps conditionally.

### 9. Upload and Download Artifacts (`09-artifacts.yml`)
- **What it does**: Creates a file in one job, uploads it as an artifact, and downloads it in a subsequent job.

### 10. Environment Variables and Secrets (`10-env-vars-secrets.yml`)
- **What it does**: Shows how to set global, job-level, and step-level environment variables, and how to use secrets securely.

### 11. Dependency Caching (`11-caching.yml`)
- **What it does**: Caches `node_modules` across workflow runs to speed up the build process.

### 12. Auto Create Release (`12-create-release.yml`)
- **What it does**: Automatically creates a GitHub Release with auto-generated release notes when a tag (e.g., `v1.0.0`) is pushed.

### 13. Auto Approve and Merge PRs (`13-auto-merge.yml`)
- **What it does**: Automatically approves and enables auto-merge for PRs created by Dependabot.

## 🛠 How to Use

1. **Clone** or **Fork** this repository.
2. Navigate to the **Actions** tab on GitHub to see the workflows in action.
3. You can manually trigger the **Manual Trigger** workflow from the UI.
4. You can host the presentation yourself by enabling GitHub Pages on your repository (`Settings > Pages`), or simply open `index.html` locally in your browser.

---
*Created as a demo for learning GitHub Actions.*
