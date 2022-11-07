<?php

namespace Infinity\DependencyInjection\CompilerPass;

use Infinity\InfinityBundle;
use Infinity\Service\ResourceService;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class ResourceSetupCompilerPass implements CompilerPassInterface
{
    public function process(
        ContainerBuilder $container
    ): void {
        if (!$container->hasDefinition(ResourceService::class)) {
            return;
        }

        $definition = $container->getDefinition(ResourceService::class);
        $map = [];

        foreach ($container->findTaggedServiceIds(InfinityBundle::TAG_RESOURCE_MAP) as $id => $tags) {
            $map[$id] = new Reference($id); // for the time being do not map entity class -> resource
        }

        $definition->setArgument(0, $map);
    }
}
