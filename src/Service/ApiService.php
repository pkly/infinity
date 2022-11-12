<?php

namespace Infinity\Service;

use Infinity\Enum\Request\ActionEnum;
use Infinity\Enum\Request\TypeEnum;
use Infinity\Interfaces\ResourceServiceInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ApiService
{
    private ContextService $contextService;
    private ResourceServiceInterface $resourceService;

    public function __construct(
        ContextService $contextService,
        ResourceServiceInterface $resourceService,
    ) {
        $this->contextService = $contextService;
        $this->resourceService = $resourceService;
    }

    public function handle(
        Request $request
    ): JsonResponse|null {
        $data = ['request' => $request];
        $fn = $this->contextService->getAction()->value;

        if (ActionEnum::Custom === $this->contextService->getAction()) {
            $fn = $this->contextService->getCustomAction();
        }

        if (TypeEnum::Resource === $this->contextService->getType()) {
            try {
                return $this->resourceService->{$fn}(...$data);
            } catch (\Throwable $e) {
                dump($e);
                return null;
            }
        }

        return null;
    }
}
