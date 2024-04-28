let logInButton = document.querySelector('.js-login-button');
let footerPart = document.querySelectorAll('.footer-part');

function createLogInPopUP()
{
    let loginsectionContainer = document.createElement('div');
    loginsectionContainer.className = 'login-section-container';

    let loginSection = document.createElement('div');
    loginSection.className = 'login-section';
    loginSection.innerHTML = `
    <div class="login-section-container">
        <div class="login-section">
            <button class="close-button">X</button>
            <p class="brand-name"><span class="yellow-part">Good</span>Food</p>
            <p class="login-text">SIGN IN</p>
            <p class="login-qst">Do you have an account ?</p>
            <form method="post">
                <input type="text" placeholder="User name" class="input-user" required>
                <input type="password" placeholder="User password" class="input-user" required>
                <button type="submit" class="submit-button">Submit</button>
            </form>
            <div class="account-options">
                <p class="option">Forgot your password ?</p>
                <p class="option">creat an account</p>
            </div>
            <div class="login-options-container">
                <p class="login-option-qst">Or you can sign in with</p>
                <div class="login-options">
                    <button class="login-option">Google</button>
                    <button class="login-option">Facebook</button>
                    <button class="login-option">Twitter</button>
                </div>
            </div>
        </div>
    </div>
    `;   
    
    document.body.appendChild(loginsectionContainer);
    loginsectionContainer.appendChild(loginSection);


    let doneButton = document.querySelector('.close-button');
    doneButton.addEventListener('click', () => {loginsectionContainer.remove()});
}


//---------------------------------------------------------------------------------
function createNoPagePopUp(msg)
{
    let container = document.createElement('div');
    container.className = 'no-page-container';
    container.innerHTML = 
    `
    <div class="no-page">
        <button class="close-no-page">X</button>
        <p class="no-page-txt">${msg}</p>
    </div>
    `
    document.body.appendChild(container);

    let doneButton = document.querySelector('.close-no-page');
    doneButton.addEventListener('click', () => {
        container.remove();
    });
}

//eventListeners---------------------:
logInButton.addEventListener('click', () => {createLogInPopUP()});

footerPart.forEach((part) => {
    part.addEventListener('click', () => {createNoPagePopUp("this page doesn't exist")})
});
