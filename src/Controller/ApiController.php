<?php

namespace Infinity\Controller;

use Infinity\Interfaces\ResourceServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    #[Route('/api/menu', name: 'infinity.api.menu', methods: ['GET'])]
    public function menu(
        ResourceServiceInterface $service
    ): JsonResponse {
        $resources = [];

        foreach ($service->getResources() as $resource) {
            $resources[] = $resource->getEntityClass();
        }

        return $this->json([
            'resources' => $resources,
        ]);
    }

    #[Route('/api', name: 'infinity.api', methods: ['POST', 'GET', 'PATCH', 'DELETE'])]
    public function api(): JsonResponse
    {
        return $this->json(['ok']);
    }
}
