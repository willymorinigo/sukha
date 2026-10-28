import React from 'react';

interface GraphicAccentProps {
  className?: string;
  opacity?: number; // 0.10 to 0.35
  color?: 'terracotta' | 'teal' | 'mixed';
}

/**
 * Hand-drawn linear leaf branch with fine outlines
 */
export const HandDrawnLeaf: React.FC<GraphicAccentProps> = ({
  className = '',
  opacity = 0.2,
  color = 'terracotta',
}) => {
  const strokeColor = color === 'teal' ? '#1B9390' : '#DE7242';
  const fillColor = color === 'teal' ? '#1B9390' : '#DE7242';

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Central Curved Stem */}
      <path
        d="M20 140 C 50 110, 80 70, 130 20"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Organic Leaf Pair 1 */}
      <path
        d="M50 110 C 35 90, 25 70, 50 65 C 65 70, 60 90, 50 110 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill={fillColor}
        fillOpacity="0.15"
      />
      <path
        d="M50 110 C 70 100, 85 90, 80 75 C 65 70, 55 90, 50 110 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill={fillColor}
        fillOpacity="0.1"
      />
      {/* Organic Leaf Pair 2 */}
      <path
        d="M80 75 C 65 55, 60 35, 80 32 C 95 38, 90 58, 80 75 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill={fillColor}
        fillOpacity="0.15"
      />
      <path
        d="M80 75 C 100 65, 115 55, 110 40 C 95 38, 85 58, 80 75 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill={fillColor}
        fillOpacity="0.1"
      />
      {/* Top Leaf Tip */}
      <path
        d="M130 20 C 115 10, 110 0, 128 2 C 138 12, 135 18, 130 20 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill={fillColor}
        fillOpacity="0.2"
      />
    </svg>
  );
};

/**
 * Asymmetrical fluid curved contour frame
 */
export const FluidOrganicCurve: React.FC<GraphicAccentProps> = ({
  className = '',
  opacity = 0.22,
  color = 'terracotta',
}) => {
  const strokeColor = color === 'teal' ? '#1B9390' : '#DE7242';

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M 10 230 C 40 160, 30 90, 100 50 C 170 10, 210 60, 230 10"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeDasharray="4 2"
        strokeLinecap="round"
      />
      <path
        d="M 20 220 C 70 180, 80 120, 130 90 C 180 60, 200 40, 220 30"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Small organic dot cluster scatter
 */
export const DotCluster: React.FC<GraphicAccentProps> = ({
  className = '',
  opacity = 0.25,
  color = 'teal',
}) => {
  const fillColor = color === 'terracotta' ? '#DE7242' : '#1B9390';

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="3.5" fill={fillColor} />
      <circle cx="42" cy="15" r="2" fill={fillColor} />
      <circle cx="30" cy="38" r="4" fill={fillColor} />
      <circle cx="55" cy="30" r="2.5" fill={fillColor} />
      <circle cx="18" cy="55" r="2" fill={fillColor} />
      <circle cx="48" cy="52" r="3" fill={fillColor} />
      <circle cx="68" cy="18" r="1.8" fill={fillColor} />
      <circle cx="35" cy="72" r="2.5" fill={fillColor} />
    </svg>
  );
};

/**
 * Decorative short ray burst (sunburst / ray accents)
 */
export const SunburstAccent: React.FC<GraphicAccentProps> = ({
  className = '',
  opacity = 0.2,
  color = 'terracotta',
}) => {
  const strokeColor = color === 'teal' ? '#1B9390' : '#DE7242';

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <line x1="50" y1="10" x2="50" y2="24" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="22" y1="22" x2="32" y2="32" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10" y1="50" x2="24" y2="50" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="22" y1="78" x2="32" y2="68" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="78" y1="22" x2="68" y2="32" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="90" y1="50" x2="76" y2="50" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="50" cy="50" r="8" stroke={strokeColor} strokeWidth="1.4" fill="none" />
    </svg>
  );
};

/**
 * Translucent abstract botanical silhouette
 */
export const TranslucentBotanicalSilhouette: React.FC<GraphicAccentProps> = ({
  className = '',
  opacity = 0.15,
  color = 'teal',
}) => {
  const fillColor = color === 'terracotta' ? '#DE7242' : '#1B9390';

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M 30 180 Q 80 120 160 30 C 140 70 120 90 70 120 Z"
        fill={fillColor}
      />
      <path
        d="M 70 120 Q 110 80 180 50 C 140 100 110 120 70 120 Z"
        fill={fillColor}
      />
      <path
        d="M 40 160 Q 60 110 110 70 C 80 110 70 130 40 160 Z"
        fill={fillColor}
      />
    </svg>
  );
};

/**
 * Combined Corner Accents (Top Left & Bottom Right) for easy placement in section edges
 */
export const CornerOrganicDecoration: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  theme?: 'terracotta' | 'teal' | 'mixed';
  opacity?: number;
}> = ({ position, theme = 'mixed', opacity = 0.22 }) => {
  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-4 -translate-y-4',
    'top-right': 'top-0 right-0 translate-x-4 -translate-y-4 rotate-90',
    'bottom-left': 'bottom-0 left-0 -translate-x-4 translate-y-4 -rotate-90',
    'bottom-right': 'bottom-0 right-0 translate-x-4 translate-y-4 rotate-180',
  }[position];

  return (
    <div
      className={`absolute ${positionClasses} w-48 h-48 sm:w-64 sm:h-64 pointer-events-none z-0 overflow-hidden hidden sm:block`}
    >
      <FluidOrganicCurve
        className="absolute inset-0 w-full h-full"
        opacity={opacity}
        color={theme === 'mixed' ? 'terracotta' : theme}
      />
      <HandDrawnLeaf
        className="absolute top-4 left-4 w-28 h-28"
        opacity={opacity * 1.1}
        color={theme === 'mixed' ? 'terracotta' : theme}
      />
      <DotCluster
        className="absolute bottom-6 right-6 w-16 h-16"
        opacity={opacity * 1.2}
        color={theme === 'mixed' ? 'teal' : theme}
      />
    </div>
  );
};
