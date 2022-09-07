import { Typography } from "@mui/material";
import logo from "../assets/logo.svg"


const Login = () => {
    return (
    <main className='wrapper dark'>
    <form className="login-form">
        <div className="wrapper-logo">
    <img src={logo} alt="Logo"/>
    </div>
    <Typography className="sub-title" variant="subtitle1" component="h2" color=" ">
        Dashbord Kit
    </Typography>
     </form>
    </main>
    );
};

export default Login;