document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('registrationForm')
    const despesaInput = document.getElementById('despesa')
    const despesaFeedback = document.getElementById('despesafeedback')
    const contaInput = document.getElementById('conta')
    const contaFeedback = document.getElementById('contafeedback')
    const valorInput = document.getElementById('valor')

    //Validação do campo Tipo de despesa
    despesaInput.addEventListener('input',function(event){
        if(event.target.value.trim().length <= 15){
            despesaInput.setCustomValidity('');
            despesaInput.classList.remove('is-invalid');
            despesaInput.classList.add('is-valid');
            despesaFeedback.textContent = ''
        }else{
            despesaInput.setCustomValidity('');
            despesaInput.classList.remove('is-valid');
            despesaInput.classList.add('is-invalid');
            despesaFeedback.textContent = 'Tipo de despesa não deve ter mais de 15 caracteres';
        }
    })

    //Validação do campo Tipo de conta
    contaInput.addEventListener('input',function(event){
        if(event.target.value.trim().length <= 20){
            contaInput.setCustomValidity('');
            contaInput.classList.remove('is-invalid');
            contaInput.classList.add('is-valid');
            contaFeedback.textContent = ''
        }else{
            contaInput.setCustomValidity('');
            contaInput.classList.remove('is-valid');
            contaInput.classList.add('is-invalid');
            contaFeedback.textContent = 'Tipo de conta não deve ter mais de 20 caracteres';
        }
    })

    //Validação do campo Tipo de conta
    valorInput.addEventListener('input',function(){
        let value = valorInput.value.replace(/\D/g,'')

        if(value.length>22){
            value = value.slice(0,22)
        }
        
        let formattedValue =  value.replace(/([0-9]{2})$/, ",$1")
        if(formattedValue.length > 6){
            formattedValue = formattedValue.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
        }

        valorInput.value = "R$" + formattedValue
    })

    //Validação do formulário
    form.addEventListener('submit',function(event){
        event.preventDefault() 
        event.stopPropagation()
        
        if(!form.checkValidity()){
            form.classList.add('was-validated')
        }else{
            form.classList.remove('was-validated')
            alert('Conta adicionada com sucesso!')
        }
    })
})