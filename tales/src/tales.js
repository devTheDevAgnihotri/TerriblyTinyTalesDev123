import React, { useState, useEffect } from 'react';
// import './App.css';

function Tales() {

    const [data, setData] = useState('');
    const [show, setShow] = useState(false);
    const [resu, setResu] = useState({})
    var [arr, setArr] = useState({});


    const showval = (e) => {

        fetch(`/talesApi/${data}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        })

            .then(res => res.json())

            .then((result) => {
                setResu(result)
            }).catch((err) => {
                console.log(err)
            })



    }

    const showlist = () => {
        return (
            <div className=" d-flex justify-content-center">
                <table className="table" style={{ width:"80%"}}>
                <thead className="bg-dark text-white" >
                    <tr>
                            <th scope="col">Words</th>
                            <th scope="col">Frequency</th>
                        </tr></thead>
                <tbody>

                {Object.keys(resu).map(function (key) {
                    return (
                                <tr>
                                <td k={Math.random()} style={{width:"300px"}}>
                                <div k={Math.random()} className="bg-secondary text-white font-weight-bold p-4" style={{fontSize:"18px"}}>{key}</div>
                                </td>

                                     <td k={Math.random()} style={{width:"300px"}}>
                                        <div k={Math.random()}  key={key} value={key} className="bg-warning font-weight-bold p-4" style={{fontSize:"18px"}} > {resu[key]}</div>
                                    </td>
                                </tr>
                            
                 
                            )
                        
           }
           
           )}
           </tbody>
                        </table>
       
            </div>
                    );
                }



    return(
        <div className="App">
                    <div  className="d-flex justify-content-center px-5 mt-5" >

                        <input className="form-control w-75 "type="text" placeholder="Your Number" value={data} onChange={(e) => setData(e.target.value)} />
                        <button className="btn btn-primary mx-2" onClick={() => { showval(); showlist() }} >Go</button>
                    </div>
                    <div className="mt-3 text-center" >
                        <h3 className="my-5 text-secondary px-5" >
                            The fetched list of {data} most frequent Words is Below
        </h3>
                    
        
                        {
                            showlist()
                        }
                    </div>









                </div>
                );
            }
            
            export default  Tales;
