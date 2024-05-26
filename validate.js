// <!-- /* AWS ALMAHASNEH 20200388 SECTION 1*/ -->
// <!-- /* TARIQ HINDAWI 20200202 SECTION 3 */ -->
// <!----------------------------------------------------------------------------------------------------------------------------------------->   
function validateForm1(e){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error");
    if(email==null||email==""||password==null||password==""){
        e.preventDefault();
        error.innerHTML='<br>Please check your password and email and try again.';
    }
}
