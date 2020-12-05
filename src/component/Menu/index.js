import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="text-center">
      <Link href="/">
        <a className="px-2 hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="px-2 hover:underline">Sobre</a>
      </Link>
      <Link href="/survey">
        <a className="px-2 hover:underline">Pesquisar</a>
      </Link>
      <Link href="/contact">
        <a className="px-2 hover:underline">Contato</a>
      </Link>
    </div>
  );
};

export default Menu;
