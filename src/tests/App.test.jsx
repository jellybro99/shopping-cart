import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("App Component", () => {
    vi.mock("../components/Navbar", () => ({
        __esModule: true,
        default: vi.fn(() => <div>Mocked Navbar</div>),
    }));

    it("Cart state is loaded from local memory", () => {
        const mockItem = [{ brand: 1, product: 1, amount: 1 }];
        localStorage.setItem("shoppingCart", JSON.stringify(mockItem));
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const firstProp = Navbar.mock.calls[0][0];
        expect(firstProp.cart).toEqual(mockItem);
    });
});
