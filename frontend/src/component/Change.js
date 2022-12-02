import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";

function Change() {

    const [name,setName] =useState('');
    const [biography,setBiography]=useState('');
    const data ={
        name:name,
        biography:biography
    }
    // fetch url
    const url ="http://localhost/api/users/"
    // fetch option
    const option={
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({data: data })
    }

    const handInputName=(event)=>{
        setName(event.target.value);
    }
    const handInputBiography=(event)=>{
        setBiography(event.target.value);
    }
    const handSunmitEmail=()=>{
        console.log("submit",name,biography)
        const  re =fetch(url, option)
        const data =re.json()
        console.log(data)
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> here change your name</Form.Label>
                <Form.Control type="text" value={name} onChange={handInputName} placeholder="Enter name" />
                <Form.Text className="text-muted" >
                    admin change your name
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Biography</Form.Label>
                <Form.Control type="text" value={biography} onChange={handInputBiography} placeholder="enter your change Biography" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handSunmitEmail}>
                Submit
            </Button>
        </Form>
    );
}

export default Change;
