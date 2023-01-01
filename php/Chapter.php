<?php
class Chapter
{

  private $chaptertitle;
  private $page;

  public function __construct($chaptertitle, $page)
  {
    $this->chaptertitle = $chaptertitle;
    $this->page = $page;
  }

  public function getChapterTitle()
  {
    return $this->chaptertitle;
  }

  public function getPage()
  {
    return $this->page;
  }

  public function setChapterTitle($chaptertitle)
  {
    $this->chaptertitle = $chaptertitle;
  }

  public function setPage($page)
  {
    $this->page = $page;
  }
}
