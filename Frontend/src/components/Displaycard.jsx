import React from "react";

function Displaycard(props){

    function handleClick(event)
    {
        event.preventDefault();
        var id = event.target.id;
        console.log(id);
        var ss="http://localhost:8080/student/"+id;
        console.log(ss);
        fetch(ss,
        {
            method:"DELETE"
        }).then(()=>{
            console.log("student Deleted");
        })
    }

    return(
            <div className="card"> 
                <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.address}</p>
                <p>{props.id}</p>
                <button id={props.id} onClick={handleClick} type="button">Delete</button>
            </div>
            </div>
    );
}

export default Displaycard;