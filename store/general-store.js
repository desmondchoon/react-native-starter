// import observable from mobx
import { observable } from "mobx";

//create a store with count observable
class GeneralStore {
  @observable hello = "Hello World";
}

//export Store
export default GeneralStore;