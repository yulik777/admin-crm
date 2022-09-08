import { Typography,TextField, Button } from "@mui/material";
import logo from "../assets/logo.svg"
import {useState} from 'react';


const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

console.log('fields', email,password);

    return (
    <main className='wrapper dark'>
    <form className="login-form">
        <div className="wrapper-logo">
    <img src={logo} alt="Logo"/>
    </div>
    <Typography className="sub-title" variant="subtitle1" component="h2" color=" ">
        Dashbord Kit
    </Typography>
    <Typography className="sub-title-2" variant="body" component="p">
          Enter your email and password below
        </Typography>
     
        <TextField 
          margin="dense"
          fullWidth
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          margin="dense"
          fullWidth
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    <Button variant="contained" color="primary" fullWidth
    sx={{marginTop: 2,}}>
        Log In
    </Button>
     </form>
    </main>
    );
};

export default Login;