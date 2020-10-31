import "./App.css";
import React, { useState } from "react";
import "./index.css";
import "./components.css";
import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  const [main, setMain] = useState(0);
  const [history, setHistory] = useState();

  const handleKeyPress = (e) => {
    if (!isNaN(e.key)) {
      if (main === 0) {
        setMain(e.key);
      } else {
        setMain(`${main}${e.key}`);
      }
    }
  };

  const keydownPress = (e) => {
    if (e.keyCode === 8) {
      if (main !== 0) {
        setMain(main.slice(0, -1) !== "" ? main.slice(0, -1) : 0);
      }
    }
  };

  const numberHandler = (number) => {
    if (!isNaN(number)) {
      if (main === 0) {
        setMain(number);
      } else if (history) {
        if (history.charAt(history.length - 1) === "=") {
          setMain(number);
        }
      } else {
        setMain(`${main}${number}`);
      }
    }
  };

  const operationHandler = (char) => {
    if (char !== ".") {
      if (isNaN(char)) {
        if (main !== 0) {
          setHistory(`${main}${char}`);
          setMain(0);
        } else if (main === 0 && history != 0 && history.slice(0, -1) !== "-") {
          const v = history.slice(0, -1);
          setHistory(`${v}${char}`);
        }
      }
    } else {
      setMain(`${main}${char}`);
    }
  };

  const equalHandler = (e) => {
    if (history && main !== 0) {
      if (
        history.charAt(history.length - 1) !== "=" &&
        history.charAt(history.length - 1) !== "%"
      ) {
        const v1 = history.slice(0, -1);
        const opr = history.charAt(history.length - 1);
        setHistory(`${history}${main}=`);
        const v2 = main;

        switch (opr) {
          case "+":
            setMain(v1 + v2);
            break;
          case "-":
            setMain(v1 - v2);
            break;
          case "*":
            setMain(v1 * v2);
            break;
          case "/":
            setMain(v1 / v2);
            break;
        }
      }
    } else if (history.charAt(history.length - 1) === "%") {
      console.log("here");
      const v1 = history.slice(0, -1);
      setHistory(`${history}=`);
      setMain(v1 / 100);
    }
  };

  return (
    <div className="container">
      <div
        className="textFieldWrapper"
        tabIndex="1"
        onKeyDown={(event) => keydownPress(event)}
        onKeyPress={(event) => handleKeyPress(event)}
      >
        <TextField text={history} className="history" />
        <TextField text={main} className="main" />
      </div>

      <div className="btnWrapper">
        <Button bg="c9c9c9" title="(" />
        <Button bg="c9c9c9" title=")" />
        <Button onClick={() => operationHandler("%")} bg="c9c9c9" title="%" />
        <Button
          onClick={() => {
            setMain(0);
            setHistory("");
          }}
          bg="c9c9c9"
          title="CE"
        />
      </div>

      <div className="btnWrapper">
        <Button onClick={() => numberHandler(7)} title="7" />
        <Button onClick={() => numberHandler(8)} title="8" />
        <Button onClick={() => numberHandler(9)} title="9" />
        <Button onClick={() => operationHandler("/")} bg="c9c9c9" title="/" />
      </div>

      <div className="btnWrapper">
        <Button onClick={() => numberHandler(4)} title="4" />
        <Button onClick={() => numberHandler(5)} title="5" />
        <Button onClick={() => numberHandler(6)} title="6" />
        <Button onClick={() => operationHandler("*")} bg="c9c9c9" title="*" />
      </div>

      <div className="btnWrapper">
        <Button onClick={() => numberHandler(1)} title="1" />
        <Button onClick={() => numberHandler(2)} title="2" />
        <Button onClick={() => numberHandler(3)} title="3" />
        <Button onClick={() => operationHandler("-")} bg="c9c9c9" title="-" />
      </div>

      <div className="btnWrapper">
        <Button onClick={() => numberHandler(0)} title="0" />
        <Button onClick={() => operationHandler(".")} title="." />
        <Button onClick={() => operationHandler("+")} title="+" />
        <Button
          onClick={() => equalHandler()}
          bg="#4285f4"
          bold="bold"
          color="#FFF"
          title="="
        />
      </div>
    </div>
  );
}

export default App;
