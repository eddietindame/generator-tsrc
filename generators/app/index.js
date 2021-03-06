'use strict'
const Generator = require('yeoman-generator')
const {
    camelCase,
    kebabCase,
    upperFirst
} = require('lodash')

module.exports = class extends Generator {

    prompting() {
        const prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Your component name',
                default: 'ReactComponent'
            },
            {
                type: 'input',
                name: 'dir',
                message: 'Your component directory',
                default: 'components'
            },
            {
                type: 'confirm',
                name: 'module',
                message: 'Do you want to use SCSS modules?',
                default: true
            },
            {
                type: 'confirm',
                name: 'helpers',
                message: 'Do you want to use helpers?',
                default: true
            }
        ]

        return this.prompt(prompts)
            .then(answers => {
                this.props = answers
                this.props.dir = this.props.dir.trim()
                this.props.nameKebab = kebabCase(this.props.name).trim()
                this.props.name = upperFirst(camelCase(this.props.name)).trim()
            })
    }

    writing() {
        const { dir, name, module, helpers } = this.props
        this._copyFiles('index.ts', `${dir}/${name}/index.ts`)
        if (helpers) this._copyFiles('name.helpers.tsx', `${dir}/${name}/${name}.tsx`)
        else this._copyFiles('name.tsx', `${dir}/${name}/${name}.tsx`)
        this._copyFiles('name.test.tsx', `${dir}/${name}/${name}.test.tsx`)
        this._copyFiles('name.scss', `${dir}/${name}/${name}${module ? '.module' : ''}.scss`)
        this._copyFiles('name.types.ts', `${dir}/${name}/${name}.types.ts`)
    }

    _copyFiles(from, to) {
        this.fs.copyTpl(
            this.templatePath(from),
            this.destinationPath(to),
            this.props
        )
    }
}
