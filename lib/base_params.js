"use strict";
export default class {
  constructor(arg){
    this.init()
    deepSeal(this)
  }

  init(){
    Object.assign( this, this.container_hash() )
  }

  container_hash(){
    throw "This method must be overridden";
  }

}


function deepSeal (o) {
  // Object.seal(o);
  if (o === undefined) {
    return o;
  }

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o[prop] !== null
    && (typeof o[prop] === "object" || typeof o[prop] === "function")
    && Object.isExtensible(o[prop])) {
      deepSeal(o[prop]);
    }
  });

  return o;
};