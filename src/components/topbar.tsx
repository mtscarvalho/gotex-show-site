import React from "react";

export function Topbar() {
  return (
    <div className="bg-brand-primary text-on-brand py-4">
      <div className="container flex justify-between">
        <p className="text-left">
          Gotex Show 12ª edição <br />
          Evento presencial
        </p>
        <div></div>
        <p className="text-right">
          05 a 07 de agosto de 2025 <br />
          Distrito Anhembi, Expo 2 - São Paulo
        </p>
      </div>
    </div>
  );
}
