export default function InputBox ({ title, value, onChange, type }) {
    const handleOnChange = e => {
        onChange(+e.target.value)
    }

    return (
        <p>
            <label>{title}</label>
            <input type="number" value={value} onChange={handleOnChange} required />
        </p>
    )
}