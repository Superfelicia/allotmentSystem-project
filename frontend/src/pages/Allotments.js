import TableComponent from "../components/TableComponent";
import {useState} from "react";
import useFetch from "../useFetch";

const Allotments = () => {
    const [allotment, setAllotment] = useState([]);

    const {data, loading, error} = useFetch('http://localhost:3001/getAllAllotments');

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    console.log(data);

    return (
        <>
            <TableComponent allotments={data}></TableComponent>
        </>
    );
}

export default Allotments;