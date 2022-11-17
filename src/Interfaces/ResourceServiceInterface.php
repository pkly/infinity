<?php

namespace Infinity\Interfaces;

use Infinity\Interfaces\Mapping\ResourceInterface;

interface ResourceServiceInterface
{
    /**
     * @param class-string $class
     *
     * @return ResourceInterface
     *
     * @todo: throws etc.
     */
    public function getResource(
        string $class
    ): ResourceInterface;

    /**
     * Where key is the entity class and value is an array of id -> ResourceMapInterface
     *
     * @return iterable<class-string, iterable<string, ResourceInterface>>
     */
    public function getResources(): iterable;
}
