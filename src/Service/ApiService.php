<?php

namespace Infinity\Service;

use Infinity\Enum\Request\ActionEnum;
use Infinity\Enum\Request\TypeEnum;
use Infinity\Interfaces\ResourceServiceInterface;
use Infinity\Interfaces\ToolServiceInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ApiService
{
    public function __construct(
        private readonly ContextService $contextService,
        private readonly ResourceServiceInterface $resourceService,
        private readonly ToolServiceInterface $toolService
    ) {
    }

    public function handle(
        Request $request
    ): JsonResponse|null {
        $data = ['request' => $request];
        $fn = $this->contextService->getAction()->value;

        if (ActionEnum::Custom === $this->contextService->getAction()) {
            $fn = $this->contextService->getCustomAction();
        }

        if (TypeEnum::Tool === $this->contextService->getType()) {
            return $this->toolService->getTool(
                $this->contextService->getTarget()
            )->{$fn}(...$data);
        }

        return null;
    }
}
