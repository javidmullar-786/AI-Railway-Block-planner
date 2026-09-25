import { useState } from "react";

function BlockPlanner() {
  const [section, setSection] = useState("");
  const [asset, setAsset] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [duration, setDuration] = useState("");
  const [priority, setPriority] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateBlock = async () => {
    if (!section || !asset || !maintenance || !duration || !priority) {
      alert("Please fill all the fields.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/generate-block", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          section: section,
          asset: asset,
          maintenance: maintenance,
          duration: Number(duration),
          priority: priority,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Unable to connect to backend. Please make sure FastAPI is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 style={{ color: "#ffffff", fontWeight: 800 }}>🧠 AI Block Planner</h1>
          <p style={{ color: "#94a3b8" }}>
            Generate an optimal railway maintenance block using the AI planning system.
          </p>
        </div>
        <div className="header-badge">AI ENGINE ACTIVE</div>
      </div>

      <div className="dashboard-grid">
        {/* FORM PANEL */}
        <div
          className="recommendation-card"
          style={{
            background: "rgba(30, 41, 59, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "16px",
            padding: "25px",
          }}
        >
          <h2 style={{ color: "#ffffff", fontSize: "18px", marginBottom: "20px" }}>
            Block Planning Details
          </h2>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Railway Section</label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select section</option>
              <option value="Bengaluru - Mysuru">Bengaluru - Mysuru</option>
              <option value="Bengaluru - Chennai">Bengaluru - Chennai</option>
              <option value="Delhi - Mumbai">Delhi - Mumbai</option>
              <option value="Mumbai - Pune">Mumbai - Pune</option>
            </select>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Asset</label>
            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select asset</option>
              <option value="Track Section 12A">Track Section 12A</option>
              <option value="Track Section 15B">Track Section 15B</option>
              <option value="Signal System 04">Signal System 04</option>
              <option value="Overhead Equipment 07">Overhead Equipment 07</option>
            </select>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Maintenance Type</label>
            <select
              value={maintenance}
              onChange={(e) => setMaintenance(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select maintenance</option>
              <option value="Track Inspection">Track Inspection</option>
              <option value="Track Repair">Track Repair</option>
              <option value="Signal Maintenance">Signal Maintenance</option>
              <option value="Electrical Maintenance">Electrical Maintenance</option>
            </select>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select duration</option>
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
            </select>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <button
            onClick={generateBlock}
            disabled={loading}
            className="generate-button"
          >
            {loading ? "⏳ Calculating Optimal Block..." : "🤖 Generate Optimal Block"}
          </button>
        </div>

        {/* AI RECOMMENDATION RESULT */}
        <div
          className="recommendation-card"
          style={{
            background: "rgba(30, 41, 59, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "16px",
            padding: "25px",
          }}
        >
          <div className="section-title">
            <h2 style={{ color: "#ffffff", fontSize: "18px" }}>🤖 AI Recommendation</h2>
            {result && <span className="recommended-badge">RECOMMENDED</span>}
          </div>

          {!result && !loading && (
            <div style={{ padding: "50px 20px", textAlign: "center", color: "#94a3b8" }}>
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                Fill in the planning details and click <br />
                <strong style={{ color: "#38bdf8" }}>Generate Optimal Block</strong> <br />
                to receive an AI recommendation.
              </p>
            </div>
          )}

          {loading && (
            <div style={{ padding: "50px 20px", textAlign: "center", color: "#818cf8" }}>
              <p style={{ fontSize: "14px", fontWeight: 600 }}>
                🤖 AI is calculating the optimal block window...
              </p>
            </div>
          )}

          {result && (
            <div style={{ marginTop: "20px" }}>
              <div className="block-time">
                <div>
                  <span>START TIME</span>
                  <strong>{result.recommended_start}</strong>
                </div>
                <div className="arrow">→</div>
                <div>
                  <span>END TIME</span>
                  <strong>{result.recommended_end}</strong>
                </div>
              </div>

              <div className="recommendation-details">
                <div>
                  <span>Railway Section</span>
                  <strong>{result.section}</strong>
                </div>
                <div>
                  <span>Asset</span>
                  <strong>{result.asset}</strong>
                </div>
                <div>
                  <span>Maintenance</span>
                  <strong>{result.maintenance}</strong>
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div className="impact-item">
                  <span>🚆 Trains affected</span>
                  <strong style={{ color: "#f8fafc" }}>{result.trains_affected}</strong>
                </div>
                <div className="impact-item">
                  <span>⏱ Expected delay</span>
                  <strong style={{ color: "#38bdf8" }}>{result.expected_delay} mins</strong>
                </div>
                <div className="impact-item">
                  <span>📊 Asset availability</span>
                  <strong style={{ color: "#34d399" }}>{result.asset_availability}%</strong>
                </div>
                <div className="impact-item">
                  <span>🤖 AI confidence</span>
                  <strong style={{ color: "#38bdf8" }}>{result.ai_confidence}%</strong>
                </div>
                <div className="impact-item">
                  <span>🎯 Optimization score</span>
                  <strong style={{ color: "#34d399" }}>{result.optimization_score}%</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "12px",
  fontWeight: 600,
  color: "#38bdf8",
  marginBottom: "6px",
};

const selectStyle = {
  display: "block",
  width: "100%",
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  background: "#0f172a",
  color: "#ffffff",
  fontSize: "13px",
  outline: "none",
  cursor: "pointer",
};

export default BlockPlanner;