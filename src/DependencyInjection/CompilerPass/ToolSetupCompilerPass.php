<?php

namespace Infinity\DependencyInjection\CompilerPass;

use Infinity\InfinityBundle;
use Infinity\Service\ToolService;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class ToolSetupCompilerPass implements CompilerPassInterface
{
    public function process(
        ContainerBuilder $container
    ) {
        if (!$container->hasDefinition(ToolService::class)) {
            return;
        }

        $definition = $container->getDefinition(ToolService::class);
        $map = [];

        foreach ($container->findTaggedServiceIds(InfinityBundle::TAG_TOOL) as $id => $tags) {
            $map[$id] = new Reference($id);
        }

        $definition->setArgument(0, $map);
    }
}
