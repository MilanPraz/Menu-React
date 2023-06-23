import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="header h1">Fast React Pizza Co.</h1>
      </header>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      {/* we use ternanry or shortcurcuiting operator because jsx dont support if-else loops */}
      {numPizza > 0 ? (
        <div className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </div>
      ) : (
        <p>We're working on our menu. Please come back later</p>
      )}
    </div>
  );
}

function Pizza(props) {
  return (
    <div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt="foacaccia pizza"></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour;
  console.log(isopen);

  return (
    <div className="footer">
      {isopen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <h3> We are Closed-Sorry!!</h3>
      )}
      {/* This is SHORTShorcuiting: since isopen is true so it will return whatever is after && opearator */}
    </div>
  );
}

function Order(props) {
  return (
    <div className="order">
      <h3> We are Open</h3>
      <button className="btn">Order</button>
      <p>
        We're Happy to welcome you between {props.openHour}:00 to{" "}
        {props.closeHour}:00
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
