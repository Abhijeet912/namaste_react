import { render , screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Contact Us Component Header is loading",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Button is loading inside contact",()=>{
    render(<Contact/>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("Should load 3 input boxes in contact",()=>{
    render(<Contact/>);
    const input=screen.getAllByRole("textbox");
    expect(input).toHaveLength(3);
});