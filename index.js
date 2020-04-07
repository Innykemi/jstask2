let data = [
  {
    Principal: 2500,
    time: 1.8
  },
  {
    Principal: 1000,
    time: 5
  },
  {
    Principal: 3000,
    time: 1
  },
  {
    Principal: 2000,
    time: 3
  }
];

function interestCalculator(array) {
  let interestData = [];

  for (let i in array) {
    if (array[i].Principal >= 2500 && array[i].time > 1 && array[i].time <= 3) {
      array[i].rate = 3;
    } else if (array[i].Principal >= 2500 && array[i].time >= 3) {
      array[i].rate = 4;
    } else if (array[i].Principal < 2500 || array[i].time <= 1) {
      array[i].rate = 2;
    } else {
      array[i].rate = 1;
    }
    
    interest = (array[i].Principal * array[i].rate * array[i].time) / 100;
    array[i].interest = interest;
    
    interestData.push({
        principal: array[i].Principal,
        rate: array[i].rate,
        time: array[i].time,
        interest: array[i].interest
    });
  }
  console.log(interestData);
  return interestData;
}
interestCalculator(data);
