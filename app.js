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