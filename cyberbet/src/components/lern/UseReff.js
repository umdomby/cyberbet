import React from 'react';

function UseReff() {
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
    const timerRef = React.useRef();

    const addNumber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
        //console.log(timerRef.current + "    timerRef.current")
    };

    const start = () => {
        timerRef.current = setInterval(addNumber, 1000);
    };

    const stop = () => {
        //console.log(timerRef.current);
        clearInterval(timerRef.current);
    };

    return (
        <div>
            <ul>
                {numbers.map((n) => (
                    <li key={n}>{n}</li>
                ))}
            </ul>
            <button onClick={addNumber}>✅ Добавить число</button>
            <button onClick={start}>▶️ Старт</button>
            <button onClick={stop}>⏹ Стоп</button>
        </div>
    );
}

export default UseReff;
