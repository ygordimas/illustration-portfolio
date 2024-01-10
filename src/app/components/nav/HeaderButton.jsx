import React from "react";
import { usePathname } from "next/navigation";
import { LiaHandPointUpSolid } from "react-icons/lia";

function HeaderButton({ label, path }) {
  const pathname = usePathname();

  const linkStyle =
    "relative rounded-full border-2 border-myblue-950 px-4 py-2 font-singoRound text-4xl tracking-normal text-myblue-950";
  const activeLinkStyle = `relative bg-myblue-500 rounded-full border-2 border-myblue-950 px-4 py-2 font-singoRound text-4xl tracking-normal text-myblue-950`;
  return (
    <button className={pathname == path ? activeLinkStyle : linkStyle}>
      {label}
      <div
        className={`${
          pathname == path ? `` : `hidden`
        } absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-[80%] items-center justify-center rounded-full border-2 border-myblue-950 bg-myyellow-500 p-1 text-4xl`}
      >
        <LiaHandPointUpSolid />
      </div>
    </button>
  );
}

export default HeaderButton;
