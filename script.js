const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

    const emailInput = document.querySelector('input[type="email"]');
    const emailValue = emailInput.value;

    if (!emailValue.includes('@') || !emailValue.includes('.')) {

        event.preventDefault();

        alert('Por favor, insira um e-mail válido para receber a proposta!')
            
    
    } else {

        alert('✅ Dados Enviados! Em breve, você receberá a proposta no seu e-mail.');
    }



});