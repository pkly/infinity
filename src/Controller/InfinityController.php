<?php

namespace Infinity\Controller;

use Infinity\Service\ApiService;
use Infinity\Tool\UserTool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class InfinityController extends AbstractController
{
    #[Route("/{params}", name: 'infinity.clear.opa', requirements: ['params' => '.+'], defaults: ['params' => ''], methods: ["GET"], priority: -1)]
    public function opa(
        RouterInterface $router
    ): Response {
        return $this->render("@Infinity/base.html.twig", [
            'base_url' => $router->generate('infinity.clear.opa', ['params' => '']),
        ]);
    }

    #[Route("/login", name: 'infinity.clear.login', methods: ['POST'])]
    public function login(
        TokenStorageInterface $storage,
        UserTool $userTool
    ): JsonResponse {
        return $userTool->user($storage->getToken());
    }

    #[Route('/api', name: 'infinity.api', methods: ['POST', 'GET', 'PATCH', 'DELETE'])]
    public function api(
        Request $request,
        ApiService $apiService
    ): JsonResponse {
        return $apiService->handle($request);
    }
}
