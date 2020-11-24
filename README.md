# Won Games - API

API made with Strapi to seed the data our NextJS Store. [Won Games Client repository](https://github.com/EricDosReis/won-games-client).

## Requirements

This project uses [PostgreSQL](https://www.postgresql.org/), so, in order to make it working, install in your local machine or use Docker.

The configuration to the Database can be found on [config/database.js](config/database.js).

**Prerequisites**: NodeJS

* open terminal
* clone this repository `git clone https://github.com/EricDosReis/won-games-api.git`
* go to project folder `cd won-games-api`
* install dependencies `yarn`
* run `yarn develop`

The urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

The first time to access the Admin you'll need to create an user.

## Dump data

This project uses `Postgres` and if you want all the data previously, unzip the [data.zip](data.zip), copy the `uploads` folder to [public/uploads](public/uploads) and restore the data from the `dump.sql` file inside the zip.
