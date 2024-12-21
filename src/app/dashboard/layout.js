import { Auth } from "@/utils/Auth";
import { getToken } from "@/utils/helper/localStorage";
import { Container } from "react-bootstrap";

export default function AdminLayout({ children }) {

    return (
        <>
            <Auth></Auth>
            <Container>
                <h2 className="mb-4">Dashboard</h2>
            </Container>
            {children}
        </>
    );
}