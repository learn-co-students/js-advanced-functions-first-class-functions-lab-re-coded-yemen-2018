// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
  let newArray =  array.slice(0, 2);
  
  return newArray;
}
  
const returnLastTwoDrivers = function (array){
  let newArray =  array.slice(2);
  
  return newArray;
}
  
  const selectingDrivers = 
  [returnFirstTwoDrivers,returnLastTwoDrivers];
    
  function createFareMultiplier(value){
  return function (value){
    return value * value ;
    
  }
} 

 

function fareDoubler (value){
  
   return value * 2 ;
  
}

function fareTripler (value){
  
   return value * 3 ;
  
}

function selectDifferentDrivers(array , Funct){
   
  return Funct(array);
}