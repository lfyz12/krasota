import Main from "./components/Main";
import About from "./pages/about/About";
import Contact from "./pages/contacts/Contact";
import Service from "./pages/services/Service";
import { ABOUT_ROUTE, CONTACT_ROUTE, MAIN_ROUTE, SERVICE_ROUTE } from "./util/consts";

export const routes = [
    {
        path: ABOUT_ROUTE,
        element: <About/>
    },
    {
        path: SERVICE_ROUTE,
        element: <Service/>
    },
    {
        path: CONTACT_ROUTE,
        element: <Contact/>
    },
    {
        path: MAIN_ROUTE,
        element: <Main/>
    }
]