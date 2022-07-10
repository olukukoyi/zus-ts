import React, { useState } from "react";
import { userStore } from "./store";

const Display = () => {
  const store = userStore();
  const [text, setText] = useState<string>("");
  return (
    <div className="flex items-center justify-center mt-20 flex-col ">
      <div className="flex flex-col">
        Items:
        <div>
          {store.itemArray.map((item) => (
            <h1 key={item}>{item}</h1>
          ))}
        </div>{" "}
      </div>
      <div className="space-x-2">
        <input
          placeholder="Add data here. "
          className="border px-10 py-2 border-black "
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            store.setItems(text);
            setText("");
          }}
          className="border-black px-3 py-1 border rounded hover:text-white hover:bg-black transition-all ease-in "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Display;
