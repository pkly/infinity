<?php

namespace Infinity\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccessControlController extends AbstractController
{
    #[Route("/", name: 'infinity.clear.opa', methods: ["GET"])]
    public function opa(): Response
    {
        return $this->render("@Infinity/base.html.twig");
    }
}
