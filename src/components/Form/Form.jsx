import { useState } from "react";
import { Button } from "../Button";

function getId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function Form({ onClick }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = () => {
    const todoshka = {
      id: getId(),
      text: text,
      checked: false,
    };

    onClick(todoshka);
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 20,
        alignItems: "center",
      }}
    >
      <input
        style={{
          width: 400,
          height: 40,
          boxSizing: "border-box",
          fontSize: "18px",
        }}
        value={text}
        onChange={onChangeInput}
        placeholder="Смело пиши сюда свое дельце..."
      />
      <Button text="Добавить" onClick={onClickAdd} />
    </div>
  );
}
