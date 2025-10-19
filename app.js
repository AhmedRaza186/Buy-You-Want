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
  let item = btn.closest('.items');
  let img = item.firstElementChild.src
  let title = item.children[1].innerText
  let description = item.children[2].innerText
  let price = item.children[3].firstElementChild.innerText
  
  let sidebarItem = document.createElement('div')
  sidebarItem.setAttribute('class', 'sidebar-item')
  sidebarItem.innerHTML = `<img src="${img}" alt=""><div class="sidebar-item-txt"><h3>${title}</h3><p>${description}</p></div><div class="sidebar-price-dlt"><p>${price}</p><button onclick="removeFromCart(this)">Remove From Cart</button></div>`
  document.getElementsByClassName('sidebar-main')[0].appendChild(sidebarItem)
 let priceNum = Number(price.replace('$', ''))
  subArr.push(priceNum)
  let subTotal = subArr.reduce(function(total,curr){
    return total + curr
    
  },0)
  subTotal = subTotal.toFixed(2)
  
  subTotal = Number(subTotal)
  let tax = Number( subTotal / 7)
  let total = Number( subTotal + tax)
  
  tax = Math.floor(tax)
  total = total.toFixed(2)
  document.getElementById('subtotal').lastElementChild.innerText = `$${subTotal}`
  document.getElementById('tax').lastElementChild.innerText = `$${tax}`
  document.getElementById('total').lastElementChild.innerText = `$${total}`
  console.log(tax)
  
}

function removeFromCart(btn){
  let item = btn.closest('.sidebar-item')
  item.style.display = 'none'
  let price = item.children[2].firstElementChild.innerText
  let priceNum = Number(price.replace('$', ''))

  let subText = document.getElementById('subtotal').lastElementChild.innerText
  let currentSub = Number(subText.replace('$', ''))

  let newSub = currentSub - priceNum
  newSub = newSub.toFixed(2)
  
  subTotal = Number(newSub)
  let tax = Number( subTotal / 7)
  let total = Number( subTotal + tax)
  
  tax = Math.floor(tax)
  total = total.toFixed(2)
  document.getElementById('subtotal').lastElementChild.innerText = `$${subTotal}`
  document.getElementById('tax').lastElementChild.innerText = `$${tax}`
  document.getElementById('total').lastElementChild.innerText = `$${total}`

}
