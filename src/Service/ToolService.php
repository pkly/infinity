<?php

namespace Infinity\Service;

use Infinity\Exception\Tool\NotFoundException;
use Infinity\Interfaces\Tool\ToolInterface;
use Infinity\Interfaces\ToolServiceInterface;

class ToolService implements ToolServiceInterface
{
    /**
     * @param array<string, ToolInterface> $tools
     */
    public function __construct(
        private readonly array $tools = []
    ) {
    }

    public function getTool(
        string $identifier
    ): ToolInterface {
        return $this->tools[$identifier] ?? throw new NotFoundException();
    }
}
