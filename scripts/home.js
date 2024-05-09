const whoButton = document.querySelector('.to-who-are-we');
const offerButton = document.querySelector('.to-presentation');


whoButton.addEventListener('click', () => {
    window.scrollTo({top: 800 , behavior: 'smooth'})
})

offerButton.addEventListener('click', () => {
    window.scrollTo({top: 1350 , behavior: 'smooth'})
})


// ordering button --------------------

const deleverBut = document.querySelector('#delever-button');
deleverBut.addEventListener('click', () => {
    window.location.href = "menu.html"
})

//for the ordering in the home page

const bookTabe = document.querySelector('#book-table-button');
bookTabe.addEventListener('click', () => {createNoPagePopUp("you need to sing in first")})