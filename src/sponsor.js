import './css/sponsor.css';
import hands from './images/hands.svg';

function Sponsor() {
  return (
    <div className="sponsor">
      <div className="divText">
        this year's conference sponsored by hands
      </div>
      <img className="hands" src={hands} alt="" />
    </div>
  );
}

export default Sponsor;
