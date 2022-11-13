<?php

namespace Infinity\Attribute;

#[\Attribute(\Attribute::TARGET_CLASS)]
class Resource
{
    /**
     * @param class-string $class
     */
    public function __construct(
        public readonly string $class
    ) {
    }
}
