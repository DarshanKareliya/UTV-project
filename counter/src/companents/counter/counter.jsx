import { useState } from "react"
import "./counter.css"
import Logs from "../logs/logs"


const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [incVal, setIncVal] = useState(0)
    const [decVal, setDecVal] = useState(0)
    const [logs, setLogs] = useState([])
    const [showLogs, setShowLogs] = useState(false)

    const deleteLog = (id) => {
        setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id))
        // console.log(logs)
    }


    const handleOperation = (event) => {
        if (event.target.id === "value_inc") {
            setIncVal(+event.target.value)
        }
        else if (event.target.id === "value_dec") {
            setDecVal(+event.target.value)
        }
    }

    const handleCounter = (operator) => {
        let newVal = null
        let oldVal = counter
        if (operator === "+") {
            newVal = counter + incVal
            setIncVal(0)
        }
        else if (operator === "-") {
            newVal = counter - decVal
            setDecVal(0)
        }
        setCounter(newVal)
        const newLog = {
            id: Math.random(),
            value: `Previous Value = ${oldVal}, Value ${operator === "+" ? "Added" : "Subtracted"
                } = ${operator === "+" ? incVal : decVal}, New Value = ${newVal}`,
        }
        // console.log(newLog)
        setLogs([...logs, newLog])
    }

    return (
        <div className="main" testid="counter-component">
            <div>
                <h1>COUNTER</h1>
            </div>
            <div>
                <h3 testid="counter-value">value of counter: {counter}</h3>
            </div>
            <div className="buttons">
                <div className="action_section">
                    <form action="">
                        <input type="number"
                            testid="input_inc"
                            value={incVal}
                            placeholder="0"
                            id="value_inc"
                            onChange={(event) => handleOperation(event)} />
                    </form>
                    <button className="button button_inc" onClick={() => handleCounter("+")}
                        testid="btn_inc">Increase</button>
                </div>
                <div className="action_section">
                    <form action="">
                        <input type="number"
                            value={decVal}
                            testid="input_dec"
                            placeholder="0"
                            id="value_dec"
                            onChange={(event) => handleOperation(event)} />
                    </form>
                    <button className="button button_dec" onClick={() => handleCounter("-")}
                        testid="btn-dec">Decrease</button>
                </div>
            </div>
            {logs.length >= 1 && (
                <div className="logs" testid="logs">
                    <button
                        className="button button_info"
                        onClick={() => setShowLogs(!showLogs)}
                        style={{
                            backgroundColor: showLogs ? "black" : "#e7e7e7",
                            color: showLogs ? "#e7e7e7" : "black"
                        }}
                        testid="btn-show-logs">
                        {showLogs ? "Hide" : "Show"} Logs
                    </button>
                    {showLogs && (
                        <div className="logs_container">
                            <Logs logsData={logs} deleteLog={(id) => deleteLog(id)} />
                        </div>)}
                </div>
            )}
        </div>
    )
}

export default Counter