"use client";

import Header from "./header";
import Nav from "./nav";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
