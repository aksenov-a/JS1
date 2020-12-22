let filter = function () {

    let input = document.getElementById('search');

    input.addEventListener('keyup', function () {
        let filter = input.value.toLowerCase(),
            filterItems = document.querySelectorAll('.BestBurgers');


        filterItems.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        })

    })

};

filter();
