import { useState } from "react";
import "./index.css";
function App() {
  const [color, setColor] = useState("blue"); // Default color

  return (
    <div
      className="w-dvw h-dvh"
      style={{ backgroundColor: color }} // Dynamic Background Color
    >
      {/* Button Container */}
      <div className="fixed  flex right-12  flex-col top-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-lg gap-3">
        {["red", "green", "blue",'pink','crimson','yellow','black'].map((btnColor) => (
          <button
            key={btnColor}
            onClick={() => setColor(btnColor)}
            className="px-4 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{ backgroundColor: btnColor }}
          >
            {btnColor.charAt(0).toUpperCase() + btnColor.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
