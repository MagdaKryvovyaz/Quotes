import './App.css';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Quote from './components/Quote';

function App() {
  const [quote, setQuote] = useState({
    content: 'The best way to predict the future is to create it.',
    author: 'Abraham Lincoln'
  });
  const [color, setColor] = useState('white'); 

  function getQuote() {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        // Generate a random RGB color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${255 - r}, ${255 - g}, ${255 - b})`); // Generate a complementary color for the background
      })
      .catch((error) => console.log(error.message));
  }

  return (
      <div className="App">
        <Container className="containers">
          <div className="blur"> 
            {quote ? (
              <Quote quote={quote} color={color} />
            ) : (
             <p className="italic">Let's generate some quotes!</p>
            )}
            <Button className="btn-new-quote" onClick={getQuote} variant="success">
                  New quote!
            </Button>

            </div>
          </Container>
      </div>
    );
}

export default App;
