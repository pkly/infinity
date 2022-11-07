<?php

namespace Infinity\Interfaces\Mapping;

/**
 * For the time being this interface is only responsible as an autoconfigure target
 *
 * @template T of object
 */
interface ResourceMapInterface
{
    /**
     * @return class-string<T>
     */
    public function getEntityClass(): string;
}
