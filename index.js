let inputer = document.getElementById('inputer');
let btn = document.getElementById('submit');
let response = document.getElementById('label');



btn.addEventListener("click", () => {
    let inputValue = inputer.value;
    let percentage = parseFloat(inputValue);
    if (!isNaN(percentage)){
        let number = (percentage * 100);
        response.textContent = number + "%";
    } else {
        response.textContent = "INVALID INPUT: you must input a valid number";
    }

});
