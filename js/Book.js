import {Product} from "./Product"
import {Author} from "./Author"
import {Chapter} from "./Chapter"

export class Book extends Product {
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