import {useEffect, useState} from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFetch = async () => {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setData(data);
        }
        getFetch()
            .catch((err) => {
                console.log('error occurred');
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [url])

    // console.log(data);

    return {data, loading, error};
}
export default useFetch;