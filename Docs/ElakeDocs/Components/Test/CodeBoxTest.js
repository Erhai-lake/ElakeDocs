Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    // #region snippet
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
    // #endregion snippet
}
test()
