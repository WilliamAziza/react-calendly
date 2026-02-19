import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Payments = () => {
  const { user } = useAuth();
  const [pricingPlan, setPricingPlan] = useState('free');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      features: [
        '1 User',
        'Up to 5 Events per month',
        'Basic Scheduling',
        'Email Support',
      ],
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 12,
      features: [
        '1 User',
        'Unlimited Events',
        'Advanced Scheduling',
        'Calendar Integrations',
        'Email & Chat Support',
        'Custom Branding',
      ],
      popular: true,
    },
    {
      id: 'team',
      name: 'Team',
      price: 19,
      features: [
        'Up to 10 Users',
        'Unlimited Events',
        'Advanced Scheduling',
        'Calendar Integrations',
        'Team Management',
        'Priority Support',
        'Custom Branding',
        'Analytics',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 49,
      features: [
        'Unlimited Users',
        'Unlimited Events',
        'Advanced Scheduling',
        'Calendar Integrations',
        'Team Management',
        'Dedicated Support',
        'Custom Branding',
        'Advanced Analytics',
        'SSO & Security',
        'API Access',
      ],
    },
  ];

  const handlePlanSelect = (planId) => {
    setPricingPlan(planId);
    if (planId !== 'free') {
      setShowPaymentForm(true);
    } else {
      setShowPaymentForm(false);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment processed successfully! Your plan has been upgraded.');
    setShowPaymentForm(false);
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
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/availability">Availability</Link>
              </li>
              <li className="active">
                <Link to="/payments">Payments</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payments Content */}
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Pricing & Payments</h3>
          </div>
          <div className="panel-body">
            {/* Current Plan */}
            <div className="row">
              <div className="col-md-12">
                <h4>Current Plan</h4>
                <div className="alert alert-success">
                  <strong>Current Plan:</strong> {plans.find(p => p.id === pricingPlan)?.name}
                  <br />
                  <small>
                    {pricingPlan === 'free' 
                      ? 'You are on the free plan' 
                      : `$${plans.find(p => p.id === pricingPlan)?.price}/month`}
                  </small>
                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="row" style={{ marginTop: '20px' }}>
              <div className="col-md-12">
                <h4>Available Plans</h4>
              </div>
              {plans.map((plan) => (
                <div key={plan.id} className="col-md-3">
                  <div 
                    className={`panel ${pricingPlan === plan.id ? 'panel-primary' : 'panel-default'} ${plan.popular ? 'panel-popular' : ''}`}
                    style={{ 
                      border: plan.popular ? '2px solid #007bff' : '',
                      position: 'relative'
                    }}
                  >
                    {plan.popular && (
                      <div 
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          backgroundColor: '#007bff',
                          color: 'white',
                          padding: '2px 8px',
                          fontSize: '10px',
                          borderRadius: '0 0 0 5px'
                        }}
                      >
                        POPULAR
                      </div>
                    )}
                    <div className="panel-heading">
                      <h4 className="text-center">{plan.name}</h4>
                      <div className="text-center" style={{ fontSize: '32px', fontWeight: 'bold' }}>
                        ${plan.price}
                        <small style={{ fontSize: '14px' }}>/month</small>
                      </div>
                    </div>
                    <div className="panel-body">
                      <ul style={{ paddingLeft: '20px' }}>
                        {plan.features.map((feature, index) => (
                          <li key={index} style={{ marginBottom: '5px' }}>{feature}</li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handlePlanSelect(plan.id)}
                        className={`btn btn-block ${pricingPlan === plan.id ? 'btn-primary' : 'btn-default'}`}
                        disabled={pricingPlan === plan.id}
                      >
                        {pricingPlan === plan.id ? 'Current Plan' : 'Select Plan'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Form */}
            {showPaymentForm && (
              <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-md-8 col-md-offset-2">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h4>Payment Details</h4>
                    </div>
                    <div className="panel-body">
                      <form onSubmit={handlePayment}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Payment Method</label>
                              <div className="radio">
                                <label>
                                  <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={() => setPaymentMethod('card')}
                                  />
                                  Credit/Debit Card
                                </label>
                              </div>
                              <div className="radio">
                                <label>
                                  <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="paypal"
                                    checked={paymentMethod === 'paypal'}
                                    onChange={() => setPaymentMethod('paypal')}
                                  />
                                  PayPal
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {paymentMethod === 'card' && (
                          <>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Card Number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Expiry Date</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="MM/YY"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>CVC</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="123"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Name on Card</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="John Doe"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="row" style={{ marginTop: '20px' }}>
                          <div className="col-md-12">
                            <button type="submit" className="btn btn-success btn-block">
                              <i className="fa fa-lock"></i> Pay ${plans.find(p => p.id === pricingPlan)?.price}
                            </button>
                            <p className="text-center text-muted" style={{ marginTop: '10px' }}>
                              <small>Your payment is secure and encrypted</small>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing History */}
            <div className="row" style={{ marginTop: '30px' }}>
              <div className="col-md-12">
                <h4>Billing History</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jan 15, 2024</td>
                      <td>Professional Plan - Monthly</td>
                      <td>$12.00</td>
                      <td><span className="label label-success">Paid</span></td>
                      <td><a href="#">Download</a></td>
                    </tr>
                    <tr>
                      <td>Dec 15, 2023</td>
                      <td>Professional Plan - Monthly</td>
                      <td>$12.00</td>
                      <td><span className="label label-success">Paid</span></td>
                      <td><a href="#">Download</a></td>
                    </tr>
                    <tr>
                      <td>Nov 15, 2023</td>
                      <td>Professional Plan - Monthly</td>
                      <td>$12.00</td>
                      <td><span className="label label-success">Paid</span></td>
                      <td><a href="#">Download</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
