import { render, screen } from "@testing-library/react"
import VideoTitle from "../VideoTitle"
import "@testing-library/jest-dom"

describe("group testing all elements of video Title",()=>{

    test("should check the video title",()=>{
        render(<VideoTitle/>)
        const btn=screen.getByRole("button",{name:"More info"})
        expect(btn).toBeInTheDocument();
    });
    test("should check the video play btn",()=>{
        render(<VideoTitle/>)
        const playbtn=screen.getByText(/Play/);
        expect(playbtn).toBeInTheDocument();
    });

})

