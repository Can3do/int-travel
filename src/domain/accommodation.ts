class Accommodation {
  #name!: string;
  #cost!: number;

  constructor(name: string, cost: number) {
    this.setName (name);
    this.setCost (cost);
  }
  
  getName() {
    return this.#name;
  }

  setName(name: string) {
    this.#name = name;
  }

  getCost() {
    return this.#cost;
  }

  setCost(cost: number) {
    if(cost < 0) throw new Error("el costo debe ser mayor o igual a cero");
    this.#cost = cost;
  }
}
export default Accommodation;
