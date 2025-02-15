import { renderHook, waitFor } from "@testing-library/react";
import useFetchGift from "../../src/hooks/useFetchGift";

describe("testing component from useFetchGift", () => {
  test("debe de regresar el estado inicial ", () => {
    const { result } = renderHook(() => useFetchGift("Deku"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  test("debe de retornar un arreglo y imagenes en hooks  ", async () => {
    const { result } = renderHook(() => useFetchGift("Deku"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
