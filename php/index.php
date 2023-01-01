<?php
include "Taxable.php";
include "Book.php";
include "Author.php";

$book = new Book(2015, 100, "The Hobbit", 3, 10);
$author = new Author("J.R.R. Tolkien", 100);

$book->setAuthorRoyalty($author, 50);
echo $book->__toString();
