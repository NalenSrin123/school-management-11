import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaDollarSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer,} from "recharts";

const barData = [
  { month: "Jan", Teacher: 68000, Student: 48000 },
  { month: "Feb", Teacher: 52000, Student: 55000 },
  { month: "Mar", Teacher: 40000, Student: 60000 },
  { month: "Apr", Teacher: 48000, Student: 58000 },
  { month: "May", Teacher: 115000, Student: 88000 },
  { month: "Jun", Teacher: 55000, Student: 55000 },
  { month: "Jul", Teacher: 48000, Student: 30000 },
  { month: "Aug", Teacher: 35000, Student: 40000 },
  { month: "Sep", Teacher: 75000, Student: 65000 },
  { month: "Oct", Teacher: 105000, Student: 60000 },
  { month: "Nov", Teacher: 60000, Student: 42000 },
  { month: "Dec", Teacher: 55000, Student: 48000 },
];

const pieData = [
  { name: "Male", value: 9000 },
  { name: "Female", value: 6000 },
];

const PIE_COLORS = ["#7C3AED", "#F97316"];

const StatCard = ({ label, value, icon, bg, iconColor }) => (
  <div
    style={{
      background: bg,
      borderRadius: 16,
      padding: "20px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      minWidth: 140,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    }}
  >
    <div>
      <div style={{ fontSize: 13, color: "#888", marginBottom: 6, fontFamily: "Nunito, sans-serif" }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#1a1a2e", fontFamily: "Nunito, sans-serif" }}>{value}</div>
    </div>
    <div style={{ fontSize: 36, color: iconColor }}>{icon}</div>
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontFamily: "Nunito, sans-serif", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>{label}</div>
        {payload.map((p) => (
          <div key={p.name} style={{ color: p.color }}>
            {p.name}: {(p.value / 1000).toFixed(0)}k
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value }) => {
  if (name !== "Female") return null;
  const radius = outerRadius + 28;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <g>
      <polygon
        points={`${x - 6},${y - 8} ${x + 6},${y - 8} ${x},${y}`}
        fill="#FBBF24"
      />
      <rect x={x - 52} y={y - 8} width={104} height={22} rx={5} fill="#FBBF24" />
      <text x={x} y={y + 8} textAnchor="middle" fill="#1a1a2e" fontSize={12} fontFamily="Nunito, sans-serif" fontWeight={700}>
        chhen chhoeung
      </text>
    </g>
  );
};

export default function AdminDashboard() {
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimIn(true), 80);
  }, []);

  const fadeStyle = (delay = 0) => ({
    opacity: animIn ? 1 : 0,
    transform: animIn ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        fontFamily: "Nunito, sans-serif",
        padding: "32px 28px",
      }}
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');`}</style>

      {/* Title */}
      <div style={{ ...fadeStyle(0), marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>Admin Dashboard</h1>
      </div>

      {/* Stat Cards */}
      <div style={{ ...fadeStyle(80), display: "flex", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
        <StatCard label="Students" value="15.00K" icon="🎓" bg="#ede9fe" iconColor="#7C3AED" />
        <StatCard label="Teachers" value="2.00K" icon="👩‍🏫" bg="#e0f2fe" iconColor="#0ea5e9" />
        <StatCard label="Parents" value="5.6K" icon="👨‍👩‍👧" bg="#fff7ed" iconColor="#F97316" />
        <StatCard label="Earnings" value="$19.3K" icon="💰" bg="#dcfce7" iconColor="#22c55e" />
      </div>

      {/* Charts Row */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {/* Bar Chart */}
        <div
          style={{
            ...fadeStyle(160),
            background: "#fff",
            borderRadius: 18,
            padding: "24px 20px 12px",
            flex: "2 1 420px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
          }}
        >
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#1a1a2e" }}>All Exam Result</div>
            <div style={{ fontSize: 12, color: "#aaa" }}>Students &amp; Teacher</div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData} barSize={10} barCategoryGap="30%">
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#aaa", fontFamily: "Nunito, sans-serif" }} axisLine={false} tickLine={false} />
              <YAxis
                tickFormatter={(v) => `${v / 1000}0k`}
                tick={{ fontSize: 11, fill: "#aaa", fontFamily: "Nunito, sans-serif" }}
                axisLine={false}
                tickLine={false}
                width={38}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(124,58,237,0.04)" }} />
              <Legend
                iconType="circle"
                iconSize={9}
                wrapperStyle={{ fontSize: 13, fontFamily: "Nunito, sans-serif", paddingTop: 8 }}
              />
              <Bar dataKey="Teacher" fill="#7C3AED" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Student" fill="#F97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div
          style={{
            ...fadeStyle(240),
            background: "#fff",
            borderRadius: 18,
            padding: "24px 20px",
            flex: "1 1 260px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#1a1a2e" }}>Students</div>
            <div style={{ fontSize: 20, color: "#aaa", cursor: "pointer" }}>⋮</div>
          </div>

          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={110}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  strokeWidth={0}
                  labelLine={false}
                  label={<CustomLabel />}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={entry.name} fill={PIE_COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Center label */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -54%)",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <div style={{ fontSize: 13, color: "#aaa", fontWeight: 600 }}>Total</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1 }}>15000</div>
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 4 }}>
            {pieData.map((d, i) => (
              <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#555", fontWeight: 600 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: PIE_COLORS[i], display: "inline-block" }} />
                {d.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}