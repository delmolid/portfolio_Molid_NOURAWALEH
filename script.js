function handleSectionScrollViaArrowIcons() {
    document.querySelectorAll(".arrow-down").forEach(e => {
        e.addEventListener("click", function() {
            var t = this.closest("section");
            if (t) {
                let e = t.nextElementSibling;
                if (window.innerWidth < 576 || window.innerHeight < 600) {
                    for (; e && 0 === e.offsetHeight;)
                        e = e.nextElementSibling;
                    if (!e)
                        return
                }
                e.scrollIntoView({
                    behavior: "smooth"
                })
            }
        })
    })
}
