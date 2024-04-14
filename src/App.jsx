import React from "react";
import TopBar from "./Components/TopBar"; //Grab that component from the path of components topbar
import "./App.css";
import "./index.css";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function App() {
  return ( 
      <>
        <TopBar className="topbar"/>
          <div className="container">
            <RecentDonations donations={ donations }/>
            <DonationForm donations={ donations }/>
            <Progress targetAmount={ targetAmount } donations={ donations }/>
          </div>
      </>
  );
}
//TopBar - main component
export default App;


/*

//All components are relying
REACT PROPS:

React's main goal are to render data in a fast way. It is a framework that helps create interactive user interfaces. One of the most important features is the ability to render data. (render - provide or give service) 


LEARNING OBJECTIVES:
Understand what props are and what problem they solve
Build an application that uses props
Articulate the distinction between container and display components


INTRODUCTION TO PROPS
Before we had no way to make two versions of the same component.

PROPS
Props allow components to pass information to child components that they are rendering (providing a service).  Components can use props to consume data from their parents and render it to the user. This allows more reuse of component.
Can use the same component and pass down unique user info as props.

//allows us to divide responsibilities bet. components





*/