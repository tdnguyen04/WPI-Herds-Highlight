import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Event from './components/Event';

function App() {
  return (
    <>
      <div className="page-center">
        <header>
          <h2 className="logo">Worcester Polytechnic Institute</h2>
          <h1>
            <span className="wpi">Herds</span> Highlights
          </h1>
          <p className="description">
            Herd Highlights is a bi-weekly newsletter for all students—graduate
            and undergraduate. Send us your feedback: &nbsp;
            <a href="mailto: herdhighlights@wpi.edu">herdhighlights@wpi.edu</a>
          </p>
        </header>
        <div className="events-board">
          <Event
            name="Fall Career Fair"
            location="Campus Center"
            timestamp="9/19/2024 9:00 AM - 12:00 PM"
          />
          <Event
            name="Graduate Student STARS Workshop—Success with Project Teams"
            location="Fuller Lab"
            timestamp="9/20/2024 1:00 PM - 4:00 PM"
          />
          <Event
            name="Work on Worcester"
            location="Morgan Dining Hall"
            timestamp="9/21/2024 10:00 AM - 1:00 PM"
          />
          <Event
            name="Arts & Sciences Week"
            location="Unity Hall"
            timestamp="9/23/2024 11:00 AM - 3:00 PM"
          />
          <Event
            name="A&S Undergraduate Student Research Showcase"
            location="Gordon Library"
            timestamp="9/25/2024 2:00 PM - 5:00 PM"
          />
          <Event
            name="Last day to withdraw from A-Term courses (graduate students only)"
            location="Salisbury Lab"
            timestamp="9/26/2024"
          />
          <Event
            name="Wellness Day—No classes"
            location="Campus Center"
            timestamp="9/27/2024"
          />
          <Event
            name="Homecoming"
            location="Morgan Dining Hall"
            timestamp="9/27/2024 3:00 PM - 5:00 PM"
          />
          <Event
            name="A-Term ends"
            location="Unity Hall"
            timestamp="10/11/2024"
          />
          <Event
            name="Break"
            location="Gordon Library"
            timestamp="10/12/2024 - 10/21/2024"
          />
        </div>
      </div>
    </>
  );
}

export default App;
