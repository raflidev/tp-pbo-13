<?php
class Author implements Taxable
{

  private $name;
  private $royalty;

  public function __construct($name, $royalty)
  {
    $this->name = $name;
    $this->royalty = $royalty;
  }

  public function setName($name)
  {
    if ($name == null) {
      $this->name = "";
    }
    $this->name = $name;
  }

  public function getName()
  {
    return $this->name;
  }

  public function setRoyalty($royalty)
  {
    if ($royalty < 0) {
      $this->royalty = 0;
    }
    $this->royalty = $royalty;
  }

  public function getRoyalty()
  {
    return $this->royalty;
  }

  public function calculateTax()
  {
    return $this->royalty * 0.3;
  }
}
