import "./App.css";
import React, { useState } from "react";
import "./index.css";

import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  const [main, setMain] = useState(0);
  const [history, setHistory] = useState();

  const handleKeyPress = (e) => {

  }

  const keydownPress = (e) => {

  }

  const numberHandler = (e) => {

  }

  const operationHandler = (e) => {

  }

  const equalHandler = (e) => {

  }

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
            setMain(0); setHistory("");
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

