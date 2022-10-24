#!/bin/bash

DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_LOCAL_FILE=$DIR/../docker/.env.local
COMP_AUTH=false
COMPOSER_AUTH_FILE="$HOME/.composer/auth.json"
COMPOSER_AUTH_FILE_NEW="$HOME/.config/composer/auth.json"

echo ''
echo '                        ##         .'
echo '                  ## ## ##        =='
echo '               ## ## ## ##       ==='
echo '           /"""""""""""""""""\___/ ==="'
echo '      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~'
echo '           \______ o           __/'
echo '             \    \         __/'
echo '              \____\_______/'
echo '                                           '
echo "             |          |                     "
echo "          __ |  __   __ | _  __   _            "
echo "         /  \\| /  \\ /   |/  / _\\ |      "
echo "         \\__/| \\__/ \\__ |\\_ \\__  |   "
echo "                                           "
echo 'Building docker containers...'

COMPOSE_COMMAND="docker compose"
docker compose version &> /dev/null
OUT=$?

if [ "$OUT" != 0 ]; then
  COMPOSE_COMMAND="docker-compose"
  docker-compose -v &> /dev/null
  OUT=$?
fi

if [ "$OUT" != 0 ]; then
  echo "docker compose nor docker-compose was found, please install either before running this file."
  exit 1
fi

cd $DIR/../docker

if [[ -z "${COMPOSER_AUTH}" ]]; then
  echo "COMPOSER_AUTH not set, attempting to read from home directory"
  if [[ -f "$COMPOSER_AUTH_FILE_NEW" ]]; then
    COMP_AUTH=$(cat "$COMPOSER_AUTH_FILE_NEW")
    echo "Read composer auth from .config home directory"
  elif [[ -f "$COMPOSER_AUTH_FILE" ]]; then
    COMP_AUTH=$(cat "$COMPOSER_AUTH_FILE")
    echo "Read composer auth from home directory"
  else
    echo "Composer auth not found in home directory, build will fail but proceeding..."
  fi
else
  echo "Reading COMPOSER_AUTH from env"
  COMP_AUTH=${COMPOSER_AUTH}
fi

$COMPOSE_COMMAND -p infinity_dev build

if [ $? != 0 ]; then
  echo "Build failed, cannot bring containers online."
  exit 1
fi

if [ -f "$ENV_LOCAL_FILE" ]; then
  echo "Loading with local configuration...";
  env $(cat "$ENV_LOCAL_FILE") COMPOSER_AUTH="$COMP_AUTH" $COMPOSE_COMMAND -p infinity_dev up
else
  COMPOSER_AUTH="$COMP_AUTH" $COMPOSE_COMMAND -p infinity_dev up
fi