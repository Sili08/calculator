const dashboard = document.getElementById("dashboard")
dashboard.innerText = 0

let a = 0
let b = 0
let operator = null
let equalPressed = false

Number(a)
Number(b)

function Operator (value) {
    if  (value === "+") return true
    if  (value === "-") return true
    if  (value === "*") return true
    if  (value === "/") return true
    if  (value === "=") return true
    if  (value === "√") return true
    return false
}

function Click (num) {
    if (equalPressed) {
        reset()
    }
    if(num === "ac") {
        reset()
        return;
    }
    
    if (num === "=") {
        equalPressed = true;

        if (operator === "√") {
            dashboard.innerText = Math.sqrt(Number(a))
        }

        if (operator === "+") {
        dashboard.innerText = Number(a) + Number(b)
        return;
        }
        
        if (operator === "-") {
            dashboard.innerText = Number(a) - Number(b)
            return;
        }

        if (operator === "*") {
            dashboard.innerText = Number(a) * Number(b)
            return;
        }

        if (operator === "/") {
            dashboard.innerText = Number(a) / Number(b)
            return;
        }
    }

    if (Operator(num)) {
        operator = num
        return;
    }

    if (operator) {
        b = b + "" + num
    }
    else {
        a = a + "" + num
    }

    dashboard.innerText = operator ? Number(b) : Number(a)
}

function reset() {
    a = 0
    b = 0
    operator = null
    dashboard.innerText = 0
    equalPressed = false
}