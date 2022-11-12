<?php

namespace Infinity\Service;

use Infinity\Interfaces\Mapping\ResourceMapInterface;
use Infinity\Interfaces\ResourceServiceInterface;
use Infinity\Traits\SerializerTrait;
use Symfony\Component\HttpFoundation\JsonResponse;

class ResourceService implements ResourceServiceInterface
{
    use SerializerTrait;

    /**
     * @param array<class-string, ResourceMapInterface> $resources
     */
    public function __construct(
        private readonly array $resources = []
    ) {
    }

    public function index(): JsonResponse
    {
        $resources = [];

        foreach ($this->getResources() as $resource) {
            $resources[] = $resource->getEntityClass();
        }

        return $this->json([
            'resources' => $resources,
        ]);
    }

    public function getResource(
        string $class
    ): ResourceMapInterface {
        // TODO: Implement getResource() method.
    }

    public function getResources(): iterable
    {
        return $this->resources;
    }
}
