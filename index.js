import React from "react";
import ReactDOM from "react-dom/client"


const Nav = () => (
    <ul className="listItems"> 
        <li>Swiggy Corporate</li>
        <li>Search</li>       
        <li>Offers<sup className="superscript">New</sup></li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
    </ul>
);

// Header Component
const Header = () => (
    <div className="header">
        
        <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/005/286/750/small/restaurant-point-food-logo-free-vector.jpg" alt="logo" />
        <Nav />
    </div>
    
);

// Restro  Card Component
const RestroCard = () => (
    <div className="restroCard">
        <img className="restroImg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg" alt="restroImg" />
        <div className="restroDetails">
            <h3 className="restroName">Urban Cafe</h3>
            <p className="averageTime">70-75min</p>
            <p className="cusine">Snacks, Pizzas</p>
            <p className="cityName">Chhindwara City</p>
        </div>
    </div>
)

// Body Component
const Body = () => (
    <div className="body">
        <RestroCard />
    </div>
)

const App= ()=> (
    <div className="app">
        <Header />
        <Body />
    </div>
)

// ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <App />
);
