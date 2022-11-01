# Setup

This setup procedure may change in the future.

## Import bundle routes

In your method of choice add the equivalent of 

```yaml
bundle:
    prefix: /infinity
    resource: '@InfinityBundle/config/routes.yaml'
```

Under no specified env (all).

## Security

Setup your firewall like so

```yaml
main:
    pattern: ^/infinity
    provider: # your provider #
    access_denied_url: /infinity
    logout:
        path: /infinity/logout
    json_login:
        check_path: infinity.clear.login

access_control:
  - { path: ^/infinity/login, roles: PUBLIC_ACCESS }
```

Visit your new admin login under `/infinity`!