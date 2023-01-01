export class Author{
  constructor(name, royalty){
    this.name = name;
    this.royalty = royalty;
  }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  getRoyalty(){
    return this.royalty;
  }

  setRoyalty(royalty){
    this.royalty = royalty;
  }

  calculateRoyalty(){
    return this.royalty * 0.2;
  }
}