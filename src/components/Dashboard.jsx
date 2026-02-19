import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [events, setEvents] = useState([]);

  // Sample events data (in real app, this would come from backend)
  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        title: 'Product Demo',
        date: '2024-02-15',
        time: '10:00 AM',
        attendee: 'john@example.com',
        status: 'confirmed',
      },
      {
        id: 2,
        title: 'Team Meeting',
        date: '2024-02-16',
        time: '2:00 PM',
        attendee: 'team@company.com',
        status: 'pending',
      },
      {
        id: 3,
        title: 'Client Call',
        date: '2024-02-18',
        time: '11:00 AM',
        attendee: 'client@business.com',
        status: 'confirmed',
      },
    ];
    setEvents(sampleEvents);
  }, []);

  const handleLogout = () => {
    logout();
  };

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
              <li className="active">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
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
            <hr />
            <button
              onClick={handleLogout}
              className="btn btn-danger btn-block"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-12">
            <h2>Welcome back, {user?.name || 'User'}!</h2>
            <p style={{ color: '#666' }}>
              Here's what's happening with your scheduling today.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-calendar fa-3x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{events.length}</div>
                    <div>Upcoming Events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-success">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-check fa-3x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">
                      {events.filter((e) => e.status === 'confirmed').length}
                    </div>
                    <div>Confirmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-clock fa-3x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">
                      {events.filter((e) => e.status === 'pending').length}
                    </div>
                    <div>Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Upcoming Events</h3>
              </div>
              <div className="panel-body">
                {events.length > 0 ? (
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Attendee</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td>{event.title}</td>
                          <td>{event.date}</td>
                          <td>{event.time}</td>
                          <td>{event.attendee}</td>
                          <td>
                            <span
                              className={`label label-${
                                event.status === 'confirmed'
                                  ? 'success'
                                  : 'warning'
                              }`}
                            >
                              {event.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center">No upcoming events</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-12">
            <h4>Quick Actions</h4>
            <div className="row">
              <div className="col-md-4">
                <Link to="/calendar" className="btn btn-primary btn-block">
                  <i className="fa fa-calendar-plus-o"></i> New Event Type
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  to="/availability"
                  className="btn btn-default btn-block"
                >
                  <i className="fa fa-clock-o"></i> Set Availability
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/payments" className="btn btn-success btn-block">
                  <i className="fa fa-credit-card"></i> Manage Payments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
