
var Select = document.querySelector('.billItemTypeRadio');
var radBtn = document.querySelector('.radioBillAddBtn');

var callTwo = document.querySelector('.callTotalTwo');
var smsTwo = document.querySelector('.smsTotalTwo');
var totalRadio = document.querySelector('.totalTwo');


var callsTotal3 = 0;
var smsTotal3 = 0;
var totalBill3 = 0;

function radioBillTotal(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
    var radBtn = checkedRadioBtn.value;
  }
  var billItemTwo = radBtn;
  if ( billItemTwo === 'call') {
    callsTotal3 += 2.75;
  }else if(billItemTwo === 'sms'){
    smsTotal3 += 0.75;
  }
  callTwo.innerHTML = callsTotal3.toFixed(2);
  smsTwo.innerHTML = smsTotal3.toFixed(2);
  totalBill3 = callsTotal3 + smsTotal3;
  totalRadio.innerHTML = totalBill3.toFixed(2);


    if (totalBill3 < 29){
    totalRadio.classList.remove("warning")
      totalRadio.classList.remove("danger")
    }
    else if (totalBill3 >= 50){
      totalRadio.classList.remove("warning")
      totalRadio.classList.add("danger")

    }
  else if (totalBill3 >= 30){
    totalRadio.classList.remove("danger")
    totalRadio.classList.add("warning")
    }
}

radBtn.addEventListener('click',radioBillTotal);



//
