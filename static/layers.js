// 秋天
const layers = [
  {
    resources: [
      {
        src: "./static/39f5846ccf601e178afe37eef2e9759d38078d56.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.7,
    },
    rotate: {},
    translate: {},
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 0,
    name: "01 bg",
  },
  {
    resources: [
      {
        src: "./static/0a3bf7a4c7c3b8b5b63aae6adf57c5fabeeb0cff.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.6,
    },
    rotate: {},
    translate: {
      initial: [130, 10],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 1,
    name: "02 中间舞台",
  },
  {
    resources: [
      {
        src: "./static/3333f15a7b34f6cf89938cb5852b12fba7d7e2a6.webm",
        id: 0,
      },
    ],
    scale: {
      initial: 0.6,
    },
    rotate: {},
    translate: {
      initial: [60, 70],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 18,
    name: "动态水上光",
  },
  {
    resources: [
      {
        src: "./static/e737e375a9bf412f802feaec18ee52ad517b4db9.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.25,
    },
    rotate: {},
    translate: {
      initial: [-60, 130],
      offset: [20, 0],
    },
    blur: {
      initial: 0.5,
    },
    opacity: {
      initial: 0.7,
      wrap: "clamp",
    },
    id: 13,
    name: "小兔子",
  },
  {
    resources: [
      {
        src: "./static/9539f58accbf88eb810a45ff2cbefbf1c29840c3.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.8,
    },
    rotate: {},
    translate: {
      initial: [1000, -40],
      offset: [20, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 4,
    name: "05 右边树林",
  },
  {
    resources: [
      {
        src: "./static/b5514fc043485ce31d0c91a398aeb288261256dc.png",
        id: 0,
      },
    ],
    scale: {},
    rotate: {},
    translate: {
      initial: [850, -10],
      offset: [30, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 5,
    name: "06 右边土地",
  },
  {
    resources: [
      {
        src: "./static/9cc0c1c3b87ca0ea32b80c3b08611e794108348b.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.5,
    },
    rotate: {},
    translate: {
      initial: [450, 60],
      offset: [80, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 12,
    name: "小兔子",
  },
  {
    resources: [
      {
        src: "./static/8512395c322494ef32b0fb40821e8e66fb291b53.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.7,
    },
    rotate: {},
    translate: {
      initial: [-800, 0],
      offset: [95, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 6,
    name: "07 左侧石头",
  },
  {
    resources: [
      {
        src: "./static/e737e375a9bf412f802feaec18ee52ad517b4db9.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.6,
    },
    rotate: {},
    translate: {
      initial: [-1100, 40],
      offset: [150, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 9,
    name: "左侧远处小兔子",
  },
  {
    resources: [
      {
        src: "./static/f5e02d26b199c851032d5237e7fe9bab0fe456d4.webm",
        id: 0,
      },
    ],
    scale: {
      initial: 0.6,
    },
    rotate: {},
    translate: {},
    blur: {},
    opacity: {
      initial: 0.6,
      wrap: "clamp",
    },
    id: 21,
    name: "运动粒子",
  },
  {
    resources: [
      {
        src: "./static/6e9dd4d7f26b117773661aeed3a357641d519f2a.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.7,
    },
    rotate: {},
    translate: {
      offset: [50, -10],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 17,
    name: "花朵粒子",
  },
  {
    resources: [
      {
        src: "./static/f48b2d7535cae1ed97c7bb3c69d29e574cbe30c6.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.55,
    },
    rotate: {},
    translate: {
      initial: [-200, 50],
      offset: [100, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 10,
    name: "2233",
  },
  {
    resources: [
      {
        src: "./static/4d9b71139bc84c4ddd1b37a906115c4b0c54af87.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.5,
    },
    rotate: {},
    translate: {
      initial: [700, 70],
      offset: [200, 0],
    },
    blur: {},
    opacity: {
      initial: 0,
      wrap: "clamp",
    },
    id: 11,
    name: "右边石头",
  },
  {
    resources: [
      {
        src: "./static/cd873292b7b3ae5603b546e1ecdf05fecaa955f3.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.6,
    },
    rotate: {},
    translate: {
      initial: [-700, 0],
      offset: [200, 0],
    },
    blur: {},
    opacity: {
      initial: 0,
      wrap: "clamp",
    },
    id: 7,
    name: "08 左侧水植物",
  },
  {
    resources: [
      {
        src: "./static/f3a02af183b808d236d0cc7997cbeb8958ef9bb0.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.55,
    },
    rotate: {},
    translate: {
      initial: [-700, 40],
      offset: [300, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 8,
    name: "09 小兔子",
  },
  {
    resources: [
      {
        src: "./static/cd873292b7b3ae5603b546e1ecdf05fecaa955f3.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.8,
    },
    rotate: {},
    translate: {
      initial: [1000, 0],
      offset: [300, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 14,
    name: "右侧水上植物",
  },
  {
    resources: [
      {
        src: "./static/3483ce9cad9fc3dd80f34cb164bcd5eeb1606332.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.7,
    },
    rotate: {},
    translate: {
      initial: [-200, 0],
      offset: [300, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 15,
    name: "图层15",
  },
  {
    resources: [
      {
        src: "./static/988a546df1cdf5eeefa0a5c319bc6b4bfca7d42d.png",
        id: 0,
      },
    ],
    scale: {
      initial: 0.7,
    },
    rotate: {},
    translate: {
      initial: [800, 0],
      offset: [400, 0],
    },
    blur: {},
    opacity: {
      wrap: "clamp",
    },
    id: 16,
    name: "图层16",
  },
];
