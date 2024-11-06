---
id: architecture
title: Architecture
sidebar_label: Architecture
---

This section will cover the matters of designing and managing software architectures.

There are three main goals that must be kept in mind while designing a software architecture:
- **scalability**: the ability to manage the growth of complexity over time;
- **ease of change**: the addition of new features with the minimum number of changes to the source code;
- **testability**: the ease of writing and maintaining tests.

To achieve this three goals, we can refer to the concepts of **clean architecture**: A clean architecture should have 
the following characteristics:
- independence from frameworks,
- independence from the UI,
- independence from the database,
- independence from any external agency, and
- testability.

The clean architecture pattern also dictates a separation of software elements in:
- domain layer,
- application layer,
- adapter layer, and
- infrastructure layer.
