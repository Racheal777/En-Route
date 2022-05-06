import React from "react";
import "../styles/Home.css"

export default function Home() {
  return (
    <div>
      <main>
        <div className="logo">
          <h1>EN ROUTE</h1>
        </div>

        <section className="mid-section">
        <div className="text">
          <h2>
            A TOUR SITE FOR EASY <span>ACCESS IN THE CITY AND BEYOND</span>
          </h2>
          <h3>
            EN ROUTE provides you with maximum resources to help navigate your
            way around the city and allows you create memories
          </h3>

        </div>

        <div className="image">
            <img src="" alt="city picture"></img>
        </div>
        </section>
       

        <div className="btn">
            <button className="start-btn">Get Started</button>
            <button className="login-btn">Login</button>
        </div>
      </main>
    </div>
  );
}
