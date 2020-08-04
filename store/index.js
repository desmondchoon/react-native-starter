import GeneralStore from "./general-store";

class Store {
  constructor(props) {
    this.generalStore = new GeneralStore(props);
  }
}

//export Store
export default new Store();