// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeEntered')
//get a reference to the add button
var addBtns = document.querySelector('.addToBillBtn')
//create a variable that will keep track of the total bill
var total0ne = document.querySelector('.totalOne')

var smsTotals = document.querySelector('.smsTotal')

var callTotals = document.querySelector('.callsTotal')
//add an event listener for when the add button is pressed
var callsTotal = 0;
var smsTotal = 0;
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "bill"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
}
addBtns.addEventListener('clicked',textBillTotal)
