
// get a reference to the sms or call radio buttons
var call = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");
var totaltotal = document.querySelector(".totalSettings");

var callCost = document.querySelector(".callCostSetting");
var smsCost = document.querySelector(".smsCostSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");
var warningLevel = document.querySelector(".warningLevelSetting ");
//get a reference to the add button
var addbtn = document.querySelector(".addbtn");

//get a reference to the 'Update settings' button
var settingsbtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callSettings = 0;
var smsSettings = 0;
var critical = 0;
var warning = 0;
// create a variables that will keep track of all three totals.
var callBalance = 0;
var sms1 = 0;
var totals = 0;

var no = warning + critical

function radioTotal(){
  var checkradiobtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var radBtn = checkradiobtn.value.trim();
  if (radBtn === 'call'){
      callBalance += callSettings;
  }else if (radBtn === 'sms'){
      sms1 += smsSettings
  }
  callTotal.innerHTML = callBalance.toFixed(2);
  smsTotal.innerHTML = sms1.toFixed(2);

  totals = sms1 + callBalance
  totaltotal.innerHTML = totals.toFixed(2);

// if (totals > no) {
//   totaltotal.classList.remove("warning")
//     totaltotal.classList.remove("danger")
// }
//   else
if (totaltotal >= critical ){
   totaltotal.classList.remove("warning")
   totaltotal.classList.add("danger")


}
  else if (totals >= warning){
  totaltotal.classList.add("warning")
  //  totaltotal.classList.remove("danger")
  }

}
function update(){
  var newCallCost = callCost.value;
  callSettings = parseFloat(newCallCost);
  var newSmsCost = smsCost.value;
  smsSettings = parseFloat(newSmsCost);
  console.log(callSettings);
  console.log(smsSettings);

  critical = parseFloat(criticalLevel.value);
  warning = parseFloat(warningLevel.value);
}

//add an event listener for when the 'Update settings' button is pressed
settingsbtn.addEventListener('click',update)

//add an event listener for when the add button is pressed
addbtn.addEventListener('click',radioTotal)
