import React from "react";
import ReactDOM from "react-dom/client"




const Header = () => (
    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/286/750/small/restaurant-point-food-logo-free-vector.jpg" alt="logo" />
);



// ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <div className="container">
            <Header />
        </div>
    );
