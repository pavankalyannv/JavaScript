var count=0
function arg(str,let){

    for (i in str){
        if(str[i]==let){
            count++
        }
        
    }
    console.log("occurance is "+count)
}
arg('gmail.com','m')
