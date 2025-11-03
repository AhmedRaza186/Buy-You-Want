function openCart() {
  const sidebar = document.getElementById('cart-sidebar')
  sidebar.style.right = '0'
  const overlay = document.getElementById('overlay')
  overlay.style.display = 'block'
}

function closeCart() {
  const sidebar = document.getElementById('cart-sidebar')
  sidebar.style.right = '-100%'
  const overlay = document.getElementById('overlay')
  setTimeout(() => overlay.style.display = 'none', 200)
}

function changeToMen() {
  document.getElementById('women-container').style.display = 'none'
  document.getElementById('men-container').style.display = 'grid'
  document.getElementById('men').style.color = '#212121'
  document.getElementById('women').style.color = '#757575'


}
function changeToWomen() {
  document.getElementById('men-container').style.display = 'none'
  document.getElementById('women-container').style.display = 'grid'
  document.getElementById('women').style.color = '#212121'
  document.getElementById('men').style.color = '#757575'
}


function frontPic(img) {
  const idNum = img.id.replace('dress', '')
  img.src = `./assets/dress${idNum}.png`
}

function backPic(img) {
  const idNum = img.id.replace('dress', '')
  img.src = `./assets/back${idNum}.png`
}

let subArr = []

function addToCart(btn) {
  let item = btn.closest('.items')
  let img = item.firstElementChild.src
  let title = item.children[1].innerText
  let description = item.children[2].innerText
  let price = item.children[3].firstElementChild.innerText

  let sidebarItem = document.createElement('div')
  sidebarItem.setAttribute('class', 'sidebar-item')
  sidebarItem.innerHTML = `
    <img src="${img}" alt="">
    <div class="sidebar-item-txt">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
    <div class="sidebar-price-dlt">
      <p>${price}</p>
      <button onclick="removeFromCart(this)">Remove From Cart</button>
    </div>
  `
  document.querySelector('.sidebar-main').appendChild(sidebarItem)

  let priceNum = Number(price.replace('$', ''))
  subArr.push(priceNum)

  updateTotals()
}

function removeFromCart(btn) {
  let item = btn.closest('.sidebar-item')
  let price = item.children[2].firstElementChild.innerText;
  let priceNum = Number(price.replace('$', ''))
  item.remove()
  let i = subArr.indexOf(priceNum)
  if (i !== -1) {
    subArr.splice(i, 1)
  }

  updateTotals()
}

function updateTotals() {
  let subTotal = subArr.reduce(function(a,b){
  return  a + b
  }, 0)
  subTotal = Number(subTotal.toFixed(2))

  let tax = Math.floor(subTotal / 7)
  let total = Number((subTotal + tax).toFixed(2))

  document.getElementById('subtotal').lastElementChild.innerText = `$${subTotal}`
  document.getElementById('tax').lastElementChild.innerText = `$${tax}`
  document.getElementById('total').lastElementChild.innerText = `$${total}`
}
