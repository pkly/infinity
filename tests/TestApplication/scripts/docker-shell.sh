#!/bin/bash

DIR="$(cd "$(dirname "$0")" && pwd)"
cd $DIR/../docker

docker exec -it infinity_dev_php_fpm /bin/bash