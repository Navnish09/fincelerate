import React, { ReactNode } from "react";

interface PentagonProps {
  size?: number;
  className?: string;
  children?: React.ReactNode;
  pointTexts?: [ReactNode?, ReactNode?, ReactNode?, ReactNode?, ReactNode?];
}

export const Pentagon = ({
  size = 200,
  className = "",
  children,
  pointTexts = [],
}: PentagonProps) => {
  // Calculate positions for text at each point (outside the pentagon)
  const getPointPosition = (index: number) => {
    const angles = [-90, -18, 54, 126, 198]; // Degrees for each point
    const radius = size * 0.6; // Increased radius to place text outside
    const centerX = size / 2;
    const centerY = size / 2;

    const angle = (angles[index] * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return { x, y: y + 18 };
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Main pentagon shape */}
      <div
        className="absolute bg-black shadow-lg transform transition-all duration-300"
        style={{
          width: size,
          height: size - 15,
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      />

      {/* Center children content */}
      {children && (
        <div
          className="absolute flex items-center justify-center text-white font-medium"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {children}
        </div>
      )}

      {/* Point texts */}
      {pointTexts.map((pointContent, index) => {
        if (!pointContent) return null;
        const position = getPointPosition(index);
        return (
          <div
            key={index}
            className="absolute text-xs font-bold text-center"
            style={{
              left: position.x,
              top: position.y,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            {pointContent}
          </div>
        );
      })}
    </div>
  );
};

export default Pentagon;
