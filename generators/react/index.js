// @flow
const {basename} = require('path')
const {execSync: exec} = require('child_process')
const {sync: mkdirp} = require('mkdirp')
const {textSync: text} = require('figlet')
const Base = require('yeoman-generator')
const chalk = require('chalk')

module.exports = class ReactGenerator extends Base {
  initializing () {
    this.log('\n')
    this.log(text('ecliptic', {font: 'Big Money-nw'}))
    this.log(`\n\nWelcome to ${chalk.blue('@ecliptic/shipyard')}!\n`)

    try {
      const origin = exec('git config --get remote.origin.url')
      if (origin.toString()) this.config.set('repo', origin.trim())
    } catch (error) {
      // pass
    }

    try {
      const author = exec('git config --get user.name')
      const email = exec('git config --get user.email')
      if (author.toString() && email.toString()) {
        this.config.set(
          'author',
          `${author.toString().trim()} <${email.toString().trim()}>`
        )
      }
    } catch (error) {
      throw error
    }
  }

  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
        default: basename(this.destinationRoot()),
      },
      {
        type: 'input',
        name: 'description',
        message: "The project's description:",
      },
      {
        type: 'input',
        name: 'repo',
        message: 'The repository url:',
        default: this.config.get('repo'),
      },
      {
        type: 'input',
        name: 'author',
        message: "The project's author:",
        default: this.config.get('author'),
        store: true,
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Comma-separated project keywords:',
        filter: keywords =>
          keywords ? keywords.split(',').map(keyword => keyword.trim()) : [],
      },
    ]).then(answers => {
      this.config.set(answers)
    })
  }

  writing () {
    // Copy over static files
    this.fs.copy(this.templatePath('../static/**/*'), this.destinationRoot(), {
      globOptions: {dot: true},
    })

    // Render templates
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      this.config.getAll(),
      {globOptions: {dot: true}}
    )

    // Create the flow-typed directory
    mkdirp(this.destinationPath('flow-typed'))
  }

  install () {
    this.yarnInstall()
  }
}
