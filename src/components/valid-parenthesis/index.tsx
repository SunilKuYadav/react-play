// The input box should accept only the characters (, ), [, ], {, } and if the user tries to enter any character apart from these, an error message should be displayed.

// () // it's valid bracket
// ()[]{} // it's valid bracket
// (] // it's not a valid bracket
// ([)] // it's not a valid bracket
// {[]} // it's valid bracket

import { useState } from "react";

import "./style.css";

const PATTERN = "()[]{}";

const ValidParenthesis = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isValidPattern, setIsvalidPattern] = useState(false);

  const handleUpdateText = (val: string) => {
    // check if test is valid
    const isValidTest = [...val]
      .filter((text) => !PATTERN.includes(text))
      .join("");
    if (isValidTest.length > 0) {
      setError("Not a valid character");
    } else {
      setText(val);
      setError("");
    }
  };

  const checkPattern = () => {
    if (text) {
      const stack = [];

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const lastCharInStack = stack[stack.length - 1];
        if (
          (char === ")" && lastCharInStack === "(") ||
          (char === "]" && lastCharInStack === "[") ||
          (char === "}" && lastCharInStack === "{")
        ) {
          stack.pop();
        } else {
          stack.push(char);
        }
      }

      if (stack.length > 0) {
        // it's not  a valid
        setIsvalidPattern(false);
      } else {
        // valid
        setIsvalidPattern(true);
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input-field-wrapper">
          <input
            value={text}
            type="text"
            onChange={(e) => handleUpdateText(e.target.value)}
          />
          <p className="error">{error ? error : ""}</p>
        </div>
        <button className="btn" onClick={checkPattern}>
          Validate
        </button>
      </div>
      <p>
        {isValidPattern ? "it's valid bracket" : "it's not a valid bracket"}
      </p>
    </div>
  );
};

export { ValidParenthesis };
