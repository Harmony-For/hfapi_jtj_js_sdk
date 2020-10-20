"use strict";

export default class {
  constructor(arg) {
    this.init();
    if (typeof arg == "string" || typeof arg == "number") {
      // idの時はfetch
      this.fetch(arg);
    }
    if (typeof arg == "object") {
      // objectの時はassignするだけ
      Object.assign(this, arg);
      this.after_assign();
    }
  }

  init() {
    Object.assign(this, this.container_hash());
    this.isFetched = false
  }

  fetch(id){
    if (!id) { id = this.id }
    this.query().execute({id: id}).then(resp=>{
      Object.assign(this, resp.data);
      this.isFetched = true
      this.after_assign();
    }).catch(resp=>{
      console.log(resp);
    })
  }
  
  assign(value){
    Object.assign(this, value)
    this.isFetched = true
  }

  container_hash() {
    throw "This method must be overridden";
  }

  query(){
    throw "This method must be overridden";
  }

  after_assign(){
    console.log("after_assign hook is run");
  }
}
