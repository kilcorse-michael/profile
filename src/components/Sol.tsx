import { useRef, useEffect } from "react";

export default function Sol() {
  const ref = useRef<SVGCircleElement>(null);
  function svgSizer() {
    if (window.innerHeight > window.innerWidth) {
      return window.innerWidth / 2.5;
    } else {
      return window.innerWidth / 8;
    }
  }
  return (
    <svg className="h-screen w-screen">
      <defs>
        <radialGradient id="radialGradient">
          <stop offset="0%" stopColor="gold" />
          <stop offset="100%" stopColor="orange" />
        </radialGradient>
      </defs>
      <g>
        <circle
          ref={ref}
          className="drop-shadow-glow animate-pulse"
          cx="50%"
          cy="50%"
          r={svgSizer()}
        />
        <circle
          className="drop-shadow-glow"
          cx="50%"
          cy="50%"
          r={svgSizer()}
          fill="url(#radialGradient)"
        />
        <text
          x="50%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl text-black"
        >
          Hello! My name is
        </text>

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-5xl font-thin tracking-wide text-black"
        >
          MICHAEL KILCORSE
        </text>

        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl text-black"
        >
          I am a
        </text>
        <text
          x="50%"
          y="59%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-4xl font-thin  text-black"
        >
          Designer & Developer
        </text>
        <text
          x="50%"
          y="63%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-slate-400 text-sm lg:text-lg mb-3 tracking-wider"
        >
          (and I really like space)
        </text>
      </g>
    </svg>
  );
}
