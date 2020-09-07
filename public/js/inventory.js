$(function () {
    $(window).on("load", function () {
        var inventory = document.querySelector("#inventory-list"),
            sale = document.querySelector("#sale-list"),
            stat = document.querySelector("#stats")


        Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.animation = `animation1 1s ${entry.target.dataset.delay} both ease-out`
                }
            })
        })

        Observer.observe(inventory)
        Observer.observe(sale)
        Observer.observe(stat)
    })
})