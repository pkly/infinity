<?php

namespace Infinity\Service\Mapping\Field;

use Infinity\Interfaces\Mapping\FieldMapInterface;
use Infinity\Traits\Mapping\FieldPropertyTrait;

abstract class AbstractFieldMap implements FieldMapInterface
{
    use FieldPropertyTrait;
}
