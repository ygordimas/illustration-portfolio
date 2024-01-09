import React from "react";

function StripesSVG() {
  return (
    <>
      <div className="absolute left-0 top-0 h-1/2 w-full overflow-hidden">
        <div
          className="h-[500vh] w-[200vw] rotate-45"
          style={{
            backgroundColor: "#022737",

            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='50' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23FFFFFF' x='-50' y='-50' width='100' height='240'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </>
  );
}

export default StripesSVG;
