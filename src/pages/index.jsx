import Home from "./Home";
import TheGroup from "./TheGroup";
import OurWork from "./OurWork";
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
        path: "/our-work",
        text: "Our Work",
        component: <OurWork />
    },
    {
        path: "/contact-us",
        text: "Contact Us",
        component: <ContactUs />
    }
];

export default views;