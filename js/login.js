document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    const passwordFiled = document.getElementById('password-field');
    const password = passwordFiled.value;

    if(email == 'shahadat@gmail.com' && password == '5234'){
        window.location.href = 'account.html'
    }
    else{
        alert('Wrong email or password')
    }
})