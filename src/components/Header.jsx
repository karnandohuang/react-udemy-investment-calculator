import investmentCalculatorLogo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <div id="header">
            <img src={investmentCalculatorLogo} alt="React Investment Calculator" />
            <h1>React Investment Calculator</h1>
        </div>
    )
}