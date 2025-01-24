export const particlesConfig = {
  particles: {
    number: {
      value: 50, // уменьшаем количество частиц
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    opacity: {
      value: 0.1,
      random: true
    },
    size: {
      value: 1,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1, // уменьшаем скорость
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false // отключаем интерактивность при наведении
      },
      onclick: {
        enable: false // отключаем интерактивность при клике
      },
      resize: true
    }
  },
  retina_detect: false // отключаем обработку retina для повышения производительности
}; 