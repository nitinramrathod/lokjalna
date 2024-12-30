import LayoutWrapper from "@/components/dashboard/LayoutWrapper";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { Auth } from "@/utils/Auth";

export default function AdminLayout({ children }) {

    return (
        <>
            <Auth />
            <LayoutWrapper>
                
                <div id="main-content">
                    {children}
                </div>
            </LayoutWrapper>
        </>
    );
}