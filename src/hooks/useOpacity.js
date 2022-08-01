import React, { useEffect, useState } from 'react';

const useOpacity = delay => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const temp = setTimeout(() => {
            setOpacity(1);
        }, delay)

        return () => clearTimeout(temp);
    }, [delay]);

    return opacity;
}

export default useOpacity;