<?php

use BasicPHPUnitTest\password;

require __DIR__ . "/vendor/autoload.php";

echo password\Password::generate(16, false, false) . PHP_EOL;
echo password\Password::generate(16, false, true) . PHP_EOL;
echo password\Password::generate(16, true, true) . PHP_EOL;