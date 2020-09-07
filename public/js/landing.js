var inventoryImage = document.querySelector("#inventory-image"),
    inventoryText = document.querySelector("#inventory-text"),
    saleImage = document.querySelector("#sale-image"),
    saleText = document.querySelector("#sale-text"),
    statImage = document.querySelector("#stat-image"),
    statText = document.querySelector("#stat-text")


inventoryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animation1 1s ${entry.target.dataset.delay} forwards ease-out`
        }
    })
})
inventoryObserver.observe(inventoryText)
// inventoryObserver.observe(inventoryImage)

saleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animation1 1s ${entry.target.dataset.delay} forwards ease-out`
        }
    })
})
saleObserver.observe(saleText)
// saleObserver.observe(saleImage)


statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animation1 1s ${entry.target.dataset.delay} forwards ease-out`
        }
    })
})
statObserver.observe(statText)
// statObserver.observe(statImage)