function darkmode() {
    value = 0

    function darkMode() {
        if (value == 0) {
            document.body.style.backgroundColor = "black"
            value = 1
        }
        else {
            document.body.style.backgroundColor = "white"
            value = 0
        }
    }
}
