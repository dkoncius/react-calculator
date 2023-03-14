import { useState, useRef, useEffect } from 'react'

export default function Calculator() {
  const [currentText, setCurrentText] = useState('')
  const [previous, setPrevious] = useState(null)
  const [current, setCurrent] = useState(null)
  const [operand, setOperand] = useState(undefined)

  const handleClick = (event) => {
    setCurrentText(currentText + event.target.innerText)

    // let number = parseFloat(currentText)
    // setCurrent(number)
  }

  const handleOperation = (event) => {
    if(current === '') return
    const operation = event.target.innerText
    setOperand(operation)
    let computation
    switch(operand === undefined ? operation : operand){
        case "+": computation = previous + current
        break
        case "-": computation = previous - current
        break
        case "*": computation = previous * current
        break
        case "÷": computation = previous / current
        break
        default: return
    }

    if(previous === null) {
      setPrevious(current)
    } else {
      setPrevious(computation)
    }

    setCurrentText('')
    setCurrent(null)
  }

  const handleEqual = () => {
    let computation
    switch(operand){
        case "+": computation = previous + current
        break
        case "-": computation = previous - current
        break
        case "*": computation = previous * current
        break
        case "÷": computation = previous / current
        break
        default: return
    }
    if(current === '') return
    setCurrent(computation)
    setCurrentText(computation + '')
    setPrevious(null)
    setOperand(undefined)
  }


  const handleDelete = () => {
    setCurrentText('')
    setPrevious(null)
    setCurrent(null)
    setOperand(undefined)
  }

  const handleDeleteLast = () => {
      setCurrentText(currentText.slice(0, -1))
  }

  const handleDot = () => {
    if(currentText != "." && !currentText.includes(".")) setCurrentText(current + ".")
  }

  useEffect(() => {
    if(currentText === "") return setCurrent(currentText)
    if(currentText === "." || currentText === ".0"  || currentText === ".00") return setCurrent(currentText)
    let number = parseFloat(currentText)
    setCurrent(number)
  }, [currentText])

  return (
    <>
    
     <div className="calculator">
        <div className="output">
            <div data-previous-operand className="previous-operand">{previous} {operand}</div>
            <div data-current-operand className="current-operand">{current}</div>
        </div>
        <button onClick={handleDeleteLast}className="span-two">AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={handleOperation}>÷</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleOperation}>*</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleOperation}>+</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleOperation}>-</button>
        <button onClick={handleDot}>.</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleEqual}className="span-two">=</button>
    </div>
    </>
  )
}
