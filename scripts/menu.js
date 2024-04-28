// the event carousel:-----------------------------------------------------------------------
const carousel = document.querySelector('.events-section');
const items = document.querySelectorAll('.event-container');

let currentIndex = 0;

function showItem(index)
{
    items.forEach((item) => {
        item.style.transform = `translateX(${-100 * index}%)`;
    });
}

function nextSlide()
{
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

showItem(currentIndex);
let intervalID = setInterval(() => {nextSlide()},4000);



//the menu side navigation bar--------------------------------------------------------------------  
let eventSection = document.querySelector('.js-to-event');
let entreeSection = document.querySelector('.js-to-entree');
let mainDishSection = document.querySelector('.js-to-main');
let dessertSection = document.querySelector('.js-to-dessert');


eventSection.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth' })
})

entreeSection.addEventListener('click', () => {
    window.scrollTo({top: 660, behavior: 'smooth' })
})

mainDishSection.addEventListener('click', () => {
    window.scrollTo({top: 2310, behavior: 'smooth' })
})

dessertSection.addEventListener('click', () => {
    window.scrollTo({top: 3860, behavior: 'smooth' })
})





// the menu table ---------------------------------------------------------------------------------------

// the menu table animation:
const showOrdersButton = document.querySelector('.show-orders');
const myTable = document.querySelector('.table');

showOrdersButton.addEventListener('click', () =>{showAndHideTable()})

function showAndHideTable()
{
    if(showOrdersButton.innerText === "Show your table")
    {
        myTable.style.right = '30px';
        showOrdersButton.innerText = 'Hide your table';
    }
    else
    {
        myTable.style.right = "-500px";
        showOrdersButton.innerText = 'Show your table';
    }
}

function showTable()
{
    myTable.style.right = '30px';
    showOrdersButton.innerText = 'Hide your table';
}




// the menu table order list rendering:
const addbuttons = document.querySelectorAll('.add-to-table-button');
const dishNames = document.querySelectorAll('.dish-name');
const orderTable = document.querySelector('.table')
const dishPrice = document.querySelectorAll('.price');
const totalPriceHtml = document.querySelector('.total-price');
const deleteAllButton = document.querySelector('#delete-all')


let orderList = [];
let totalPrice = 0;
const ordersContainer = document.querySelector('.order-list');
renderOrderList();



addbuttons.forEach((button, i) => {
    button.addEventListener('click', () => {addOrder(i)})
})

deleteAllButton.addEventListener('click', () => {deleteAllOrders()})


function renderOrderList()
{
    let orderListHtml = [];
    orderList.forEach( (order, index) =>
    {
        let html = `
        <div class="one-order">
            <li class="order-item">${order.name} </li>
            <button class="delete-order" onclick="deleteOrder(${index})"> X </button>
        </div>\n`

        orderListHtml += html;
        ordersContainer.innerHTML = orderListHtml;
        totalPriceHtml.innerHTML = `${totalPrice}$`;
    });
}

function addOrder(index)
{
    let dishInfos = {name: dishNames[index].innerText, price: dishPrice[index].innerText};
    orderList.push(dishInfos);
    totalPrice += Number(dishInfos.price.slice(0,-1));
    renderOrderList();
    showTable();
}

function deleteOrder(index)
{
    totalPrice -= Number(orderList[index].price.slice(0,-1));
    orderList.splice(index,1);
    if (orderList.length === 0)
    {
        ordersContainer.innerHTML = '';
        totalPriceHtml.innerHTML = '0$';
    }
    renderOrderList();
}


function deleteAllOrders()
{
    orderList.length = 0;
    totalPrice = 0;

    ordersContainer.innerHTML = '';
    totalPriceHtml.innerHTML = '0$';

    renderOrderList();
}



//ordering buttons



//for the ordering in the home page
const bookBut = document.querySelectorAll('.js-book-button');
bookBut.forEach( (button) => {
    button.addEventListener('click', () => {createNoPagePopUp('you need to sing in first')});
})


