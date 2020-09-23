function bookIndex(arr) {
    var string =''
    var newString='';
    var temp=newString[0];
    var stringMin=0;
    var stringMax=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i+1]==arr[i]+1){
            newString += arr[i], arr[i+1];
        }
        for (var j=0; j<newString.length; j++){
            if (newString[j]<temp){
                stringMin = newString[j];
            }
            else{
                stringMax = newString[j];
                }
            string += stringMin+'-'+stringMax
        }
    }
  }