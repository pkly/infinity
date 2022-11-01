<?php

namespace Infinity\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class AccessControlController extends AbstractController
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
        TokenStorageInterface $storage
    ): JsonResponse {
        return $this->user($storage->getToken()->getUser());
    }

    #[Route('/user', name: 'infinity.user', methods: ['GET'])]
    public function user(
        #[CurrentUser] ?UserInterface $user = null
    ): JsonResponse {
        if (null === $user) {
            return $this->json([], Response::HTTP_UNAUTHORIZED);
        }

        return $this->json([
            'user' => [
                'identifier' => $user->getUserIdentifier(),
            ],
        ]);
    }
}
