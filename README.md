# nodejs-architecture-sails-domain

nodejs-architecture-sails-domain is a NodeJS backend. Its characteristics are as follow:

  - NodeJS Real Time Architecture
  - NodeJS REST Architecture
  - NodeJS RESTFul Architecture

### Architecture Stack

nodejs-architecture-sails-domain uses three technologies:

* [JavaScript 5+] - Supported by ECMAScript 5 and 6 as native language.
* [NodeJS 7+] - Based on NodeJS architecture and environment.
* [SailsJS 0.12.13] - Supported by SailsJS Framework to complete all business rules.

### Installation

nodejs-architecture-sails-domain requires [Node.js](https://nodejs.org/) v7.5+ to run.

Install the dependencies before start:

```sh
$ sudo npm install -g sails
$ cd nodejs-architecture-sails-domain
$ sudo npm install -d
```

### Environments

For development environments:

```sh
$ sails lift
```

For staging environments:

```sh
$ NODE_ENV=staging sails lift
```

For production environments:

```sh
$ NODE_ENV=production sails lift
```

### Testing

For integration testing:

```sh
$ NODE_ENV=testing npm test
```

License
----

MIT

**Free Software, Hell Yeah!**
