import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGift from "../../src/hooks/useFetchGift";
jest.mock("../../src/hooks/useFetchGift");

describe("testing in  component <GifGrid/>", () => {
  const categoryValue = "Deku";
  test("debe de mostar el loading incialmente ", () => {
    useFetchGift.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={categoryValue} />);
    expect(screen.getAllByText(categoryValue));
    expect(screen.getAllByText("Cargando...."));
  });

  test("debe mostrar items cuando carge las imagenes de useFetchGift ", () => {
    render(<GifGrid category={categoryValue} />);
    const gif = [
      {
        id: "ABC",
        title: "Deku",
        url: "Https://localhost//saitma.jpg",
      },
      {
        id: "DFG",
        title: "Goku",
        url: "Https://localhost//Goku.jpg",
      },
    ];
    useFetchGift.mockReturnValue({
      images: [gif],
      isLoading: false,
    });
    expect(screen.getByRole("heading", { level: 3 }).innerHTML).toBe(
      categoryValue
    );
  });
});
