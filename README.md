# Hugo Documentation Guide

## Introduction
This documentation explains creating new pages and services in Hugo and running the site locally.

---

## 1. Creating a New Page
To create a new page, create a file in the relevant language directory, such as `content/en/installation-guide.md` or `content/de/installation-guide.md`.

### Sample Page Content:
```yaml
---
title: "Installation Guide"
date: 2024-04-01
layout: single
---

# Installation Guide

This document explains how to install and use Hugo.
```

---

## 2. Creating Services Documentation
Create a file with the service name for service-related documentation, such as `content/en/services/service-name.md`.

### Sample Service Page Content:
```yaml
---
layout: services
order: 4
title: Service Name
tagline: Building Your Technology Foundation
content: Lorem Ipsum
---

# My Service Documentation

## Features
- Feature 1
- Feature 2
- Feature 3

## Setup
1. Install dependencies.
2. Configure settings.
3. Start the service.
```

---

## 3. Running Hugo Locally
To preview changes, start the Hugo development server using the following command:

```sh
hugo server -D
```

Then, open **http://localhost:1313** in your browser to view the site.
