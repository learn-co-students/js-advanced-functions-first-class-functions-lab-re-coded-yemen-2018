// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
  let newArray = [];
  count = 0;
  for (let element of array){
    if (count <2){
      newArray.push(element);
      count++;
    }
    
  }
  return newArray;
  
};

const returnLastTwoDrivers = function (array){
  let newArray = [];
  count = array.length;
  step = 1;
  for (let element of array){
    if (step === count || step === count-1){
      newArray.push(element);
      
    }
    step++;
  }
  return newArray;
  
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
  return function (multi){
    return num * multi;
    
  };
}

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array , func){
  const newFunc = func(array);
  return newFunc;
}








