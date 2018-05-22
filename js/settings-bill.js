
// get a reference to the sms or call radio buttons
var call = document.querySelector("billItemTypeWithSettings");
var sms = document.querySelector("billItemTypeWithSettings");

// get refences to all the settings fields
var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");
var totaltotal = document.querySelector(".totalSettings");
var criticalLevel = document.querySelector(".criticalLevelSetting");
var warningLevel = document.querySelector(".warningLevelSetting ");

//get a reference to the add button
var addbtn = document.querySelector("button-primary addbtn");

//get a reference to the 'Update settings' button
var settingsbtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callSettings = 0;
var smsSettings = 0;
var totalSettings = 0;
var critical = 0;
var warning = 0;
// create a variables that will keep track of all three totals.
var calls = 0;
var sms1 = 0;
var totals = 0;


function update(){
callSettings = parsefloat(callTotal.value)
smsSettings = parsefloat(smsTotal.value)
totalSettings = parsefloat(totaltotal.value)
critical = parsefloat(criticalLevel.value)
warning = parsefloat(warningLevel.value)
}

function radioTotal(){
  var checkradiobtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (checkradiobtn){
    var radBtn = checkradiobtn.value
    }

    var Item = radBtn;
    if (Item === "call"){
      calls += callTotal
    }
    else if (Item === 'sms') {
    sms1 += smsTotal
  }
    callTotal.innerHTML = calls.toFixed(2);
    smsTotal.innerHTML = sms1.toFixed(2);
    var total = totaltotal
var total = sms1 + calls
    totaltotal.innerHTML = total.toFixed(2);
}



//add an event listener for when the 'Update settings' button is pressed
settingsbtn.addEventListener('click',update)

//add an event listener for when the add button is pressed
addbtn.addEventListener('click',radioTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
