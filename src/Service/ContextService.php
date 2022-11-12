<?php

namespace Infinity\Service;

use Infinity\Enum\Request\ActionEnum;
use Infinity\Enum\Request\TypeEnum;
use Infinity\Enum\Request\ParameterEnum;
use Infinity\Exception\Context\InvalidContextOptionException;
use Symfony\Component\HttpFoundation\Request;

class ContextService
{
    private ActionEnum|null $action = null;
    private string|null $customAction = null;
    private TypeEnum|null $type = null;
    private string|null $target = null;
    private string|null $entityId = null;

    public function initialize(
        Request $request
    ): static {
        if (null === ($this->action = ActionEnum::tryFrom($tmp = $request->query->get(ParameterEnum::Action->value)))) {
            throw new InvalidContextOptionException(sprintf('Unexpected value %s for action', $tmp));
        }

        if (ActionEnum::Custom === $this->action && null === ($this->customAction = $request->query->get(ParameterEnum::CustomAction->value))) {
            throw new InvalidContextOptionException('No custom action was specified');
        }

        if (null === ($this->type = TypeEnum::tryFrom($tmp = $request->query->get(ParameterEnum::Type->value)))) {
            throw new InvalidContextOptionException(sprintf('Unexpected value %s for type', $tmp));
        }

        if (null === ($this->target = $request->query->get(ParameterEnum::Target->value))) {
            throw new InvalidContextOptionException('No target specified for api action');
        }


        $this->entityId = $request->query->get(ParameterEnum::EntityId->value);

        return $this;
    }

    public function getAction(): ActionEnum|null
    {
        return $this->action;
    }

    public function getCustomAction(): string|null
    {
        return $this->customAction;
    }

    public function getType(): TypeEnum|null
    {
        return $this->type;
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
