// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap';
alert("hello"); 

let form = document.getElementById("myForm");

form.onsubmit = function() {
    let name = document.getElementById("name").value;
    alert("welcome" + name);
}