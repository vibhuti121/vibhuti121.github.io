        const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         console.log(loginText.style.marginLeft);
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.addEventListener("click",()=>{
             signupBtn.click();
         });
         function signup_value(){
             const x=document.querySelector("form.signup input[name='Email']").value;
             const pass=document.querySelector("form.signup input[name='passwd']").value;
             const check_pass=document.querySelector("form.signup input[name='confmpasswd']").value;
             if(x==""|| pass=="" || check_pass==""){
                 alert("plzz give all the inputs");
             }
             if(pass!=check_pass){
                 alert("both passwords are not matching");
             }
             localStorage.setItem('email',x);
             localStorage.setItem('password',pass);
         }
         function login_val(){
             const x=document.querySelector("form.login input[name='Email']").value;
             const pass=document.querySelector("form.login input[name='password']").value;
            // alert(pass);
             if(localStorage.getItem('email')==x && localStorage.getItem('password')==pass){
                window.location.href="./1.htm";
                //window.open("file:///F:/newton%20full%20stack/login/1.htm","_self");
             }
             else{
                 alert("no such login data");
             }
             return false;
         }