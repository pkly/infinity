# Infinity
Experimental Symfony CRUD using Vue and power of Symfony 5+

## Why?
Because EasyAdmin annoys me sometimes.

After working a bit with Laravel Nova and EA,
I realized that I do not enjoy writing everything server-side.

On the other side Laravel is not a good framework, since it's extremely
messy and uses practices I do not condone. As such I've decided to
attempt to combine the two.

Greatness of clean code and good practices of Symfony
and some stuff from Laravel Nova I guess.

EA lacks a lot of features, which I'm going to try to fix in this attempt
while keeping it nice and neat, on top of being a OPA running on top of
Symfony.

## Stability and features

Currently in trial phase, no stability guarantees will be made.
Only PHP8.1+ with newest Vue available and TypeScript.

See current and planned features in [FEATURES.md](FEATURES.md)

## Contribution and development

### Symfony / backend

To get a working setup follow these steps

1. Clone this repo (or your fork)
2. Ensure your have installed docker and a new-ish version of npm
3. Enter the tests/TestApplication directory and run `./scripts/docker.sh`
4. Open a second terminal and open `./scripts/docker-shell.sh` from the same directory
5. Run `composer install` inside of the shell
6. Run `cd tests/TestApplication` and then `./scripts/wipe-install.sh`, this will ensure you can log into the test application
7. The application is running by default under `localhost` and login information is `super@infinity.com` and `password`

### Vue

1. Enter the `vue` directory and run `npm install`
2. Run `npm run watch` and code away, files will be automatically reflected in the backend application as needed (not sure if hot reload works)

## Setup

Install the bundle, then follow the instructions in [SETUP.md](SETUP.md)