<?php

require_once('Pushable.php');

class FIFO implements Pushable {
    
    private array $queue = [];

    public function push(mixed $value) {
        $this->queue[] = $value;
    }

    public function pop(): mixed {
        return array_shift($this->queue);
    }

}