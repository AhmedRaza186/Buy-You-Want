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
  img.src = `./dress${idNum}.png`
}

function backPic(img) {
  const idNum = img.id.replace('dress', '')
  img.src = `./back${idNum}.png`
}

function addToCart(btn) {
  // Find the parent item card
  let item = btn.closest('.items');
  

}