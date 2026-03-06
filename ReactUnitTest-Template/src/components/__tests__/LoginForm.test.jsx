import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "../LoginForm"
import userEvent from "@testing-library/user-event";
describe("Login form componant test", () => {
    test('should render email and password and submit inputs', () => {
        render(<LoginForm />)
        expect(screen.getByTestId("email-input")).toBeInTheDocument()
        expect(screen.getByTestId("password-input")).toBeInTheDocument()
        expect(screen.getByTestId("submit-button")).toBeInTheDocument()

    })

    test('should show validation error for invalid email', async () => {
        render(<LoginForm />)
        const emailInput = screen.getByTestId("email-input")
        //instant, one event
        // fireEvent.change(emailInput, { target: { value: "test@gmail.com" } })


        await userEvent.type(emailInput, "invalid mail")
        fireEvent.blur(emailInput)

        await waitFor(() => {
            expect(screen.getByTestId("email-error")).toHaveTextContent("Please enter a valid email")
        })
    })

    test('should show message for strength of password', async () => {
        render(<LoginForm />)
        const emailInput = screen.getByTestId("password-input")
        //instant, one event
        // fireEvent.change(emailInput, { target: { value: "test@gmail.com" } })


        await userEvent.type(emailInput, "inv")
        fireEvent.blur(emailInput)

        await waitFor(() => {
            expect(screen.getByTestId("password-error")).toHaveTextContent("at least 8 characters")
        })
    })

    test('should submit form with valid data', async () => {
        const mockSubmit = jest.fn().mockResolvedValue()
        render(<LoginForm onSubmit={mockSubmit} />)

        await userEvent.type(screen.getByTestId("email-input"), "test@example.com")
        await userEvent.type(screen.getByTestId("password-input"), "password@123")

        await userEvent.click(screen.getByTestId("submit-button"))

        await waitFor(() => {
            expect(mockSubmit).toHaveBeenCalledWith({
                email: "test@example.com",
                password: "password@123",
                rememberMe: false,
            })
        })

    })

})