import { Outlet } from "react-router-dom";

const WithoutHeader = () => {
    return <>
        <main>
            <Outlet/>
        </main>
    </>
}

export default WithoutHeader