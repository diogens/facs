import React from "react";

import { Botao, Contador, LabelRelogio } from "./components";

import "./App.css";

const App = () => {
  const [time, setTime] = React.useState({
    segundos: 0,
    minutos: 0,
    stop: false,
    nameStop: "Stop",
    name: "Relógio",
    parcial: "",
  });

  function zerarCronometro() {
    time.segundos = -1;
    time.minutos = 0;
    time.parcial = "";
  }

  function parcial() {
    let p = time.minutos + ":" + time.segundos + "\n\n";
    time.parcial = time.parcial + p;
  }

  function pararTempo() {
    setTime({
      stop: !time.stop,
    });
    if (time.stop) time.nameStop = "Stop";
    else time.nameStop = "Start";
  }

  function incrementar() {
    console.log("oi");
  }

  React.useEffect(() => {
    const timer = setInterval(() => incrementar(), 1000);
    console.log(timer);
  });

  return (
    <div>
      <Contador minutos={time.minutos} segundos={time.segundos} />
      <LabelRelogio name={time.name} />
      <Botao onClick={() => zerarCronometro()} label={"Zerar"} />
      <Botao onClick={() => pararTempo()} label={time.nameStop} />
      <Botao onClick={() => parcial()} label={"Pacial"} />
      <LabelRelogio name={time.parcial} />
    </div>
  );
};

export default App;
