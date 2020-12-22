function sortingByName() {
  let items = document.querySelectorAll('.BestBurgers');

  Array.from(items).sort(function(a, b) {
    a = a.querySelector('h3').innerText.toLowerCase()
    b = b.querySelector('h3').innerText.toLowerCase()
    return (a > b) - (a < b)
  }).forEach(function(n, i) {
    n.style.order = i
  })

}
