import React from "react";
import Container from "./Container";
import navigation from "./NavBar/navigation";
import SolpakaText from "@/assets/images/solpaka-text.png";
import Image from "next/image";
import NavItem from "./NavItem";
import GlowEffect from "./GlowEffect";

const Footer = () => {
  return (
    <footer className="py-24 bg-neutral text-neutral-content  relative overflow-hidden">
      <Container className="flex justify-center flex-col items-center gap-8">
        <div>
          <Image src={SolpakaText} alt="solpaka logo text" width={200} />
        </div>
        <div>
          <ul className="flex flex-wrap md:flex-row flex-col items-center gap-6">
            {navigation.map((item, index) => {
              return (
                <li key={`nav_footer_${index}`}>
                  <NavItem {...item}>{item.label}</NavItem>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center text-sm">
          <p>Built with love on Solana</p>
          <p>@{new Date().getFullYear()} Solpaka Farm</p>
        </div>
      </Container>
      <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
      <GlowEffect className="bg-orange-500 bottom-[-200px] left-[-200px]" />
    </footer>
  );
};

export default Footer;
