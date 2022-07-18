import React from "react";

const { useState, useEffect, useRef, useMemo } = React;
import dynamic from "next/dynamic";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });
const World = ({ height }) => {
  const N = 10;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    maxR: Math.random() * 20 + 3,
    propagationSpeed: (Math.random() - 0.5) * 20 + 1,
    repeatPeriod: Math.random() * 2000 + 200,
  }));

  const colorInterpolator = (t) => `rgba(255,100,50,${Math.sqrt(1 - t)})`;

  return (
    <div>
      <Globe
        animateIn
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        ringsData={gData}
        ringColor={() => colorInterpolator}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        height={height}
      />
    </div>
  );
};

export default World;
