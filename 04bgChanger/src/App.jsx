import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//TASK:CREATE COLOR BUTTONS AND YOU CLICK ON THEM AND BACKGROUND COLOR CHANGES 

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Yellow", value: "yellow" },
    { name: "Pink", value: "pink" },
    { name: "Black", value: "black" , className:"text-white" },
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((colorObj) => (
            <button
              key={colorObj.value}
              onClick={() => setColor(colorObj.value)}
              className={`outline-none rounded-3xl px-4 py-2 ${colorObj.value === 'black' ? 'text-white' : ''}`}
              style={{ backgroundColor: colorObj.value }}
            >
              {colorObj.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
