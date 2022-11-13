<?php

namespace Infinity\Interfaces;

use Infinity\Exception\Tool\NotFoundException;
use Infinity\Interfaces\Tool\ToolInterface;

interface ToolServiceInterface
{
    /**
     * @param string $identifier
     *
     * @return ToolInterface
     *
     * @throws NotFoundException
     */
    public function getTool(
        string $identifier
    ): ToolInterface;
}
