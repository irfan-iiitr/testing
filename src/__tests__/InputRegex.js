import { render,screen ,configure} from "@testing-library/react";
import InputRegex from "../InputRegex";

test('regex used',()=>{
    render(<InputRegex/>)
    const inputElement = screen.getByText("hello",{exact:false});
    expect(inputElement).toBeInTheDocument()
})

test('regex used 2',()=>{
    render(<InputRegex/>)
    const inputElement = screen.getByText(/HEllosw?/i);  //i for case sensitive ...w? may have w
    expect(inputElement).toBeInTheDocument()
})