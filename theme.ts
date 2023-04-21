/*
 * @Author: liru
 * @Date: 2023-04-21 14:20:46
 * @LastEditTime: 2023-04-21 15:39:10
 * @FilePath: \gradeProtection\src\utils\theme.ts
 * @Description: set theme color
 */
const node = document.documentElement
// 前缀
const pre = '--el-color-primary'
// 白色
const white = '#ffffff'
// 黑色
const black = '#000000'
// 覆盖样式
const setThemsColor = (color: string) => {
  node.style.setProperty(pre, color)
  // 计算并设置light颜色
  for (let i = 1; i < 10; i++) {
    node.style.setProperty(`${pre}-light-${i}`, mix(color, white, i * 0.1))
  }
  // 计算并设置dark颜色
  node.style.setProperty(`${pre}-dark-2`, mix(color, black, 0.2))
}

const mix = (color1: string, color2: string, weight: number) => {
  weight = Math.max(Math.min(Number(weight), 1), 0)
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)
  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)
  const r = Math.round(r1 * (1 - weight) + r2 * weight)
  const g = Math.round(g1 * (1 - weight) + g2 * weight)
  const b = Math.round(b1 * (1 - weight) + b2 * weight)
  const _r = ('0' + (r || 0).toString(16)).slice(-2)
  const _g = ('0' + (g || 0).toString(16)).slice(-2)
  const _b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + _r + _g + _b
}

export default setThemsColor
