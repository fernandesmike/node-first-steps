# NOTES

## Collections and Documents (NoSQL)

Colletions - consists of multiple documents used to store particular type of data. In SQL, they are tables.
Documents - that specific data. Each should only contain one type of document. Specific like author or blog. Each one represents a single specific data.

## Documents

They hold a series of key - value pairs. They look like JS objects.
In SQL, they are records.

## Clusters

In Mongo DB Atlas, your database is distributed among multiple server. So cluster is just a server where your database is located.

## Mongoose

Mongoose is a library that establishes connection between Node.js and MongoDB. A Object Document Mapping library that wraps Mongo DB drivers for more easier control.

### Schema & Models

Schema is your data properties and its data types. It is the structure of your data.

Models is used to communicate with database collections. Wraps the schema for you to perform CRUD operations on a specific collection
