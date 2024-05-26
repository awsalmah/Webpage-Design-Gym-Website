function validateForm2(e){

let fname=document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let email=document.getElementById("email").value;
let gender1=document.getElementById("male");
let gender2=document.getElementById("female");
let dob=document.getElementById("birthdate").value;
let address=document.getElementById("address").value;
let password=document.getElementById("password").value;
let confirmpassword=document.getElementById("confirm-password").value;
let err=0;

  if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)){
    err=0;
  }
  else{
    err=1;
  }

  if(password==""||password==null){
    err=1;     
  }
  
  if(confirmpassword==""||confirmpassword==null||confirmpassword!==password){
    err=1;
  }

  if (!((!/[^a-zA-Z]/.test(fname))&&(fname!=null)&&(fname!=""))){
    err=1;
  }

  if (!((!/[^a-zA-Z]/.test(lname))&&(lname!=null)&&(lname!=""))){
    err=1;
  }

  if(email==""||email==null){
    err=1;
  }

  if(!((gender1.checked)||(gender2.checked))){
    err=1;
  }


  let dobinput=dob.split("-");
  let dobyr=dobinput[0];
  let sysdate=new Date();
  let curryr=sysdate.getFullYear()
  if((curryr-dobyr)<16||(curryr-dobyr)>100){
    err=1;
  }


  if(err==1){
    e.preventDefault();
    document.getElementById("error").innerHTML='<br>Please enter the correct information in the required fields(*).';
  }

}
