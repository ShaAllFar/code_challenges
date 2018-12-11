function deleteDuplicates(arr){
  var hash = {};
  var nA = [];

  for(var i = 0; i < arr.length; i++){
    if(hash[arr[i]] === undefined){
      hash[arr[i]] = arr[i]
      nA.push(arr[i]);
    }
  }
  return nA;
}
