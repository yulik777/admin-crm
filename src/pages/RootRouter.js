import App from "../App";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Page404 from './Page404';
import { useState } from "react";


const RootRouter = () => {

const [user,setUser] = useState(null);

return(
    <Routes>
    <Route path="/" element={<App />}> 
    {/*если юзер существует (не равно null- то мы увидим авторизованую страницу : увидим страницу логина)  */} 
    {user? 
    (<Route path="" element={<h1> I'm autorized</h1>}/>
    ) : (
    <Route path="" element={<Login  onAuth={setUser}/>}/>
    )}
    <Route path="*" element={<Page404 />}/> 
    </Route>
  </Routes>
)


}



export default RootRouter;
