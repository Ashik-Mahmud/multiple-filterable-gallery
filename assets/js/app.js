/* 1. select all of elements inside of document  */
const images = document.querySelectorAll(".images-wrapper img");
const searchInput = document.querySelector("#search-image");
const categoryButtons = document.querySelectorAll(".by-category .button");
const typeButtons = document.querySelectorAll(".by-extension .button");
const resetAllBtn = document.getElementById("reset-all-btn");

/* 2. work for search filter  */
searchInput.addEventListener('input', function (event) {
    let searchValue = event.target.value.toLowerCase();
    images.forEach(image => {
        let getSearchTerms = image.getAttribute('data-search');
        if (!getSearchTerms.toLowerCase().includes(searchValue)) {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }
    })
})
/* 2. work for categories buttons */
categoryButtons.forEach(categoryButton => {
    categoryButton.addEventListener('click', function (event) {
        filteredByButton(categoryButton, 'data-cat', categoryButtons);
    })
})
/* 3. work for type buttons  */
typeButtons.forEach(typeBtn => {
    typeBtn.addEventListener('click', function () {
        filteredByButton(typeBtn, 'data-type', typeButtons);
    })
})
// function for all of filter buttons 
function filteredByButton(button, type, buttons) {
    let allType = button.getAttribute(type).toLowerCase();
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    images.forEach(image => {
        let terms = '';
        if (type === 'data-type') {
            terms = image.src.toLowerCase();
        } else {
            terms = image.getAttribute(type);
        }
        if (allType === 'all') {
            image.style.display = 'block';
        } else if (!terms.includes(allType)) {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }

    })
}

/* 4. Reset All Button  */
resetAllBtn.addEventListener('click', function () {
    window.location.reload();
})

/* 5. popup image when user click particular image  */
