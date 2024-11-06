---
id: pipelines
title: Pipelines
sidebar_label: Pipelines
---

## Introduction

A pipeline is the process of taking code from version control and making it available to users in an automated fashion. 


### Pipeline stages

Generally speaking, a pipeline runs through different stages that cover the whole lifecycle of a deployment. 
In a Kubernetes-based system, the most common stages are the following.

#### Test

The pipeline runs unit tests over the source-code. This task depends upon the frameworks and the programming 
languages used during the development.

#### Build artifacts

The pipeline builds artifacts like services executables or libraries. This task is also depended on
the frameworks and programming languages used during the development.

#### Build Docker image

The pipeline builds the [Dockerfile](https://docs.docker.com/engine/reference/builder/).

#### Upload to Docker registry

The pipeline stores a versioned Docker image on a Docker registry.

#### Deploy
The service is deployed, releasing helm charts.


### Pipeline triggers

A pipeline can be launched manually or can be triggered by events,  such as git actions (e.g. tag, merge) or crons.
In compliance to the procedures described in the [git flow](git_flow#overview) section, following paragraphs suggest
when a pipeline should be run and with which steps. 

**Commit**
- Test
- Build artifacts

**Merge in `develop` branch**
- Test
- Build artifacts
- Build test Docker images
- Upload to Docker registry

**Tag on `rc` branch**
- In case of a *minor release* (fast track release)
  - Test
  - Build artifacts
  - Build rc Docker images
  - Upload to Docker registry
- In case of a *major release*:
  - Test
  - Shakedown and regression test
  - Build artifacts
  - Build rc Docker images
  - Upload to Docker registry

**Tag on `master` branch**
- Build release Docker images
- Upload to Docker registry

**Scheduled pipelines**
- Every 24hs run shakedown tests on `develop` branch
