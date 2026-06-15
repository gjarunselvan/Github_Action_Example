# GitHub Actions & SonarQube Integration Masterclass

This repository serves as a hands-on demonstration of integrating **Continuous Integration / Continuous Deployment (CI/CD)** pipelines with **Static Application Security Testing (SAST)** tools.

## 🚀 What We Built

1. **Vulnerable Application (`sample-app/vulnerable.js`)**
   We created a deliberately vulnerable Node.js script containing severe security flaws:
   - Hardcoded AWS Credentials
   - Hardcoded Database Passwords
   - SQL Injection
   - Cross-Site Scripting (XSS)
   - OS Command Injection

2. **Local SonarQube Deployment**
   We spun up a local enterprise-grade SonarQube server using **Podman** on Windows, bypassing corporate firewalls and VPN restrictions by utilizing alternative networking bridges and non-standard ports.

3. **SonarCloud GitHub Action (`.github/workflows/02-sonarcloud-scan.yml`)**
   We transitioned from a local setup to a fully automated cloud pipeline. Every time code is pushed to the `main` branch, a GitHub Action automatically triggers SonarCloud to fetch the code, perform deep static analysis, and report back.

## 🛡️ Security Posture

Our pipeline implements a **Quality Gate**. In a real-world scenario, the blatant vulnerabilities introduced in `vulnerable.js` cause the Quality Gate to **FAIL**, dropping the Security Rating to an "E". This failure blocks the vulnerable code from ever reaching the production environment.

## ⚙️ How to Run

If you wish to replicate the local scan via Podman, run:

```powershell
podman run --rm -v "${PWD}:/usr/src" --network host sonarsource/sonar-scanner-cli "-Dsonar.projectKey=my-local-app" "-Dsonar.sources=sample-app" "-Dsonar.host.url=http://localhost:8080" "-Dsonar.login=YOUR_TOKEN_HERE"
```

*Note: For the automated cloud version, no manual commands are needed! Just push to `main` and watch the GitHub Actions tab.*
