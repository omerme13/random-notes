import { useEffect, useState } from 'react';

const useFadeStyle = ({delay, duration}) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const temp = setTimeout(() => {
            setOpacity(1);
        }, delay)

        return () => clearTimeout(temp);
    }, [delay]);

    return {opacity, transition: `${duration}s`};
}

export default useFadeStyle;