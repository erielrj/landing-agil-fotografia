function setErrorClasses(inputNames) {
    const formInputs = document.querySelectorAll('.form-control');

    console.log(inputNames);

    if (inputNames.includes("nome")) {
        formInputs[0].className += " input-error";
        formInputs[0].placeholder = "Digite um nome!";
    } else {
        formInputs[0].className = "form-control";
        formInputs[0].placeholder = "Nome";
    }

    if (inputNames.includes("email")) {
        formInputs[1].className += " input-error";
        formInputs[1].placeholder = "Digite um email!";
    } else {
        formInputs[1].className = "form-control";
        formInputs[1].placeholder = "Email";
    }

    if (inputNames.includes("endereco")) {
        formInputs[2].className += " input-error";
        formInputs[2].placeholder = "Digite um endereco!";
    } else {
        formInputs[2].className = "form-control";
        formInputs[2].placeholder = "Endereço";
    }

    if (inputNames.includes("telefone")) {
        formInputs[3].className += " input-error";
        formInputs[3].placeholder = "Digite um telefone!";
    } else {
        formInputs[3].className = "form-control";
        formInputs[3].placeholder = "Telefone";
    }

    if (inputNames.includes("cep")) {
        formInputs[4].className += " input-error";
        formInputs[4].placeholder = "Digite um CEP!";
    } else {
        formInputs[4].className = "form-control";
        formInputs[4].placeholder = "CEP";
    }
}


function checkErrors(inputsArray) {
    const errors = new Array();

    for (input of inputsArray) {
        if (input.value == "") {
            errors.push(input.name);
        }
    }

    if (errors[0]) {
        setErrorClasses(errors);
    } else {
        return true;
    }

}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

(function(){
    const formInputs = document.querySelectorAll('input.form-control');
    console.log(formInputs);

    for(input of formInputs){
        input.addEventListener("focus", function () {
            this.className = "form-control";
            if(this.name === "cep") {
                this.placeholder = 'CEP';
            } else {
                this.placeholder = capitalize(this.name);
            }
        })
    }

})();

(function () {
    const formButton = document.querySelector('#formButton');
    formButton.addEventListener("click", function () {
        const formInputs = document.querySelectorAll('input.form-control');
        if(checkErrors(formInputs)){
            const nome = formInputs[0].value;
            const email = formInputs[1].value;
            const endereco = formInputs[2].value;
            const telefone = formInputs[3].value;
            const cep = formInputs[4].value;

            window.open('https://api.whatsapp.com/send?phone=5521997170603&text=' + encodeURIComponent(`Oi, encontrei vocês pelo site, gostaria de me matricular. Meu nome é: *${nome}*. Meus dados são email: *${email}*, endereço: *${endereco}*, telefone: *${telefone}*, cep: *${cep}*.`));
        };
    })
}
)();