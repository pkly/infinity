<?php

namespace Infinity;

use Infinity\DependencyInjection\CompilerPass\ResourceSetupCompilerPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class InfinityBundle extends Bundle
{
    public const TAG_RESOURCE_MAP = 'infinity.resource_map';
    public const TAG_TOOL = 'infinity.tool';

    public function build(
        ContainerBuilder $container
    ): void {
        $container->addCompilerPass(new ResourceSetupCompilerPass());
    }

    public function getPath(): string
    {
        if (null === $this->path) {
            $reflected = new \ReflectionObject($this);
            /** @var string $filename */
            $filename = $reflected->getFileName();
            $this->path = \dirname($filename, 2); // modern bundle type
        }

        return $this->path;
    }
}
