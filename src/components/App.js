import React from "react";
import HeaderLeft from "./HeaderLeft";
import RightCont from "./RightCont";

import '../asset/css/app.css'


function App() {
  return (
    <React.Fragment>
      <div className="contGral">
        <HeaderLeft />
        <RightCont />
      </div>
    </React.Fragment>
  );
}

export default App;
