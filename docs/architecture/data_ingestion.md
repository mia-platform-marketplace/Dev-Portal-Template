---
id: data_ingestion
title: Data ingestion
sidebar_label: Data ingestion
---

The ingestion of data from the different sources takes place through **connectors**, touch points capable of interfacing with the external or legacy systems.

A single source can be captured with different modalities. Choosing the right connector for the right application is key for designing an efficient and robust architecture. A factor that hugely impacts this choice is how fast the changes in the source have to be captured by the system.

With this in mind, the available connectors can be classified in:

- **realtime/near realtime** (CDC, API, Kafka Messages, DB Triggers),
- **batch**: (sFTP, Polling JDBC).

## Catalogue of connectors

It follows a brief description of the connectors that can be used in the context of Fast Data. \


:::note
The list is ordered from the best solution that usually is applicable to modern system of records and most expensive solution that is the only one feasible for the legacy systems.
:::

### Kafka Messages

Apache Kafka is a publish-subscribe based messaging system, used to send messages between processes, applications, and servers.

Kafka receives and stored key-value messages from any number of processes called producers The data can be organized into different *partitions* within different *topics* (i.e., categories). Other processes, called consumers, may connect to the system and process or re-process records from a topic.

:::info
Use this connector to guarantee events order, scalability and near-realtime data.
:::

### API HTTP

An Application Programming Interface (API) is a set of definitions and protocols for building and integrating application software. This kind of programmatic interface consists of a series of exposed endpoints that defines a request–response message system, typically expressed in JSON or XML. We talk about HTTP APIs when the transfer protocol used to broadcast this system is HTTP.

:::info
Use this connector if you can change the source code of your system of record or web hooks can be activated for the system of record.
:::

### Polling JDBC

Java Database Connectivity (JDBC) is a standard for database-independent connectivity between the Java platform and a wide range of SQL-based databases. In the context of JDBC, one could implement a polling strategy, configuring **periodic actions** to retrieve, put, modify or delete the information stored in targeted databases.

:::info
Use this connector if you can modify the database schema to add fields that permits to the JDBC poller to understand when a row has been updated, added, deleted.
:::

### CDC

Change Data Capture (CDC) is a software design pattern based on the identification, capture, and delivery of the changes
made to a source database and stored in the database **transaction log**. CDC can be used to determine and track the data
that has changed so that actions can be taken on the basis of those data.

:::info
This is a good solution in pair with Kafka. Legacy systems don't need to be modified. The drawback is the cost, the setup complexity and the number of messages sent to Kafka because a business event may involve several relational SQL tables.
:::

### DB Triggers

A database trigger is a stored procedure that is automatically executed whenever a specific event occurs in the database. This event can be anything, like an insertion, an update, or a deletion, and the trigger can be executed before or after the event.

:::info
A good solution for not so frequent events and only if you can change DB schema, and your DB server is not under pressure (triggers consume DB resources).
:::

### sFTP

SSH File Transfer Protocol (sFTP) is a method of transferring files between two remote systems over a secure connection. The landing store can be a Cloud Filesystem accessible via API that can trigger an event when a new file is created. In that case the solution can go in pair with API o Kafka approach.

:::info
Use this if you have already in place an ingestion process base on files, and you don't need near-realtime data updates.
:::
