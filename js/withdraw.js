document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    withdrawField.value = '';
    if(isNaN(withdrawAmount)){
        alert('Please provide a number');
        return;
    }
    
    const preBalance = document.getElementById('balance-total');
    const preBalanceString = preBalance.innerText;
    const preBalanceTotal = parseFloat(preBalanceString);

    
    if(withdrawAmount > preBalanceTotal){
        alert('baper bank e eto taka nai');
        return;
    }
    const perWithdrawBalance = document.getElementById('withdraw-total');
    const perWithdrawBalanceString = perWithdrawBalance.innerText;
    const withdrawTotal = parseFloat(perWithdrawBalanceString);
    const currentWithdrawTotal = withdrawTotal + withdrawAmount;
    perWithdrawBalance.innerText = currentWithdrawTotal;

    const currentBalanceTotal = preBalanceTotal - withdrawAmount;
    preBalance.innerText = currentBalanceTotal;
    

})
