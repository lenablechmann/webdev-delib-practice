## Javascript Modules
Learning to organize code with JS Modules and how to bundle up modules using webpack.
Following the [Odin Project](https://www.theodinproject.com/courses/javascript/lessons/es6-modules "Javascript Modules").

### Learning goals
- What is `npm` and what is it used for?

*A package manager which helps you automate the process of installing and updating of JS libraries.*

- What does `npm init` do?

*Installs the `package.json` file, sets up a new package*

- What is `package.json` used for?

*It's a configuration file of the JS projects. Via this you can manage the dependencies, project version, scripts etc. This file can be shared with others and dependencies will get installed automatically for your project. Making your build reproduceable.*

- How do you install packages using `npm`?

`npm install package-name`

- What is a JS module bundler? Examples?

*In compiled languages you normally split up the code into multiple files and link them during the compilation. JS wasn't "made" to be split up into files without polluting the global variable space, which makes it hard to use for larger projects. Nowadays though, you can split it up into modules (files) and bundle them up with a module bundler (like `webpack`) for the browser (replaces all the node.js "require" instances with the required file content. Forms a single js file as a result. So something like a preprocessor in C.).*

 - Explain “entry” and “output” in relation to webpack.
 *Entry point is the file that webpack starts building its dependency graph with (index.js), while output is the bundle output file*

- Explain what a development dependency is? 

*When you need something in the dev environment but not on the prod server*

- Explain what “transpiling code” means and how it relates to frontend development.

*translating code from one language into a similar one. Meaning, even if a browser is lagging behind in progress, we can translate our more hip and trendy code into something a browser can understand (for example SASS into CSS). Or even just a newly updated JS version into an older JS version.*

- Briefly describe what a task runner is and how it’s used in frontend development.

*A tool that automates the build process. Minifying, running tests, transpiling etc.*

- Describe how to write an npm automation script.

*By editing the `package.json`, where you add "build" and "watch" scripts into the `script` object. Which you can then run in the command line with `npm run build` and `npm run watch`.*
- Explain one of the main benefits of writing code in modules.

*Can create reusable js files this way; better code organization/readability (decoupling of code), makes your codebase easier to maintain*
