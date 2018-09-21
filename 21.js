var sum=0
function palindrom1(n){

    temp=n
    while(n>0){
        rem=n%10
        sum=sum*10+rem
        n=n/10
    }
    console.log(sum)
    if(temp==sum){
        console.log("is a palindrome")
    }
    else{
        console.log("not a palindrome")
    }

}
palindrom1(12321)