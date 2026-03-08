import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result ({ inputData }) {
    const annualData = calculateInvestmentResults(inputData)

    return (
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
            {
                annualData.map(item => {
                    const totalInvestment = (item.annualInvestment * item.year) + inputData.initialInvestment
                    const totalInterest = item.valueEndOfYear - totalInvestment
                    return (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}