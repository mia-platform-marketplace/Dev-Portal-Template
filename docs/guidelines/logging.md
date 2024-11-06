---
id: logging
title: Logging
sidebar_label: Logging
---

The objective of these guidelines is to guarantee uniformity between the logs from all services, which is crucial for 
getting the most value out of them.

## Logs management

When dealing with a high number of services, a centralized, cluster-level logging stack greatly helps in consuming and
analyzing the heavy volume of log data produced by the pods. 

Our suggestion is to apply the **EFK** stack, composed by **E**lasticsearch, **F**luent Bit/**F**luentd, and **K**ibana.

- **[Elasticsearch](https://www.elastic.co/)** is a real-time, distributed, and scalable search and analytics engine.
  
- **[Fluent Bit](https://fluentbit.io/)** and **[Fluentd](https://www.fluentd.org/)** are log processor and forwarder 
  which can be used to gather, transform, and ship log data to Elasticsearch. Both should be setup on each node: 
  Fluentbit to tail and collect container log files and Fluentd to parse them and deliver them to the Elasticsearch
  cluster.
  
- **[Kibana](https://www.elastic.co/kibana)** allows you to explore the Elasticsearch log data through charts, graphs
  and dashboards.

### Logging format

Using a standard, structured format for the logs is key to an effective and consistent parsing of the data, crucial for
extracting valuable information for analysis.

Our advice is to use **JSON format**, which automatizes logs parsing and enables the *autodiscovery* of new fields
without the need to be based on a fixed regex. All the keys/value pairs of a JSON log line can be collected and stored in
Elasticsearch.

:::note
Keep in mind that if you want to perform queries on the logs using Kibana, you'll need to create indexes.
:::

## Logs structure

Keeping a well-defined and coherent log structure is one of the best strategies for optimizing the consumption of logs.

:::tip
Using a robust logging framework greatly helps in standardizing the logs produced by multiple services written with
different languages. Examples of good frameworks may be [Pino](https://getpino.io/) for Node.js,
[Logrus](https://github.com/sirupsen/logrus) for Golang and [Log4j](https://logging.apache.org/log4j/2.x/) for Java.
:::

The following are guidelines, drawn from 
[guidelines and best practices suggested by Elastic](https://www.elastic.co/guide/en/ecs/1.4/ecs-guidelines.html), which
should be followed when application logs are generated:

* field names have to be in **camelCase**,
* field names must not contain special characters,
* field names should be singular or plural according to the content of the field,
* whenever it makes sense, prefer nesting your fields in structured objects,
* avoid using abbreviations in field names as much as possible.

### Logging levels

It is important to choose and stick to a consistent level system, and to always use the correct log level. For
**granularity purposes**, there should be the possibility to use different levels for different environments. 

We suggest adopting a level system with 6 levels expressed in tenths:

| Name      | Level | Description                                                                                                                    |
| --------- | ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| `trace`   | 10    | used to trace the operations flow of the application (do not use in production).                                               |
| `debug`   | 20    | to report information that may be useful in troubleshooting (do not use in production).                                        |
| `info`    | 30    | in cases where the service has to give information about the branch of code in execution.                                      |
| `warning` | 40    | in cases of recoverable error, the service can continue to process the request.                                                |
| `error`   | 50    | in cases of not recoverable error and error for which the processing of the request (but not the service) must be interrupted. |
| `fatal`   | 60    | in cases of unexpected and not recoverable error, and as a result of which the service must stop its execution.                |

:::note
It is important to put in logs the right information that can be used to track operations, highlight problems and allow troubleshooting.
:::

### Mandatory logs

Each service exposing APIs should generate the logs shown in the table below, specifying the following fields in
addition to the ones above.

| Event             | Level     | Field                                  |
| ----------------- | ----------| -------------------------------------- |
| Incoming request  | `trace`   | `host`, `url`                          |
| Request completed | `info`    | `host`, `http`, `responseTime`,  `url` |

:::note
If the service is not REST but takes its inputs from another source, the same criteria has to be applied. Use a `trace`
log when the event processing starts, and a `info` log when the event ends. The final log should contain as much
useful information as possible.
:::

### Mandatory fields

For what concerns the logs content, the following fields should always be present:

| Name    | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| `msg`   | string | The text message specific for each log                    |
| `time`  | number | The moment when the log was generated in Unix timestamp   |
| `level` | number | The importance level of the log                           |

:::tip
At least all these fields should be indexed in Kibana.
:::

### ECS Field Definition

The following are examples taken from ECS documentation. None of the fields are mandatory, however it is important to 
use standard keys, whenever applicable.

#### Error information

When an error log has been generated, the passed object should have the key `error`, whose value should be an object of
the form specified in the table below:

| Field              | Description                                                                                                                           
| ------------------ | ------------------------------------------------------------------- |
| `error.code`       | Error code describing the error.                                    |
| `error.id`         | Unique identifier for the error.                                    |
| `error.message`    | Error message.                                                      |
| `error.stackTrace` | The stack trace of this error in plain text.                        |
| `error.type`       | The type of the error, for example the class name of the exception. |

#### Host information

| Field           | Description                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host.hostname` | Hostname of the host. It normally contains what the `hostname` command returns on the host machine.                                                                                |
| `host.name`     | Name of the host. It can contain what `hostname` returns on Unix systems, the fully qualified domain name, or a name specified by the user. The sender decides which value to use. |
| `host.uptime`   | Seconds the host has been up.                                                                                                                                                      |

#### HTTP information

| Field                                | Description |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| `http.request.body.bytes`            | Size in bytes of the request body.                                                            |
| `http.request.bytes`                 | Total size in bytes of the request (body and headers).                                        |
| `http.request.method`                | HTTP request method. The field value should be normalized to lowercase for querying purposes. |
| `http.request.referrer`              | Referrer for this HTTP request.                                                               |
| `http.request.userAgent.device.name` | Name of the device.                                                                           |
| `http.request.userAgent.name`        | Name of the user agent.                                                                       |
| `http.request.userAgent.original`    | Unparsed user_agent string.                                                                   |
| `http.request.userAgent.version`     | Version of the user agent.                                                                    |
| `http.response.body.bytes`           | Size in bytes of the response body.                                                           |
| `http.response.bytes`                | Total size in bytes of the response (body and headers).                                       |
| `http.response.status_code`          | HTTP response status code.                                                                    |
| `http.version`                       | HTTP version.                                                                                 |

#### URL information

| Field          | Description                                                                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url.domain`   | Domain of the url. In some cases a URL may refer to an IP and/or port directly, without a domain name. In this case, the IP address would go to the `domain` field.                       |
| `url.fragment` | Portion of the url after the `#`. The `#` is not part of the fragment.                                                                                                                    |
| `url.full`     | If full URLs are important to your use case, they should be stored in `url.full`, whether this field is reconstructed or present in the event source.                                     |
| `url.path`     | Path of the request.                                                                                                                                                                      |
| `url.port`     | Port of the request.                                                                                                                                                                      |
| `url.query`    | The query field describes the query string of the request. The `?` is excluded from the query string. If a URL contains a `?` but no query, the query field exists with an empty string.  |
| `url.scheme`   | Scheme of the request (e.g., "https"). The `:` is not part of the scheme.                                                                                                                 |

## Log writing tips

When creating logs, it is crucial to use meaningful messages, unique to the given situation. This translates in the need
of always **providing a context** for the logs: each line should contain enough information to make it easy to understand
exactly what was going on, and what was the state the application at the time.

Furthermore, one should **keep the audience in mind** when writing logs, remembering that multiple actors with different
roles and knowledge may be looking at them. If the audience are other developers debugging or troubleshooting the
application, logs can be detailed, technical, and include very deep information related to how the system is running.
However, logs may be read by the users themselves and, in such a case, they should be descriptive enough to help fix the
issue if possible or to give enough information to the support team helping the user.

### Avoid logging sensitive information

Sensitive information should always be redacted from the logs, even if crypted or hashed. Information you should avoid
logging includes, but is not limited to:

- emails
- passwords
- usernames
- credit card numbers
- Personal Identifiable Information (e.g., personal names, gender, birthday)
- API keys
- encryption keys
- connection strings
