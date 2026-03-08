import {useState} from "react";
import {calculateInvestmentResults, formatter} from "./util/investment.js";

function App() {
    const [initialInvestment, setInitialInvestment] = useState(15000)
    const [annualInvestment, setAnnualInvestment] = useState(900)
    const [expectedReturn, setExpectedReturn] = useState(5.5)
    const [duration, setDuration] = useState(12)

    const annualData = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    })

  return (
    <>
        <div id="user-input" className="input-group">
            <div>
                <label>INITIAL INVESTMENT</label>
                <input type="number" value={initialInvestment} onChange={e => setInitialInvestment(Number.parseInt(e.target.value))} />
                <br />
                <br />
                <label>EXPECTED RETURN</label>
                <input type="number" value={expectedReturn} step="0.01" onChange={e => setExpectedReturn(Number.parseFloat(e.target.value))} />
            </div>
            <div>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" value={annualInvestment} onChange={e => setAnnualInvestment(Number.parseInt(e.target.value))} />
                <br />
                <br />
                <label>DURATION</label>
                <input type="number" value={duration} onChange={e => setDuration(Number.parseInt(e.target.value))} />
            </div>
        </div>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
            {annualData.map((item, index) => (
                <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(item.valueEndOfYear - ((item.annualInvestment*item.year)+initialInvestment))}</td>
                    <td>{formatter.format((item.annualInvestment*item.year)+initialInvestment)}</td>
                </tr>
            ))}

            </tbody>
        </table>
    </>
  )
}

export default App
