// get a reference to the sms or call radio buttons
var call = document.querySelector("billItemTypeWithSettings");
var sms = document.querySelector("billItemTypeWithSettings");

// get refences to all the settings fields
var callTotal = document.querySelector("callTotalSettings");
var smsTotal = document.querySelector("smsTotalSettings");
var totaltotal = document.querySelector("totalSettings");
var criticalLevel = document.querySelector("u-full-width criticalLevelSetting");
var danderLevel = document.querySelector("u-full-width warningLevelSetting ");

//get a reference to the add button
var radiobtn = document.querySelector("button-primary");

//get a reference to the 'Update settings' button
var settingsbtn = document.querySelector("button-primary updateSettings");

// create a variables that will keep track of all the settings
var callSettings = 0;
var smsSettings = 0;
var totalSettings = 0;
var critical = 0;
var danger = 0;
// create a variables that will keep track of all three totals.
var calls = 0;
var sms1 = 0;
var totals = 0;

function updateSetting(){


}

function radioBillTotal(){
  var check = "input[name='billItemType']:checked";

  if (check) {
    var radio = check.value
  }
  var billItem = radio;
  if (billItem === 'calls'){
  call += callSettings;
  }
  else if (billItem === 'sms') {
  sms += smsSettings;
  }
 call.innerHTML = calls.toFixed(2);
 sms.innerHTML = sms1.toFixed(2);

 var finalTotal = calls + sms1
totaltotal.innerHTML = finalTotal.toFixed(2);
}


//add an event listener for when the 'Update settings' button is pressed
settingsbtn.addEventListener('click',updateSetting)
//add an event listener for when the add button is pressed
addbtn.addEventListener('click',radioBillTotal)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
