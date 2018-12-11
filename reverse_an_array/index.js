function reverse(arr){
  var nA = []
  for(var i = arr.length; i > 0; i--){
    nA.push(arr[i - 1])
  }
  return nA;
}
