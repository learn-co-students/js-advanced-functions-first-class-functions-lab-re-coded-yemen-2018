// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
  
  return drivers.slice(0,2);
}

const returnLastTwoDrivers=function(drivers){
  return drivers.slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers
 , 
returnLastTwoDrivers
];

function  createFareMultiplier(num){
  
  return function(fare){
    return fare*fare;
  }
}
  
const fareDoubler=function  createFareMultiplier(fare){
    return fare*2;
}

const fareTripler=function  createFareMultiplier(fare){
    return fare*3;
}
function selectDifferentDrivers(drivers,returnLastTwoDrivers){
  
  return returnLastTwoDrivers(drivers);
}
 

  
  
 