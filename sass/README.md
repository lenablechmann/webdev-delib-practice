Learning SASS/SCSS by following along various tutorials online and trying out stuff on a simple landing page. 

## Learning goals
- Learn if and how SASS improves upon CSS
- find out how to compile SASS back to CSS
    1. install sass with `sudo npm i -g sass`
    1. use sass commands like `sass --watch sass/scss/style.scss sass/css/style.css` to compile file 1 to css, gotta give it the path to both files
`
- build a simple project with base SASS 

## SCSS Notes:
- Sass and SCSS are pretty similar syntax wise, alas SCSS uses curly braces, SASS dropped those and uses indentation
- Sass allows for use of variables: 

    `css:
    $primary-color: #FFFF;
    ul {
        color: $primary-color;
    }`
- turns CSS into more of a programming language
- needs to be compiled back to CSS
- I'm not a fan of indentation, so will be using SCSS
- variables are prefixed with $
- you can have modules in scss: for example if you have index.scss and fonts.scss, you can link `@use 'index'`in fonts.scss and those will be compiled into one css file later
- linking variables from other files with `index.$primary-color`(using the primary-color variable that has been declared in index.scss)
- can create base styles with `%shared-style` then use them in different classes/elements with `@extend %shared-style`
- logic is now possible: @if @else
