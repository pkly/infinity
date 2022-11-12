<?php

namespace Infinity\Enum\Request;

enum ParameterEnum: string
{
    case Action = 'action';
    case CustomAction = 'customAction';
    case Target = 'target';
    case EntityId = 'entityId';
    case Type = 'type';
}
