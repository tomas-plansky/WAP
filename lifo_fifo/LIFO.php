<?php

require_once('Pushable.php');

class LIFO implements Pushable {

    private array $stack = [];

    public function push(mixed $value) {
        $this->stack[] = $value;
    }

    public function pop(): mixed {
        return array_pop($this->stack);
    }

}