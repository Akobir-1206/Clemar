import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Korzinka from "../Components/Korzinka";
import App from "../App";
import Skidka from "../Components/Skidka";
import Skidka2 from "../Components/Skidka2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/korzinka",
        element: <Korzinka/>
    },
    {
        path: "/skidka",
        element: <Skidka/>
    },
    {
        path: "/skidka2",
        element: <Skidka2/>
    },
    
    
    
])
export default router;