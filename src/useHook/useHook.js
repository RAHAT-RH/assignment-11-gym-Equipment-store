import React, { useEffect, useState } from 'react';

const useHook = () => {
    const [enroll, setEnroll] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEnroll(data))
    }, [])
    return [enroll];
};

export default useHook;