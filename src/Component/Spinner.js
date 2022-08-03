import logo from "../Component/loading.gif";
function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <img
        style={{
          textAlign: "center",
          // marginTop: 200,
        }}
        src={logo}
      />
    </div>
  );
}
export default Spinner;
// import React, { Component } from "react";

// export default class Spinner extends Component {
//   render() {

//     return (
//       <div>
//         <img src={logo} />
//       </div>
//     );
//   }
// }
