import './css/quote.css';
import quote from './images/quote.svg';


function Quote() {
  return (
    <div className="quote">
      <div className="quoteInside" style={{ background: `center bottom / contain no-repeat url(${quote}) #612BFF` }}>
      </div>
    </div>
  );
}

export default Quote;
