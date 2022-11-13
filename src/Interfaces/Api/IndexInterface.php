<?php

namespace Infinity\Interfaces\Api;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

interface IndexInterface
{
    public function index(
        Request $request
    ): JsonResponse;
}
