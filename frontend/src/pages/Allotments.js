import TableComponent from "../components/TableComponent";
import useFetch from "../useFetch";
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";

const Allotments = () => {
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