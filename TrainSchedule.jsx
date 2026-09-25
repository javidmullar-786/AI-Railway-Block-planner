function TrainSchedule() {
  const trains = [
    {
      number: "12627",
      name: "Karnataka Express",
      route: "Bengaluru → New Delhi",
      departure: "06:30 AM",
      arrival: "10:30 PM",
      status: "On Time",
      delay: "0 min",
    },
    {
      number: "12007",
      name: "Shatabdi Express",
      route: "Bengaluru → Mysuru",
      departure: "11:00 AM",
      arrival: "01:00 PM",
      status: "At Risk",
      delay: "5 min",
    },
    {
      number: "16526",
      name: "Kaveri Express",
      route: "Bengaluru → Chennai",
      departure: "02:30 PM",
      arrival: "08:00 PM",
      status: "Delayed",
      delay: "15 min",
    },
    {
      number: "16515",
      name: "Karwar Express",
      route: "Bengaluru → Karwar",
      departure: "04:00 PM",
      arrival: "11:30 PM",
      status: "On Time",
      delay: "0 min",
    },
  ];

  return (
    <div className="page-container">

      <div className="page-header">
        <div>
          <h1>🚆 Train Schedule</h1>
          <p>Monitor train movements and operational status.</p>
        </div>

        <span className="header-badge">
          LIVE MONITORING
        </span>
      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🚆</div>
          <div>
            <p>Total Trains</p>
            <h2>4</h2>
            <span className="positive">Today's schedule</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div>
            <p>On Time</p>
            <h2>2</h2>
            <span className="positive">Operating normally</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div>
            <p>At Risk</p>
            <h2>1</h2>
            <span className="warning">Requires monitoring</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div>
            <p>Delayed</p>
            <h2>1</h2>
            <span className="warning">15 min delay</span>
          </div>
        </div>

      </section>

      <section className="table-card">

        <div className="table-header">
          <div>
            <h2>Today's Train Operations</h2>
            <p>Train schedule and current operational status</p>
          </div>
        </div>

        <table>

          <thead>
            <tr>
              <th>Train</th>
              <th>Route</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Status</th>
              <th>Delay</th>
            </tr>
          </thead>

          <tbody>

            {trains.map((train) => (
              <tr key={train.number}>

                <td>
                  <strong>{train.number}</strong>
                  <br />
                  <span>{train.name}</span>
                </td>

                <td>{train.route}</td>

                <td>{train.departure}</td>

                <td>{train.arrival}</td>

                <td>
                  <span
                    className={
                      train.status === "On Time"
                        ? "status completed"
                        : train.status === "At Risk"
                        ? "status pending"
                        : "status recommended"
                    }
                  >
                    {train.status}
                  </span>
                </td>

                <td>
                  <strong>{train.delay}</strong>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </section>

      <section className="dashboard-grid">

        <div className="recommendation-card">

          <div className="section-title">

            <div>
              <h2>🤖 AI Block Impact Analysis</h2>
              <p>Predicted effect of a maintenance block</p>
            </div>

            <span className="recommended-badge">
              AI ANALYSIS
            </span>

          </div>

          <div className="recommendation-details">

            <div>
              <span>Railway Section</span>
              <strong>Bengaluru – Mysuru</strong>
            </div>

            <div>
              <span>Maintenance Block</span>
              <strong>12:00 PM – 2:00 PM</strong>
            </div>

            <div>
              <span>Trains Affected</span>
              <strong>2 Trains</strong>
            </div>

            <div>
              <span>Expected Delay</span>
              <strong>7 Minutes</strong>
            </div>

          </div>

        </div>

        <div className="impact-card">

          <h2>📊 Operational Impact</h2>

          <p>AI predicted operational impact</p>

          <div className="impact-item">
            <span>Trains affected</span>
            <strong>2</strong>
          </div>

          <div className="impact-item">
            <span>Expected delay</span>
            <strong>7 min</strong>
          </div>

          <div className="impact-item">
            <span>Conflict risk</span>
            <strong>Low</strong>
          </div>

          <div className="impact-item">
            <span>AI confidence</span>
            <strong>94%</strong>
          </div>

        </div>

      </section>

    </div>
  );
}

export default TrainSchedule;