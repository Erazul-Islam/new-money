function netIncome() {
    const incomeInput = document.getElementById('income-input')
    const incomeValue = parseFloat(incomeInput.value);

    const food = document.getElementById('Food-input');
    const foodValue = parseFloat(food.value);

    const rent = document.getElementById('Rent-input');
    const rentValue = parseFloat(rent.value);

    const clothes = document.getElementById('clothes-input');
    const clothesValue = parseFloat(clothes.value);

    const totalExpenses = foodValue + rentValue + clothesValue;
    if (incomeValue < totalExpenses) {
        alert('Insufficient Balance')
    } else {
        const total = document.getElementById('t-expenses');
        total.innerText = totalExpenses;

        const balance = incomeValue - totalExpenses;

        const totalBalance = document.getElementById('t-balance');
        totalBalance.innerText = balance;
    }




}

function SaveingsIncome() {
    const savingsInput = document.getElementById('saving-input');
    const savingsValue = parseFloat(savingsInput.value);

    const incomeInput = document.getElementById('income-input')
    const incomeValue = parseFloat(incomeInput.value);

    const savings = (savingsValue / 100) * incomeValue;

    const value = document.getElementById('saving-amount');
    value.innerText = savings;


    const food = document.getElementById('Food-input');
    const foodValue = parseFloat(food.value);

    const rent = document.getElementById('Rent-input');
    const rentValue = parseFloat(rent.value);

    const clothes = document.getElementById('clothes-input');
    const clothesValue = parseFloat(clothes.value);

    const totalExpenses = foodValue + rentValue + clothesValue;

    const total = document.getElementById('t-expenses');
    total.innerText = totalExpenses;

    const balance = incomeValue - totalExpenses;
    if (balance < savings) {
        alert('You have not have enough money to save')
    } else {
        const remainingValue = balance - savings;

        const remainingSavings = document.getElementById('remainning-balance');
        remainingSavings.innerText = remainingValue;
    }
}