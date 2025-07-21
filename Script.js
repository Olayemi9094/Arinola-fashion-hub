function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const products = document.getElementsByClassName('product');
  
  for (let i = 0; i < products.length; i++) {
    const productName = products[i].textContent.toLowerCase();
    products[i].style.display = productName.includes(input) ? 'block' : 'none';
  }
}
