<?php

namespace Infinity\Traits\Mapping;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormTypeInterface;

/**
 * This field contains the shared properties of mapped fields, so that they can be quickly implemented
 */
trait FieldPropertyTrait
{
    protected bool $virtual = false;

    /**
     * @var class-string<FormTypeInterface>
     */
    protected string $formType = TextType::class;

    protected string $component = 'text';

    public function isVirtual(): bool
    {
        return $this->virtual;
    }

    public function setVirtual(
        bool $virtual = true
    ): static {
        $this->virtual = $virtual;

        return $this;
    }

    /**
     * @return class-string<FormTypeInterface>
     */
    public function getFormType(): string
    {
        return $this->formType;
    }

    /**
     * @param class-string<FormTypeInterface> $formType
     */
    public function setFormType(
        string $formType
    ): static {
        $this->formType = $formType;

        return $this;
    }

    public function getComponent(): string
    {
        return $this->component;
    }

    public function setComponent(
        string $component
    ): static {
        $this->component = $component;

        return $this;
    }
}
