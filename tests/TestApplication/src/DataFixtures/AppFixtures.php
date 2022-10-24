<?php

namespace Test\Infinity\TestApplication\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Test\Infinity\TestApplication\Entity\Identity\Admin;

class AppFixtures extends Fixture
{
    public function __construct(
        private readonly UserPasswordHasherInterface $hasher
    ) {
    }

    public function load(
        ObjectManager $manager
    ): void {
        $admin = new Admin();
        $admin->setEmail('super@infinity.com')
            ->setPassword($this->hasher->hashPassword($admin, 'password'));

        $manager->persist($admin);
        $manager->flush();
    }
}
