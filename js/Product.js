export class Product {
  constructor(year, cost) {
    this.year = year;
    this.cost = cost;
    this.price = 0;
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    this.year = year;
  }

  getCost() {
    return this.cost;
  }

  setCost(cost) {
    this.cost = cost;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }
 
  calculateTax(){
    return this.price * 0.3;
  }
}