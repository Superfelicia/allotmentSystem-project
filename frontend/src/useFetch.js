import {useEffect, useState} from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFetch = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setData(data);
        }
        getFetch()
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [url])
    return {data, loading, error};
}
export default useFetch;