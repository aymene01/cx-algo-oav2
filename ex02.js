const push =(array,...e)=>{ 
    for(let i = 0; i < array.length ; i++){
      if (e < array[i]){
        array.splice(i, 0, e)
      }
    }
    return array
}

