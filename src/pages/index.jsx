import Home from "./Home";
import TheGroup from "./TheGroup";
import Research from "./Research";
import ContactUs from "./ContactUs";

const views = [
    {
        path: "/",
        text: "Home",
        component: <Home />
    },
    {
        path: "/the-group",
        text: "The Group",
        component: <TheGroup />
    },
    {
        path: "/research",
        text: "Research",
        component: <Research />
    },
    {
        path: "/contact-us",
        text: "Contact Us",
        component: <ContactUs />
    },
    {
        path: "*",
        text: "Page Not Found",
        component: <Home />
    }
];

export default views;