const email = 'achmadzaki@gmail.com'
const password = '12345'

const wrongInputAll = document.querySelectorAll('.form__control')
const messageError = document.querySelectorAll('.message__error')

// text button 
const myButton = document.querySelector('.btn__primary')
const contentButton = document.querySelector('#content-button')
const myIcon = document.querySelector('#my-icon')
contentButton.innerHTML = 'Login'

myButton.addEventListener('click', () => {
    contentButton.innerHTML = ''
    myIcon.classList.add('show__icon')
    
    setTimeout(() => {    
        const inputEmail = document.getElementById('input-email').value
        const inputPassword = document.getElementById('input-password').value
        
        // jika sama dengan semua akan true
        if (inputEmail === email && inputPassword === password) {
            console.log('login berhasil')
            contentButton.innerHTML = 'Success'
            // input
            wrongInputAll.forEach(element => {
                element.classList.remove('wrong__input')
                element.classList.add('success__input')
            })
            // pesan
            messageError.forEach((element) => {
                element.innerHTML = ''
                element.classList.remove('show')
            })
    
        // jika tidak sama dengan semua makan akan true
        } else if (inputEmail !== email && inputPassword !== password) {
            console.log('email salah dan password salah')
            // input
            contentButton.innerHTML = 'Failed'
            wrongInputAll.forEach(element => {
                element.classList.add('wrong__input')
                element.classList.remove('success__input')
            })
            // pesan
            messageError.forEach((element, index) => {
                if (index === 0) {
                    element.innerHTML = 'wrong email !'
                } else {
                    element.innerHTML = 'wrong password !'
                }
                element.classList.add('show')
            })
    
        // email tidak sama dengan dan password benar maka false
        } else if (inputEmail !== email && inputPassword === password) {
            console.log('email salah tapi password benar')
            contentButton.innerHTML = 'Failed'
            // input
            wrongInputAll.forEach((element, index) => {
                if (index === 0) {
                    element.classList.add('wrong__input')
                    element.classList.remove('success__input')
                } else {
                    element.classList.remove('wrong__input')
                    element.classList.add('success__input')
                }
            })
            // pesan
            messageError.forEach((element, index) => {
                if (index === 0) {
                    element.innerHTML = 'wrong email !'
                } else {
                    element.innerHTML = ''
                }
                element.classList.add('show')
            })
    
        // password tidak sama dengan dan email sama dengan maka false
        } else if (inputEmail === email && inputPassword !== password) {
            console.log('email benar tapi password salah')
            contentButton.innerHTML = 'Failed'
            wrongInputAll.forEach((element, index) => {
                if (index === 1) {
                    element.classList.add('wrong__input')
                    element.classList.remove('success__input')
                }
            })
            // input
            wrongInputAll.forEach((element, index) => {
                if (index === 0) {
                    element.classList.remove('wrong__input')
                    element.classList.add('success__input')
                }
            })
            // pesan
            messageError.forEach((element, index) => {
                if (index === 0) {
                    element.innerHTML = ''
                } else {
                    element.innerHTML = 'wrong password !'
                }
                element.classList.add('show')
            })
        }
    myIcon.classList.remove('show__icon')
    }, 2000)
})