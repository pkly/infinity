<?php

namespace Infinity\Service;

use Infinity\Exception\Resource\NotFoundException;
use Infinity\Interfaces\Mapping\ResourceInterface;
use Infinity\Interfaces\ResourceServiceInterface;

/**
 * @template T of object
 * @implements ResourceServiceInterface<T>
 */
class ResourceService implements ResourceServiceInterface
{
    /**
     * @param array<class-string<T>, array<string, ResourceInterface<T>>> $resources
     */
    public function __construct(
        private readonly array $resources = []
    ) {
    }

    public function getResource(
        string $class,
        string|null $serviceId = null
    ): ResourceInterface {
        if (empty($items = $this->resources[$class] ?? [])) {
            throw new NotFoundException();
        }

        if (null !== $serviceId) {
            return $items[$serviceId] ?? throw new NotFoundException();
        }

        return current($items);
    }

    public function getResources(): iterable
    {
        return $this->resources;
    }
}
