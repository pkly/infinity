<?php

namespace Infinity\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class AccessControlController extends AbstractController
{
    #[Route("/", name: 'infinity.clear.opa', methods: ["GET"])]
    public function opa(): Response
    {
        return $this->render("@Infinity/base.html.twig");
    }

    #[Route("/login", name: 'infinity.clear.login', methods: ['POST'])]
    public function login(
        TokenStorageInterface $storage
    ): JsonResponse {
        return $this->json([
            'user' => [
                'identifier' => $storage->getToken()->getUserIdentifier(),
            ],
        ]);
    }
}
