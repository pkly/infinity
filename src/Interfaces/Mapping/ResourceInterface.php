<?php

namespace Infinity\Interfaces\Mapping;

/**
 * For the time being this interface is only responsible as an autoconfigure target
 *
 * @template T of object
 */
interface ResourceInterface
{
    /**
     * @return class-string<T>
     */
    public function getEntityClass(): string;

    /**
     * Returns the title of the entity to be displayed
     *
     * @param T|null $entity if no object is specified the title should apply to the entity as a group
     *
     * @return string
     */
    public function getTitle(
        ?object $entity = null
    ): string;
}
