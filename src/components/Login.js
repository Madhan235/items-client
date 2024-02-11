import React, { useContext, useEffect } from 'react'
import DataContext from '../Context/DataContext'
import { Container, Nav,Navbar,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import api from './api';

const Login = () => {
  useEffect(() => {
    localStorage.removeItem("name");
  },[])
  const {email,setEmail,password,setPassword,error,setError, name,setName, isLoading,timeout} = useContext(DataContext);

  const navigate = useNavigate();

    const canClick = Boolean(email && password);
  
  

  function validatePassword(password) {
     
    const lengthRegex = /^.{4,6}$/;

    const isValidLength = lengthRegex.test(password);
  
    return isValidLength;
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const user = {
          email,password
      }
      console.log("36", "before response")
      const response = await api.post("/login",user)
       console.log("36", "after response")
      localStorage.setItem("token",JSON.stringify(response?.data.token));

      localStorage.setItem("name",response?.data.name)
      

setEmail("");
setPassword("");
navigate("/home_about_oil_price");

    } catch (error) {
      console.error(error.message)
      if(error.response){
        setError(error.response?.data)
      } else{
        setError(error.message)
      }
      timeout();
    } 
    
  };

  return (
    <>
    
    <header> 
      <Navbar expand="sm" className="bg-body-tertiary"
      >
      <Container>
        <Navbar.Brand  
        >Item-Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"
            className='nav-link'
            >SignIn</Nav.Link>

            {/* <Nav.Link href="/login"
             >Login</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
     <main className='input-forms'>
<section>
<Form onSubmit={handleSubmit}>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email}
        autoFocus
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      
      {error ? <p style={{color:'red',margin:"0"}}>{error}</p> : <br/>}

      <Button variant="primary" type="submit"
      disabled={!canClick || !validatePassword(password)}
      >
        Log-In
      </Button>

      
      <Link to="/forget-password">
      <Button variant="primary" type="submit"
      disabled={email && !password ? false : true}
      style={{marginLeft:"1rem"}}
      >Forget-Password
      </Button>
      </Link>
    </Form>
   
</section>
     </main>
     </>
  )
}

export default Login