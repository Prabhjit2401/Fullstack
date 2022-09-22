import { CloseOutlined } from "@mui/icons-material";
import React, { useEffect ,useState } from "react";
import Appbar from "./Appbar"
// import Card from "./Card"
import Card2 from "./Card2"
import Displaycard from "./Displaycard"

function App(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
        try {
            const response = await fetch(
            `http://localhost:8080/student/getAll`
            );
            if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
            }
            let actualData = await response.json();
            setData(actualData);
            setError(null);
        } catch(err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }  
        }
        getData()
    }, [])
        

    return(
        <div>
            <Appbar />
            <Card2 />
            {console.log(data)}
            {data.map((elem) =>{
                return (<Displaycard
                    key={elem.id}
                    name={elem.name}
                    address={elem.address}
                    id={elem.id}
                />);
            }
            )}
        </div>
    )
}


export default App;

//     fetch("http://localhost:8080/student/getAll",
    //     {
    //         // mode:"no-cors",
    //         method:"GET"
    //     })
    //     .then(res=>res.json)
    //     .then((result)=>{
    //         setData(result)
    //         console.log("heloo");
    //         console.log(result);
    //     }
    // }
    //     )
    // },[])