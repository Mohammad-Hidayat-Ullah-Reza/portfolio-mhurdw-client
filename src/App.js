import "./App.css";
import { routes } from "./routes/Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";

const buttonContext = createContext();

function App() {
  const [buttonId, setButtonId] = useState(null);

  const info = {
    buttonId,
    setButtonId,
  };
  return (
    <div className="App">
      <buttonContext.Provider value={info}>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster />
      </buttonContext.Provider>
    </div>
  );
}

export default App;
