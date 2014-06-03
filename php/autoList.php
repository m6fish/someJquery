<?php
$term = $_GET['term'];

$rawArr = array("apple","banana","code","deck","email","fox","alt","cap","duck","ate");
$ansArr = array();

foreach ($rawArr as $value) {
    //search for same word.
    if (strpos($value, $term) === false) {

    } else {
        $ansArr[] = $value;    
    }
}

echo json_encode($ansArr);

