<?php

namespace Infinity\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AccessControlController extends AbstractController
{
    #[Route("/", name: 'infinity.clear.opa', methods: ["GET"])]
    public function opa(): string
    {
        return $this->renderView("base.html.twig");
    }
}
