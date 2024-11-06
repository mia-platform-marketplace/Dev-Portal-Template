---
id: api
title: APIs
sidebar_label: APIs
---

An optimal point of contact between the users and the DIH implementation is a set of exposed APIs, which makes the 
system easily accessible by different channels for data collection and commands issuing.

It is worth noting that other types of protocols may be used in conjunction or in the place of APIs, depending on the
needs of the end users. Good examples are **SQL connectors**, ideas for static reporting, analytics, and machine learning
training, and **business events**.

## Read APIs

Read APIs are the touchpoints from which data can be retrieved, consuming the Single Views. A key requirement is that
those APIs should only serve reading purposes and **never trigger any data change**.

## Command APIs

Command APIs are the means through which users can trigger the writing of data. Issuing them should result in a change
of the data sources.
