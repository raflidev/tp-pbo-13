class Product {
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

class Book extends Product {
  constructor(year, cost, title, maxAuthor, maxChapter){
    super(year, cost);
    this.title = title;
    this.maxAuthor = maxAuthor;
    this.maxChapter = maxChapter;
    this.numAuthor = 0;
    this.numChapter = 0;
    this.author = [];
    this.chapter = [];
  }

  getTitle(){
    return this.title;
  }

  setTitle(title){
    this.title = title;
  }

  getMaxAuthor(){
    return this.maxAuthor;
  }

  setMaxAuthor(maxAuthor){
    this.maxAuthor = maxAuthor;
  }

  getMaxChapter(){
    return this.maxChapter;
  }

  setMaxChapter(maxChapter){
    this.maxChapter = maxChapter;
  }

  getNumAuthor(){
    return this.numAuthor;
  }

  setNumAuthor(numAuthor){
    this.numAuthor = numAuthor;
  }

  getNumChapter(){
    return this.numChapter;
  }

  setNumChapter(numChapter){
    this.numChapter = numChapter;
  }

  getAuthor(){
    return this.author;
  }

  setAuthor(author){
    this.author = author;
  }

  getChapter(){
    return this.chapter;
  }

  setChapter(chapter){
    this.chapter = chapter;
  }

  addAuthor(name, royalty){
    if(this.numAuthor < this.maxAuthor){
      this.author[this.numAuthor] = new Author(name, royalty);
      this.numAuthor++;
    }
  }

  addChapter(chaptertitle, page){
    if(this.numChapter < this.maxChapter){
      this.chapter[this.numChapter] = new Chapter(chaptertitle, page);
      this.numChapter++;
    }
  }

  calculatePrice(){
    return (this.getCost() * 0.4) + this.getCost();
  }

  calculateTax(){
    return this.getCost() * 0.3;
  }

  toString(){
    return "Title: " + this.getTitle() + "  Year: " + this.getYear() + "  Cost: " + this.getCost() + "  Price: " + this.calculatePrice() + "  Tax: " + this.calculateTax();
  }

  setAuthorRoyalty(a, royalty)
  {
    a.setRoyalty(royalty);
    this.addAuthor(a)
  }
}

class Author{
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

class Chapter {
  constructor(chaptertitle, page) {
    this.chaptertitle = chaptertitle;
    this.page = page;
  }

  getChapterTitle() {
    return this.chaptertitle;
  }

  setChapterTitle(chaptertitle) {
    this.chaptertitle = chaptertitle;
  }

  getPage() {
    return this.page;
  }

  setPage(page) {
    this.page = page;
  }
}

const book = new Book(2015, 100, "The Hobbit", 3, 10);
const author = new Author("J.R.R. Tolkien", 100);

book.setAuthorRoyalty(author, 50);
document.getElementById("output").innerHTML = book.toString();