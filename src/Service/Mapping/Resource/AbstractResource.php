<?php

namespace Infinity\Service\Mapping\Resource;

use Infinity\Interfaces\Mapping\FieldMapInterface;
use Infinity\Interfaces\Mapping\ResourceInterface;

/**
 * @template T of object
 * @implements ResourceInterface<T>
 */
abstract class AbstractResource implements ResourceInterface
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

    public function getTitle(
        ?object $entity = null
    ): string {
        $exploded = explode('\\', $this->entityClass);
        $label = end($exploded);

        if (null !== $entity) {
            $label .= ' - placeholder';
        }

        return $label;
    }

    /**
     * @return iterable<FieldMapInterface>
     */
    abstract public function getFields(): iterable;
}
