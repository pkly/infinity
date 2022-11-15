<?php

namespace Infinity\Tool;

use Infinity\Interfaces\Api\IndexInterface;
use Infinity\Interfaces\Tool\ToolInterface;
use Infinity\Traits\SerializerTrait;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class UserTool implements ToolInterface, IndexInterface
{
    use SerializerTrait;

    public function __construct(
        private readonly TokenStorageInterface $tokenStorage
    ) {
    }

    public function index(
        Request $request
    ): JsonResponse {
        return $this->user($this->tokenStorage->getToken());
    }

    public function user(
        TokenInterface|null $token
    ): JsonResponse {
        if (null === $token) {
            return $this->json([], Response::HTTP_UNAUTHORIZED);
        }

        return $this->json([
            'user' => [
                'identifier' => $token->getUserIdentifier(),
            ],
        ]);
    }
}
