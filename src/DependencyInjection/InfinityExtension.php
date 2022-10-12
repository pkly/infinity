<?php

namespace Infinity\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;

class InfinityExtension extends Extension
{
    /**
     * @param array<string, mixed> $configs
     * @param ContainerBuilder $container
     */
    public function load(
        array $configs,
        ContainerBuilder $container
    ): void {
        // TODO: Implement load() method.
    }
}
