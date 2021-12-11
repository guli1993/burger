const product = {
  plainBurger: {
    name: 'GAMBURGER',
    price: 10000,
    kcall: 250,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount
    },
    get KCALL() {
      return this.kcall * this.amount
    },
  },
  freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    kcall: 350,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount
    },
    get KCALL() {
      return this.kcall * this.amount
    },
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 500,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount
    },
    get KCALL() {
      return this.kcall * this.amount
    },
  },
}

const plusOrMinus = document.querySelectorAll('.main__product-btn')

plusOrMinus.forEach(function (el, i) {
  el.addEventListener('click', function (e) {
    pOm(el)
  })
})

function pOm(element) {
  const attrOfEl = element.getAttribute('data-symbol')
  const parent = element.closest('.main__product')
  const parentId = parent.getAttribute('id')
  const productNum = parent.querySelector('.main__product-num')
  const productPrice = parent.querySelector('.main__product-price span')
  const productKcall = parent.querySelector('.main__product-kcall span')

  if (attrOfEl === '+' && product[parentId].amount < 10) {
    product[parentId].amount++
  } else if (attrOfEl === '-' && product[parentId].amount > 0) {
    product[parentId].amount--
  }

  productNum.innerHTML = product[parentId].amount
  productPrice.innerHTML = product[parentId].SUMMA
  productKcall.innerHTML = product[parentId].KCALL
}
const receipt = document.querySelector('.receipt')
const addCart = document.querySelector('.addCart')
const receiptWindow = document.querySelector('.receipt__window');
const receiptOut = document.querySelector('.receipt__window-out')
const receiptBTN = document.querySelector('.receipt__window-btn')
let itemArr = []
let productName = ''
let productPrice = productKcall = 0

addCart.addEventListener('click', function (e) {
  receipt.style.display = 'flex'
  setTimeout(() => {
    receipt.style.opacity = 1
    receiptWindow.style.top = 0
  }, 300);


  for (const food in product) {
    if (product[food].amount > 0) {
      itemArr.push(product[food])
    }
  }
  itemArr.forEach(function (el, i) {
    productName += `\n${el.name}\n`
    productPrice += el.SUMMA
    productKcall += el.KCALL
  })

  receiptOut.innerHTML = `Purchased: ${productName}\nTotal calories: ${productKcall}\nTotal summa: ${productPrice}sum`

})

receiptBTN.addEventListener('click', function () {
  location.reload()
})

// Загрузка

const yuklash = document.querySelector('.header__timer-extra')
let i = 0
let stop;
let abc = 10

function timer() {
  // if (i === 50) abc = 50
  // else if (i === 70) abc = 100
  // else if (i === 90) abc = 150
  // else if (i === 101) return clearTimeout(stop)
  switch (i) {
    case 50: abc = 50; break;
    case 70: abc = 100; break;
    case 90: abc = 150; break;
    case 101: return clearTimeout(stop);
  }
  yuklash.innerHTML = i
  i++
  stop = setTimeout(() => {
    timer()
  }, abc);
}

timer()

// to Show the picture out of the block
const link = (el) => {
  return document.querySelectorAll(el).length > 1
    ? document.querySelectorAll(el)
    : document.querySelector(el)
}

const picture = link('.main__product-info')
const view = link('.view')
const viewClose = link('.view__close')

picture.forEach((el) => {

  el.ondblclick = (e) => {
    view.classList.add('active')
    let img = el.querySelector('img').getAttribute('src')
    // view.querySelector('img').src = img
    view.querySelector('img').setAttribute('src', img)
    
  }

})

viewClose.addEventListener('click', ()=>{
  view.classList.remove('active')
})
