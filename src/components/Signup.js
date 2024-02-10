import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataContext from '../Context/DataContext';
import api from './api';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const {name,setName,email,setEmail,password,setPassword,error,setError,timeout} = useContext(DataContext);

  const canClick = Boolean(name && email && password);


  // const obj = { a: 1,"b": 2,"c": 3,"d": 4,"e": 5}
  // console.log("18",obj["b"])
  // console.log("19",Object.entries(obj).map((item)=>item))
   
  const navigate = useNavigate();

  function validatePassword(password) {
     
    const lengthRegex = /^.{4,6}$/;
  
    // // At least one special character
    // const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
    
    const isValidLength = lengthRegex.test(password);
  
    return isValidLength;
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const user = {
          name,email,password
      }
     const response = await api.post("/signin",user)

localStorage.setItem("token",JSON.stringify(response?.data.token));

localStorage.setItem("name",JSON.stringify(name));

setEmail("");
setPassword("");
setName("");
navigate("/home_about_oil_price");

    } catch (error) {
      console.error(error)
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

            {/* <Nav.Link href="/"
            >SignIn</Nav.Link> */}

            <Nav.Link href="/login"
            className='nav-link'
             >Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
    <main className='input-forms'>
<section >
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Label>Your Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Your Name" 
        autoFocus 
        onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {error ? <span style={{color:'red',margin:"0"}}>{error}</span> : <br/>}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <Form.Text className="text-muted">
          Password Must be 4 letters long upto 6 letters.
        </Form.Text>
      </Form.Group>
      
      
      <Button variant="primary" type="submit"
      disabled={!canClick || !validatePassword(password)}>
        Sign-In
      </Button>

    </Form>
</section>

    </main>
    </>
  )
}

export default Signup