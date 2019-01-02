document.addEventListener('DOMContentLoaded', function(){

sessionStorage.setItem('total','0')
    var ermsg = document.getElementById('signup-ermsg');
    var signup_btn = document.getElementById('signup-btn');
    signup_btn.addEventListener('click', function(e){
        e.preventDefault()
        var email = document.getElementById('signup-email');
        var pwd = document.getElementById('signup-password');
        var pwd2 = document.getElementById('signup-password2');
        console.log(pwd2.value.length)
        console.log(pwd.value)

        if(pwd2.value!==pwd.value){
            ermsg.innerText = 'passwords dont match';
            setTimeout(function(){
                ermsg.innerText = ''
            },3000)
            console.log('passwords dont match')
        }else if(email.value.length === 0){
            ermsg.innerText = 'email cant be empty';
            setTimeout(function(){
                ermsg.innerText = ''
            },3000)
            console.log('email cant be empty')
        }
        else {
            var newUser = {
                email: email.value,
                password: pwd.value
            }

            localStorage.setItem('user',JSON.stringify(newUser));

            ermsg.innerText = 'SUCCESS: Account created';
            email.value = '',
            pwd.value = '',
            pwd2.value = '';
            setTimeout(function(){
                ermsg.innerText = ''
            },3000)
            
        }

        var users = localStorage.getItem('user')
        console.log(JSON.parse(users));

        
    })
})