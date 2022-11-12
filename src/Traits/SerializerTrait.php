<?php

namespace Infinity\Traits;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Contracts\Service\Attribute\Required;

trait SerializerTrait
{
    protected SerializerInterface $serializer;

    #[Required]
    public function setSerializer(
        SerializerInterface $serializer
    ): void {
        $this->serializer = $serializer;
    }

    protected function json(
        array $data,
        int $status = 200,
        array $headers = [],
        array $context = []
    ): JsonResponse {
        $json = $this->serializer->serialize($data, 'json', array_merge([
            'json_encode_options' => JsonResponse::DEFAULT_ENCODING_OPTIONS,
        ], $context));

        return new JsonResponse($json, $status, $headers, true);
    }
}
