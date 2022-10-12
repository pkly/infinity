<?php

namespace Infinity\Service\Mapping\Resource;

use Infinity\Interfaces\Mapping\FieldMapInterface;
use Infinity\Interfaces\Mapping\ResourceMapInterface;

/**
 * @template T of object
 * @implements ResourceMapInterface<T>
 */
abstract class AbstractResourceMap implements ResourceMapInterface
{
    /**
     * @var class-string<T>
     */
    private string $entityClass;

    /**
     * @param class-string<T> $entityClass
     */
    public function __construct(
        string $entityClass
    ) {
        $this->entityClass = $entityClass;
    }

    /**
     * @return class-string<T>
     */
    public function getEntityClass(): string
    {
        return $this->entityClass;
    }

    /**
     * @return iterable<FieldMapInterface>
     */
    abstract public function getFields(): iterable;
}
