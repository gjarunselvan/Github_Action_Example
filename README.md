<div align="center">
  <img src="https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" width="100" />
  <h1>GitHub Actions: Live Working Demo</h1>
  <p><strong>A comprehensive, production-ready guide to automating your CI/CD workflows.</strong></p>

  [![CI Pipeline](https://github.com/gjarunselvan/Github_Action_Example/actions/workflows/01-ci-pipeline.yml/badge.svg)](https://github.com/gjarunselvan/Github_Action_Example/actions/workflows/01-ci-pipeline.yml)
  [![Matrix Build](https://github.com/gjarunselvan/Github_Action_Example/actions/workflows/04-matrix-strategy.yml/badge.svg)](https://github.com/gjarunselvan/Github_Action_Example/actions/workflows/04-matrix-strategy.yml)
  [![Live Presentation](https://img.shields.io/badge/View-Live_Presentation-10b981?style=for-the-badge&logo=github)](https://gjarunselvan.github.io/Github_Action_Example/)

</div>

---

## 🎓 Interactive Presentation

This repository hosts a stunning, animated, full-screen HTML presentation that explains the core concepts of GitHub Actions, compares it to legacy tools like Jenkins, and dives deep into the code.

👉 **[View the Live Presentation Demo Here!](https://gjarunselvan.github.io/Github_Action_Example/)** 👈

---

## 📦 The "Hello World" Base App

To ensure these workflows are realistic, this repository is not just empty YAML files. It contains a fully functional **Node.js** base application that the GitHub Actions run against:
- `server.js` - A functional Node.js web server.
- `test.js` - An automated CI testing script.
- `Dockerfile` - Containerization instructions.

When the workflows run `npm test` or `docker build`, they are executing natively against this repository's code!

---

## 🔗 How the Workflows Connect to the Codebase
The workflows in this repository don't just run in a vacuum—they are actively manipulating the Node.js application:

- **CI & Matrix Workflows (`01`, `04`)**: When these run `npm test`, they are physically executing the `test.js` script. If you introduce a typo into `server.js`, the test fails, and the entire GitHub Action immediately turns red, preventing a bad merge.
- **Docker Workflow (`06`)**: Looks for the `Dockerfile` in the root of the repo and physically copies `server.js` and `package.json` into a Linux container for deployment.
- **Caching Workflow (`11`)**: Calculates a cryptographic hash of your specific `package.json` file. If you add a new dependency, the hash changes, and GitHub knows to update the cache.
- **Automated Releases (`12`)**: Physically grabs `server.js` and `package.json`, compresses them into a `dist.zip` file, and attaches them to a public GitHub Release page when a tag is pushed.

---

## 🛠️ Workflows Included in this Repository

This repository contains **13 fully functioning GitHub Action workflows** covering almost every enterprise scenario. You can view the raw YAML files in the [`.github/workflows/`](.github/workflows/) directory:

1. **`01-ci-pipeline.yml`**: Basic Continuous Integration (npm install & test on push).
2. **`02-scheduled-job.yml`**: Running tasks using Unix Cron scheduling.
3. **`03-manual-trigger.yml`**: `workflow_dispatch` with custom UI form inputs.
4. **`04-matrix-strategy.yml`**: Running parallel jobs across OS (Windows/Mac/Linux) & Node versions.
5. **`05-conditional-steps.yml`**: Conditionally executing steps using `if` logic.
6. **`06-docker-publish.yml`**: Automatically building and pushing Docker images on version tags.
7. **`07-reusable-workflow.yml`**: Defining a workflow template to be called by others (DRY principle).
8. **`08-caller-workflow.yml`**: Calling the reusable workflow.
9. **`09-artifacts.yml`**: Uploading and downloading build artifacts between jobs.
10. **`10-env-vars-secrets.yml`**: Securely injecting repository secrets and environment variables.
11. **`11-caching.yml`**: Using `actions/cache` to speed up builds (caching `node_modules`).
12. **`12-github-release.yml`**: Automatically creating a GitHub Release with changelogs.
13. **`13-auto-merge-pr.yml`**: Automating Pull Request merges based on labels.

---

## 🚀 How to Use This Repo

If you want to use this for your own learning or presentations:
1. Clone the repository.
2. Ensure GitHub Pages is enabled pointing to the `main` branch root.
3. Open the `index.html` file to customize the presentation.
4. Experiment with the `.github/workflows/` files.

---
*Created as a comprehensive, working demo for mastering GitHub Actions.*
