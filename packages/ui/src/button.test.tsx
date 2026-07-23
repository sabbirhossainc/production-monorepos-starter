import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.style.backgroundColor).toMatch(/243,\s*239,\s*0/);
  });

  it("applies secondary variant when specified", () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "#f5f5f5" });
    expect(button).toHaveStyle({ color: "#333" });
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as button element", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.tagName).toBe("BUTTON");
  });
});
