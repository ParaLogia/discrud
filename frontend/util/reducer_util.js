import { mergeWith } from 'lodash';

// Customizer for mergeWith that will "push" new elements onto an array value
const arrayPushCustomizer = (objVal, srcVal) => {
  if (objVal instanceof Array) {
    if (objVal.includes(srcVal)) {
      return objVal;
    } else {
      return objVal.concat([srcVal]);
    }
  }
}

export const mergeWithUniqueArray = (object, ...sources) => {
  return mergeWith(object, ...sources, arrayPushCustomizer)
}