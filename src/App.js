import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ButtonDefault from "./components/ButtonDefault";
import Inside from "./components/Inside";
import Outside from "./components/Outside";

function App() {
  const [isISD, setIsISD] = useState(true);

  const selectLocation = () => {
    setIsISD(!isISD);
  };

  return (
    <div className="container">
      <ToastContainer
        limit={3}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <div className="text-center py-10">
        <h1 className="text-6xl font-thin">Express ‌courier</h1>
      </div>
      <div className="text-center">
        <h1>Select destination:</h1>
        <div className="flex justify-center pt-6">
          <div className="pr-8">
            <ButtonDefault title={"ISD"} fn={selectLocation} exClass={isISD} />
          </div>
          <div>
            <ButtonDefault title={"OSD"} fn={selectLocation} exClass={!isISD} />
          </div>
        </div>
      </div>
      <div className="pt-10">{isISD ? <Inside /> : <Outside />}</div>
      <div className="text-center mt-[15rem]">
        <p>ruhul amin hira</p>
      </div>
    </div>
  );
}

export default App;
