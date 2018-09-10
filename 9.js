function book(usr){
var arr=[

{
    title:'The Hobbit',
    author:'J.R.R.Tolkien',
    read:true
},

{
    title:'The Lord of the Rings',
    author:'J.R.R.Tolkien',
    read:false
}

]
for (i=0 ;i<arr.length;i++){
if(arr[i].read==true){
    console.log("You already read "+'"The Hobbit"'+"by J.R.R.Tolkien")
}
else{
    console.log("You still need to read "+'"The Lord of the Rings "'+" by J.R.R.Tolkien")
}
}
}
book(true)