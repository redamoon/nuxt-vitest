export function regex(str) {
  return /^(http|https|tel):\/\//.test(str)
}
