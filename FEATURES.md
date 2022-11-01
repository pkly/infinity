# Bundle features

This bundle will provide a complete starting experience for creating an admin
panel for Symfony.

## PHP
### Mapping

- [ ] ResourceMap
  - [ ] Interface
    - [ ] Able to list fields
    - [ ] Able to specify entity class (ORM)
  - [ ] Abstract class
  - [ ] Loaded as a service (via interface)
  - [ ] Companion collecting service for information fetching and displaying


- [ ] FieldMap
  - [ ] Basic implementations for all required major fields
  - [ ] Automapper via reflection (later stages)?
  - [ ] Able to map into Vue components
  - [ ] Able to specify in which views is available
  - [ ] Able to force a "detail" mode into edit


- [ ] Widget system
  - [ ] ???
  
### Apis

- [x] Login
- [x] Logout
- [ ] Fetch dashboard
  - [ ] User information
  - [ ] User notifications
  - [ ] Application notifications
  - [ ] Menu information
  - [ ] List of dashboards (later stages)?
  - [ ] Refresh notifications when applicable

### Templates

- [x] Twig startup point for Vue

### Framework considerations

- [x] Hooking into security as seamlessly as possible
- [ ] Using symfony's permission system
- [ ] Avoiding doubling framework code, unless it'd require unnecessary third-party bundles
- [ ] Using subscribers for all internal events and logic

## Vue
### Mapping

- [ ] ComponentMap
  - [ ] ???

### OPA

- [x] Startup point
- [x] Login logic
- [x] Logout logic
- [ ] ???
