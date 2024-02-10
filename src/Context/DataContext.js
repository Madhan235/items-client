import { createContext, useState } from "react";
import api from "../components/api";
import { NavLink } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const [authError,setAuthError] = useState(false);

    const [btnText,setBtnText] = useState(2019);

    const [dieselData, setDieselData] = useState([]);
    const [petrolData, setPetrolData] = useState([]);
    const [goldData, setGoldData] = useState([]);
    const [iadData, setIadData] = useState([]);
const [attackData, setAttackData] = useState([]);

const [sugarData,setSugarData] = useState([]);
    const timeout = () =>{setTimeout(()=>{
        setError("")
       },2000);
      }
 
      const verifyToken = async () => {
        try {
          const token = JSON.parse(localStorage.getItem("token"));

          const headers = {"token": token}

          const response = await api.post('/authenticate', {}, {headers});

        } catch (error) {
           
          console.error(error);
          setAuthError(true);
        }
      };


      const errorMessage = () => {
     return <section className="error">
               <h4 className="auth-error">Sorry ! Invalid Authorization Register with Mail here <NavLink to="/">Signin</NavLink>
               &nbsp; / &nbsp; 
               <NavLink to="/login">Login</NavLink>
               </h4>     
           </section>
      }
     
    return (
        <DataContext.Provider value={{name,setName,email,setEmail,password,setPassword,error,setError,isLoading,setIsLoading,timeout,verifyToken,errorMessage,authError,btnText,setBtnText,dieselData,setDieselData,petrolData,setPetrolData,goldData,setGoldData,iadData,setIadData,attackData,setAttackData,sugarData,setSugarData}}>

            {children}

        </DataContext.Provider>
    )
}

export default DataContext;