export default class {
  constructor(arg){
    this.init()
    Object.preventExtensions(this)
  }

  init(){
    Object.assign( this, this.container_hash() )
  }

  container_hash(){
    throw "This method must be overridden";
  }

}