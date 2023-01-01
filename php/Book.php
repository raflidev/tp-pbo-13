<?php
include "Chapter.php";
include "Product.php";

class Book extends Product
{

  private $title;
  private $Author = array();
  private $Chapter = array();
  private $numAuthor;
  private $numChapter;
  private $maxAuthor;
  private $maxChapter;

  public function __construct($year, $cost, $title, $maxAuthor, $maxChapter)
  {
    parent::__construct($year, $cost);
    $this->title = $title;
    $this->maxAuthor = $maxAuthor;
    $this->maxChapter = $maxChapter;
    $this->numAuthor = 0;
    $this->numChapter = 0;
  }

  public function getTitle()
  {
    return $this->title;
  }

  public function getAuthor()
  {
    return $this->Author;
  }

  public function getChapter()
  {
    return $this->Chapter;
  }

  public function getNumAuthor()
  {
    return $this->numAuthor;
  }

  public function getNumChapter()
  {
    return $this->numChapter;
  }

  public function getMaxAuthor()
  {
    return $this->maxAuthor;
  }

  public function getMaxChapter()
  {
    return $this->maxChapter;
  }

  public function setTitle($title)
  {
    $this->title = $title;
  }

  public function setAuthor($Author)
  {
    $this->Author = $Author;
  }

  public function setChapter($Chapter)
  {
    $this->Chapter = $Chapter;
  }

  public function setNumAuthor($numAuthor)
  {
    $this->numAuthor = $numAuthor;
  }

  public function setNumChapter($numChapter)
  {
    $this->numChapter = $numChapter;
  }

  public function setMaxAuthor($maxAuthor)
  {
    $this->maxAuthor = $maxAuthor;
  }

  public function setMaxChapter($maxChapter)
  {
    $this->maxChapter = $maxChapter;
  }

  public function Addauthor($Author)
  {
    if ($this->numAuthor < $this->maxAuthor) {
      $this->Author[$this->numAuthor] = $Author;
      $this->numAuthor++;
    }
  }

  public function Createchapter($title, $page)
  {
    if ($this->numChapter < $this->maxChapter) {
      $this->Chapter[$this->numChapter] = new Chapter($title, $page);
      $this->numChapter++;
    }
  }

  public function calculateTax()
  {
    return $this->getCost() * 0.3;
  }

  public function calculatePrice()
  {
    return $this->getCost() * 0.4 + $this->getCost();
  }

  public function __toString()
  {
    return "Title: " . $this->getTitle() . " Year: " . $this->getYear() . " Cost: " . $this->getCost() . " Harga: " . $this->calculatePrice() . " Pajak: " . $this->calculateTax(0.5);
  }

  public function setAuthorRoyalty($a, $royalty)
  {
    $a->setRoyalty($royalty);
    $this->Addauthor($a);
  }
}
