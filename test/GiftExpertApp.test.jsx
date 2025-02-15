import { render, screen, fireEvent } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  const newCategory = "Deku";
  test("Agregar nuevas categorias ", () => {
    render(<GiftExpertApp />);
    // Obtenemos campos
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); //agrega Deku

    fireEvent.input(input, { target: { value: newCategory + "2" } });
    fireEvent.submit(form); //agrega Deku2

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });
  test("Should not add a repeated category ", () => {
    render(<GiftExpertApp />);
    //disparo los eventos para agregar una categoría
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); //agrega Deku

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); //intento agregar Saitama nuevamente

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
  });
});
