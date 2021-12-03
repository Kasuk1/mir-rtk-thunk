import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Counter } from "./Counter";
import { } from "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe('<Counter /> Tests', () => {

    const initialState = {
        value: 0,
        status: 'idle',
        character: {}
    }

    test('should render the initial value of count = 0', () => {

        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        const countValue = screen.getByText("0")
        expect(countValue).toBeInTheDocument();
    });

    test('should add 1 when clicked plus button', () => {

        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        const buttonPlus = screen.getAllByRole("button")[1];
        userEvent.click(buttonPlus);

        const countValue = screen.getByText("1");
        expect(countValue).toBeInTheDocument();
    });

    test('should substract 1 when clicked minus button', () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        // I need to substract 2 times because I want to demonstrate that the text value can be negative.
        // The main problem is that has the value of the last test(increased by 1), so I needed to decrease 2 times.
        const buttonMinus = screen.getByLabelText("Decrement value");
        userEvent.click(buttonMinus);
        userEvent.click(buttonMinus);

        const countValue = screen.getByText("-1");
        expect(countValue).toBeInTheDocument();
    });


})
