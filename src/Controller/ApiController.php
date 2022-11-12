<?php

namespace Infinity\Controller;

use Infinity\Service\ApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    #[Route('/api', name: 'infinity.api', methods: ['POST', 'GET', 'PATCH', 'DELETE'])]
    public function api(
        Request $request,
        ApiService $apiService
    ): JsonResponse {
        return $apiService->handle($request);
    }
}
