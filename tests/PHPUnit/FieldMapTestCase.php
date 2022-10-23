<?php

namespace Test\Infinity\PHPUnit;

use Infinity\Service\Mapping\Field\AbstractFieldMap;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class FieldMapTestCase extends TestCase
{
    /**
     * @todo: change to Interface instead of abstract (testing)
     * @var class-string<AbstractFieldMap>|null
     */
    protected const FIELD_MAP_CLASS = null;
    protected const EXPECTED_FORM_TYPE = TextType::class;
    protected const EXPECTED_VIRTUAL = false;
    protected const EXPECTED_COMPONENT = 'text';

    public function testFieldMap(): void
    {
        if (null === static::FIELD_MAP_CLASS) {
            $this->fail('No field map class defined');
        }

        $instance = $this->initializeFieldMap();

        $this->assertEquals(
            static::EXPECTED_FORM_TYPE,
            $instance->getFormType(),
            sprintf(
                'Class %s does not match expected form type class %s',
                static::FIELD_MAP_CLASS,
                static::EXPECTED_FORM_TYPE
            )
        );
        $this->assertEquals(
            static::EXPECTED_VIRTUAL,
            $instance->isVirtual(),
            sprintf(
                'Class %s does not match expected virtual value %s',
                static::FIELD_MAP_CLASS,
                (int) static::EXPECTED_VIRTUAL
            )
        );
        $this->assertEquals(
            static::EXPECTED_COMPONENT,
            $instance->getComponent(),
            sprintf(
                'Class %s does not match expected component %s',
                static::FIELD_MAP_CLASS,
                static::EXPECTED_COMPONENT
            )
        );
    }

    protected function initializeFieldMap(): AbstractFieldMap
    {
        return (new \ReflectionClass(static::FIELD_MAP_CLASS))->newInstance();
    }
}
