import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';

function Quote({ quote, color }) {
  const [showShare, setShowShare] = useState(false);
  const shareLink = `"${quote.content}" by ${quote.author} #RandomeQuote`;

  const handleShareClick = () => {
    navigator.clipboard.writeText(shareLink);
    setShowShare(true);
    setTimeout(() => setShowShare(false), 2000);
  };

  return (
    <div className="quote-container" style={{ backgroundColor: color }}>
      <Card className="quote-card">
        <Card.Body>
          <Card.Text>{quote.content}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            by {quote.author}
          </Card.Subtitle>
          <div className="d-flex justify-content-end">
            <FaShare className="icon" onClick={handleShareClick} />
          </div>
          {showShare && (
            <small className="text-muted">Text copied to clipboard</small>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Quote;
