<?php

namespace Infinity\Enum\Request;

enum TypeEnum: string
{
    case Resource = 'resource';
    case Tool = 'tool';
    case ResourceTool = 'resourceTool';
}
