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
const RestroCard = (prop) => (
    <div className="restroCard">
        <img className="restroImg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg" alt="restroImg" />
        <div className="restroDetails">
            <h3 className="restroName">{prop.restroName}</h3>
            <p className="averageTime">{prop.averageTime}</p>
            <p className="cusine">{prop.cusine}</p>
            <p className="cityName">Chhindwara City</p>
        </div>
    </div>
)

// Body Component
const Body = () => (
    <div className="body">
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
        <RestroCard restroName="Urban Cafe" averageTime="70-75min" cusine="Snacks, Pizzas" cityName="Chhindwara City"  />
    </div>
)

//footer
const Footer=()=>(
    <div className="footer">
        <p>© 2021 Swiggy</p>
        <div className="footerLinks">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Pricing</p>
        </div>  
    </div>
)

const App= ()=> (
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
)

// ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <App />
);
