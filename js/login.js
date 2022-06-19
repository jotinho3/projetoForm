const openEye = document.getElementById('openEye');
const slashedEye = document.getElementById('slashedEye');
const password = document.getElementById('senha');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.querySelectorAll('.error');
const formItem = document.querySelectorAll('.formItem');
const confirmLogin = document.querySelector('[data-target="confirm"]')





form.addEventListener('submit', (e) => {

    checkEmail();
    checkPassword();    

  
    
    
    
    function checkEmail() {
        let mensagemError = [];
        if (email.value.length == 0) {
            e.preventDefault();
            mensagemError.push('O email é obrigatório')
            error[0].innerText = mensagemError;
            formItem[0].classList.add('fail');
            validEmail = false;
           
    
        }
    
        else if (!isEmail(email.value)){
            e.preventDefault();
            mensagemError.push('Caro usuario, você nao digitou um email certo')
            error[0].innerText = mensagemError;
            formItem[0].classList.add('fail');
            validEmail = false;
            
    
            
    
        }
    
        else {
            formItem[0].classList.remove('fail');
            error[0].innerText = null;
            validEmail = true;
            e.preventDefault();
       
            
           
    
        }
    
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,1}\.[0-9]{1,1}\.[0-9]{1,1}\.[0-9]{1,1}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
    
    
    }
    

    function checkPassword() {
        let mensagemError = [];
        if (password.value.length == 0) {
            e.preventDefault();
            mensagemError.push('A senha é obrigatória')
            error[1].innerText = mensagemError;
            formItem[1].classList.add('fail');
            validSenha = false;
           
    
        }
    
    
    
        else {
            formItem[1].classList.remove('fail');
            error[1].innerText = null;
            validSenha = true;
            e.preventDefault();
           
           
    
        }
    

    
    
    
    
        
    }

})

function eyeCheckerHidden() {
    password.addEventListener('keyup', () => {
        if (password.value == '' || password.value == null) {
            slashedEye.style.opacity = 0
            openEye.style.opacity = 0

        }else {
            slashedEye.style.opacity = 1
            openEye.style.opacity = 1

        }
       
    })
}

eyeCheckerHidden();



function eyeChecker() {
    openEye.addEventListener('click', () => {
        slashedEye.style.visibility = 'visible'
        openEye.style.visibility = 'hidden'
        password.type = 'password'
        confirmPassword.type = 'password'
      })
      
      slashedEye.addEventListener('click', () => {
        slashedEye.style.visibility = 'hidden'
        openEye.style.visibility = 'visible'
        password.type = 'text'
        confirmPassword.type = 'text'
      })

}

eyeChecker();


function login() {
  

    let listaUser = [];

    let userValid = {
        nome: '',
        email: '',
        senha: ''


    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (email.value == item.emailCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomCad,
                email: item.emailCad,
                senha: item.senhaCad
            }

        }
    })

    if (email.value == userValid.email && senha.value == userValid.senha && email.value != '' && senha.value != '') {


        




        let token = Math.random().toString(12).substring(2)
        
        localStorage.setItem('token', token)

        setTimeout(() => {
            window.location.href = 'redirect.html'

        }, 3000)

        email.classList.remove('fail')
        senha.classList.remove('fail')

        confirmLogin.style.cssText = `
            background-color: #00a000 !important;
            opacity: 1;
        `
        confirmLogin.innerHTML = '<h1>Logado com sucesso</h1>'


    }

    else {
         email.classList.add('fail')
         senha.classList.add('fail')


         confirmLogin.style.cssText = `
         background-color: #a80000 !important;
         opacity: 1;
     `
         confirmLogin.innerHTML = '<h1>Email ou senha incorretos</h1>'
         
    }
}

