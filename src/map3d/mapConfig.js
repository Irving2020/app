const Depth = 6;

export const mapConfig = {
  // 地图挤出厚度
  mapDepth: Depth,
  // 地图透明度
  mapTransparent: true,
  mapOpacity: 0.9,
  // 地图颜色
  mapColor: "#1ED760", // 地图原本颜色
  mapHoverColor: "#0B284E", // 地图hover颜色
  // 地图人数渐变
  mapColorGradient: ["#1ED760", "#428220", "#096B0A", "#556238"],
  // 地图侧面渐变
  mapSideColor1: "#3F9FF3",
  mapSideColor2: "#266BF0",
  // 上面的line
  topLineColor: 0x41c0fb,
  topLineWidth: 3,
  topLineZIndex: Depth + 0.5,
  // label 2d高度
  label2dZIndex: Depth + 2,
  // spot
  spotZIndex: Depth + 0.2,
};
