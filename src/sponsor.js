import './css/sponsor.css';
import flavicon from './images/flavicon.png';

function Sponsor() {
  return (
    <div className="sponsor">
      <div className="divText">
        this year's conference sponsored by hands
      </div>
      <img className="hands" src={flavicon} alt="" />
    </div>
  );
}

export default Sponsor;
