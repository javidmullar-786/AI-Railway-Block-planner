import { useState } from "react";
import "./App.css";
import Login from "./Login";
import BlockPlanner from "./BlockPlanner";
import TrainSchedule from "./TrainSchedule";
import Assets from "./Assets";
import Analytics from "./Analytics";

function App() {
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");

  // Show login screen if not authenticated
  if (!user) {
    return <Login onLogin={(loggedInUser) => setUser(loggedInUser)} />;
  }

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
          <button
            className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
            onClick={() => setActivePage("dashboard")}
          >
            🏠 <span>Dashboard</span>
          </button>

          <button
            className={`nav-item ${activePage === "planner" ? "active" : ""}`}
            onClick={() => setActivePage("planner")}
          >
            🧠 <span>Block Planner</span>
          </button>

          <button
            className={`nav-item ${activePage === "schedule" ? "active" : ""}`}
            onClick={() => setActivePage("schedule")}
          >
            🚆 <span>Train Schedule</span>
          </button>

          <button
            className={`nav-item ${activePage === "assets" ? "active" : ""}`}
            onClick={() => setActivePage("assets")}
          >
            🛤️ <span>Assets</span>
          </button>

          <button
            className={`nav-item ${activePage === "analytics" ? "active" : ""}`}
            onClick={() => setActivePage("analytics")}
          >
            📊 <span>Analytics</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button
            onClick={() => setUser(null)}
            style={{
              width: "100%",
              padding: "9px",
              marginBottom: "15px",
              background: "rgba(239, 68, 68, 0.2)",
              color: "#f87171",
              border: "1px solid #ef4444",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            🚪 Logout
          </button>

          <div className="system-status">
            <span className="status-dot"></span>
            System Online
          </div>
          <p>AI Block Planning v1.0</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {activePage === "planner" ? (
          <BlockPlanner />
        ) : activePage === "schedule" ? (
          <TrainSchedule />
        ) : activePage === "assets" ? (
          <Assets />
        ) : activePage === "analytics" ? (
          <Analytics />
        ) : (
          <>
            {/* HEADER */}
            <header className="header">
              <div>
                <h1>Railway Operations Dashboard</h1>
                <p>AI-powered maintenance block planning system</p>
              </div>

              <div className="header-right">
                <span className="notification">🔔</span>

                <div className="profile">
                  <div className="avatar">
                    {user.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <strong>{user.name}</strong>
                    <small>{user.role}</small>
                  </div>
                </div>
              </div>
            </header>

            {/* STATS GRID */}
            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🛤️</div>
                <div>
                  <p>Total Assets</p>
                  <h2>150</h2>
                  <span className="positive">↑ 4.2% this month</span>
                </div>
              </div>

              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{
                    background: "rgba(245, 158, 11, 0.2)",
                    borderColor: "rgba(245, 158, 11, 0.4)",
                    color: "#fbbf24",
                  }}
                >
                  🔧
                </div>
                <div>
                  <p>Maintenance Due</p>
                  <h2>23</h2>
                  <span className="warning">Needs attention</span>
                </div>
              </div>

              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{
                    background: "rgba(16, 185, 129, 0.2)",
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    color: "#34d399",
                  }}
                >
                  🚆
                </div>
                <div>
                  <p>Today's Blocks</p>
                  <h2>8</h2>
                  <span className="positive">5 completed</span>
                </div>
              </div>

              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{
                    background: "rgba(236, 72, 153, 0.2)",
                    borderColor: "rgba(236, 72, 153, 0.4)",
                    color: "#f472b6",
                  }}
                >
                  📈
                </div>
                <div>
                  <p>Asset Availability</p>
                  <h2>96%</h2>
                  <span className="positive">↑ 2.1% this week</span>
                </div>
              </div>
            </section>

            {/* DASHBOARD GRID */}
            <section className="dashboard-grid">
              <div className="recommendation-card">
                <div className="section-title">
                  <div>
                    <h2>🤖 AI Recommended Block</h2>
                    <p>Optimal maintenance window</p>
                  </div>
                  <span className="recommended-badge">RECOMMENDED</span>
                </div>

                <div className="block-time">
                  <div>
                    <span>START</span>
                    <strong>12:00 PM</strong>
                  </div>
                  <div className="arrow">→</div>
                  <div>
                    <span>END</span>
                    <strong>2:00 PM</strong>
                  </div>
                </div>

                <div className="recommendation-details">
                  <div>
                    <span>Railway Section</span>
                    <strong>Bengaluru – Mysuru</strong>
                  </div>
                  <div>
                    <span>Asset</span>
                    <strong>Track Section 12A</strong>
                  </div>
                  <div>
                    <span>Maintenance</span>
                    <strong>Track Inspection</strong>
                  </div>
                  <div>
                    <span>Expected Delay</span>
                    <strong style={{ color: "#38bdf8" }}>7 minutes</strong>
                  </div>
                </div>

                <button className="generate-button">
                  ✓ Accept Recommended Block
                </button>
              </div>

              <div className="impact-card">
                <h2>📊 Block Impact</h2>
                <p>Predicted operational impact</p>

                <div className="impact-item">
                  <span>Trains affected</span>
                  <strong>2</strong>
                </div>

                <div className="impact-item">
                  <span>Expected delay</span>
                  <strong>7 min</strong>
                </div>

                <div className="impact-item">
                  <span>Asset availability</span>
                  <strong>96%</strong>
                </div>

                <div className="impact-item">
                  <span>AI confidence</span>
                  <strong style={{ color: "#38bdf8" }}>94%</strong>
                </div>

                <div className="confidence">
                  <div className="confidence-label">
                    <span>Optimization Score</span>
                    <strong style={{ color: "#34d399" }}>92%</strong>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>

            {/* MAINTENANCE TABLE */}
            <section className="table-card">
              <div className="table-header">
                <div>
                  <h2>Today's Maintenance Blocks</h2>
                  <p>Current maintenance activities</p>
                </div>

                <button
                  className="view-button"
                  onClick={() => setActivePage("planner")}
                >
                  View All →
                </button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Asset</th>
                    <th>Time</th>
                    <th>Maintenance</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <strong>Bengaluru – Mysuru</strong>
                    </td>
                    <td>Track 12A</td>
                    <td>12:00 PM – 2:00 PM</td>
                    <td>Inspection</td>
                    <td>
                      <span className="status recommended">
                        Recommended
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Mysuru – Hassan</strong>
                    </td>
                    <td>Signal 08</td>
                    <td>2:30 PM – 3:30 PM</td>
                    <td>Signal Maintenance</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Bengaluru – Tumakuru</strong>
                    </td>
                    <td>Track 07B</td>
                    <td>4:00 PM – 6:00 PM</td>
                    <td>Rail Grinding</td>
                    <td>
                      <span className="status pending">Pending</span>
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