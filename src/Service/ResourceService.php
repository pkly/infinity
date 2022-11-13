<?php

namespace Infinity\Service;

use Infinity\Interfaces\Mapping\ResourceMapInterface;
use Infinity\Interfaces\ResourceServiceInterface;

class ResourceService implements ResourceServiceInterface
{
    /**
     * @param array<class-string, array<string, ResourceMapInterface>> $resources
     */
    public function __construct(
        private readonly array $resources = []
    ) {
    }

    public function getResource(
        string $class
    ): ResourceMapInterface {
        // TODO: Implement getResource() method.
    }

    public function getResources(): iterable
    {
        return $this->resources;
    }
}
