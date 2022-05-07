import { useEffect, useState } from "react";

const useGetApi = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allEquipments')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [equipments])
    return [equipments, setEquipments]
}

export default useGetApi;