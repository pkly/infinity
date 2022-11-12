<?php

namespace Infinity\Enum;

enum RequestParameterEnum: string
{
    case Action = 'action';
    case Target = 'target';
    case EntityId = 'entityId';
}
