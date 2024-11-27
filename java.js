function printmyname(){
    console.log("jose")
  }
 printmyname()
 
 function printgivenname(name){
   console.log(name)
 }
 printmyname("agaram")
 
 function addition(g,h){
  console.log(g+h)
 }
 addition(1,2)
 addition(34567890,1234567890)
 
 function add(g,h){
   console.log(g+h)
 }
 add(4,5)
 
 function operation(a,s,d,f)
 {
   let sum=(a+s)
   let mul=(d*f)
   console.log(sum-mul)
   
 }
 operation(3,4,5,6)
 
 let detail={
   fname:"ramesh",
   lname:"v",
   colors:["red","blue","green","yellow","white"]
 
 }
 function getfullname(object){
   console.log(object.fname+object.lname)
 }
 getfullname(detail)
 
 function getname(name){
   
   return "name is"+name;
 }
 let output=getname("agaram");
 console.log(output)
 
 function additions(num1,num2){
   return num1+num2;
 }
 let total=additions(5,6);
 let total2=additions(11,11)
 console.log(total)
 console.log(total2)
 
 function ad(n1,n2){
   return n1+n2;
 }
 function mu(n1,n2){
   return n1*n2;
 }
 function su(n1,n2){
   return n1-n2;
 }
 let sum=ad(7,6)
 let mul=mu(3,2)
 let find=su(sum,mul)
 console.log(sum)
 console.log(mul)
 console.log(find)
 
 function a(n1,n2){
   return n1+n2;
 }
 function s(n1,n2){
   return n1-n2;
 }
 function m(n1,n2){
   return n1*n2;
 }
 let summ=a(4,5)
 let subb=s(8,4)
 let fin=m(summ,subb)
 console.log(summ)
 console.log(subb)
 console.log(fin)
 
 let mathsmark=61;
 if(mathsmark>60){
   console.log("you are pass")
 }
 else{
   console.log("you are fail")
 }
 
 let gender="male"
 if(gender=="male"){
   console.log("color is blue")
 }
 else if(gender=="female"){
   console.log("color is pink")
 }
 else if(gender=="transgender"){
   console.log("color")
 }
 
 let a=5
 if(a%2==0){
   console.log("the number is even")
 }
 else{
   console.log("the number is odd")
 }
 
 let marks={
   maths:90,
   tamil:80,
   english:60,
   science:50,
   social:70,
 }
 let percentage=(marks.maths+marks.tamil+marks.english+marks.science+marks.social)/5
 console.log(percentage)
 if(percentage>60){
   console.log("you are pass")
 }
 else{
   console.log("you are faill")
 }