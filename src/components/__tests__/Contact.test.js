import { render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () =>{

    beforeAll(() =>{
        console.log("Before All");
    });

    beforeEach(() =>{
        console.log("Before Each");
    });

    afterAll(() =>{
        console.log("After All");
    });

    afterEach(() =>{
        console.log("After Each");
    });

    test("should load contact us component", () =>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    
    test("should load button inside Contact component", () =>{
    
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    test("should load input name inside Contact component", () =>{
    
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    test("should load 2 input boxes on the Contact component", () =>{
      render(<Contact/>);
    
      //Querying
      const inputBoxes = screen.getAllByRole("textbox");
    
      console.log(inputBoxes.length);
    
      expect(inputBoxes.length).toBe(2);
    });
});
