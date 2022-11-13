<?php

namespace Infinity\Interfaces;

use Infinity\Interfaces\Mapping\ResourceMapInterface;

interface ResourceServiceInterface
{
    /**
     * @param class-string $class
     *
     * @return ResourceMapInterface
     *
     * @todo: throws etc.
     */
    public function getResource(
        string $class
    ): ResourceMapInterface;

    /**
     * Where key is the entity class and value is an array of id -> ResourceMapInterface
     *
     * @return iterable<class-string, iterable<string, ResourceMapInterface>>
     */
    public function getResources(): iterable;
}
