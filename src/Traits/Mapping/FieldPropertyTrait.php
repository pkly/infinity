<?php

namespace Infinity\Traits\Mapping;

/**
 * This field contains the shared properties of mapped fields, so that they can be quickly implemented
 */
trait FieldPropertyTrait
{
    protected bool $virtual = false;

    public function isVirtual(): bool
    {
        return $this->virtual;
    }

    public function setVirtual(
        bool $virtual = true
    ): static {
        $this->virtual = $virtual;

        return $this;
    }
}
