export default class {
  constructor(arg){
    this.init()
  }

  init(){
    Object.assign( this, this.container_hash() )
  }

  container_hash(){
    throw "This method must be overridden";
  }

}