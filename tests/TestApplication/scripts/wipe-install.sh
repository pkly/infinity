#!/bin/bash

DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Wiping and reinstalling the application"

rm -rf $DIR/../var/cache
$DIR/../bin/console doctrine:database:drop --if-exists --force
$DIR/../bin/console doctrine:database:create
$DIR/../bin/console doctrine:schema:create

chown -R 777 var/cache
