import "./App.css";
import BasicState from "./BasicState.jsx";
import Basicstate from "./BasicState.jsx";
// import BasicCard from "./BasicCard";
//
// const cards = [
//   { name: "Card Hello", desc: "This is a card hello" },
//   { name: "Card next", desc: "This is a card next" },
//   { name: "Card again", desc: "This is a card again" },
// ];
function App() {
  return (
    <>
      {/* <h1 className="info-header">Personal Information</h1> */}
      {/* <title>Personal Information</title> */}
      {/* <div className="info"> */}
      {/*   <div className="name">Name: Rajesh Raut</div> */}
      {/*   <div className="sem">Semester: 6th</div> */}
      {/*   <div className="prog">Program: Bit</div> */}
      {/*   <div className="address">Address: Kathmandu</div> */}
      {/*   <div> */}
      {/*     <h1 className="about">About Me</h1> */}
      {/*     <p className="about-text"> */}
      {/*       I am BIT Student Studying In Texas College Of Management and IT */}
      {/*     </p> */}
      {/*   </div> */}
      {/*   <div className="app-cards"> */}
      {/*     <BasicCard name={" Card 1"} /> */}
      {/*     <BasicCard name={" Card 2"} /> */}
      {/*     <BasicCard name={" Card 3"} /> */}
      {/*     <BasicCard name={" Card 4"} /> */}
      {/*     {cards.map((card) => { */}
      {/*       return <BasicCard name={card.name} desc={card.desc} />; */}
      {/*     })} */}
      {/*   </div> */}

      <BasicState />
    </>
  );
}

export default App;
