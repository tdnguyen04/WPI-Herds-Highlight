import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

const Event = ({ name, location, timestamp }) => {
  return (
    <div className="event-card">
      <div className="event-header">
        <h2 className="event-title">{name}</h2>
      </div>
      <div className="event-details">
        <div className="event-location">
          <span className="fas">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <a
            href="https://maps.app.goo.gl/uTY7A2i2sER8Cx667"
            target="_blank"
            rel="noopener noreferrer"
          >
            {location}
          </a>
        </div>
        <div className="event-time">
          <span className="fas">
            <FontAwesomeIcon icon={faClock} />
          </span>

          <span>{timestamp}</span>
          <a
            target="_blank"
            href="https://calendar.app.google/Kou1LJA7UhzmeWzJ8"
            className="btn btn-event"
          >
            Add to Calendar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
