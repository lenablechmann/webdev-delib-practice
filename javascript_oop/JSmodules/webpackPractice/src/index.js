import _ from 'lodash';
import myName from './myName'

function component () {
    // a function that creates a div element with "Hello webpack" content
    const element = document.createElement('div');

    // lodash imported above in the script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

function nameComponent () {
    const div = document.createElement('div');
    div.textContent = myName('Lena');

    return div;
}

// appends that div in the html
document.body.appendChild(component());
document.body.appendChild(nameComponent());