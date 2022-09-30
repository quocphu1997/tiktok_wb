import { useEffect, useState } from 'react';

export const useAsync = ({ dependencies = [], service, condition = true }) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        if (condition) {
            fetchData();
        }
    }, [dependencies]);

    const fetchData = async () => {
        const result = await service();
        setState(result);
    };
    return {
        state,
    };
};
