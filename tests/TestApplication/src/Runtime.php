<?php

namespace Test\Infinity\TestApplication;

class Runtime extends \Symfony\Component\Runtime\SymfonyRuntime
{
    public function __construct(array $options = [])
    {
        parent::__construct([...$options, ...[
            'project_dir' => realpath(__DIR__.'/../'),
        ]]);
    }
}