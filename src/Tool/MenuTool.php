<?php

namespace Infinity\Tool;

use Infinity\Interfaces\Api\IndexInterface;
use Infinity\Interfaces\ResourceServiceInterface;
use Infinity\Interfaces\Tool\ToolInterface;
use Infinity\Traits\SerializerTrait;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class MenuTool implements ToolInterface, IndexInterface
{
    use SerializerTrait;

    public function __construct(
        private readonly ResourceServiceInterface $resourceService
    ) {
    }

    public function index(
        Request $request
    ): JsonResponse {
        $resources = [];

        foreach ($this->resourceService->getResources() as $class => $arr) {
            $resources[] = $class;
        }

        return $this->json([
            'resources' => $resources,
        ]);
    }
}
