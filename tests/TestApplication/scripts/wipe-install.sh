#!/bin/bash

DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Wiping and reinstalling the application"

rm -rf $DIR/../var/cache
$DIR/../bin/console doctrine:database:drop --if-exists --force
$DIR/../bin/console doctrine:database:create
$DIR/../bin/console doctrine:schema:create
$DIR/../bin/console doctrine:fixtures:load --no-interaction

chown -R 777 $DIR/../var/cache

ln -s /var/www/assets /var/www/tests/TestApplication/public/assets