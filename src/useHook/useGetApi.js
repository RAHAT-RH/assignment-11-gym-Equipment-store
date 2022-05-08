import { useEffect, useState } from "react";

const useGetApi = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-dawn-70645.herokuapp.com/allEquipments')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [equipments])
    return [equipments, setEquipments]
}

export default useGetApi;