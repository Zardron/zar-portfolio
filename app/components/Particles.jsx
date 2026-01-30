"use client"

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Links particle configuration
const linksParticleOptions = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#8892b0",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#64ffda",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: {
        default: "bounce",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.5,
        },
      },
    },
  },
  detectRetina: true,
};

// Galaxy particle configuration
const galaxyParticleOptions = {
  fullScreen: {
    enable: true,
    zIndex: -2,
  },
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ["#4a5568", "#64ffda", "#8892b0", "#a0aec0"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 0.8 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    size: {
      value: { min: 0.5, max: 2 },
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      outModes: {
        default: "bounce",
      },
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
  },
  detectRetina: true,
};

export const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Memoize options to prevent unnecessary re-renders
  const linksOptions = useMemo(() => linksParticleOptions, []);
  const galaxyOptions = useMemo(() => galaxyParticleOptions, []);

  if (!init) return null;

  return (
    <>
      <Particles id="links-particles" options={linksOptions} />
      <Particles id="galaxy-particles" options={galaxyOptions} />
    </>
  );
}