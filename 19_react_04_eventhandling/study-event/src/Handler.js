import { useState } from "react";

const Handler = () => {
  const [text, setText] = useState("Hello World!");
  const sayBye = () => {
    setText("Goodbye World!");
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={sayBye}>클릭</button>
    </div>
  );
};

export default Handler;
