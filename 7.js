function assignGrade(marks){
    if(marks>=90 && marks<100)
    console.log("You  got a A")
    if(marks>=75 && marks<90)
    console.log("you got a B")
    if(marks<75 && marks>=60)
    console.log("you got a c")
    if(marks<60 && marks>=50)
    console.log("you got a d") 
    if(marks<50 )
    {console.log("you are failed")}
}
assignGrade(50)
assignGrade(10)
assignGrade(85)

