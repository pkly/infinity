<?php

namespace Infinity\DependencyInjection\CompilerPass;

use Infinity\Attribute\Resource;
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

        foreach ($container->findTaggedServiceIds(InfinityBundle::TAG_RESOURCE) as $id => $tags) {
            $service = $container->getDefinition($id);

            // todo: add missing attribute crash
            /** @var Resource $attribute */
            $attribute = (new \ReflectionClass($service->getClass()))->getAttributes(Resource::class)[0]->newInstance();

            if (!array_key_exists($attribute->class, $map)) {
                $map[$attribute->class] = [];
            }

            $map[$attribute->class][$id] = new Reference($id);
        }

        $definition->setArgument(0, $map);
    }
}
