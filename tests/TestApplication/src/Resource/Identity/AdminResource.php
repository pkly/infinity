<?php

namespace Test\Infinity\TestApplication\Resource\Identity;

use Infinity\Attribute\Resource;
use Infinity\Service\Mapping\Field\TextFieldMap;
use Infinity\Service\Mapping\Resource\AbstractResource;
use Test\Infinity\TestApplication\Entity\Identity\Admin;

/**
 * @extends AbstractResource<Admin>
 */
#[Resource(Admin::class)]
class AdminResource extends AbstractResource
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
