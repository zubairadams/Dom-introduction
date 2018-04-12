var billTypeEntered = document.querySelector('.billTypeText')
var addBtns = document.querySelector('.addToBillBtn')
var totaltextBill = document.querySelector('.totalOne')
var smsTotals = document.querySelector('.smsTotalOne')
var callTotals = document.querySelector('.callTotalOne')
var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;

function textBillTotal(){
    var billItemOne = billTypeEntered.value.trim();
    if (billItemOne === "call"){
        callsTotal += 2.75;
        callTotals.innerHTML= callsTotal.toFixed(2);
        totalBill += 2.75;
        totaltextBill.innerHTML = totalBill.toFixed(2);
    }
    else if (billItemOne === "sms"){
      smsTotal += 0.75;
      smsTotals.innerHTML= smsTotal.toFixed(2);
      totalBill += 0.75;
      totaltextBill.innerHTML = totalBill.toFixed(2);
    }
var totalCost = totalBill.toFixed(2);

    console.log(1,totalCost.classList);

    if (totalCost >= 50){
          totaltextBill.classList.add("danger");
      }
      console.log(totaltextBill);
      var cl = totaltextBill.classList;
      console.log(cl);
    if (totalCost >= 30){
          totaltextBill.classList.add("warning");
      }
    }
addBtns.addEventListener('click',textBillTotal);
