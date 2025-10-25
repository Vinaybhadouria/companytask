function countMultiplesNum(num) {
    
    let objSerise={}
    for (let i = 1; i <= 9; i++) {
        objSerise[i]=num.filter(item=>item%i===0).length
        
    }
return objSerise

}

  let num= [1,2,8,9,12,46,76,82,15,20,30]
  console.log(countMultiplesNum(num))
