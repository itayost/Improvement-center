import React from 'react';
import { Users, Activity, Award, Clock } from 'lucide-react';

const stats = [
    { label: "אנשי מקצוע בצוות", value: "100+", icon: <Users /> },
    { label: "שיעור הצלחה", value: "87%", icon: <Activity /> },
    { label: "שנות ניסיון", value: "8+", icon: <Award /> },
    { label: "פריסה ארצית", value: "נמצאים בכל הארץ", icon: <Clock /> },
];

export default function Stats() {
    return (
        <section className="stats-section">
            <div className="container stats-container">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-item">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>

            <style>{`
        .stats-section {
          background: white;
          padding: 2rem 0;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          border-bottom-left-radius: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .stats-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          text-align: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }
        .stat-icon {
          color: var(--color-primary-blue);
          margin-bottom: 0.25rem;
          transform: scale(1.2);
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: 900;
          background: var(--color-secondary-green-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }
        .stat-label {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .stats-section {
            padding: 4rem 0;
            border-bottom-left-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
            margin-bottom: 2rem;
          }
          .stats-container {
            display: flex;
            justify-content: space-around;
            gap: 2rem;
          }
          .stat-icon {
            margin-bottom: 0.5rem;
            transform: scale(1.5);
          }
          .stat-value {
            font-size: 2.5rem;
          }
          .stat-label {
            font-size: 1.1rem;
          }
        }
      `}</style>
        </section>
    );
}
