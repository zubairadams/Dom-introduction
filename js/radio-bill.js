var callsTotal3 = 0;
var smsTotal3 = 0;
var totalBill3 = 0;
var Select = document.querySelector('.billItemTypeRadio')
console.log(Select);
var radBtn = document.querySelector('.radioBillAddBtn')

var callTwo = document.querySelector('.callTotalTwo')
var smsTwo = document.querySelector('.smsTotalTwo')
var radioTotal = document.querySelector('.totalTwo')

function radioBillTotal(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  if (checkedRadioBtn){
      var radBtn = checkedRadioBtn.value
  }
  var billItemTwo = radBtn;
  if ( billItemTwo === 'call') {
    callsTotal3 += 2.75;

  }
  else if(billItemTwo === 'sms'){
  smsTotal3 += 0.75;

  }
    callTwo.innerHTML = callsTotal3.toFixed(2);
    smsTwo.innerHTML = smsTotal3.toFixed(2);
    //radioTotal.innerHTML = radioTotal.toFixed(2)
    var totalBill = callsTotal3 + smsTotal3

    radioTotal.innerHTML = totalBill.toFixed(2);



  if (totalBill < 29){
  radioTotal.classList.remove("warning")
    radioTotal.classList.remove("danger")
  }
  else if (totalBill >= 50){
    radioTotal.classList.remove("warning")
    radioTotal.classList.add("danger")

  }
else if (totalBill >= 30){
  radioTotal.classList.remove("danger")
  radioTotal.classList.add("warning")
  }



}
radBtn.addEventListener('click',radioBillTotal);
