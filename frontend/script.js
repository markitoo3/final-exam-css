const header = `
    <header class="header">
        <h1>New York Times Best Sellers</h1>
        <button class="material-icons">menu</button>
    </header>
`

const cards = ``


window.addEventListener("load", () => {
    let rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("afterbegin", header)
})