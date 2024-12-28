import LayoutWrapper from "@/components/dashboard/LayoutWrapper";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { Auth } from "@/utils/Auth";
import { getToken } from "@/utils/helper/localStorage";
import { Container } from "react-bootstrap";

export default function AdminLayout({ children }) {

    return (
        <>
            <Auth />
            <LayoutWrapper>
                <Sidebar />
                <div id="main-content">

                    {children}
                </div>
            </LayoutWrapper>
        </>
    );
}