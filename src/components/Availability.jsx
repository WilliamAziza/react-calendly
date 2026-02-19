import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Availability = () => {
  const { user } = useAuth();
  const [availability, setAvailability] = useState({
    monday: { enabled: true, start: '09:00', end: '17:00' },
    tuesday: { enabled: true, start: '09:00', end: '17:00' },
    wednesday: { enabled: true, start: '09:00', end: '17:00' },
    thursday: { enabled: true, start: '09:00', end: '17:00' },
    friday: { enabled: true, start: '09:00', end: '17:00' },
    saturday: { enabled: false, start: '09:00', end: '12:00' },
    sunday: { enabled: false, start: '09:00', end: '12:00' },
  });
  const [timezone, setTimezone] = useState('America/New_York');
  const [eventDuration, setEventDuration] = useState('30');
  const [bufferTime, setBufferTime] = useState('5');

  const handleToggle = (day) => {
    setAvailability({
      ...availability,
      [day]: { ...availability[day], enabled: !availability[day].enabled },
    });
  };

  const handleTimeChange = (day, field, value) => {
    setAvailability({
      ...availability,
      [day]: { ...availability[day], [field]: value },
    });
  };

  const handleSave = () => {
    // Save availability settings (in real app, this would be an API call)
    alert('Availability settings saved successfully!');
  };

  const timezones = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'Europe/London', label: 'GMT/BST (London)' },
    { value: 'Europe/Paris', label: 'CET (Paris)' },
    { value: 'Asia/Tokyo', label: 'Japan Standard Time' },
    { value: 'Asia/Kolkata', label: 'India Standard Time' },
    { value: 'Australia/Sydney', label: 'Australian Eastern Time' },
  ];

  const durations = [
    { value: '15', label: '15 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '45', label: '45 minutes' },
    { value: '60', label: '1 hour' },
    { value: '90', label: '1.5 hours' },
    { value: '120', label: '2 hours' },
  ];

  return (
    <div className="row" style={{ marginTop: '80px' }}>
      {/* Sidebar */}
      <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="text-center">
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  margin: '0 auto',
                }}
              >
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <h4>{user?.name || 'User'}</h4>
              <p style={{ color: '#666' }}>{user?.email}</p>
            </div>
            <hr />
            <ul className="nav nav-pills nav-stacked">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li className="active">
                <Link to="/availability">Availability</Link>
              </li>
              <li>
                <Link to="/payments">Payments</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Availability Content */}
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Availability Settings</h3>
          </div>
          <div className="panel-body">
            {/* Timezone */}
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Timezone</label>
                  <select
                    className="form-control"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                  >
                    {timezones.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                  <p className="help-block">
                    All times will be displayed in this timezone
                  </p>
                </div>
              </div>
            </div>

            {/* Event Duration */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Default Event Duration</label>
                  <select
                    className="form-control"
                    value={eventDuration}
                    onChange={(e) => setEventDuration(e.target.value)}
                  >
                    {durations.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Buffer Time (minutes)</label>
                  <select
                    className="form-control"
                    value={bufferTime}
                    onChange={(e) => setBufferTime(e.target.value)}
                  >
                    <option value="0">No buffer</option>
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                  </select>
                  <p className="help-block">
                    Time between meetings
                  </p>
                </div>
              </div>
            </div>

            <hr />

            {/* Weekly Schedule */}
            <h4>Weekly Schedule</h4>
            <p className="help-block">
              Set your available hours for each day of the week
            </p>

            {Object.keys(availability).map((day) => (
              <div key={day} className="row" style={{ marginBottom: '15px' }}>
                <div className="col-md-3">
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        checked={availability[day].enabled}
                        onChange={() => handleToggle(day)}
                      />
                      <strong style={{ textTransform: 'capitalize' }}>{day}</strong>
                    </label>
                  </div>
                </div>
                <div className="col-md-9">
                  {availability[day].enabled ? (
                    <div className="row">
                      <div className="col-md-5">
                        <input
                          type="time"
                          className="form-control"
                          value={availability[day].start}
                          onChange={(e) =>
                            handleTimeChange(day, 'start', e.target.value)
                          }
                        />
                      </div>
                      <div className="col-md-1 text-center">to</div>
                      <div className="col-md-5">
                        <input
                          type="time"
                          className="form-control"
                          value={availability[day].end}
                          onChange={(e) =>
                            handleTimeChange(day, 'end', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted">Unavailable</p>
                  )}
                </div>
              </div>
            ))}

            <hr />

            {/* Exception Dates */}
            <h4>Exception Dates</h4>
            <p className="help-block">
              Add dates when you have custom availability (holidays, etc.)
            </p>
            <button className="btn btn-default">
              <i className="fa fa-plus"></i> Add Exception Date
            </button>

            <hr />

            {/* Save Button */}
            <div className="row">
              <div className="col-md-12 text-right">
                <button onClick={handleSave} className="btn btn-primary">
                  Save Availability Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
