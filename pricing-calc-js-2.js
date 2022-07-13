const binsInput = document.querySelector('[name = day]');
const itemsInput = document.querySelector('[name = items]');
const totalSpent = document.querySelector('.total');




function howMuchDidBrandonSpend(){
    const bins = binsInput.value; 
    const items = itemsInput.value;
    const preTax = bins.valueOf() * items.valueOf(); 
    const tax = preTax * .09475;
    const finalPrice = preTax + tax;
    totalSpent.innerText = '$' + finalPrice.toFixed(2);
}

function dollarDay() {
    document.getElementById("myDropdown").classList.toggle("show");
}

howMuchDidBrandonSpend();

itemsInput.addEventListener('input', howMuchDidBrandonSpend)
binsInput.addEventListener('input', howMuchDidBrandonSpend)
