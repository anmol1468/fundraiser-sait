
import './App.css';

function App() {
  
  window.onload = function() {
    // similar behavior as an HTTP redirect
    window.location.replace("https://www.eventbrite.com/e/dance-party-fundraiser-tickets-459533455937");
}
  
  return (
    <div className="App">
      redirecting
    </div>
  );
}

export default App;
