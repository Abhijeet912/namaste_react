import { render,screen } from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Header Component is rendering with button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton=screen.getByText("login");
    expect(loginButton).toBeInTheDocument();
});

