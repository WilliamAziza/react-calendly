import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Calendar = () => {
  const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { id: 1, title: 'Product Demo', date: '2024-02-15', time: '10:00 AM' },
    { id: 2, title: 'Team Meeting', date: '2024-02-16', time: '2:00 PM' },
    { id: 3, title: 'Client Call', date: '2024-02-18', time: '11:00 AM' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '' });

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`} className="text-muted"></td>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events.filter((e) => e.date === dateStr);

      days.push(
        <td key={day} style={{ padding: '10px', verticalAlign: 'top', height: '80px' }}>
          <div>{day}</div>
          {dayEvents.map((event) => (
            <div
              key={event.id}
              className="label label-primary"
              style={{ fontSize: '10px', display: 'block', marginTop: '2px' }}
            >
              {event.time} - {event.title}
            </div>
          ))}
        </td>
      );

      if ((firstDay + day) % 7 === 0) {
        days.push('</tr><tr>');
      }
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ title: '', date: '', time: '' });
      setShowModal(false);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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
              <li className="active">
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
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

      {/* Calendar Content */}
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="row">
              <div className="col-md-6">
                <h3 className="panel-title">Calendar</h3>
              </div>
              <div className="col-md-6 text-right">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fa fa-plus"></i> Add Event
                </button>
              </div>
            </div>
          </div>
          <div className="panel-body">
            {/* Calendar Navigation */}
            <div className="row" style={{ marginBottom: '20px' }}>
              <div className="col-md-12 text-center">
                <button onClick={handlePrevMonth} className="btn btn-default">
                  < Prev
                </button>
                <span style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button onClick={handleNextMonth} className="btn btn-default">
                  Next >
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">Sun</th>
                  <th className="text-center">Mon</th>
                  <th className="text-center">Tue</th>
                  <th className="text-center">Wed</th>
                  <th className="text-center">Thu</th>
                  <th className="text-center">Fri</th>
                  <th className="text-center">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>{renderCalendar()}</tr>
              </tbody>
            </table>

            {/* Google Calendar Integration */}
            <div className="row" style={{ marginTop: '30px' }}>
              <div className="col-md-12">
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h4>Calendar Integrations</h4>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <button className="btn btn-default btn-block">
                          <i className="fa fa-google"></i> Connect Google Calendar
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-default btn-block">
                          <i className="fa fa-envelope"></i> Connect Outlook Calendar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div
          className="modal fade in"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
                <h4 className="modal-title">Add New Event</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Event Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newEvent.title}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, title: e.target.value })
                    }
                    placeholder="Enter event title"
                  />
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={newEvent.date}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, date: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input
                    type="time"
                    className="form-control"
                    value={newEvent.time}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, time: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddEvent}
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
