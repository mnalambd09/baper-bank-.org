document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputField = document.getElementById('deposit-field');
    const depositAmountstring = inputField.value;
    const depositAmount = parseFloat(depositAmountstring);


    inputField.value = '';
    if(isNaN(depositAmount)){
        alert('please provide a valid number');
        return;
    }

    const previusDepositTotal = document.getElementById('deposit-total');
    const previusDepositTotalString = previusDepositTotal.innerText;
    const totalDeposit = parseFloat(previusDepositTotalString);
    const totalCurentDeposit = totalDeposit + depositAmount;
    previusDepositTotal.innerText = totalCurentDeposit;
    // balance section
    const preBalance = document.getElementById('balance-total');
    const balanceAmountString = preBalance.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    const totalCurentBalance = balanceAmount + depositAmount;
    preBalance.innerText = totalCurentBalance;
    
})



