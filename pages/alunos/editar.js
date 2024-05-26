document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('registrationForm')
    const cepInput = document.getElementById('cep')
    const estadoInput = document.getElementById('estado')
    const estadoFeedback = document.getElementById('estadofeedback')
    const numeroInput = document.getElementById('numero')
    const numeroFeedback = document.getElementById('numerofeedback')
    const enderecoInput = document.getElementById('endereco')
    const enderecoFeedback = document.getElementById('enderecofeedback')
    const complementoInput = document.getElementById('complemento')
    const complementoFeedback = document.getElementById('complementofeedback')
    const telefoneInput = document.getElementById('telefone-responsavel')
    const telEmergenciaInput = document.getElementById('telefone-emergencia')
    const emailInput = document.getElementById('email-responsavel')
    const emailFeedback = document.getElementById('emailfeedback')
    const bairroInput = document.getElementById('bairro')
    const bairroFeedback = document.getElementById('bairrofeedback')

    //Validação do campo CEP
    cepInput.addEventListener('input',function(){
        let value = cepInput.value.replace(/\D/g,'')

        if(value.length>8){
            value = value.slice(0,8)
        }
        let formattedValue = ''
        for (let i = 0; i < value.length; i++){
            if (i === 5){
                formattedValue += '-'
            }
            formattedValue += value[i]
        }
    cepInput.value = formattedValue
    })

    //Validação do campo Estado
    estadoInput.addEventListener('input',function(event){
        if(event.target.value.trim().length <=19){
            estadoInput.setCustomValidity('')
            estadoInput.classList.remove('is-invalid')
            estadoInput.classList.add('is-valid')
            estadoFeedback.textContent = ''
        }else{
            estadoInput.setCustomValidity('')
            estadoInput.classList.remove('is-valid')
            estadoInput.classList.add('is-invalid')
            estadoFeedback.textContent = 'Estado não deve ter mais de 19 caracteres...'
        }
    })

    //Validação do campo Número
    numeroInput.addEventListener('input',function(event){
        if(event.target.value.trim().length <=5){
            numeroInput.setCustomValidity('')
            numeroInput.classList.remove('is-invalid')
            numeroInput.classList.add('is-valid')
            numeroFeedback.textContent = ''
        }else{
            numeroInput.setCustomValidity('')
            numeroInput.classList.remove('is-valid')
            numeroInput.classList.add('is-invalid')
            numeroFeedback.textContent = 'Número não deve ter mais de 5 caracteres...'
        }
    })

    //Validação do campo Endereço
    enderecoInput.addEventListener('input',function(event){
        if(event.target.value.trim().length <=100){
            enderecoInput.setCustomValidity('')
            enderecoInput.classList.remove('is-invalid')
            enderecoInput.classList.add('is-valid')
            enderecoFeedback.textContent = ''
        }else{
            enderecoInput.setCustomValidity('')
            enderecoInput.classList.remove('is-valid')
            enderecoInput.classList.add('is-invalid')
            enderecoFeedback.textContent = 'Endereço não deve ter mais de 100 caracteres...'
        }
    })

    //Validação do campo Complemento
    complementoInput.addEventListener('input',function(event){
        if(event.target.value.trim().length <=30){
            complementoInput.setCustomValidity('')
            complementoInput.classList.remove('is-invalid')
            complementoInput.classList.add('is-valid')
            complementoFeedback.textContent = ''
        }else{
            complementoInput.setCustomValidity('')
            complementoInput.classList.remove('is-valid')
            complementoInput.classList.add('is-invalid')
            complementoFeedback.textContent = 'Complemento não deve ter mais de 30 caracteres...'
        }
    })

    //Validação do campo Bairro
    bairroInput.addEventListener('input',function(event){
        if(event.target.value.trim().length <=30){
            bairroInput.setCustomValidity('')
            bairroInput.classList.remove('is-invalid')
            bairroInput.classList.add('is-valid')
            bairroFeedback.textContent = ''
        }else{
            bairroInput.setCustomValidity('')
            bairroInput.classList.remove('is-valid')
            bairroInput.classList.add('is-invalid')
            bairroFeedback.textContent = 'Bairro não deve ter mais de 30 caracteres...'
        }
    })

    //Validação do campo Telefone do responsável
    telefoneInput.addEventListener('input',function(){
        let value =telefoneInput.value.replace(/\D/g,'')

        if(value.length>11){
            value = value.slice(0,11)
        }

        let formattedValue = ''
        for (let i =0; i < value.length; i++){
            if(i == 0){
                formattedValue += '('
            }
            if(i === 2){
                formattedValue += ') '
            }
            if(i === 7){
                formattedValue += '-'
            }
            formattedValue += value[i]
        }
    telefoneInput.value = formattedValue
    })

    //Validação do campo Telefone do emergência
    telEmergenciaInput.addEventListener('input',function(){
        let value =telEmergenciaInput.value.replace(/\D/g,'')

        if(value.length>11){
            value = value.slice(0,11)
        }

        let formattedValue = ''
        for (let i =0; i < value.length; i++){
            if(i == 0){
                formattedValue += '('
            }
            if(i === 2){
                formattedValue += ') '
            }
            if(i === 7){
                formattedValue += '-'
            }
            formattedValue += value[i]
        }
        telEmergenciaInput.value = formattedValue
    })
    
    //Validação do campo Email do responsável
    emailInput.addEventListener('input',function(){
        let emailvalido = /\S+@\S+\.\S+/
        
        if(emailvalido.test(emailInput.value)){
            emailInput.setCustomValidity('')
            emailInput.classList.remove('is-invalid')
            emailInput.classList.add('is-valid')
            emailFeedback.textContent = ''
        }else{
            emailInput.setCustomValidity('')
            emailInput.classList.remove('is-valid')
            emailInput.classList.add('is-invalid')
            emailFeedback.textContent = 'Por favor, insira um email válido.'
        }
    })

    //Validação do formulário
    form.addEventListener('submit',function(event){
        event.preventDefault()
        event.stopPropagation()

        if (!form.checkValidity()){
            form.classList.add('was-validated')
        }else{
            form.classList.remove('was-validated')
            alert('Alterações salvas com sucesso!')
        }
    })
})