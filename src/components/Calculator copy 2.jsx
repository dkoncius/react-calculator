import { useState, useRef, useEffect } from 'react'
import '../styles/Calculator.css'

export default function Calculator() {
  const [currentText, setCurrentText] = useState('')
  const [previous, setPrevious] = useState(null)
  const [current, setCurrent] = useState(null)
  const [operand, setOperand] = useState(undefined)

  const handleClick = (event) => {
    if(event.target.getAttribute('data-number')){
        setCurrentText(currentText + event.target.innerText)
        
        let number = Number(currentText)
        setCurrent(number)
    }

    if(!event.target.getAttribute('data-number')){
        const operation = event.target.innerText
        setOperand(operation)
        let computation
       

        switch(operation){
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
        console.log(computation)
        
        setPrevious(computation)
        setCurrentText('')
        setCurrent(null)
    }
  }

  useEffect(() => {
    if(current === null) return setCurrent('') 
     let number = Number(currentText)
     setCurrent(number)
  }, [currentText])

  return (
    <>
     <div className="calculator">
        <div className="output">
            <div data-previous-operand className="previous-operand">{previous} {operand}</div>
            <div data-current-operand className="current-operand">{current}</div>
        </div>
        <button onClick={handleClick} data-all-clear className="span-two">AC</button>
        <button onClick={handleClick} data-delete>DEL</button>
        <button onClick={handleClick} data-operation>÷</button>
        <button onClick={handleClick} data-number>1</button>
        <button onClick={handleClick} data-number>2</button>
        <button onClick={handleClick} data-number>3</button>
        <button onClick={handleClick} data-operation>*</button>
        <button onClick={handleClick} data-number>4</button>
        <button onClick={handleClick} data-number>5</button>
        <button onClick={handleClick} data-number>6</button>
        <button onClick={handleClick} data-operation>+</button>
        <button onClick={handleClick} data-number>7</button>
        <button onClick={handleClick} data-number>8</button>
        <button onClick={handleClick} data-number>9</button>
        <button onClick={handleClick} data-operation>-</button>
        <button onClick={handleClick} data-number>.</button>
        <button onClick={handleClick} data-number>0</button>
        <button onClick={handleClick} data-equals className="span-two">=</button>
    </div>
    </>
  )
}
