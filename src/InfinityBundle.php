<?php

namespace Infinity;

use Infinity\DependencyInjection\CompilerPass\ResourceSetupCompilerPass;
use Infinity\DependencyInjection\CompilerPass\ToolSetupCompilerPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class InfinityBundle extends Bundle
{
    public const TAG_RESOURCE = 'infinity.resource';
    public const TAG_TOOL = 'infinity.tool';

    public function build(
        ContainerBuilder $container
    ): void {
        $container->addCompilerPass(new ResourceSetupCompilerPass());
        $container->addCompilerPass(new ToolSetupCompilerPass());
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
