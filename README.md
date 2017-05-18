# @ecliptic/shipyard

[![npm](https://img.shields.io/npm/v/@ecliptic/shipyard.svg)](https://www.npmjs.com/package/@ecliptic/shipyard) [![license](https://img.shields.io/github/license/ecliptic/shipyard.svg)](LICENSE)

Ecliptic's Yeoman generators for scaffolding new applications

## Installation

```sh
$ yarn global add @ecliptic/shipyard
```

You can also use npm:

```sh
$ npm install -g @ecliptic/shipyard
```

## Usage

Currently, our only generator builds a simple React web project. This will likely be expanded in the future to cover other types of projects as well - including templates for React Native, "serverless" endpoints, and universal applications.

### React

To bootstrap a React web project, use the `react` generator:

```sh
$ mkdir my-new-project
$ cd my-new-project
$ yo @eclpitic/shipyard:react
```

Answer the questions, and you'll have a brand new web application set up in your current directory. Tada! 🎉

## License

Copyright 2017 Ecliptic, LLC.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
