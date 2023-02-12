<?php

interface Pushable {

    public function push(mixed $value);
    
    public function pop(): mixed;
  
}