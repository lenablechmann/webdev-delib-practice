document.querySelector('select').onchange = function (){
    // this is the thing that received the event, so select dropdown
    document.querySelector('#hello').style.color = this.value;
};