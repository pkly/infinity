<?php

namespace Infinity\Enum\Request;

enum ActionEnum: string
{
    case Index = 'index';
    case Detail = 'detail';
    case Edit = 'edit';
    case Create = 'create';
    case Delete = 'delete';
    case Custom = 'custom';
}
