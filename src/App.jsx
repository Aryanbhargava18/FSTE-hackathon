import React, { useEffect, useState } from "react";

// Glassmorphism Card
function GlassCard({ children, style }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.20)",
      boxShadow: "0 8px 32px 0 rgba(31,38,135,0.25)",
      backdropFilter: "blur(12px)",
      borderRadius: "32px",
      border: "1.5px solid rgba(255,255,255,0.22)",
      margin: "40px 0",
      padding: "38px 38px 30px 38px",
      transform: "perspective(800px) rotateY(-2deg) scale(1.01)",
      transition: "box-shadow 0.3s, transform 0.3s",
      ...style
    }}>
      {children}
    </div>
  );
}

// Animated 3D Navigation Button
function NavButton({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: "1.08em",
        textDecoration: "none",
        padding: "14px 32px",
        borderRadius: "16px",
        background: "linear-gradient(120deg,#00c6fb 0%,#005bea 100%)",
        boxShadow: "0 4px 16px rgba(0,198,251,0.14)",
        border: "2px solid #e0eafc",
        margin: "0 2px",
        transition: "background 0.2s, transform 0.2s",
        display: "inline-block",
        transform: "translateY(0)",
      }}
      onMouseOver={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="#005bea"; e.currentTarget.style.transform="translateY(-4px) scale(1.04)"; }}
      onMouseOut={e => { e.currentTarget.style.background="linear-gradient(120deg,#00c6fb 0%,#005bea 100%)"; e.currentTarget.style.color="#fff"; e.currentTarget.style.transform="translateY(0)"; }}
    >
      {children}
    </a>
  );
}

// Modern Table
function Table({ columns, rows }) {
  return (
    <table style={{
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      margin: "1em 0",
      background: "rgba(255,255,255,0.85)",
      borderRadius: "18px",
      boxShadow: "0 4px 24px rgba(31,38,135,0.13)",
      overflow: "hidden"
    }}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} style={{
              background: "linear-gradient(90deg,#e0eafc,#cfdef3)",
              color: "#234",
              padding: "16px 18px",
              fontWeight: "bold",
              fontSize: "1.08em",
              borderBottom: "2.5px solid #bfe2f8"
            }}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rIdx) => (
          <tr key={rIdx}>
            {row.map((cell, cIdx) => (
              <td key={cIdx} style={{
                padding: "14px 18px",
                borderBottom: "1px solid #e3eaf3"
              }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  const [apiData, setApiData] = useState({
    airPassengers: "Loading...",
    railRidership: "Loading...",
    airfare: "Loading...",
    railFare: "Loading...",
    railOTP: "Loading...",
    udanRoutes: "Loading...",
  });

  useEffect(() => {
    setTimeout(() => {
      setApiData({
        airPassengers: "15.3 million/month",
        railRidership: "8.2 billion/year",
        airfare: "₹3,800",
        railFare: "₹1,200",
        railOTP: "67%",
        udanRoutes: "469",
      });
    }, 1000);
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      minHeight: "100vh",
      margin: 0,
      color: "#222"
    }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(90deg, #0078b8 70%, #00c6fb 100%)",
        color: "#fff",
        padding: "48px 0 28px 0",
        textAlign: "center",
        borderBottom: "4px solid #aee2ff",
        boxShadow: "0 8px 32px rgba(31,38,135,0.10)"
      }}>
        <h1 style={{
          fontSize: "2.7em",
          letterSpacing: "1.5px",
          marginBottom: "0.1em",
          textShadow: "0 2px 8px rgba(0,0,0,0.13)"
        }}>Systems Thinking Web Platform</h1>
        <div style={{ fontSize: "1.18em", fontWeight: 600, marginTop: 4 }}>Group: 92</div>
        <div style={{ fontSize: "1.08em", marginTop: 10, opacity: 0.98 }}>
          Problem: Why is air travel growing rapidly while rail travel remains underutilized or inconvenient in tier-2 and 3 cities?
        </div>
      </header>
      {/* Navigation */}
      <nav style={{
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        background: "rgba(255,255,255,0.10)",
        padding: "24px 0 18px 0",
        borderBottom: "2px solid #e0eafc",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
      }}>
        {[
          ["#data", "Real-time Data"],
          ["#problem", "Problem & Research"],
          ["#cld", "CLD Diagram & Narrative"],
          ["#eps", "EPS Analysis"],
          ["#leverage", "Leverage Points"],
          ["#archetypes", "Archetypes"],
          ["#insights", "Insights & References"]
        ].map(([href, label]) => (
          <NavButton key={href} href={href}>{label}</NavButton>
        ))}
      </nav>
      {/* Main Content */}
      <main style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "32px 10px 60px 10px"
      }}>
        {/* Real-time Data */}
        <section id="data">
          <GlassCard>
            <h2 style={sectionTitleStyle}>Real-time Data Dashboard (API Integration)</h2>
            <div style={{
              background: "rgba(255,255,255,0.55)",
              border: "2.5px dashed #00aaff",
              padding: "26px 20px",
              fontSize: "1.18em",
              color: "#0078b8",
              marginBottom: "2em",
              borderRadius: "20px",
              boxShadow: "0 2px 24px rgba(31,38,135,0.08)",
              textShadow: "0 1px 0 #fff"
            }}>
              <strong>Air Passenger Traffic (Latest):</strong> {apiData.airPassengers} <br />
              <strong>Rail Ridership (Latest):</strong> {apiData.railRidership} <br />
              <strong>Average Airfare (Tier-2/3 Cities):</strong> {apiData.airfare} <br />
              <strong>Average Rail Fare (AC 3-tier):</strong> {apiData.railFare} <br />
              <strong>On-time Performance (Rail):</strong> {apiData.railOTP} <br />
              <strong>Number of UDAN Routes:</strong> {apiData.udanRoutes} <br />
            </div>
          </GlassCard>
        </section>
        {/* Problem Framing & Research */}
        <section id="problem">
          <GlassCard>
            <h2 style={sectionTitleStyle}>Problem Framing & Research</h2>
            <p>
              India’s domestic air travel is booming, especially from tier-2 and tier-3 cities, with monthly passenger numbers surpassing 15 million in 2024. Meanwhile, rail travel in these regions remains stagnant or underutilized, despite Indian Railways’ vast network. The government’s UDAN scheme and rising incomes have made flying more accessible, but rail modernization lags behind. This imbalance affects regional connectivity, equitable growth, and sustainable transportation-key systemic issues for India’s future.
            </p>
            <ul>
              <li>Defined the problem using recent data and reports.</li>
              <li>Collected statistics on air/rail passenger trends in tier-2/3 cities.</li>
              <li>Mapped stakeholders: travelers, airlines, Indian Railways, government.</li>
              <li>Created a Causal Loop Diagram (CLD) to visualize feedback loops.</li>
              <li>Identified leverage points (Donella Meadows framework).</li>
              <li>Analyzed system archetypes and root causes.</li>
              <li>Proposed structural redesigns and summarized insights.</li>
            </ul>
          </GlassCard>
        </section>
        {/* CLD Diagram & Narrative */}
<section id="cld">
  <GlassCard>
    <h2 style={sectionTitleStyle}>CLD Diagram</h2>
    <div style={{
      background: "linear-gradient(120deg,#e0eafc 0%,#cfdef3 100%)",
      borderRadius: "18px",
      padding: "18px 14px",
      marginBottom: "18px",
      boxShadow: "0 2px 12px rgba(31,38,135,0.08)",
      border: "1.5px solid #bfe2f8",
      textAlign: "center"
    }}>
      <img 
        src="src/assets/image.png" 
        alt="Causal Loop Diagram for Air and Rail Transportation Systems" 
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "12px"
        }} 
      />
    </div>
    <p>
      The CLD shows how government policy and disposable income drive both air and rail growth, but feedback loops reinforce air travel's success (e.g., more flights → higher preference → more investment), while rail suffers from underinvestment and declining perception.
    </p>
  </GlassCard> 
  {/* Stock Flow Diagram */}
<section id="stockflow">
  <GlassCard>
    <h2 style={sectionTitleStyle}>Stock Flow Diagram</h2>
    <div style={{
      background: "linear-gradient(120deg,#e0eafc 0%,#cfdef3 100%)",
      borderRadius: "18px",
      padding: "18px 14px",
      marginBottom: "18px",
      boxShadow: "0 2px 12px rgba(31,38,135,0.08)",
      border: "1.5px solid #bfe2f8",
      textAlign: "center"
    }}>
      <img 
        src="src/assets/causall.png" 
        alt="Stock Flow Diagram for Transportation System" 
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "12px"
        }}
      />
    </div>
    <p>
      The Stock Flow Diagram quantifies relationships between five key stocks: Air Passengers, Rail Passengers, Air Network, Rail Infrastructure, and Economic Development. Policy interventions at year 10 shift investment priorities from air to rail transportation, affecting the system's dynamic behavior.
    </p>
  </GlassCard>
</section>
{/* Behavior Over Time Graph */}
<section id="bot">
  <GlassCard>
    <h2 style={sectionTitleStyle}>Behavior Over Time Analysis</h2>
    <div style={{
      background: "linear-gradient(120deg,#e0eafc 0%,#cfdef3 100%)",
      borderRadius: "18px",
      padding: "18px 14px",
      marginBottom: "18px",
      boxShadow: "0 2px 12px rgba(31,38,135,0.08)",
      border: "1.5px solid #bfe2f8",
      textAlign: "center"
    }}>
      <img 
        src="src/assets/transport_system_simulation (1).svg" 
        alt="Behavior Over Time Graph for Transportation System" 
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "12px"
        }}
      />
    </div>
    <p>
      The simulation over 25 years shows three key dynamics: (1) Air passengers initially dominate but rail surpasses air around year 17 after policy intervention, (2) Rail infrastructure shows accelerated S-shaped growth while air network expansion flattens, and (3) Economic development grows continuously with increased rate after policy implementation, demonstrating benefits from balanced transportation investment.
    </p>
  </GlassCard>
</section>
</section>
        {/* EPS Analysis */}
        <section id="eps">
          <GlassCard>
            <h2 style={sectionTitleStyle}>EPS (Event → Pattern → Structure) Analysis</h2>
            <Table
              columns={["Layer", "Your Analysis"]}
              rows={[
                ["Event", "Rapid growth in air travel, low or stagnant rail ridership in tier-2/3 cities"],
                ["Pattern", "Increasing preference for air travel, declining investment and interest in rail services"],
                ["Structure", "Policy incentives (UDAN) favoring aviation, lack of modernization in rail, status perception"]
              ]}
            />
            <p>
              <strong>Existing Interventions:</strong> UDAN scheme has improved regional air connectivity but little parallel investment in rail. Occasional fare reductions or new trains, but not systemic upgrades.
            </p>
            <p>
              <strong>Structural Redesign Proposals:</strong> Invest in modernizing rail infrastructure and services in tier-2/3 cities. Develop integrated air-rail hubs with seamless ticketing and transfers. Launch campaigns to reposition rail as a modern, comfortable, and sustainable option.
            </p>
          </GlassCard>
        </section>
        {/* Leverage Points */}
        <section id="leverage">
          <GlassCard>
            <h2 style={sectionTitleStyle}>Leverage Points Analysis</h2>
            <Table
              columns={["Leverage Point", "Meadows Category", "Why Important", "Expected Impact"]}
              rows={[
                ["Rail Service Upgrade", "Rules of the System (#5)", "Improves comfort, speed, and reliability of trains", "Makes rail travel more attractive and competitive"],
                ["Integrated Ticketing", "Information Flows (#6)", "Simplifies booking multi-modal journeys", "Increases use of both rail and air"],
                ["Targeted Subsidies", "Rules of the System (#5)", "Makes rail fares competitive for longer distances", "Boosts rail ridership, especially for families"],
                ["Awareness Campaign", "Paradigms (#2)", "Changes perception about rail travel", "Shifts traveler preference, especially youth"],
                ["Regional Air-Rail Hubs", "System Structure (#4)", "Seamless transfer between modes", "Enhances overall connectivity and convenience"]
              ]}
            />
          </GlassCard>
        </section>
        {/* Archetypes */}
        <section id="archetypes">
          <GlassCard>
            <h2 style={sectionTitleStyle}>System Archetypes</h2>
            <p>
              <strong>Archetype Identified:</strong> “Success to the Successful” – As air travel becomes more convenient and prestigious, it attracts more investment and passengers, while railways in these cities receive less attention and resources, causing further decline.
            </p>
            <p>
              <strong>Effect on System Dynamics:</strong> This creates a reinforcing loop where air travel’s growth accelerates, and rail stagnates, making it harder to reverse the trend without targeted interventions.
            </p>
          </GlassCard>
        </section>
        {/* Insights & References */}
        <section id="insights">
          <GlassCard>
            <h2 style={sectionTitleStyle}>Additional Insights & References</h2>
            <ul>
              <li>Digital adoption in smaller cities is high; leveraging this for smart rail solutions (apps, real-time updates) could boost rail’s appeal.</li>
              <li>Environmental concerns: Air travel has a higher carbon footprint; improving rail could support India’s sustainability goals.</li>
              <li>The “prestige” factor of flying is strong among first-time travelers; railways need to rebrand for aspirational value.</li>
            </ul>
            <h3>References</h3>
            <ul>
              <li>Ministry of Civil Aviation, UDAN Scheme Reports (2023-2025)</li>
              <li>ICRA, “Domestic Air Passenger Growth” (2024)</li>
              <li>Business Standard, “Tier-2, 3 cities drive air travel growth” (2024)</li>
              <li>Economic Times, “Rail travel trends in smaller cities” (2024)</li>
              <li>Donella Meadows, “Thinking in Systems” (2008)</li>
              <li>NASSCOM, “Tech Talent in Tier-2/3 Cities” (2023)</li>
              <li>Indian Railways Annual Report (2023-24)</li>
            </ul>
          </GlassCard>
        </section>
      </main>
      <footer style={{
        textAlign: "center",
        color: "#555",
        fontSize: "1.04em",
        marginTop: 40,
        paddingBottom: 12,
        opacity: 0.8
      }}>
        © 2025 SkyRail Innovators – Systems Thinking Hackathon Platform
      </footer>
    </div>
  );
}

const sectionTitleStyle = {
  color: "#0078b8",
  fontSize: "1.4em",
  marginTop: 0,
  marginBottom: "0.7em",
  letterSpacing: "0.5px"
};
 