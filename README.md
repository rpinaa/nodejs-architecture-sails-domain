# nodejs-architecture-sails-domain
NodeJS 9 non-blocking I/O Architecture, using Sails and Domain layer

## Requirements

- NodeJS 9+

## Stack

- JavaScript 6
- Sails 1.x
- Sails MySQL 3.x
- Sails Hook ORM 3.x
- Sails Hook Grunt 3.x
- Sails Hook Sockets 3.x

## Contribution guide

### Remotes

The **remotes** follow the convention:

- _**origin**_: fork in the account of the developer

- _**upstream**_: main repository

### Content and messages of the commits

#### Content

Each commit must refer to a single issue. If there are many changes that affect different pieces, those changes should be contributed in several commits. If there are several commits on the same element with successive changes that are correcting themselves, all those commits must come together (squash) in a single commit before contributing. Each fix or feature commit must contain the associated sources and tests.

#### Messages

The messages should follow the convention established at: https://github.com/conventional-changelog/conventional-changelog

### Building

Install the dependencies before start:

```sh
$ sudo npm install sails -g
$ cd nodejs-architecture-sails-domain
$ sudo npm install -d
```

For local environment:

```sh
$ NODE_ENV=local node .
```

For development environment:

```sh
$ NODE_ENV=development node .
```

For staging environment:

```sh
$ NODE_ENV=staging node .
```

For production environment:

```sh
$ NODE_ENV=production node .
```

### Debugging

For local environment:

```sh
$ NODE_ENV=local node --inspect --debug-brk server/server.js
```

## License

MIT

**Free Software, Hell Yeah!**