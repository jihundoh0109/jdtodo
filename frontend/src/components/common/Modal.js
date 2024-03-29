import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="fixed items-center w-full h-screen z-50 bg-slate-500/70 flex justify-center">
          <div className="w-1/3 bg-white p-4 rounded-xl z-30 m-xl:w-1/3 m-lg:w-2/5 m-md:w-1/2 m-sm:w-7/12 m-xs:w-3/5 m-2xs:w-4/5">
            {children}
          </div>
        </div>,
        document.getElementById("overlay")
      )}
    </>
  );
}
