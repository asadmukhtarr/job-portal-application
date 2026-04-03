console.log('Helo External JS');
function clicker() {
    alert('Alert Through External File');
}
function typetesting(v) {
    document.getElementById('demo').innerHTML = v;
}
function calculate(v) {
    // document == web page ..
    // element === html tag
    // id === id 
    // current web page sy result id ka tag select kro  or is ki value ko select kroo  and us ki jaga v ki value ko place kr do ..
    var current_value = document.getElementById('result').value;
    document.getElementById('result').value = current_value + v; //
    if (v == "c") {
        document.getElementById('result').value = " "; //
    } else if (v == "=") {
        // eval function ... for solve any mathemical equation ..
        document.getElementById('result').value = eval(current_value); //
    }
}
function yourname(name) {
    alert("Your name is " + name);
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function () {
    const nameForm = document.getElementById('nameForm');
    if (nameForm) {
        nameForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting normally
            const nameValue = document.getElementById('yourname').value;
            alert('Your name is: ' + nameValue);
        });
    }
});
/*
    // simple function
    const FetchProducts () {


    }
    // arrow function
    const FetchProducts = () => {


    }
    // async function jb hm ny apny function mai promise ka use krna ho ..
    // with Arrow function ( Recommended)
    const FetchProducts = async() => {
        await ....
    }
    // without arrow function
    aysnc FetchProductions(){
        await .....
    }


*/
// document === web page ...
// element === html tag
// id === id
// getElementByClassName() === class name
//document.getElementById('yourname').value
// document.getElementsByClassName('yourname').value
// functions syntax :
// Simple Function: function abc(){}
// Arrow Function: const abc = () => {} : Latest function ...
// Async Function: async function abc(){} : Latest function ... with promises : External API call krny ke liye ..


