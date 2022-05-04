function clrscrn() {
    document.getElementById("txt").value = ""
}

function display(num) {
    text = document.getElementById("txt").value
    var newtext = text + num
    document.getElementById("txt").value = newtext
}

function operation(op) {
    if (op == 9) {
        text = document.getElementById("txt").value
        len = text.length - 1
        pro = text.replace(text[len], "")
        document.getElementById("txt").value = pro

    } else if (op == '.') {
        text = document.getElementById("txt").value
        dot = false;
        dt = "."
        if (text.includes(dt)) {
            dot = true
        }
        if (dot == false) {
            document.getElementById("txt").value = text + dt
        }
    } else if (op == 0) {
        text = document.getElementById("txt").value
        num = parseFloat(text)
        rev = num * (-1)
        document.getElementById("txt").value = rev

    } else if (op == 1) {
        clickedOperator = 1
        oldText = document.getElementById("txt").value
        document.getElementById("txt").value = ""

    } else if (op == 2) {
        clickedOperator = 2
        oldText = document.getElementById("txt").value
        document.getElementById("txt").value = ""

    } else if (op == 3) {
        clickedOperator = 3
        oldText = document.getElementById("txt").value
        document.getElementById("txt").value = ""

    } else if (op == 4) {
        clickedOperator = 4
        oldText = document.getElementById("txt").value
        document.getElementById("txt").value = ""

    } else if (op == 5) {
        clickedOperator = 5
        oldText = document.getElementById("txt").value
        document.getElementById("txt").value = ""

    } else if (op == 6) {
        clickedOperator = 6
        oldText = document.getElementById("txt").value
        document.getElementById("txt").value = ""

    } else if (op == 7) {
        clickedOperator = 7
        oldText = document.getElementById("txt").value
        document.getElementById("txt").value = ""

    } else if (op == 8) {
        if (clickedOperator == 1) {
            newText = document.getElementById("txt").value
            numNewText = parseFloat(newText)
            numOldText = parseFloat(oldText)
            pro = (numNewText * numOldText) / 100
            document.getElementById("txt").value = pro

        } else if (clickedOperator == 2) {
            newText = document.getElementById("txt").value
            numNewText = parseFloat(newText)
            numOldText = parseFloat(oldText)
            var pro = Math.pow(numOldText, numNewText)
            document.getElementById("txt").value = pro

        } else if (clickedOperator == 3) {
            newText = document.getElementById("txt").value
            numNewText = parseFloat(newText)
            numOldText = parseFloat(oldText)
            pro = Math.pow(numNewText, 1 / numOldText)
            document.getElementById("txt").value = pro

        } else if (clickedOperator == 4) {
            newText = document.getElementById("txt").value
            numNewText = parseFloat(newText)
            numOldText = parseFloat(oldText)
            pro = numOldText / numNewText
            document.getElementById("txt").value = pro

        } else if (clickedOperator == 5) {
            newText = document.getElementById("txt").value
            numNewText = parseFloat(newText)
            numOldText = parseFloat(oldText)
            pro = numOldText * numNewText
            document.getElementById("txt").value = pro

        } else if (clickedOperator == 6) {
            newText = document.getElementById("txt").value
            numNewText = parseFloat(newText)
            numOldText = parseFloat(oldText)
            pro = numOldText - numNewText
            document.getElementById("txt").value = pro

        } else if (clickedOperator == 7) {
            newText = document.getElementById("txt").value
            numNewText = parseFloat(newText)
            numOldText = parseFloat(oldText)
            pro = numOldText + numNewText
            document.getElementById("txt").value = pro

        }
    }
}