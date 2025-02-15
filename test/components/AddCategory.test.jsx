import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategoryApp } from "../../src/components/AddCategory";

describe("testing in component AddCategory", () => {
  const name = "deku";
  const onNewCategory = jest.fn();

  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategoryApp onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: name } });
    expect(input.value).toBe(name);
  });

  test("debe de llamar onNewCategory si el input tiene valor  ", () => {
    render(<AddCategoryApp onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { name } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
  });

  test("No debe de llamar el onNewCategory si el input esta vacio ", () => {
    render(
      <AddCategoryApp
        onNewCategory={() => {
          const form = screen.getByRole("form");

          fireEvent.submit(form);
          
          expect(onNewCategory).toHaveBeenCalledTimes(1)
        }}
      />
    );
  });
});
