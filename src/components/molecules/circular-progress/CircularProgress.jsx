import React from "react";

const CircularProgress = ({ percentage }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  if (percentage > 100) {
    percentage = 100;
  } else if (percentage < 0) {
    percentage = 0;
  }

  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="140" height="140">
      <circle
        cx="70"
        cy="70"
        r={radius}
        stroke="#dddddd"
        strokeWidth="8"
        fill="transparent"
      />

      <circle
        cx="70"
        cy="70"
        r={radius}
        stroke="#3dcae8"
        strokeWidth="8"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
      />

      <text x="50%" y="50%" className="fill-primary-400 text-3xl font-bold" dominantBaseline="middle" textAnchor="middle">
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgress;
