<?php

header("Access-Control-Allow-Origin: *");

$string = file_get_contents('database/Albums.json');

header('Content-Type: application/json');
    
echo $string;