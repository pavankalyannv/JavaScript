var sum=0
function palindrom1(n){

    temp=n
    while(n>0){
        rem=parseInt(n%10)
        sum=sum*10+rem
        n=parseInt(n/10)
    }
    if(temp==sum){
        console.log("is a palindrome")
    }
    else{
        console.log("not a palindrome")
    }

}
palindrom1(12321)
palindrom1(2345)