import React from "react";
import { Countdown } from "./countdown";

export function Topbar() {
  return (
    <div className="bg-brand-primary text-on-brand py-4">
      <div className="container flex flex-col items-center justify-between gap-4 lg:flex-row">
        <p className="text-center text-sm lg:text-left">
          Gotex Show 12ª edição <br />
          Evento presencial
        </p>
        <Countdown />
        <p className="text-center text-sm lg:text-right">
          05 a 07 de agosto de 2025 <br />
          Distrito Anhembi, Expo 2 - São Paulo
        </p>
      </div>
    </div>
  );
}
