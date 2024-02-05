import { createContext } from "react";

const dataContext = createContext({
    mail:"name@examle.com",
    text: "some text"
});

export default dataContext;