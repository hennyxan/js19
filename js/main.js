const form = document.forms.form1

form.addEventListener('change', function () {
    this.btnSubmit.disabled = this.checkValidity() ? false : true
})

Array.from(form.elements).forEach(inp => {
    if (inp.required && inp.type != 'checkbox') {
        inp.addEventListener('change', () => {
            if (inp.checkValidity()) {
                inp.classList.remove('invalid')
                inp.classList.add('valid')
            } else {
                inp.classList.remove('valid')
                inp.classList.add('invalid')
                inp.reportValidity()
            }
        })
    }
})