document.addEventListener('DOMContentLoaded', function(){
    var login = false;
    var hidden_middle_div = document.getElementById('hidden-middle-div');
    var login_ermsg = document.getElementById('login-ermsg');
    var login_btn = document.getElementById('login-btn');
    login_btn.addEventListener('click', function(e){
        e.preventDefault()
        var email = document.getElementById('login-email');
        var pwd = document.getElementById('login-password');
        
        
        console.log(pwd.value)

        if(email.value===''){
            login_ermsg.innerText = 'email field is required';
            setTimeout(function(){
                login_ermsg.innerText = ''
            },3000)
            console.log('email field is required')
        }else if(pwd.value===''){
            login_ermsg.innerText = 'password cant be empty';
            setTimeout(function(){
                login_ermsg.innerText = ''
            },3000)
            console.log('password cant be empty')
        }
        else {

        var getusers = localStorage.getItem('user')
        var users = JSON.parse(getusers);
            console.log(users.email)

            if(users.email === email.value && users.password === pwd.value){
                if(users.password === pwd.value){
                    login = true;
                    login_ermsg.innerText = 'SUCCESS:';
                    email.value = '';
                    pwd.value = '';
                    if(login=== true){
                        console.log('loged in')
                        var dashboard = document.getElementById('dashboard');
                      // var div =  document.createElement('div');
                       var div =  document.getElementById('progress-div');
                       div.style.width = '100%';
                       div.innerHTML = '<div id="progress-bar" style="height: 6px; width: 1px; background-color: brown;"></div>'
                       dashboard.insertBefore(div, hidden_middle_div)
                       console.log(div)
                        var progress_bar = document.getElementById('progress-bar');
                       counter = 0;
                       
                       
                       
                        let progressInterval = setInterval(function(){
                        progress_bar.style.width = counter+'px';
                        counter++
                        if(counter==400){
                            clearInterval(progressInterval)
                            dashboard.style.borderRight = '1px solid black';
                            dashboard.style.borderLeft = '1px solid black';
                            
                            hidden_middle_div.removeAttribute('hidden');
                        }
                       },50)
                      
                    }
                    setTimeout(function(){
                        login_ermsg.innerText = ''
                    },3000)


                    var user_mail = document.getElementById('user-mail');
                    var user_pwd = document.getElementById('user-pwd');
                    var justnote = document.getElementById('justnote');

                    var getusers = localStorage.getItem('user')
                    var users = JSON.parse(getusers);
                        user_mail.innerText = users.email;
                        user_pwd.innerText = users.password;
                        justnote.innerHTML = 'Just testing out <strong>"Local Storage"</strong>'

                }else {
                    
                    login_ermsg.innerText = 'invalid password'
                    setTimeout(function(){
                        login_ermsg.innerText = ''
                    },3000)
                }
            }else {
                login_ermsg.innerText = 'invalid Email or password'
                setTimeout(function(){
                    login_ermsg.innerText = ''
                },3000)
            }
           

        }

  
    })


    
})