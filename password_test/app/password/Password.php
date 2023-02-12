<?php

namespace BasicPHPUnitTest\password;

class Password {

    public static function generate(int $length = 8, bool $useSpecialChars = false, bool $useNumbers = true): string {
        $password = '';
        $numbers = '0123456789';
        $specialChars = '!@#$%^&*()_+-=';
        $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if ($useSpecialChars) {
            $chars .= $specialChars;
        }
        if ($useNumbers) {
            $chars .= $numbers;
        }
        for ($i = 0; $i < $length; $i++) {
            $password .= $chars[rand(0, strlen($chars) - 1)];
        }
        return $password;
    }

    public static function check(string $password, string $otherPassword): bool {
        return $password === $otherPassword;
    }

}