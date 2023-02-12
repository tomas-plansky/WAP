<?php

declare(strict_types=1);

use BasicPHPUnitTest\password\Password;

class PasswordTest extends PHPUnit\Framework\TestCase {

    public function testGenerate() {
        $password = Password::generate();
        $this->assertIsString($password);
        $this->assertEquals(8, strlen($password));

        $password = Password::generate(10);
        $this->assertIsString($password);
        $this->assertEquals(10, strlen($password));

        $password = Password::generate(10, true);
        $this->assertIsString($password);
        $this->assertEquals(10, strlen($password));

        $password = Password::generate(10, true, true);
        $this->assertIsString($password);
        $this->assertEquals(10, strlen($password));
    }
    
    public function testCheck() {
        $password = Password::generate();
        $this->assertTrue(Password::check($password, $password));
        
        $password = Password::generate();
        $otherPassword = Password::generate();
        $this->assertFalse(Password::check($password, $otherPassword));
    }

}