// *-----------
//  Diposit
// *-----------
document.getElementById('diposit-btn').addEventListener('click', function(){ 
    const dipositField = document.getElementById('diposit-field');
    const dipositFieldAmountString = dipositField.value;
    const dipositFieldAmount = parseFloat(dipositFieldAmountString);
    dipositField.value = '';
    if(isNaN(dipositFieldAmount)){
        alert('Enter Number');
        return;
    }
    const dipositAmount = document.getElementById('diposit-amount');
    const dipositAmountString = dipositAmount.innerText;
    const dipositAmountNumber = parseFloat(dipositAmountString);

    const tottalDiposit = dipositFieldAmount + dipositAmountNumber;
    dipositAmount.innerText = tottalDiposit;

    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balanceAmountNumber = parseFloat(balanceAmountString);

    const tottalBalance = balanceAmountNumber + dipositFieldAmount;
    balanceAmount.innerText = tottalBalance;
})

// *-----------
//  Withdraw
// *-----------
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldAmountString);
    withdrawField.value = '';

    if(isNaN(withdrawFieldAmount)){
        alert('Enter Number')
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountString);
    

    

    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balanceAmountNumber = parseFloat(balanceAmountString);

    if(withdrawFieldAmount > balanceAmountNumber){
        alert('Insufficient Fund');
        return;
    }
    const tottalWithdraw = withdrawAmountNumber + withdrawFieldAmount;
    withdrawAmount.innerText = tottalWithdraw
    
    const tottalBalance = balanceAmountNumber - withdrawFieldAmount;
    balanceAmount.innerText = tottalBalance;





})