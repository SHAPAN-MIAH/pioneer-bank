const loginButton = document.getElementById("submitBtn");
loginButton.addEventListener('click', function(){
    const loginArea = document.querySelector(".login-area");
    loginArea.style.display = "none";
    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = "block"
})

// deposit event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const inputDeposit = document.getElementById('inputDeposit-amount').value;
    const depositNumber = parseFloat(inputDeposit);
    
    updateAmount("current-deposit", depositNumber)
    updateAmount("current-balance", depositNumber)
    document.getElementById('inputDeposit-amount').value = "";
})

// withdraw event handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener('click', function(){
    const inputWithdraw = document.getElementById('inputWithdraw-amount').value;
    const withdrawNum = parseFloat(inputWithdraw);

    updateAmount("current-withdraw", withdrawNum);
    updateAmount("current-balance", -1 * withdrawNum);
    document.getElementById('inputWithdraw-amount').value = "";
})

// function for update balance
function updateAmount(id, addNumber){
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const total = addNumber + currentNum; 
    document.getElementById(id).innerText = total;
}