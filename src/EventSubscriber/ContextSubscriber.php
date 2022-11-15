<?php

namespace Infinity\EventSubscriber;

use Infinity\Service\ContextService;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class ContextSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly ContextService $contextService
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            RequestEvent::class => 'onRequest',
        ];
    }

    public function onRequest(
        RequestEvent $event
    ): void {
        if (!$event->isMainRequest() || 'infinity.api' !== $event->getRequest()->attributes->get('_route')) {
            return;
        }

        $this->contextService->initialize($event->getRequest());
    }
}
