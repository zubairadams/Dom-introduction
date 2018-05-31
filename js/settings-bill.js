
// get a reference to the sms or call radio buttons
const call = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callTotalElem = document.querySelector(".callTotalSettings");
const smsTotalElem  = document.querySelector(".smsTotalSettings");
const totaltotalElem = document.querySelector(".totalSettings");

const callCostElem  = document.querySelector(".callCostSetting");
const smsCostElem = document.querySelector(".smsCostSetting");
const criticalLevelElem = document.querySelector(".criticalLevelSetting");
const warningLevelElem = document.querySelector(".warningLevelSetting ");
//get a reference to the add button
const addbtnElem =  document.querySelector(".addbtn");

//get a reference to the 'Update settings' button
const settingsbtn = document.querySelector(".updateSettings");

// Make sure all your DOM elements are const & add Elem to the end

// create a variables that will keep track of all the settings

var callSettings = 0;
var smsSettings = 0;
var critical = 0;
var warning = 0;

// create a variables that will keep track of all three totals.
var callBalance = 0;
var sms1 = 0;
var totals = 0;

function radioTotal(){
  var checkradiobtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var radBtn = checkradiobtn.value.trim();
  if (radBtn === 'call'){
      callBalance += callSettings;

  }
  else if (totals >= critical){
  return;
  }
 if (radBtn === 'sms'){
      sms1 += smsSettings
  }
  else if (totals >= critical){
  return;
  }
  callTotalElem.innerHTML = callBalance.toFixed(2);
  smsTotalElem.innerHTML = sms1.toFixed(2);

  totals = sms1 + callBalance
  totaltotalElem.innerHTML = totals.toFixed(2);


console.log(totals);
 if (totals < warning ){
    totaltotalElem.classList.remove("warning")
    totaltotalElem.classList.remove("warning")
  }
  else if (totals >= warning && totals < critical){
    totaltotalElem.classList.remove("danger")
    totaltotalElem.classList.add("warning")

  }
  else if(totals >= critical) {
    totaltotalElem.classList.remove("warning")
    totaltotalElem.classList.add("danger")
  }
}


function update(){
  var newCallCost = callCostElem.value;
  callSettings = parseFloat(newCallCost);
  var newSmsCost = smsCostElem.value;
  smsSettings = parseFloat(newSmsCost);
  console.log(callSettings);
  console.log(smsSettings);

  critical = parseFloat(criticalLevelElem.value);
  warning = parseFloat(warningLevelElem.value);
}

//add an event listener for when the 'Update settings' button is pressed
settingsbtn.addEventListener('click',update)

//add an event listener for when the add button is pressed
addbtnElem.addEventListener('click',radioTotal)
