import _ from 'lodash';

function component () {
    // a function that creates a div element with "Hello webpack" content
    const element = document.createElement('div');

    // lodash imported above in the script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

// appends that div in the html
document.body.appendChild(component());