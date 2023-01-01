<?php
abstract class Product implements Taxable
{
  private $year;
  private $cost;
  private $price;
  public function __construct($year, $cost)
  {
    $this->year = $year;
    $this->cost = $cost;
  }
  public function getYear()
  {
    return $this->year;
  }
  public function getCost()
  {
    return $this->cost;
  }
  public function getPrice()
  {
    return $this->price;
  }
  public function setYear($year)
  {
    $this->year = $year;
  }
  public function setCost($cost)
  {
    $this->cost = $cost;
  }
  public function setPrice($price)
  {
    $this->price = $price;
  }
  public function calculateTax()
  {
    return $this->price * 0.3;
  }
  abstract public function calculatePrice();
}
