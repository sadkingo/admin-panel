import React, { useState, useEffect } from "react";

const ChangingProgressProvider = ({ interval = 1000, values, children }) => {
    const [valuesIndex, setValuesIndex] = useState(0);

    useEffect(() => {
        const valueLoop = setInterval(() => {
            setValuesIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % values.length;
                if (nextIndex === values.length - 1) clearInterval(valueLoop);
                return nextIndex;
            });
        }, interval);

        return () => clearInterval(valueLoop);
    }, [interval, values.length]);

    return children(values[valuesIndex]);
};

export default ChangingProgressProvider;
