function openTab(tabName) {
    // 1. Grab all elements with the class "tab-content" and hide them
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active-content");
    }

    // 2. Grab all the sub-menu buttons and remove the "active" underline style
    const buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // 3. Show the specific tab clicked, and give its button the active underline style
    document.getElementById(tabName).classList.add("active-content");
    event.currentTarget.classList.add("active");
}