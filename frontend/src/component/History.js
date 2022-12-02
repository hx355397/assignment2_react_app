import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log("History Request")
        console.log(json)
    }
    useEffect(() => {fetchData()},[url]);

    return data;
};
function History() {
    const historyArray = useFetch("http://localhost/api/users/");
    const renderPerson = (person, index) => {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{person.name}</td>
                <td>{person.biography}</td>
            </tr>
        )
    }
    if(historyArray){
        return (
            <div>
                <div style={{marginTop:"5rem",fontSize:"3rem"}}> List of History UserName & Bios </div>
                <Table striped bordered hover >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Biography</th>
                    </tr>
                    </thead>
                    <tbody>
                    {historyArray.map(renderPerson)}
                    </tbody>
                </Table>
            </div>
        );
    }else{
        return (
            <div>
                <div style={{marginTop:"5rem",fontSize:"3rem"}}> List of History UserName & Bios </div>
                <Table striped bordered hover >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Biography</th>
                    </tr>
                    </thead>
                </Table>
            </div>
        );
    }

}

export default History;