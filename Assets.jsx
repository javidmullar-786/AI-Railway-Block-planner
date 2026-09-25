function Assets() {
  const assets = [
    {
      id: "TRK-12A",
      type: "Track",
      section: "Bengaluru – Mysuru",
      condition: 92,
      lastMaintenance: "15 Aug 2026",
      nextMaintenance: "10 Sep 2026",
      status: "Healthy",
    },
    {
      id: "SIG-04",
      type: "Signal System",
      section: "Bengaluru – Chennai",
      condition: 78,
      lastMaintenance: "20 Jul 2026",
      nextMaintenance: "06 Sep 2026",
      status: "Attention",
    },
    {
      id: "OHE-07",
      type: "Overhead Equipment",
      section: "Bengaluru – Tumakuru",
      condition: 65,
      lastMaintenance: "01 Jul 2026",
      nextMaintenance: "05 Sep 2026",
      status: "Maintenance Due",
    },
    {
      id: "TRK-07B",
      type: "Track",
      section: "Bengaluru – Tumakuru",
      condition: 84,
      lastMaintenance: "10 Aug 2026",
      nextMaintenance: "20 Sep 2026",
      status: "Healthy",
    },
  ];

  return (
    <div className="page-container">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <h1>🛤️ Railway Assets</h1>
          <p>
            Monitor railway asset condition and maintenance requirements.
          </p>
        </div>

        <span className="header-badge">
          ASSET MONITORING
        </span>
      </div>

      {/* SUMMARY CARDS */}
      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🛤️</div>

          <div>
            <p>Total Assets</p>
            <h2>150</h2>
            <span className="positive">
              ↑ 4.2% this month
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💚</div>

          <div>
            <p>Healthy Assets</p>
            <h2>127</h2>
            <span className="positive">
              84.7% healthy
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>

          <div>
            <p>Needs Attention</p>
            <h2>15</h2>
            <span className="warning">
              Monitor closely
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔧</div>

          <div>
            <p>Maintenance Due</p>
            <h2>8</h2>
            <span className="warning">
              Action required
            </span>
          </div>
        </div>

      </section>

      {/* ASSET TABLE */}
      <section className="table-card">

        <div className="table-header">
          <div>
            <h2>Asset Condition Monitoring</h2>
            <p>
              Current condition and maintenance schedule
            </p>
          </div>
        </div>

        <table>

          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Type</th>
              <th>Section</th>
              <th>Condition</th>
              <th>Last Maintenance</th>
              <th>Next Maintenance</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {assets.map((asset) => (
              <tr key={asset.id}>

                <td>
                  <strong>{asset.id}</strong>
                </td>

                <td>
                  {asset.type}
                </td>

                <td>
                  {asset.section}
                </td>

                <td>

                  <strong>
                    {asset.condition}%
                  </strong>

                  <div
                    style={{
                      width: "100px",
                      height: "7px",
                      background: "#e5e7eb",
                      borderRadius: "10px",
                      marginTop: "6px",
                    }}
                  >

                    <div
                      style={{
                        width: `${asset.condition}%`,
                        height: "100%",
                        background: "#172033",
                        borderRadius: "10px",
                      }}
                    ></div>

                  </div>

                </td>

                <td>
                  {asset.lastMaintenance}
                </td>

                <td>
                  {asset.nextMaintenance}
                </td>

                <td>

                  <span
                    className={
                      asset.status === "Healthy"
                        ? "status completed"
                        : asset.status === "Attention"
                        ? "status pending"
                        : "status recommended"
                    }
                  >
                    {asset.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </section>

      {/* MAINTENANCE ALERTS */}
      <section
        className="impact-card"
        style={{ marginTop: "25px" }}
      >

        <h2>⚠️ Maintenance Alerts</h2>

        <p>
          Assets requiring operational attention
        </p>

        <div className="impact-item">
          <span>
            OHE-07 – Overhead Equipment
          </span>

          <strong>
            Maintenance Due
          </strong>
        </div>

        <div className="impact-item">
          <span>
            SIG-04 – Signal System
          </span>

          <strong>
            Condition 78%
          </strong>
        </div>

        <div className="impact-item">
          <span>
            TRK-12A – Track Section
          </span>

          <strong>
            Maintenance in 6 days
          </strong>
        </div>

      </section>

      {/* AI ASSET INSIGHT */}
      <section
        className="recommendation-card"
        style={{ marginTop: "25px" }}
      >

        <div className="section-title">

          <div>
            <h2>🤖 AI Asset Insight</h2>

            <p>
              Maintenance priority generated from asset condition
            </p>
          </div>

          <span className="recommended-badge">
            AI INSIGHT
          </span>

        </div>

        <div className="recommendation-details">

          <div>
            <span>Highest Priority</span>
            <strong>OHE-07</strong>
          </div>

          <div>
            <span>Condition</span>
            <strong>65%</strong>
          </div>

          <div>
            <span>Recommended Action</span>
            <strong>Schedule Maintenance</strong>
          </div>

          <div>
            <span>Priority</span>
            <strong>HIGH</strong>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Assets;