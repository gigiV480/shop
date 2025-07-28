import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QveHeader from "../layout/QveHeader";
import { Outlet } from "react-router-dom";
import Chat from "../pages/home/chat/Chat";

const WithHeader = () => {
    return (
        <>
            <Header />
            <QveHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Chat />
        </>
    );
};

export default WithHeader;
