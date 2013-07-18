<?php
header('Content-type: application/xml');
$handle = fopen($_REQUEST['http://www.rietimeeting.com/feed'], "r");

if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>