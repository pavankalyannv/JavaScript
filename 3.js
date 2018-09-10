function calculateAge(byear,cyear){
    age=cyear-byear
    age1=age+1
    console.log("you are either"+age+ " or "+age1)
}
var v=new Date()
calculateAge(1999,v.getFullYear())
calculateAge(1980,v.getFullYear())
calculateAge(100,v.getFullYear())