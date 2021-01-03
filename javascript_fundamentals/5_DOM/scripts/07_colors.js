// document.querySelector just gets a single element, but we want all the buttons
// use All instead, as it will return an array of all the elements..
// and we can loop over em with forEach which will run a function for each of the elements in the array
document.querySelectorAll('button').forEach(function(button){
    button.onclick = function(){
        // getting at the data-color attribute
        document.querySelector('#hello').style.color = button.dataset.color;
    }
});

/*
// same thing but with arrow function
document.querySelectorAll('button').forEach(button => {
    button.onclick = function(){
        // getting at the data-color attribute
        document.querySelector('#hello').style.color = button.dataset.color;
    }
});
*/