function Exponent({ num, exponent }) {
        let result = 1; 
        for (let i = 0; i < exponent; i++) {
          result *= num; 
        }
    const calculation = Array.from({ length: exponent }, () => num).join(" * ");
    return (
    <div className="exponent-counter-container">
        <p className="exponent-label">
        {num} <sup>{exponent}</sup>
        </p>
        <p className="exponent-result">{`${calculation} = `}
        <span className="total">{result}</span> </p>
    </div>
    );
}
export default Exponent;