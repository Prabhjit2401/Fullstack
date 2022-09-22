import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Card2() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }    

    function handleAddressChange(event){
        setAddress(event.target.value);
    }

    function handleClick(event)
    {
        event.preventDefault();
        const student = {name:name,address:address};
        console.log(student);
        fetch("http://localhost:8080/student/add",{
            // mode: "no-cors",     // this was causing some error, with (415 error)
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("new Student added");
        })
        setName("");
        setAddress("");
    }

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        >
            <h1 style={{fontFamily:"sans-serif"}} >Add Student</h1>
        <TextField onChange={handleNameChange} value={name} id="filled-basic" label="Name" variant="filled" />
        <TextField onChange={handleAddressChange} value={address} id="filled-basic" label="Address" variant="filled" />
        <Stack spacing={2} direction="row">
            <Button onClick={handleClick} variant="contained">Add</Button>
        </Stack>
        </Box>
    );
}
