<?php

namespace Infinity\Interfaces;

use Infinity\Exception\Resource\NotFoundException;
use Infinity\Interfaces\Mapping\ResourceInterface;

/**
 * @template T of object
 */
interface ResourceServiceInterface
{
    /**
     * @param class-string<T> $class
     * @param string|null $serviceId
     *
     * @return ResourceInterface<T>
     *
     * @throws NotFoundException
     */
    public function getResource(
        string $class,
        string|null $serviceId = null
    ): ResourceInterface;

    /**
     * Where key is the entity class and value is an array of id -> ResourceMapInterface
     *
     * @return iterable<class-string<T>, iterable<string, ResourceInterface<T>>>
     */
    public function getResources(): iterable;
}
