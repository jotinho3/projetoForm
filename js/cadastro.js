const nome = document.getElementById('nome');
const password = document.getElementById('senha');
const email = document.getElementById('email');
const confirmPassword = document.getElementById('confirmSenha');
const form = document.getElementById('form');
const error = document.querySelectorAll('.error');
const formItem = document.querySelectorAll('.formItem');
const openEye = document.getElementById('openEye');
const slashedEye = document.getElementById('slashedEye');
const confirmCadastro = document.querySelector('[data-target="confirmCadastro"]')

var validUser = false;
var validSenha = false;
var validConfirmSenha = false;
var validEmail = false;




form.addEventListener('submit', (e) => {


    checkName();
    checkPassword();
    checkEmail();
   
    
    
  

    function checkName() {
        let mensagemError = [];
        if (nome.value === '' || nome.value == null) {
            e.preventDefault();
            mensagemError.push('O nome é obrigatório')
            error[0].innerText = mensagemError;
            formItem[0].classList.add('fail');
            validUser = false;
            
            
        }
        else {
            formItem[0].classList.remove('fail');
            error[0].innerText = null;
            formItem[0].classList.add('sucess');
            validUser = true;
            e.preventDefault();
        
             
           
         
           
          
        }

    }


    function checkPassword() {
        let mensagemError = [];
        if (password.value.length == 0) {
            e.preventDefault();
            mensagemError.push('A senha é obrigatória')
            error[2].innerText = mensagemError;
            formItem[2].classList.add('fail');
            validSenha = false;
           

        }

        else if (password.value.length < 6) {
            e.preventDefault();
            mensagemError.push('A senha deve ter no mínimo 6 caracteres')
            error[2].innerText = mensagemError;
            formItem[2].classList.add('fail');
            validSenha = false;
        }

        else if (password.value.length > 15) {
            e.preventDefault();
            mensagemError.push('A senha deve ter no máximo 15 caracteres')
            error[2].innerText = mensagemError;
            formItem[2].classList.add('fail');
            validSenha = false;
         
        }

        else if (!/[A-Z]/.test(password.value)) {
            e.preventDefault();
            mensagemError.push('A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)')
            error[2].innerText = mensagemError;
            formItem[2].classList.add('fail');
            validSenha = false;
          


        }

        else if (!/[0-9]/.test(password.value)) {
            e.preventDefault();
            mensagemError.push('A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)')
            error[2].innerText = mensagemError;
            formItem[2].classList.add('fail');
            validSenha = false;
           


        }

        else if (!/[^A-Za-z0-9]/.test(password.value)) {
            e.preventDefault();
            mensagemError.push('A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)')
            error[2].innerText = mensagemError;
            formItem[2].classList.add('fail');
            validSenha = false;
        

        }



        else {
            formItem[2].classList.remove('fail');
            error[2].innerText = null;
            formItem[2].classList.add('sucess');
            validSenha = true;
            e.preventDefault();
           
           

        }


        
        if (password.value != confirmPassword.value || password.value.length == 0) {
            e.preventDefault();
            mensagemError.push(' as senhas devem ser iguais')
            error[3].innerText = mensagemError;
            formItem[3].classList.add('fail');
            validConfirmSenha = false;



        }

        else {
            formItem[3].classList.remove('fail');
            error[3].innerText = null;
            formItem[3].classList.add('sucess');
            validConfirmSenha = true;
            e.preventDefault();
        }





        
    }


    function checkEmail() {
        let mensagemError = [];
        if (email.value.length == 0) {
            e.preventDefault();
            mensagemError.push('O email é obrigatório')
            error[1].innerText = mensagemError;
            formItem[1].classList.add('fail');
            validEmail = false;
           

        }

        else if (!isEmail(email.value)){
            e.preventDefault();
            mensagemError.push('Digite um email valido')
            error[1].innerText = mensagemError;
            formItem[1].classList.add('fail');
            validEmail = false;
            

            

        }

        else {
            formItem[1].classList.remove('fail');
            error[1].innerText = null;
            formItem[1].classList.add('sucess');
            validEmail = true;
            e.preventDefault();
       
            
           

        }

        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }


    }

    function cadastrar() {
        if (validUser && validEmail && validSenha && validConfirmSenha) {
            let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

            listaUser.push(
                {
                    nomeCad: nome.value,
                    senhaCad: password.value,
                    emailCad: email.value 
                }
            )

            localStorage.setItem('listaUser', JSON.stringify(listaUser)) // dois parametros: a key, e o valor da key



            setTimeout(() => {
                window.location.href = 'login.html'

            }, 1500)

        }

        else {
            console.log('Deu errado')

        }
    }

    cadastrar()

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






