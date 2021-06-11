import React from 'react';
import './App.css';
import Header from './component/Header';
import MeetingBooking from './component/MeetingBooking';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <MeetingBooking/>
    </div>
  );
}

export default App;
