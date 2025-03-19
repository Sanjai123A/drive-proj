import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            {/* <h1>Welcome to My Website</h1> */}
            <Outlet /> 
        </div>
    );
}
