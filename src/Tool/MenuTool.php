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
        $map = [];

        foreach ($this->resourceService->getResources() as $class => $resources) {
            foreach ($resources as $id => $interface) {
                $map[] = [
                    'entity' => $class,
                    'class' => $id,
                    'label' => $interface->getTitle(),
                ];
            }
        }

        return $this->json([
            'resources' => $map,
        ]);
    }
}
