const form = document.querySelector('#form-login')
const cleaner = document.querySelector('#clean')

function cleanform () {
    form.reset()
}

cleaner.addEventListener("click",cleanform)