<?php

namespace Infinity\Service;

use Infinity\Interfaces\Mapping\ResourceInterface;
use Infinity\Interfaces\ResourceServiceInterface;

class ResourceService implements ResourceServiceInterface
{
    /**
     * @param array<class-string, array<string, ResourceInterface>> $resources
     */
    public function __construct(
        private readonly array $resources = []
    ) {
    }

    public function getResource(
        string $class
    ): ResourceInterface {
        // TODO: Implement getResource() method.
    }

    public function getResources(): iterable
    {
        return $this->resources;
    }
}
