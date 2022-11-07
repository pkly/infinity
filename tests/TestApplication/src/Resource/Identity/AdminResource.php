<?php

namespace Test\Infinity\TestApplication\Resource\Identity;

use Infinity\Service\Mapping\Field\TextFieldMap;
use Infinity\Service\Mapping\Resource\AbstractResourceMap;
use Test\Infinity\TestApplication\Entity\Identity\Admin;

/**
 * @extends AbstractResourceMap<Admin>
 */
class AdminResource extends AbstractResourceMap
{
    public function __construct()
    {
        parent::__construct(Admin::class);
    }

    public function getFields(): iterable
    {
        yield new TextFieldMap();
    }
}
