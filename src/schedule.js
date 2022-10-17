import './css/schedule.css';
import schedule from './images/Schedule.svg';

function Schedule() {
  return (
    <div>
      <div className="schedule">
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
            <div className="activity">Networking & Happy Hour</div>
          </div>
        </div>
        <div className="title" style={{ background: `center bottom / contain no-repeat url(${schedule})` }}>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
