import { render, screen } from "@testing-library/react"
import Greeting from "../Greeting"
describe("Gretting componant test", () => {
    test('should display provided name', () => {
        render(<Greeting name="Darshan" />)
        expect(screen.getByTestId("greeting-message")).toHaveTextContent("Darshan")
    })

     test('should display default name', () => {
        render(<Greeting />)
        expect(screen.getByTestId("greeting-message")).toHaveTextContent("Guest")
    })
})