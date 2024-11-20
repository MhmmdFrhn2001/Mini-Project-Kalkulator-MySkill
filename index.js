const displayAllClear = document.querySelector(".all-clear")
const displayLastClear = document.querySelector(".all-last-clear")
const displayHistory = document.querySelector(".display-history")
const Input = document.querySelector(".display-input")
const operations = document.querySelectorAll(".operation")
const numbers = document.querySelectorAll(".number")
const equal = document.querySelector(".equal")
const displayResult = document.querySelector(".display-result")


let dis1Number = "";
let dis2Number = "";
let result = null;
let lastOperation = "";
let haveDot = false;


numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            console.log(e.target.innerText)
            haveDot = true
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Number += e.target.innerText
        Input.innerText = dis2Number; 
    })
})

operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if(!dis2Number) return;
            haveDot = false
            const operationName =  e.target.innerText;
        if (dis1Number && dis2Number && lastOperation) {
            mathOperation()
        } else {
            result = parseFloat(dis2Number);
        }
        clearVar(operationName)
        lastOperation = operationName;
        
    })
})

function clearVar(name = "") {
    dis1Number += dis2Number + " " + name + " ";
    displayHistory.innerText = dis1Number;
    Input.innerText = ""
    dis2Number = ""
    displayResult.innerText = result
}

function mathOperation() {
    if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(dis2Number)
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Number)        
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Number)        
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Number)        
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Number)        
    };
}

equal.addEventListener("click", () => {
    if(!dis1Number || !dis2Number) return
        haveDot = false
        mathOperation()
        clearVar()
        Input.innerText = result
        displayResult.innerText = ""
        dis2Number = result
        dis1Number = ""
})

displayAllClear.addEventListener("click", () => {
    // if(dis1Number || dis2Number) return
    dis1Number = ""
    dis2Number = ""
    haveDot = false
    displayHistory.innerText = ""
    Input.innerText = ""
    result = ""
    lastOperation = ""
})

displayLastClear.addEventListener("click", () => {
    // dis1Number = ""
    dis2Number = ""
    Input.innerText = ""
    // result = ""
    // lastOperation = ""
    // haveDot = false
})

window.addEventListener("keydown", (e) => {
    console.log(e.key);
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" || 
        e.key === "8" ||
        e.key === "9" 
    ) {
        clickButton(e.key)
    }else if(e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%" || e.key === "" ) {
        operations(e.key)
    }else if (e.key === "*") {
        operations("X")
    }else if (e.key === "Enter" || e.key === "=") {
        equal.click()
    }else if (e.key === "Backspace") {
        displayLastClear.click()
    }
})

function clickButton(key) {
    numbers.forEach((button) => {
        if (button.innerText === key) {
            button.click()
        }
    })
}

function ClickOperations(key) {
    operations.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click()
        }    
    })
    
}