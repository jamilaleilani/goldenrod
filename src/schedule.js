import './css/schedule.css';
import purpleBlob from './images/purpleBlob.svg';
import scheduleTitle from './images/scheduleTitle.svg';

function Schedule() {
  return (
    <div>
      <div className="schedule" style={{ background: `center / contain no-repeat url(${purpleBlob})` }} >
        <div className="content">
          <div className="scheduleItem">
            <div className="time">12pm</div>
            <div className="activity">Arrival and Check-in</div>
          </div>
          <div className="scheduleItem">
            <div className="time">1pm</div>
            <div className="activity">Lightning Talks</div>
          </div>
          <div className="scheduleItem">
            <div className="time">2pm</div>
            <div className="activity">Breakout Sessions</div>
          </div>
          <div className="scheduleItem">
            <div className="time">3pm</div>
            <div className="activity">Lightning Talks</div>
          </div>
          <div className="scheduleItem">
            <div className="time">4pm</div>
            <div className="activity">Panel</div>
          </div>
          <div className="scheduleItem">
            <div className="time">5pm</div>
            <div className="activity">All-Hands</div>
          </div>
          <div className="scheduleItem">
            <div className="time">6pm</div>
            <div className="activity">Networking & Happy Hour</div>
          </div>
        </div>
        <div className="title" style={{ background: `center bottom / contain no-repeat url(${scheduleTitle})` }}>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
