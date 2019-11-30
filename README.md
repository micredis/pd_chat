# Laboratory work

The goal of this task is to make a messenger service. 

## Java Version

This sample requires you to have
[Java8](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html).

## Download Maven

This sample uses the [Apache Maven][maven] build system. Before getting started,
be
sure to [download][maven-download] and [install][maven-install] it. When you use
Maven as described here, it will automatically download the needed client
libraries. 

## Download Docker

This sample based on [Docker](https://hub.docker.com/?overlay=onboarding) containers. Before getting
 started, be sure to download and install it.

[maven]: https://maven.apache.org
[maven-download]: https://maven.apache.org/download.cgi
[maven-install]: https://maven.apache.org/install.html

## Run the sample

First of all you need build and start docker container with PostgreSQL DB

```
docker-compose up -d postgres
```
Then start migration DB schema comand 

```
mvn package liquibase:update -P liquibase local dev 
```

Then start build .jar file

```
mvn clean package dockerfile:build -P client docker
```

Then start application

```
docker-compose up -d pd_chat
```

## Login to application

DB contains only one base user with admin role.
So, for login to application you need to

login: admin@test.com
password: test123
