import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4 shadow-md">
      <div className="container mx-auto text-center text-white font-bold">
        Projeto desenvolvido por:{" "}
        <a href="https://angeloreis.github.io/site">Angelo Reis</a> /{" "}
        <a href="https://linkedin.com/in/angelodosreis">Linkedin</a> /{" "}
        <a href="https://github.com/angeloreis">GitHub</a>
        <div className="mt-2">
          <img
            className="inline p-4"
            src="./logo_semana_fsm.png"
            alt="Semana FullStack Master"
          />
          <img
            className="inline p-4"
            src="./logo_devpleno.png"
            alt="Curso FullStack Master da DevPleno"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
