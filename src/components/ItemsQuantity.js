import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import DataContext from '../Context/DataContext'
import api from './api';
import { Bar, Line } from 'react-chartjs-2';
import { Dropdown, Button } from "react-bootstrap";
import { elements } from 'chart.js';

const ItemsQuantity = () => {
    const {
        verifyToken,
    errorMessage,
    authError,
    } = useContext(DataContext);

    const [cheeseData,setCheeseData] = useState([]);
    const [crustData,setCrustData] = useState([]);
    const [sausageData,setSausageData] = useState([]);
    const [veggiesData,setVeggiesData] = useState([]);
    const [meatsData,setMeatsData] = useState([]);

const [value,setValue] = useState(0);
const [refresh,setReresh] = useState(false);

    useEffect(()=>{
      verifyToken();

      const getItems = async () =>{
        const response = await api.get("/items")
         setCrustData(response?.data.crust)
         setSausageData(response?.data.sausage);
         setCheeseData(response?.data.cheese);
         setVeggiesData(response?.data.veggies);
         setMeatsData(response?.data.meats);
      }
      getItems();
    },[refresh])
    const [item,setItem] = useState("crust")

    const items = ["crust","sausage","cheese","veggies","meat"]

    const findItem = (name) => {
        
     if(name === "crust"){
        return crustData;
    } if(name === "cheese"){
        return cheeseData;
    }
    if(name === "sausage"){
        return sausageData;
    } if(name === "meat"){
        return meatsData;
   } if(name === "veggies"){
    return veggiesData
   }
    }

    const handleItem = (name)=>{
        setItem(name);
        const newOption = findItem(name);
        setSelectedOption(newOption?.[0]?.name)
    }

    const filteredItems = items.filter((name)=> name !== item);
    


    const selectedSet = findItem(item);

     const [selectedOption,setSelectedOption] = useState("Cauliflower Crust" );


   const handleQunatityName = async (name)=>{
    try {
        setSelectedOption(name);
 
    } catch (error) {
        console.log(error);
    }

   }
 
    const filteredOptions = selectedSet?.filter((item)=> item.name !== selectedOption);

    const canChange = Boolean(Number(value));
 
const handleQuantityChange = async (e)=>{
    try {
        e.preventDefault();
        const selectedData = {item:item,name:selectedOption,value:value};
 const response = await api.post("/change_quantity",selectedData);
  setValue(0);
 setReresh(!refresh);
    } catch (error) {
        console.log(error);
    }
}


  return (
    <section>
        <Header/>
        { authError ? (errorMessage()):(
        <main className='quantity'>
            <section className='dropdown-group'>
                <Dropdown
                 onSelect={(eventKey) => handleItem(eventKey)}
                >
                    <Dropdown.Toggle>
                      {item}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {filteredItems.map((name,index)=>
                      (  <Dropdown.Item key={index}
                      eventKey={name}>{name}</Dropdown.Item>))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={(eventKey)=>handleQunatityName(eventKey)}>
                    <Dropdown.Toggle>
                         {selectedOption}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {filteredOptions?.map((item,index)=> 
                        <Dropdown.Item key={index} eventKey={item.name}>
                    {item.name}
                        </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <form >
                    <input type='number'
                    autoFocus
                    value={value}
                    min="-5"
                    max="5"
                    onChange={(e)=>setValue(e.target.value)}
                    />
                    &nbsp; &nbsp;
                    <Button variant={!canChange ? "danger" : "success"} 
                    disabled={!canChange}
                    onClick={handleQuantityChange}
                    >Change</Button>
                </form>
            </section>
           <h4 className='head-item'><b>Items Quantity Manager</b></h4>
           {/* <p style={{color:"#f0ba2e",}}><b>Cheese :</b></p> */}
           <section className='quantity_chart'>
            <Bar data={{
                labels: crustData.map((item)=>item.name),
         datasets:[{label:"All-Crusts",
                     data: crustData.map((item)=>item.quantity),
                     backgroundColor: "rgb(205, 150, 22,0.8)",
                    //  backgroundColor: ["rgba(250,192,19,0.8)",
                    //  "rgba(43,63,229,0.8)",
                      
                    //  "rgba(52, 168, 83,0.8)",
                    //  "rgba(153, 102, 255, 0.6)",
                    //  "rgba(253,135,135,0.8)",
                    //  " #4285f4",],
                      borderRadius: 5,
                    }]
            }}
            options={{

                responsive: true,
                
                plugins: {
                  title: {
                    display: true,
                    text: "All Available Crusts",
                    font: {
                      size: 18,
                      weight: "bold",
                    },
                  },
                },
            }}/>

<Bar data={{
                labels: sausageData.map((item)=>item.name),
         datasets:[{label:"All-Sausages",
                     data:  sausageData.map((item)=>item.quantity),
                     backgroundColor: "rgb(139, 23, 4,0.8)",
                      borderRadius: 5,
                    }]
            }}
            options={{

                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "All Available Sausages",
                    font: {
                      size: 18,
                      weight: "bold",
                    },
                  },
                },
            }}/>

<Bar data={{
                labels: cheeseData.map((item)=>item.name),
         datasets:[{label:"All-Cheese's",
                     data: cheeseData.map((item)=>item.quantity),
                     backgroundColor: "rgb(242, 216, 46,0.8)",
                      borderRadius: 5,
                    }]
            }}
            options={{

                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "All Available Cheese's",
                    font: {
                      size: 18,
                      weight: "bold",
                    },
                  },
                },
            }}/>
        
        <Bar data={{
                labels: veggiesData.map((item)=>item.name),
         datasets:[{label:"All-Veggies",
                     data: veggiesData.map((item)=>item.quantity),
                     backgroundColor: "rgb(52, 168, 83,0.8)",
                      borderRadius: 5,
                    }]
            }}
            options={{

                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "All Available Veggies",
                    font: {
                      size: 18,
                      weight: "bold",
                    },
                  },
                },
            }}/>

<Bar data={{
                labels:  meatsData.map((item)=>item.name),
         datasets:[{label:"All-Meats",
                     data: meatsData.map((item)=>item.quantity),
                     backgroundColor: "rgb(255, 99, 57,0.8)",
                      borderRadius: 5,
                    }]
            }}
            options={{

                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "All Available  Meats",
                    font: {
                      size: 18,
                      weight: "bold",
                    },
                  },
                },
            }}/>
           </section>
        </main>
        )}
    </section>
  )
}

export default ItemsQuantity