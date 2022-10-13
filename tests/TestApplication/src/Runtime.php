<?php

namespace Test\Infinity\TestApplication;

use Symfony\Component\Runtime\SymfonyRuntime;

class Runtime extends SymfonyRuntime
{
    public function __construct(
        array $options = []
    ) {
        parent::__construct([...$options, ...[
            'project_dir' => realpath(__DIR__.'/../'),
        ]]);
    }
}
