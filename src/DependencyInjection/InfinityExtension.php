<?php

namespace Infinity\DependencyInjection;

use Infinity\InfinityBundle;
use Infinity\Interfaces\Mapping\ResourceMapInterface;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class InfinityExtension extends Extension
{
    /**
     * @param array<string, mixed> $configs
     * @param ContainerBuilder $container
     *
     * @throws \Exception
     */
    public function load(
        array $configs,
        ContainerBuilder $container
    ): void {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../../config'));
        $loader->load('services.yaml');

        $container->registerForAutoconfiguration(ResourceMapInterface::class)
            ->addTag(InfinityBundle::TAG_RESOURCE_MAP);
    }
}
