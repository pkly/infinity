<?php

namespace Infinity\Service;

use Infinity\Enum\ActionEnum;
use Infinity\Enum\RequestParameterEnum;
use Infinity\Exception\Context\InvalidContextOptionException;
use Symfony\Component\HttpFoundation\Request;

class ContextService
{
    private ActionEnum|null $action = null;
    private string|null $target = null;
    private string|null $entityId = null;

    public function initialize(
        Request $request
    ): static {
        if (null === ($this->action = ActionEnum::tryFrom($tmp = $request->query->get(RequestParameterEnum::Action->value)))) {
            throw new InvalidContextOptionException(sprintf('Unexpected value %s for action', $tmp));
        }

        if (null === ($this->target = $request->query->get(RequestParameterEnum::Target->value))) {
            throw new InvalidContextOptionException('No target specified for api action');
        }

        $this->entityId = $request->query->get(RequestParameterEnum::EntityId->value);

        return $this;
    }

    public function getAction(): ActionEnum|null
    {
        return $this->action;
    }

    public function getTarget(): string|null
    {
        return $this->target;
    }

    public function getEntityId(): string|null
    {
        return $this->entityId;
    }
}
