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
     * @return iterable<ResourceMapInterface>
     */
    public function getResources(): iterable;
}
