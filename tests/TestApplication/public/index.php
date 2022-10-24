<?php

use Test\Infinity\TestApplication\Kernel;

$_SERVER['APP_RUNTIME'] = \Test\Infinity\TestApplication\Runtime::class;

require_once __DIR__.'/../../../vendor/autoload_runtime.php';

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
