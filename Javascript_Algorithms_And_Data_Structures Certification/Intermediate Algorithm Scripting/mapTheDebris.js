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
export const orbitalPeriod = satellites => {
  const GM = 398600.4418
  const earthRadius = 6367.4447
  return satellites.map(dataItem => {
    const { name, avgAlt } = dataItem
    const totalRadius = earthRadius + avgAlt
    const orbitalV = Math.sqrt(GM / totalRadius)
    const orbitalPeriod = Math.round(((2 * Math.PI) * totalRadius) / orbitalV)
    return {
      name,
      orbitalPeriod
    }
  })
}

// Expects [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) //?

