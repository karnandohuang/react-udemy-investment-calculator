import InputBox from "./InputBox.jsx";

export default function InputForm ({ inputData, onInputDataChange }) {
    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <InputBox title={'INITIAL INVESTMENT'} value={inputData.initialInvestment} onChange={val => onInputDataChange('initialInvestment', val)} />
                    <InputBox title={'ANNUAL INVESTMENT'} value={inputData.annualInvestment} onChange={val => onInputDataChange('annualInvestment', val)} />
                </div>
                <div className="input-group">
                    <InputBox title={'EXPECTED RETURN'} value={inputData.expectedReturn} onChange={val => onInputDataChange('expectedReturn', val)} />
                    <InputBox title={'DURATION'} value={inputData.duration} onChange={val => onInputDataChange('duration', val)} />
                </div>
            </div>
        </>
    )
}