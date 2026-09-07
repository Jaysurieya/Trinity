import React from "react";
import { aiAnalysis } from "../../data";
import { SuccessIcon, BarChartIcon, PersonIcon, TargetIcon, PlayIcon } from "../Icons";

const ICON_MAP = {
  success: SuccessIcon,
  bar: BarChartIcon,
  person: PersonIcon,
  target: TargetIcon,
};

export default function AIAnalysis({ onGenerateReport }) {
  return (
    <section className="panel ai-analysis-panel">
      <div className="panel-header">
        <h2>AI Analysis</h2>
      </div>

      <div className="ai-analysis-list">
        {aiAnalysis.map((row) => {
          const RowIcon = ICON_MAP[row.icon];
          return (
            <div className="ai-analysis-row" key={row.id}>
              <RowIcon size={20} />
              <div className="ai-analysis-text">
                <span className="ai-analysis-label">{row.label}</span>
                <span className="ai-analysis-value" style={{ color: row.valueColor }}>
                  {row.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button type="button" className="generate-report-btn" onClick={onGenerateReport}>
        <PlayIcon size={14} />
        Generate Detailed Report
      </button>
    </section>
  );
}
