import React, { useState } from 'react';
// import App from './App.jax'

const PowerCalculator = () => {
    const [base, setBase] = useState('');
    const [exponent, setExponent] = useState('');
    const [result, setResult] = useState(null);

    const power = (base, exponent) => {
        let result = 1;

        if (exponent === 0) {
            return 1; // Any number to the power of 0 is 1
        } else if (exponent < 0) {
            for (let i = 0; i < Math.abs(exponent); i++) {
                result *= base; // Multiply base for positive exponent
            }
            return 1 / result; // Return the reciprocal for negative exponent
        } else {
            for (let i = 0; i < exponent; i++) {
                result *= base; // Multiply base for positive exponent
            }
        }

        return result; // Return the final result
    };

    const handleCalculate = () => {
        const baseNum = parseFloat(base);
        const expNum = parseInt(exponent, 10);
        setResult(power(baseNum, expNum));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Power Calculator</h1>
            <div>
                <label>
                    Base:
                    <input
                        type="number"
                        value={base}
                        onChange={(e) => setBase(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Exponent:
                    <input
                        type="number"
                        value={exponent}
                        onChange={(e) => setExponent(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && (
                <div>
                    <h2>Result: {result}</h2>
                </div>
            )}
        </div>
    );
};

export default PowerCalculator;
