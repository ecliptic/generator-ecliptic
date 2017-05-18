# generator-ecliptic

[![npm](https://img.shields.io/npm/v/generator-ecliptic.svg)](https://www.npmjs.com/package/generator-ecliptic) [![license](https://img.shields.io/github/license/ecliptic/generator-ecliptic.svg)](LICENSE)

```
                    $$\ $$\            $$\     $$\           
                    $$ |\__|           $$ |    \__|          
 $$$$$$\   $$$$$$$\ $$ |$$\  $$$$$$\ $$$$$$\   $$\  $$$$$$$\ 
$$  __$$\ $$  _____|$$ |$$ |$$  __$$\\_$$  _|  $$ |$$  _____|
$$$$$$$$ |$$ /      $$ |$$ |$$ /  $$ | $$ |    $$ |$$ /      
$$   ____|$$ |      $$ |$$ |$$ |  $$ | $$ |$$\ $$ |$$ |      
\$$$$$$$\ \$$$$$$$\ $$ |$$ |$$$$$$$  | \$$$$  |$$ |\$$$$$$$\ 
 \_______| \_______|\__|\__|$$  ____/   \____/ \__| \_______|
                            $$ |                             
                            $$ |                             
                            \__|                             
```

Ecliptic's Yeoman generators for scaffolding new applications

## Installation

```sh
$ yarn global add generator-ecliptic
```

You can also use npm:

```sh
$ npm install -g generator-ecliptic
```

## Usage

Currently, our only generator builds a simple React web project. This will likely be expanded in the future to cover other types of projects as well - including templates for React Native, "serverless" endpoints, and universal applications.

### Yeoman

First, you'll need to install Yeoman to use this generator.

```sh
$ yarn global add yo
```

### React

To bootstrap a React web project, use the `react` generator:

```sh
$ mkdir my-new-project
$ cd my-new-project
$ yo eclpitic:react
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
