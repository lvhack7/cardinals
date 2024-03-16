const langDropdownBtn = document.getElementById("lang")
langDropdownBtn.addEventListener("click", function() {
    const langDropdown = document.getElementById("lang-dropdown")
    langDropdown.classList.toggle("hidden")
})

function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var body = document.body

    if(mobileMenu.style.width === '0px') {
        mobileMenu.style.width = '100vw'
    } else {
        mobileMenu.style.width = '0px'
    }
}

const services = document.getElementById("services-dropdown")
if (services) {
    var divs = services.querySelectorAll("div")
    divs.forEach(function(div, index) {
        div.addEventListener("click", function() {
            const content = div.querySelector(".content")
            content.classList.toggle("hidden")
            closeServices(index, divs)
        })
    });
}

function closeServices(id, divs) {
    divs.forEach(function(div, i) {
        const content = div.querySelector(".content")
        if (i !== id) {
            content.classList.add("hidden")
        } 
    });
}