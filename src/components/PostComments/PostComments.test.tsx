import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from "../PostComments";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
});

describe("Componente Post", () => {
  test("deve adicionar dois comentários corretamente", () => {
    render(<Post />);

    const input = screen.getByTestId("comment-input");
    const button = screen.getByTestId("comment-button");
    const list = screen.getByTestId("comments-list");

    // Primeiro comentário
    fireEvent.change(input, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);

    // Segundo comentário
    fireEvent.change(input, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);

    const comments = screen.getAllByTestId("comment-item");
    expect(comments).toHaveLength(2);

    expect(list).toHaveTextContent("Primeiro comentário");
    expect(list).toHaveTextContent("Segundo comentário");
  });
});
