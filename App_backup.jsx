import { useState } from "react";
import "./App.css";
import BlockPlanner from "./BlockPlanner";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <span>🚆</span>

          <div>
            <h2>AI Rail Planner</h2>
            <span>Indian Railways</span>
          </div>
        </div>

        <nav>

          {/* DASHBOARD */}
          <button
            className={`nav-item ${
              activePage === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActivePage("dashboard")}
          >
            🏠 <span>Dashboard</span>
          </button>

          {/* BLOCK PLANNER */}
          <button
            className={`nav-item ${
              activePage === "planner" ? "active" : ""
            }`}
            onClick={() => setActivePage("planner")}
          >
            🧠 <span>Block Planner</span>
          </button>

          {/* TRAIN SCHEDULE */}
          <button
            className={`nav-item ${
              activePage === "schedule" ? "active" : ""
            }`}
            onClick={() => setActivePage("schedule")}
          >
            🚆 <span>Train Schedule</span>
          </button>

          {/* ASSETS */}
          <button
            className={`nav-item ${
              activePage === "assets" ? "active" : ""
            }`}
            onClick={() => setActivePage("assets")}
          >
            🛤️ <span>Assets</span>
          </button>

          {/* ANALYTICS */}
          <button
            className={`nav-item ${
              activePage === "analytics" ? "active" : ""
            }`}
            onClick={() => setActivePage("analytics")}
          >
            📊 <span>Analytics</span>
          </button>

        </nav>

        <div className="sidebar-bottom">

          <div className="system-status">
            <span className="status-dot"></span>
            System Online
          </div>

          <p>AI Block Planning v1.0</p>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* ============================= */}
        {/* BLOCK PLANNER PAGE */}
        {/* ============================= */}

        {activePage === "planner" ? (

          <BlockPlanner />

        ) : activePage === "schedule" ? (

          /* ============================= */
          /* TRAIN SCHEDULE PAGE */
          /* ============================= */

          <div style={{ padding: "40px" }}>

            <h1>🚆 Train Schedule</h1>

            <p>
              Train schedule management will be available here.
            </p>

            <div
              style={{
                marginTop: "30px",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                background: "white"
              }}
            >
              <h2>Coming Soon</h2>

              <p>
                Train schedules will be connected with the
                AI Block Planner in the next stage.
              </p>
            </div>

          </div>

        ) : activePage === "assets" ? (

          /* ============================= */
          /* ASSETS PAGE */
          /* ============================= */

          <div style={{ padding: "40px" }}>

            <h1>🛤️ Railway Assets</h1>

            <p>
              Railway asset monitoring and maintenance information.
            </p>

            <div
              style={{
                marginTop: "30px",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                background: "white"
              }}
            >
              <h2>Coming Soon</h2>

              <p>
                Asset information will be connected to the
                backend in the next stage.
              </p>
            </div>

          </div>

        ) : activePage === "analytics" ? (

          /* ============================= */
          /* ANALYTICS PAGE */
          /* ============================= */

          <div style={{ padding: "40px" }}>

            <h1>📊 Analytics</h1>

            <p>
              Railway maintenance and operational analytics.
            </p>

            <div
              style={{
                marginTop: "30px",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                background: "white"
              }}
            >
              <h2>Coming Soon</h2>

              <p>
                AI-generated railway analytics will be
                added in the next stage.
              </p>
            </div>

          </div>

        ) : (

          /* ============================= */
          /* DASHBOARD PAGE */
          /* ============================= */

          <>

            {/* HEADER */}

            <header className="header">

              <div>
                <h1>Railway Operations Dashboard</h1>

                <p>
                  AI-powered maintenance block planning system
                </p>
              </div>


              <div className="header-right">

                <span className="notification">
                  🔔
                </span>

                <div className="profile">

                  <div className="avatar">
                    JM
                  </div>

                  <div>

                    <strong>
                      Admin
                    </strong>

                    <small>
                      Operations Manager
                    </small>

                  </div>

                </div>

              </div>

            </header>


            {/* STATS */}

            <section className="stats-grid">

              <div className="stat-card">

                <div className="stat-icon">
                  🛤️
                </div>

                <div>

                  <p>
                    Total Assets
                  </p>

                  <h2>
                    150
                  </h2>

                  <span className="positive">
                    ↑ 4.2% this month
                  </span>

                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  🔧
                </div>

                <div>

                  <p>
                    Maintenance Due
                  </p>

                  <h2>
                    23
                  </h2>

                  <span className="warning">
                    Needs attention
                  </span>

                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  🚆
                </div>

                <div>

                  <p>
                    Today's Blocks
                  </p>

                  <h2>
                    8
                  </h2>

                  <span className="positive">
                    5 completed
                  </span>

                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  📈
                </div>

                <div>

                  <p>
                    Asset Availability
                  </p>

                  <h2>
                    96%
                  </h2>

                  <span className="positive">
                    ↑ 2.1% this week
                  </span>

                </div>

              </div>

            </section>


            {/* DASHBOARD GRID */}

            <section className="dashboard-grid">

              {/* AI RECOMMENDATION */}

              <div className="recommendation-card">

                <div className="section-title">

                  <div>

                    <h2>
                      🤖 AI Recommended Block
                    </h2>

                    <p>
                      Optimal maintenance window
                    </p>

                  </div>

                  <span className="recommended-badge">
                    RECOMMENDED
                  </span>

                </div>


                <div className="block-time">

                  <div>

                    <span>
                      START
                    </span>

                    <strong>
                      12:00 PM
                    </strong>

                  </div>


                  <div className="arrow">
                    →
                  </div>


                  <div>

                    <span>
                      END
                    </span>

                    <strong>
                      2:00 PM
                    </strong>

                  </div>

                </div>


                <div className="recommendation-details">

                  <div>

                    <span>
                      Railway Section
                    </span>

                    <strong>
                      Bengaluru – Mysuru
                    </strong>

                  </div>


                  <div>

                    <span>
                      Asset
                    </span>

                    <strong>
                      Track Section 12A
                    </strong>

                  </div>


                  <div>

                    <span>
                      Maintenance
                    </span>

                    <strong>
                      Track Inspection
                    </strong>

                  </div>


                  <div>

                    <span>
                      Expected Delay
                    </span>

                    <strong>
                      7 minutes
                    </strong>

                  </div>

                </div>


                <button className="generate-button">
                  ✓ Accept Recommended Block
                </button>

              </div>


              {/* IMPACT */}

              <div className="impact-card">

                <h2>
                  📊 Block Impact
                </h2>

                <p>
                  Predicted operational impact
                </p>


                <div className="impact-item">

                  <span>
                    Trains affected
                  </span>

                  <strong>
                    2
                  </strong>

                </div>


                <div className="impact-item">

                  <span>
                    Expected delay
                  </span>

                  <strong>
                    7 min
                  </strong>

                </div>


                <div className="impact-item">

                  <span>
                    Asset availability
                  </span>

                  <strong>
                    96%
                  </strong>

                </div>


                <div className="impact-item">

                  <span>
                    AI confidence
                  </span>

                  <strong>
                    94%
                  </strong>

                </div>


                <div className="confidence">

                  <div className="confidence-label">

                    <span>
                      Optimization Score
                    </span>

                    <strong>
                      92%
                    </strong>

                  </div>


                  <div className="progress">

                    <div className="progress-fill"></div>

                  </div>

                </div>

              </div>

            </section>


            {/* MAINTENANCE TABLE */}

            <section className="table-card">

              <div className="table-header">

                <div>

                  <h2>
                    Today's Maintenance Blocks
                  </h2>

                  <p>
                    Current maintenance activities
                  </p>

                </div>


                <button className="view-button">
                  View All →
                </button>

              </div>


              <table>

                <thead>

                  <tr>

                    <th>
                      Section
                    </th>

                    <th>
                      Asset
                    </th>

                    <th>
                      Time
                    </th>

                    <th>
                      Maintenance
                    </th>

                    <th>
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody>

                  <tr>

                    <td>
                      Bengaluru – Mysuru
                    </td>

                    <td>
                      Track 12A
                    </td>

                    <td>
                      12:00 PM – 2:00 PM
                    </td>

                    <td>
                      Inspection
                    </td>

                    <td>

                      <span className="status recommended">
                        Recommended
                      </span>

                    </td>

                  </tr>


                  <tr>

                    <td>
                      Mysuru – Hassan
                    </td>

                    <td>
                      Signal 08
                    </td>

                    <td>
                      2:30 PM – 3:30 PM
                    </td>

                    <td>
                      Signal Maintenance
                    </td>

                    <td>

                      <span className="status completed">
                        Completed
                      </span>

                    </td>

                  </tr>


                  <tr>

                    <td>
                      Bengaluru – Tumakuru
                    </td>

                    <td>
                      Track 07B
                    </td>

                    <td>
                      4:00 PM – 6:00 PM
                    </td>

                    <td>
                      Rail Grinding
                    </td>

                    <td>

                      <span className="status pending">
                        Pending
                      </span>

                    </td>

                  </tr>

                </tbody>

              </table>

            </section>

          </>

        )}

      </main>

    </div>
  );
}

export default App;