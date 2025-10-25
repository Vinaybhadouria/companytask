function generateSeries(a) {
    
    let limit =a%2===0?a-1:a
    let serise=[]
    for (let i = 0; i < limit; i++) { 
        serise.push(i*2+1)
        
    }
  return serise
}

console.log(generateSeries(1))
console.log(generateSeries(2))
console.log(generateSeries(3))
console.log(generateSeries(4))
console.log(generateSeries(5))
console.log(generateSeries(6))