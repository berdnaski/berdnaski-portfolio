import { Outlet } from "react-router-dom";
import { Header } from "../header/header";

export function Layout() {

    return (
        <div className="flex flex-col min-h-screen">
            {<Header />}
            <main className="items-center justify-center">
                <Outlet />
            </main>
        </div>
    );
}
