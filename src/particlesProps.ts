import { IParticlesProps } from 'react-tsparticles';

export const getParticlesProps: (theme: string) => IParticlesProps = (theme: string) => (
  { options: { fullScreen: {
    enable: true,
    zIndex: 1
  },
  particles: {
    number: {
      value  : 100,
      density: {
        enable    : true,
        value_area: 500
      }
    },
    color: {
      value: theme === 'light' ? '#000' : '#fff'
    },
    links: { // Add this section for connections between particles
      enable  : true,
      distance: 150,
      color   : theme === 'light' ? '#000' : '#fff', // Black lines in light theme, White in dark theme
      opacity : 0.3,
      width   : 1
    },
    shape: {
      type: 'circle' // You can keep your custom images too
    },
    opacity: {
      value : 0.3,
      random: true
    },
    size: {
      value : 4,
      random: true
    },
    move: {
      enable   : true,
      speed    : 1.5,
      direction: 'bottom',
      straight : false,
      out_mode : 'out',
      bounce   : false,
      attract  : {
        enable : false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode  : 'grab'
      },
      onClick: {
        enable: true,
        mode  : 'repulse'
      },
      resize: true
    }
  },
  retina_detect: true } });
