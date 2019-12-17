import { mergeWith } from 'lodash';

// Customizer for mergeWith that will concat array elements to an existing array
const arrayConcatCustomizer = (objVal, srcVal) => {
  if (objVal instanceof Array && srcVal instanceof Array) { 
      return objVal.concat(srcVal);
  }
}

export const mergeWithConcat = (object, ...sources) => {
  return mergeWith(object, ...sources, arrayConcatCustomizer)
}