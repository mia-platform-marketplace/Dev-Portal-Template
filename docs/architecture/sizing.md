---
id: sizing
title: Architecture sizing
sidebar_label: Sizing
---
## MongoDB

A **high performance data store** is crucial for the Fast Data architecture, and our recommendation is
[MongoDB](https://www.mongodb.com/).

Single Vies are JSON hierarchical documents. To guarantee high performance level of Digital Integration Hub with the increasing of Single View sizing and cardinality it's important to keep under control of the following aspects:

- the maximum size of a single view is 16 MB;
- if the cardinality of single views is greater than 10 million of records it's suggested to shard MongoDB to keep the timing of writes under 5 seconds and reads under 500ms;
- avoid the MongoDB aggregation framework for large scale of data because is CPU intensive and don't scale, prefer external aggregates in microservices.

It follows a table to size MongoDB on the base of number of Single Views. The data are based on experience and an average of 20% of system of records that change every day.

Factors that can change the sizing are

- number of query per second (we assume 3000 reads/sec);
- dimension of a single view (we assume 200 kb);
- number of write per seconds (we assume 50 writes/sec);
- number of concurrent connection (we assume 3000);

| Number of managed Single Views  | MongoDB CPU | MongoDB RAM |
| ------------ | ------ |------ |
| 1.000.000             |    4 CPU    |  16 GB |
| 2.000.000             |    8 CPU    |  32 GB |
| 4.000.000             |    16 CPU    |  64 GB |
| 10.000.000             |    32 CPU    |  128 GB |

:::tip
When dealing with Fast Data Mongo collections, setting the right **indexes** is extremely important.
:::

## Kafka

To handle the data streaming we suggest the use of [Apache Kafka](https://kafka.apache.org/), given its speed, scalability, durability, and fault-tolerance.

To sizing Kafka we suggest to use bandwidth and storage. The bandwidth is calculated with this formula

```bash
bandwidth = messages per second * size of one message 
```

the storage with the formula

```bash
storage = bandwidth * number of seconds of retention
```

| Bandwidth/day | Number of nodes | Core per nodes | Disk per nodes
| ------------ | ------ |------ |------ |------ |
|   10 GB / days           |    3    |     2  |    100 GB   |       |
|   50 GB / days           |    3    |     4  |    500 GB   |       |
|   400 GB / days           |    8    |     4  |    500 GB   |       |
|   1 TB / days           |    12    |     8  |    500 GB   |       |

:::tip
Be aware Kafka consumer groups settings in order to scale up correctly. The maximum scaling for a single consumer group is set by topic partitions. Only on a single partition Kakfa guarantees that messages are timely ordered.
:::
