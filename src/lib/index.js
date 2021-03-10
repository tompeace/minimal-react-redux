export const noop = () => {}

export const isArray = arr => Array.isArray(arr)

export const isEmpty = (obj = {}) => 
  [Object, Array].includes(obj.constructor) && !Object.entries(obj).length;