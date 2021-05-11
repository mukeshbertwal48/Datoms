(function (str){
    let buff = new Buffer(str)
    buff = buff.toJSON()
    var startASCII = 65
    var indexOfA = buff.data.indexOf(65)
    let temp = indexOfA
    let lastIndex;
    console.log(buff.data)
    for (let i = indexOfA+1; i<buff.data.length; i++){
        
        if(buff.data[i] == startASCII+1){
            lastIndex = i
            startASCII ++;
            continue;
        }
        else if(buff.data[indexOfA+1] == startASCII){
            temp = indexOfA+1
            continue;
        }
        else{
            continue;
        }
    }
    console.log(str.substring(temp,lastIndex+1))

})("FORCESABCDEFDIVGHIJKLMNOPQRSTUVWXYZ")
