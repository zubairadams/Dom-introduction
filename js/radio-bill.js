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
  var billItemTwo = Select.value.trim();
  if ( billItemTwo === 'call') {
    callsTotal3 += 2.75;
    callTwo.innerHTML = callsTotal3.toFixed(2);
  }
  else if(billItemTwo === 'sms'){
  smsTotal3 += 0.75;
  smsTwo.innerHTML = smsTotal3.toFixed(2);
  }

    radioTotal.innerHTML = radioTotal.toFixed(2)
    var radioTotal = callsTotal3 + smsTotal3
    radioTotal.innerHTML = totalBill3.toFixed(2);

}
radBtn.addEventListener('click',radioBillTotal);
