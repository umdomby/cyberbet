import { useEffect, useState } from "react";

export default function App() {
    const [items, setItems] = useState({ names: [] });

    const update = (categoryName, element) =>
        setItems((oldItems) => ({
            ...oldItems,
            [categoryName]: [...(oldItems[categoryName] || []), element]
        }));

    // example to call `update`
    useEffect(() => {
        update("test", "blub");
    }, []);

    return (
        <div className="App">
            {items.test?.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
}
