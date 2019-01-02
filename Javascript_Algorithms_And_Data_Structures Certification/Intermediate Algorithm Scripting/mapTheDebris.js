/**
* A function that returns a new array that transforms the elements'
* average altitude into their orbital periods (in seconds).  
* Orbital period are explained here : https://en.wikipedia.org/wiki/Orbital_period
* * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
* * The values returned should be rounded to the nearest whole number.
* * The body being orbited is Earth.
* * The radius of the earth is 6367.4447 kilometers.
* * The GM value of earth is 398600.4418 km3s-2.  
* @param `array` - An array of objects
* @returns `array` - An array of objects, conatining the Orbital Period
*/
// const orbitalPeriod = arr => {
//   var GM = 398600.4418
//   var earthRadius = 6367.4447
//   let alt = 35873.5553
//   let answer = 0
//   var oPeriod2 = Math.ceil(((2*Math.PI) * totalRadius) / (Math.sqrt(GM / (earthRadius + satelliteAlt)))) //?
//   return answer
// }

function orbitalPeriod(satellites) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return satellites.map(function(data, i, arr) {
    var satelliteAlt = arr[i].avgAlt;
    var totalRadius = earthRadius + satelliteAlt;
    var orbitalV = Math.sqrt(GM / totalRadius);
    var oPeriod = Math.round(((2 * Math.PI) * totalRadius) / orbitalV);
    arr[i].velocity = orbitalV.toFixed(4);
    arr[i].orbitalPeriod = oPeriod;
    return {
      name: data.name,
      orbitalPeriod: data.orbitalPeriod
    };
  });
}

// Expects [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) //?

