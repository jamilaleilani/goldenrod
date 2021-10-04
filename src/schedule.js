import './css/schedule.css';

function Schedule() {
  return (
    <div className="schedule">
      <div className="content">
        <div className="scheduleItem">
          <div className="time">12pm</div>
          <div>Arrival and Check-in</div>
        </div>
        <div className="scheduleItem">
          <div className="time">1pm</div>
          <div>Lightning Talks</div>
        </div>
        <div className="scheduleItem">
          <div className="time">2pm</div>
          <div>Breakout Sessions</div>
        </div>
        <div className="scheduleItem">
          <div className="time">3pm</div>
          <div>Lightning Talks</div>
        </div>
        <div className="scheduleItem">
          <div className="time">4pm</div>
          <div>Panel</div>
        </div>
        <div className="scheduleItem">
          <div className="time">5pm</div>
          <div>All-Hands</div>
        </div>
        <div className="scheduleItem">
          <div className="time">6pm</div>
          <div>Networking & Happy Hour</div>
        </div>
      </div>
      <div className="title">
        schedule
      </div>
    </div>
  );
}

export default Schedule;
