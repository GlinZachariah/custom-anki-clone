import { Category, CategoryData, Flashcard, QuizQuestion } from '../../types';

export const categoryData: Record<Category, CategoryData> = {
  basics: {
    name: 'Spring Basics',
    description: 'Core Spring concepts, IoC container, and dependency injection fundamentals',
    color: '#6DB33F'
  },
  intermediate: {
    name: 'Spring Intermediate',
    description: 'Spring MVC, data access, transactions, and AOP concepts',
    color: '#5A9E36'
  },
  expert: {
    name: 'Spring Expert',
    description: 'Advanced Spring features, security, microservices, and best practices',
    color: '#4A7C2A'
  }
};

export const flashcards: Flashcard[] = [
  // BASICS FLASHCARDS (25 cards)
  {
    id: 1,
    category: 'basics',
    question: 'What is the Spring Framework?',
    answer: 'Spring is an open-source application framework for Java that provides comprehensive programming and configuration model for modern Java-based enterprise applications. It focuses on dependency injection, aspect-oriented programming, and provides infrastructure support for developing Java applications.'
  },
  {
    id: 2,
    category: 'basics',
    question: 'What is Inversion of Control (IoC)?',
    answer: 'IoC is a design principle where the control of object creation and dependency management is transferred from the application code to an external container. In Spring, the IoC container manages object lifecycle and dependencies, promoting loose coupling and easier testing.'
  },
  {
    id: 3,
    category: 'basics',
    question: 'What is Dependency Injection (DI)?',
    answer: 'Dependency Injection is a technique where an object\'s dependencies are provided by an external source rather than the object creating them itself. Spring supports constructor injection, setter injection, and field injection to provide dependencies to beans.'
  },
  {
    id: 4,
    category: 'basics',
    question: 'What is a Spring Bean?',
    answer: 'A Spring Bean is an object that is instantiated, assembled, and managed by the Spring IoC container. Beans are created based on configuration metadata and form the backbone of Spring applications.'
  },
  {
    id: 5,
    category: 'basics',
    question: 'What is ApplicationContext?',
    answer: 'ApplicationContext is Spring\'s central interface for providing configuration information to an application. It extends BeanFactory and provides enterprise-specific functionality like event publication, internationalization, and resource loading.'
  },
  {
    id: 6,
    category: 'basics',
    question: 'What are the different ways to configure Spring?',
    answer: 'Spring can be configured using: 1) XML configuration files, 2) Java-based configuration using @Configuration classes, 3) Annotation-based configuration using component scanning, and 4) Mixed approaches combining multiple configuration styles.'
  },
  {
    id: 7,
    category: 'basics',
    question: 'What is @Component annotation?',
    answer: '@Component is a generic stereotype annotation that marks a Java class as a Spring-managed component. It enables automatic detection during classpath scanning and allows Spring to instantiate and manage the class as a bean.'
  },
  {
    id: 8,
    category: 'basics',
    question: 'What is @Autowired annotation?',
    answer: '@Autowired enables automatic dependency injection in Spring. It can be applied to constructors, methods, and fields to inject matching beans from the application context by type.'
  },
  {
    id: 9,
    category: 'basics',
    question: 'What is the difference between @Component, @Service, @Repository, and @Controller?',
    answer: '@Component is the generic stereotype. @Service indicates business logic layer, @Repository indicates data access layer with exception translation, and @Controller indicates presentation layer. They are all specialized forms of @Component with semantic meaning.'
  },
  {
    id: 10,
    category: 'basics',
    question: 'What is @Configuration annotation?',
    answer: '@Configuration indicates that a class declares one or more @Bean methods and may be processed by the Spring container to generate bean definitions and service requests at runtime.'
  },
  {
    id: 11,
    category: 'basics',
    question: 'What is constructor injection and why is it preferred?',
    answer: 'Constructor injection provides dependencies through class constructors. It\'s preferred because it ensures immutability, guarantees that required dependencies are provided, makes testing easier, and prevents circular dependencies.'
  },
  {
    id: 12,
    category: 'basics',
    question: 'What is setter injection?',
    answer: 'Setter injection provides dependencies through setter methods after object construction. It\'s suitable for optional dependencies and allows for reconfiguration, but objects may be in an incomplete state after construction.'
  },
  {
    id: 13,
    category: 'basics',
    question: 'What are Spring Bean scopes?',
    answer: 'Bean scopes define the lifecycle and visibility of beans. Common scopes include: singleton (default, one instance per container), prototype (new instance each time), request (one per HTTP request), session (one per HTTP session), and application (one per ServletContext).'
  },
  {
    id: 14,
    category: 'basics',
    question: 'What is @ComponentScan?',
    answer: '@ComponentScan configures component scanning directives for use with @Configuration classes. It specifies base packages to scan for annotated components and automatically registers them as Spring beans.'
  },
  {
    id: 15,
    category: 'basics',
    question: 'What is @Bean annotation?',
    answer: '@Bean is used on methods within @Configuration classes to explicitly declare beans. The method\'s return value is registered as a bean in the Spring container with the method name as the bean ID.'
  },
  {
    id: 16,
    category: 'basics',
    question: 'What is @Qualifier annotation?',
    answer: '@Qualifier is used along with @Autowired to specify which bean should be injected when multiple beans of the same type exist. It provides fine-grained control over the injection process.'
  },
  {
    id: 17,
    category: 'basics',
    question: 'What is @Primary annotation?',
    answer: '@Primary indicates a preference when multiple beans of the same type are present. The primary bean will be chosen when no other qualifiers are specified during injection.'
  },
  {
    id: 18,
    category: 'basics',
    question: 'What is @Value annotation?',
    answer: '@Value is used to inject values into fields, method parameters, or constructor parameters. It can inject literal values, properties from property files, or SpEL (Spring Expression Language) expressions.'
  },
  {
    id: 19,
    category: 'basics',
    question: 'What is BeanFactory?',
    answer: 'BeanFactory is the root interface for accessing Spring containers. It provides basic functionality for managing beans, including instantiation, configuration, and assembly. ApplicationContext extends BeanFactory with additional features.'
  },
  {
    id: 20,
    category: 'basics',
    question: 'What is the Spring bean lifecycle?',
    answer: 'Bean lifecycle: 1) Instantiation, 2) Populate properties, 3) Call BeanNameAware.setBeanName(), 4) Call BeanFactoryAware.setBeanFactory(), 5) Call ApplicationContextAware.setApplicationContext(), 6) Call BeanPostProcessor.postProcessBeforeInitialization(), 7) Call @PostConstruct methods, 8) Call InitializingBean.afterPropertiesSet(), 9) Call custom init method, 10) Call BeanPostProcessor.postProcessAfterInitialization(). For destruction: @PreDestroy, DisposableBean.destroy(), custom destroy method.'
  },
  {
    id: 21,
    category: 'basics',
    question: 'What is @PostConstruct and @PreDestroy?',
    answer: '@PostConstruct marks a method to be executed after dependency injection is complete. @PreDestroy marks a method to be executed before the bean is removed from the container. They are part of JSR-250 annotations.'
  },
  {
    id: 22,
    category: 'basics',
    question: 'What is circular dependency in Spring?',
    answer: 'Circular dependency occurs when two or more beans depend on each other directly or indirectly. Spring can resolve circular dependencies for setter injection but not for constructor injection, which results in BeanCurrentlyInCreationException.'
  },
  {
    id: 23,
    category: 'basics',
    question: 'What is @Profile annotation?',
    answer: '@Profile allows conditional bean registration based on active profiles. Beans annotated with @Profile are only created when the specified profile is active, enabling environment-specific configurations.'
  },
  {
    id: 24,
    category: 'basics',
    question: 'What is @Conditional annotation?',
    answer: '@Conditional allows conditional bean creation based on specified conditions. It can be used with custom Condition implementations to create beans only when certain criteria are met.'
  },
  {
    id: 25,
    category: 'basics',
    question: 'What is Spring\'s PropertySource?',
    answer: 'PropertySource represents a source of name-value property pairs. Spring uses PropertySource to access configuration properties from various sources like property files, environment variables, and system properties through the Environment interface.'
  },

  // INTERMEDIATE FLASHCARDS (25 cards)
  {
    id: 26,
    category: 'intermediate',
    question: 'What is Spring MVC?',
    answer: 'Spring MVC is Spring\'s web framework based on the Model-View-Controller design pattern. It provides a flexible way to build web applications with features like request mapping, data binding, validation, and view resolution.'
  },
  {
    id: 27,
    category: 'intermediate',
    question: 'What is DispatcherServlet?',
    answer: 'DispatcherServlet is the front controller in Spring MVC that handles all HTTP requests. It delegates requests to appropriate handlers, manages the request-response cycle, and coordinates between various MVC components.'
  },
  {
    id: 28,
    category: 'intermediate',
    question: 'What are the main components of Spring MVC?',
    answer: 'Main components: 1) DispatcherServlet (front controller), 2) HandlerMapping (maps requests to handlers), 3) Controller (handles requests), 4) ModelAndView (contains model data and view name), 5) ViewResolver (resolves view names to actual views), 6) View (renders the response).'
  },
  {
    id: 29,
    category: 'intermediate',
    question: 'What is @Controller vs @RestController?',
    answer: '@Controller is used for traditional MVC controllers that return view names. @RestController combines @Controller and @ResponseBody, automatically serializing return values to JSON/XML for RESTful web services.'
  },
  {
    id: 30,
    category: 'intermediate',
    question: 'What is @RequestMapping and its variants?',
    answer: '@RequestMapping maps HTTP requests to handler methods. Variants include: @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, and @PatchMapping. These provide more specific and readable request mappings.'
  },
  {
    id: 31,
    category: 'intermediate',
    question: 'What is @PathVariable?',
    answer: '@PathVariable extracts values from URI template variables. It binds path segments to method parameters, enabling RESTful URL patterns like /users/{id} where {id} becomes a method parameter.'
  },
  {
    id: 32,
    category: 'intermediate',
    question: 'What is @RequestParam vs @RequestBody?',
    answer: '@RequestParam extracts query parameters or form data from the request. @RequestBody binds the entire HTTP request body to a method parameter, typically used for JSON/XML data in POST/PUT requests.'
  },
  {
    id: 33,
    category: 'intermediate',
    question: 'What is Spring Data JPA?',
    answer: 'Spring Data JPA is part of the Spring Data project that simplifies data access using JPA. It provides repository abstractions, query methods, and reduces boilerplate code for database operations.'
  },
  {
    id: 34,
    category: 'intermediate',
    question: 'What is @Repository annotation?',
    answer: '@Repository marks a class as a Data Access Object (DAO). It enables automatic exception translation from database-specific exceptions to Spring\'s DataAccessException hierarchy and component scanning.'
  },
  {
    id: 35,
    category: 'intermediate',
    question: 'What is JdbcTemplate?',
    answer: 'JdbcTemplate is Spring\'s central class for JDBC operations. It handles resource management, exception handling, and provides methods for executing SQL queries, updates, and stored procedures while eliminating boilerplate code.'
  },
  {
    id: 36,
    category: 'intermediate',
    question: 'What is Spring\'s transaction management?',
    answer: 'Spring provides declarative and programmatic transaction management. It abstracts different transaction APIs (JTA, JDBC, JPA) and allows transaction configuration through annotations like @Transactional or XML configuration.'
  },
  {
    id: 37,
    category: 'intermediate',
    question: 'What is @Transactional annotation?',
    answer: '@Transactional enables declarative transaction management. It can be applied to methods or classes to automatically wrap method execution in a transaction with configurable properties like propagation, isolation, timeout, and rollback conditions.'
  },
  {
    id: 38,
    category: 'intermediate',
    question: 'What are transaction propagation types?',
    answer: 'Transaction propagation defines how transactions relate to each other: REQUIRED (default), REQUIRES_NEW, SUPPORTS, NOT_SUPPORTED, MANDATORY, NEVER, and NESTED. They control transaction boundaries when methods call other transactional methods.'
  },
  {
    id: 39,
    category: 'intermediate',
    question: 'What is Aspect-Oriented Programming (AOP)?',
    answer: 'AOP is a programming paradigm that enables separation of cross-cutting concerns (logging, security, transactions) from business logic. Spring AOP uses proxies to weave aspects into application code at runtime.'
  },
  {
    id: 40,
    category: 'intermediate',
    question: 'What are AOP concepts: Aspect, Advice, Pointcut, Join Point?',
    answer: 'Aspect: modularization of cross-cutting concerns. Advice: action taken at join points (Before, After, Around). Pointcut: predicate matching join points. Join Point: point in program execution (method calls in Spring AOP).'
  },
  {
    id: 41,
    category: 'intermediate',
    question: 'What is @Aspect annotation?',
    answer: '@Aspect marks a class as an aspect containing advice methods. Combined with @Component, it enables Spring to detect and apply the aspect\'s advice to matching join points in the application.'
  },
  {
    id: 42,
    category: 'intermediate',
    question: 'What is @Before, @After, @Around advice?',
    answer: '@Before executes before join point. @After executes after join point (finally). @Around wraps join point execution, providing full control over method invocation and return value.'
  },
  {
    id: 43,
    category: 'intermediate',
    question: 'What is Spring\'s validation support?',
    answer: 'Spring supports JSR-303/JSR-380 Bean Validation and provides its own Validator interface. It integrates validation with data binding and offers annotations like @Valid, @NotNull, @Size for declarative validation.'
  },
  {
    id: 44,
    category: 'intermediate',
    question: 'What is @Valid and @Validated?',
    answer: '@Valid triggers JSR-303 validation on method parameters or return values. @Validated is Spring\'s variant that supports validation groups and can be applied to classes for method-level validation.'
  },
  {
    id: 45,
    category: 'intermediate',
    question: 'What is Spring Boot?',
    answer: 'Spring Boot is a project that simplifies Spring application development by providing auto-configuration, embedded servers, production-ready features, and opinionated defaults. It follows "convention over configuration" principle.'
  },
  {
    id: 46,
    category: 'intermediate',
    question: 'What is @SpringBootApplication?',
    answer: '@SpringBootApplication is a convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan. It\'s typically placed on the main class to bootstrap a Spring Boot application.'
  },
  {
    id: 47,
    category: 'intermediate',
    question: 'What is auto-configuration in Spring Boot?',
    answer: 'Auto-configuration automatically configures Spring applications based on classpath contents, existing beans, and property settings. It reduces manual configuration by providing sensible defaults and conditional bean creation.'
  },
  {
    id: 48,
    category: 'intermediate',
    question: 'What is Spring\'s event handling?',
    answer: 'Spring provides event-driven programming through ApplicationEvent and ApplicationListener. Custom events can be published using ApplicationEventPublisher and handled by listener methods annotated with @EventListener.'
  },
  {
    id: 49,
    category: 'intermediate',
    question: 'What is @EventListener?',
    answer: '@EventListener marks methods as event listeners. It provides more flexible event handling compared to implementing ApplicationListener interface and supports conditional event processing and async execution.'
  },
  {
    id: 50,
    category: 'intermediate',
    question: 'What is Spring\'s caching abstraction?',
    answer: 'Spring\'s caching abstraction provides declarative caching through annotations like @Cacheable, @CacheEvict, and @CachePut. It supports various cache providers (EhCache, Redis, Caffeine) through a unified interface.'
  },

  // EXPERT FLASHCARDS (25 cards)
  {
    id: 51,
    category: 'expert',
    question: 'What is Spring Security and its core components?',
    answer: 'Spring Security provides authentication and authorization for Java applications. Core components include: SecurityContext, Authentication, GrantedAuthority, UserDetails, SecurityFilterChain, and various authentication providers and filters.'
  },
  {
    id: 52,
    category: 'expert',
    question: 'What is Spring Cloud?',
    answer: 'Spring Cloud provides tools for building distributed systems and microservices. It includes service discovery, circuit breakers, configuration management, API gateways, distributed tracing, and cloud platform integrations.'
  },
  {
    id: 53,
    category: 'expert',
    question: 'What is Spring WebFlux?',
    answer: 'Spring WebFlux is Spring\'s reactive web framework built on Project Reactor. It supports non-blocking, asynchronous programming with backpressure handling for high-concurrency applications using reactive streams.'
  },
  {
    id: 54,
    category: 'expert',
    question: 'What is reactive programming in Spring?',
    answer: 'Reactive programming in Spring involves asynchronous, non-blocking data streams using Mono (0-1 element) and Flux (0-N elements). It provides backpressure handling, composable operations, and efficient resource utilization.'
  },
  {
    id: 55,
    category: 'expert',
    question: 'What is Spring\'s testing support?',
    answer: 'Spring provides comprehensive testing support including TestContext Framework, MockMvc for web layer testing, @MockBean for mocking beans, test slices (@WebMvcTest, @DataJpaTest), and integration testing capabilities.'
  },
  {
    id: 56,
    category: 'expert',
    question: 'What is @MockBean vs @Mock?',
    answer: '@MockBean creates mock beans in Spring application context, replacing actual beans during testing. @Mock (Mockito) creates mock objects outside Spring context. @MockBean integrates with Spring\'s dependency injection.'
  },
  {
    id: 57,
    category: 'expert',
    question: 'What is Spring\'s custom annotation creation?',
    answer: 'Custom annotations combine multiple Spring annotations or add custom behavior. Use @Target, @Retention, and compose existing annotations. Meta-annotations enable creating domain-specific annotations with reusable configuration.'
  },
  {
    id: 58,
    category: 'expert',
    question: 'What is Spring\'s ConditionalOn annotations?',
    answer: 'ConditionalOn annotations enable conditional bean creation: @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty, etc. They\'re used extensively in Spring Boot auto-configuration for intelligent bean registration.'
  },
  {
    id: 59,
    category: 'expert',
    question: 'What is Spring\'s BeanPostProcessor?',
    answer: 'BeanPostProcessor allows custom modification of new bean instances before and after initialization. It provides hooks (postProcessBeforeInitialization, postProcessAfterInitialization) for implementing cross-cutting concerns or custom bean processing.'
  },
  {
    id: 60,
    category: 'expert',
    question: 'What is Spring\'s BeanFactoryPostProcessor?',
    answer: 'BeanFactoryPostProcessor modifies bean definitions before beans are instantiated. It operates on configuration metadata and can modify bean definitions, add new ones, or change existing properties during container initialization.'
  },
  {
    id: 61,
    category: 'expert',
    question: 'What is Spring\'s proxy mechanism?',
    answer: 'Spring creates proxies for AOP and other features using JDK dynamic proxies (interface-based) or CGLIB proxies (class-based). Proxies intercept method calls to apply cross-cutting concerns like transactions and security.'
  },
  {
    id: 62,
    category: 'expert',
    question: 'What is @Async and async processing?',
    answer: '@Async enables asynchronous method execution in separate threads. Combined with @EnableAsync, it allows methods to return Future, CompletableFuture, or void while executing asynchronously using configured task executors.'
  },
  {
    id: 63,
    category: 'expert',
    question: 'What is Spring\'s scheduling support?',
    answer: 'Spring provides scheduling through @Scheduled annotation and TaskScheduler. It supports cron expressions, fixed delays, fixed rates, and initial delays for periodic task execution with thread pool management.'
  },
  {
    id: 64,
    category: 'expert',
    question: 'What is Spring\'s message-driven architecture?',
    answer: 'Spring supports message-driven architecture through JMS, RabbitMQ, Kafka integration. It provides @JmsListener, @RabbitListener, @KafkaListener for asynchronous message processing and MessageTemplate for sending messages.'
  },
  {
    id: 65,
    category: 'expert',
    question: 'What is Spring\'s configuration properties binding?',
    answer: '@ConfigurationProperties binds external properties to Java objects. Combined with @EnableConfigurationProperties, it provides type-safe configuration management with validation support and IDE assistance for property files.'
  },
  {
    id: 66,
    category: 'expert',
    question: 'What is Spring\'s actuator?',
    answer: 'Spring Boot Actuator provides production-ready features like health checks, metrics, application info, and management endpoints. It offers insights into running applications with customizable endpoints and security integration.'
  },
  {
    id: 67,
    category: 'expert',
    question: 'What is Spring\'s custom starter creation?',
    answer: 'Custom starters package related dependencies and auto-configuration. They include a main artifact with dependencies, auto-configuration classes with @ConditionalOn logic, and spring.factories file for auto-configuration registration.'
  },
  {
    id: 68,
    category: 'expert',
    question: 'What is Spring\'s SpEL (Spring Expression Language)?',
    answer: 'SpEL is a powerful expression language supporting querying and manipulating object graphs at runtime. It\'s used in @Value, security expressions, and configuration. Syntax: #{expression} with method calls, properties, and operators.'
  },
  {
    id: 69,
    category: 'expert',
    question: 'What is Spring\'s internationalization (i18n) support?',
    answer: 'Spring provides i18n through MessageSource interface, ResourceBundleMessageSource implementation, and LocaleResolver. It supports message bundles, parameterized messages, and locale-specific resource resolution.'
  },
  {
    id: 70,
    category: 'expert',
    question: 'What is Spring\'s resource handling?',
    answer: 'Spring\'s Resource interface abstracts access to low-level resources. ResourceLoader provides unified access to classpath, file system, URL resources. @Value can inject resources, and ResourceUtils provides utility methods.'
  },
  {
    id: 71,
    category: 'expert',
    question: 'What are Spring\'s advanced AOP features?',
    answer: 'Advanced AOP features include: introduction/mixins for adding interfaces to existing objects, aspect ordering with @Order, this() and target() pointcut designators, and compile-time weaving with AspectJ integration.'
  },
  {
    id: 72,
    category: 'expert',
    question: 'What is Spring\'s transaction synchronization?',
    answer: 'Transaction synchronization allows registering callbacks for transaction lifecycle events through TransactionSynchronizationManager. It provides hooks for before/after commit/completion actions and resource cleanup.'
  },
  {
    id: 73,
    category: 'expert',
    question: 'What is Spring\'s custom scope implementation?',
    answer: 'Custom scopes implement Scope interface defining get(), remove(), and registerDestructionCallback() methods. Register with ConfigurableBeanFactory.registerScope() or @Scope annotation for specialized bean lifecycle management.'
  },
  {
    id: 74,
    category: 'expert',
    question: 'What is Spring\'s environment abstraction?',
    answer: 'Environment interface provides access to profiles and properties. It unifies access to various property sources (system properties, environment variables, application properties) and supports property resolution with placeholders.'
  },
  {
    id: 75,
    category: 'expert',
    question: 'What are Spring Boot\'s production-ready best practices?',
    answer: 'Best practices include: externalized configuration, health checks with Actuator, proper logging configuration, graceful shutdown, monitoring with Micrometer, security hardening, containerization with layered JARs, and performance optimization.'
  }
];

export const quizQuestions: QuizQuestion[] = [
  // BASICS QUIZ QUESTIONS (23 questions)
  {
    id: 1,
    category: 'basics',
    question: 'What is the primary purpose of the Spring Framework?',
    options: [
      'To provide a web server for Java applications',
      'To provide comprehensive infrastructure support for developing Java applications',
      'To replace the Java Virtual Machine',
      'To provide a database management system'
    ],
    correctAnswer: 1,
    explanation: 'Spring Framework provides comprehensive infrastructure support for developing Java applications, focusing on dependency injection, AOP, and enterprise features.'
  },
  {
    id: 2,
    category: 'basics',
    question: 'Which annotation is used to mark a class as a Spring-managed component?',
    options: ['@Bean', '@Component', '@Autowired', '@Configuration'],
    correctAnswer: 1,
    explanation: '@Component is the generic stereotype annotation that marks a class as a Spring-managed component for automatic detection and instantiation.'
  },
  {
    id: 3,
    category: 'basics',
    question: 'What type of injection is recommended by Spring for mandatory dependencies?',
    options: ['Field injection', 'Setter injection', 'Constructor injection', 'Method injection'],
    correctAnswer: 2,
    explanation: 'Constructor injection is recommended for mandatory dependencies as it ensures immutability and guarantees dependencies are provided.'
  },
  {
    id: 4,
    category: 'basics',
    question: 'Which interface is the root of Spring\'s IoC container?',
    options: ['ApplicationContext', 'BeanFactory', 'ConfigurableApplicationContext', 'WebApplicationContext'],
    correctAnswer: 1,
    explanation: 'BeanFactory is the root interface for accessing Spring containers, providing basic functionality for managing beans.'
  },
  {
    id: 5,
    category: 'basics',
    question: 'What is the default scope of Spring beans?',
    options: ['Prototype', 'Singleton', 'Request', 'Session'],
    correctAnswer: 1,
    explanation: 'Singleton is the default scope, meaning one instance per Spring container.'
  },
  {
    id: 6,
    category: 'basics',
    question: 'Which annotation enables automatic dependency injection?',
    options: ['@Component', '@Bean', '@Autowired', '@Service'],
    correctAnswer: 2,
    explanation: '@Autowired enables automatic dependency injection by type, eliminating the need for manual wiring.'
  },
  {
    id: 7,
    category: 'basics',
    question: 'What annotation is used with @Autowired when multiple beans of the same type exist?',
    options: ['@Primary', '@Qualifier', '@Component', '@Bean'],
    correctAnswer: 1,
    explanation: '@Qualifier specifies which bean should be injected when multiple beans of the same type are present.'
  },
  {
    id: 8,
    category: 'basics',
    question: 'Which annotation configures component scanning in Java configuration?',
    options: ['@Configuration', '@ComponentScan', '@EnableAutoConfiguration', '@SpringBootApplication'],
    correctAnswer: 1,
    explanation: '@ComponentScan configures component scanning directives and specifies base packages to scan for annotated components.'
  },
  {
    id: 9,
    category: 'basics',
    question: 'What annotation is used to inject property values?',
    options: ['@Autowired', '@Component', '@Value', '@Qualifier'],
    correctAnswer: 2,
    explanation: '@Value injects literal values, properties from files, or SpEL expressions into fields and parameters.'
  },
  {
    id: 10,
    category: 'basics',
    question: 'Which method is called after dependency injection is complete?',
    options: ['@PreDestroy', '@PostConstruct', 'afterPropertiesSet()', 'init()'],
    correctAnswer: 1,
    explanation: '@PostConstruct marks methods to be executed after dependency injection is complete.'
  },
  {
    id: 11,
    category: 'basics',
    question: 'What happens when Spring encounters a circular dependency with constructor injection?',
    options: [
      'It resolves automatically',
      'It throws BeanCurrentlyInCreationException',
      'It creates two instances',
      'It ignores one dependency'
    ],
    correctAnswer: 1,
    explanation: 'Spring throws BeanCurrentlyInCreationException for circular dependencies with constructor injection as it cannot resolve them.'
  },
  {
    id: 12,
    category: 'basics',
    question: 'Which annotation enables profile-based bean registration?',
    options: ['@Component', '@Profile', '@Conditional', '@Scope'],
    correctAnswer: 1,
    explanation: '@Profile enables conditional bean registration based on active profiles.'
  },
  {
    id: 13,
    category: 'basics',
    question: 'What is the difference between @Component and @Configuration?',
    options: [
      '@Configuration is for XML, @Component is for annotations',
      '@Configuration declares @Bean methods, @Component marks regular components',
      'There is no difference',
      '@Component is deprecated'
    ],
    correctAnswer: 1,
    explanation: '@Configuration indicates a class that declares @Bean methods for explicit bean definitions, while @Component marks regular managed components.'
  },
  {
    id: 14,
    category: 'basics',
    question: 'Which stereotype annotation is specifically for data access layer?',
    options: ['@Component', '@Service', '@Repository', '@Controller'],
    correctAnswer: 2,
    explanation: '@Repository is specifically for data access layer and provides automatic exception translation.'
  },
  {
    id: 15,
    category: 'basics',
    question: 'What does @Primary annotation do?',
    options: [
      'Makes a bean thread-safe',
      'Indicates preference when multiple beans of same type exist',
      'Makes a bean eager-loaded',
      'Marks a bean as prototype scope'
    ],
    correctAnswer: 1,
    explanation: '@Primary indicates preference when multiple beans of the same type are present, making it the default choice for injection.'
  },
  {
    id: 16,
    category: 'basics',
    question: 'Which scope creates a new bean instance for each request?',
    options: ['Singleton', 'Prototype', 'Request', 'Session'],
    correctAnswer: 1,
    explanation: 'Prototype scope creates a new bean instance each time it is requested from the container.'
  },
  {
    id: 17,
    category: 'basics',
    question: 'What is ApplicationContext compared to BeanFactory?',
    options: [
      'They are identical',
      'ApplicationContext extends BeanFactory with additional features',
      'BeanFactory extends ApplicationContext',
      'ApplicationContext is deprecated'
    ],
    correctAnswer: 1,
    explanation: 'ApplicationContext extends BeanFactory and provides additional enterprise features like event publication and internationalization.'
  },
  {
    id: 18,
    category: 'basics',
    question: 'Which annotation is used for conditional bean creation?',
    options: ['@Profile', '@Conditional', '@Component', '@Bean'],
    correctAnswer: 1,
    explanation: '@Conditional allows conditional bean creation based on specified conditions and custom Condition implementations.'
  },
  {
    id: 19,
    category: 'basics',
    question: 'What is the purpose of @PreDestroy?',
    options: [
      'Initialize bean after creation',
      'Mark method for execution before bean destruction',
      'Configure bean scope',
      'Enable lazy initialization'
    ],
    correctAnswer: 1,
    explanation: '@PreDestroy marks methods to be executed before the bean is removed from the container.'
  },
  {
    id: 20,
    category: 'basics',
    question: 'Which approach provides better testability in Spring?',
    options: ['Field injection', 'Setter injection', 'Constructor injection', 'Static injection'],
    correctAnswer: 2,
    explanation: 'Constructor injection provides better testability as dependencies can be easily provided in unit tests without Spring container.'
  },
  {
    id: 21,
    category: 'basics',
    question: 'What does IoC stand for?',
    options: ['Input Output Control', 'Inversion of Control', 'Integration of Components', 'Instance Object Creation'],
    correctAnswer: 1,
    explanation: 'IoC stands for Inversion of Control, where control of object creation is transferred to an external container.'
  },
  {
    id: 22,
    category: 'basics',
    question: 'Which method can be used to explicitly define beans in Java configuration?',
    options: ['@Component', '@Service', '@Bean', '@Autowired'],
    correctAnswer: 2,
    explanation: '@Bean is used on methods within @Configuration classes to explicitly declare beans.'
  },
  {
    id: 23,
    category: 'basics',
    question: 'What is the main advantage of dependency injection?',
    options: [
      'Faster execution',
      'Loose coupling and easier testing',
      'Smaller memory footprint',
      'Better performance'
    ],
    correctAnswer: 1,
    explanation: 'Dependency injection promotes loose coupling between components and makes testing easier by allowing mock dependencies.'
  },

  // INTERMEDIATE QUIZ QUESTIONS (24 questions)
  {
    id: 24,
    category: 'intermediate',
    question: 'What is the front controller in Spring MVC?',
    options: ['HandlerMapping', 'DispatcherServlet', 'ViewResolver', 'ModelAndView'],
    correctAnswer: 1,
    explanation: 'DispatcherServlet acts as the front controller, handling all HTTP requests and coordinating MVC components.'
  },
  {
    id: 25,
    category: 'intermediate',
    question: 'What is the difference between @Controller and @RestController?',
    options: [
      '@RestController is deprecated',
      '@Controller returns views, @RestController returns data',
      'They are identical',
      '@Controller is for REST APIs only'
    ],
    correctAnswer: 1,
    explanation: '@Controller returns view names, while @RestController combines @Controller and @ResponseBody to return serialized data.'
  },
  {
    id: 26,
    category: 'intermediate',
    question: 'Which annotation extracts values from URI path segments?',
    options: ['@RequestParam', '@PathVariable', '@RequestBody', '@ModelAttribute'],
    correctAnswer: 1,
    explanation: '@PathVariable extracts values from URI template variables, enabling RESTful URL patterns.'
  },
  {
    id: 27,
    category: 'intermediate',
    question: 'What is the purpose of @Transactional annotation?',
    options: [
      'Mark a method as async',
      'Enable declarative transaction management',
      'Configure caching',
      'Handle exceptions'
    ],
    correctAnswer: 1,
    explanation: '@Transactional enables declarative transaction management, wrapping method execution in a transaction.'
  },
  {
    id: 28,
    category: 'intermediate',
    question: 'Which transaction propagation creates a new transaction always?',
    options: ['REQUIRED', 'REQUIRES_NEW', 'SUPPORTS', 'MANDATORY'],
    correctAnswer: 1,
    explanation: 'REQUIRES_NEW always creates a new transaction, suspending any existing transaction.'
  },
  {
    id: 29,
    category: 'intermediate',
    question: 'What does AOP stand for?',
    options: ['Abstract Object Programming', 'Aspect-Oriented Programming', 'Application Object Processing', 'Automated Operation Patterns'],
    correctAnswer: 1,
    explanation: 'AOP stands for Aspect-Oriented Programming, enabling separation of cross-cutting concerns.'
  },
  {
    id: 30,
    category: 'intermediate',
    question: 'Which advice type wraps around method execution?',
    options: ['@Before', '@After', '@Around', '@AfterReturning'],
    correctAnswer: 2,
    explanation: '@Around advice wraps around method execution, providing full control over method invocation.'
  },
  {
    id: 31,
    category: 'intermediate',
    question: 'What is JdbcTemplate used for?',
    options: [
      'Creating database schemas',
      'Simplifying JDBC operations and eliminating boilerplate code',
      'Managing transactions',
      'Connecting to web services'
    ],
    correctAnswer: 1,
    explanation: 'JdbcTemplate simplifies JDBC operations by handling resource management and eliminating boilerplate code.'
  },
  {
    id: 32,
    category: 'intermediate',
    question: 'Which annotation marks a class as an aspect?',
    options: ['@Component', '@Aspect', '@Advice', '@Pointcut'],
    correctAnswer: 1,
    explanation: '@Aspect marks a class as an aspect containing advice methods for cross-cutting concerns.'
  },
  {
    id: 33,
    category: 'intermediate',
    question: 'What is the default transaction propagation?',
    options: ['REQUIRES_NEW', 'REQUIRED', 'SUPPORTS', 'NEVER'],
    correctAnswer: 1,
    explanation: 'REQUIRED is the default propagation, joining existing transactions or creating new ones if none exist.'
  },
  {
    id: 34,
    category: 'intermediate',
    question: 'Which annotation validates method parameters or return values?',
    options: ['@Validated', '@Valid', '@NotNull', '@Size'],
    correctAnswer: 1,
    explanation: '@Valid triggers JSR-303 validation on method parameters or return values.'
  },
  {
    id: 35,
    category: 'intermediate',
    question: 'What does @SpringBootApplication combine?',
    options: [
      '@Component, @Service, @Repository',
      '@Configuration, @EnableAutoConfiguration, @ComponentScan',
      '@Controller, @RestController, @RequestMapping',
      '@Bean, @Autowired, @Value'
    ],
    correctAnswer: 1,
    explanation: '@SpringBootApplication combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.'
  },
  {
    id: 36,
    category: 'intermediate',
    question: 'Which Spring Boot feature reduces manual configuration?',
    options: ['Component scanning', 'Auto-configuration', 'Dependency injection', 'AOP'],
    correctAnswer: 1,
    explanation: 'Auto-configuration automatically configures Spring applications based on classpath and existing beans.'
  },
  {
    id: 37,
    category: 'intermediate',
    question: 'What annotation is used for handling application events?',
    options: ['@EventHandler', '@EventListener', '@ApplicationEvent', '@Listener'],
    correctAnswer: 1,
    explanation: '@EventListener marks methods as event listeners for handling application events.'
  },
  {
    id: 38,
    category: 'intermediate',
    question: 'Which annotation enables caching for a method?',
    options: ['@Cache', '@Cacheable', '@CacheResult', '@Cached'],
    correctAnswer: 1,
    explanation: '@Cacheable enables declarative caching for methods, storing results in configured caches.'
  },
  {
    id: 39,
    category: 'intermediate',
    question: 'What is the purpose of @Repository annotation?',
    options: [
      'Mark service layer components',
      'Enable automatic exception translation for DAOs',
      'Configure database connections',
      'Define entity mappings'
    ],
    correctAnswer: 1,
    explanation: '@Repository marks DAO classes and enables automatic exception translation from database-specific to Spring exceptions.'
  },
  {
    id: 40,
    category: 'intermediate',
    question: 'Which annotation removes entries from cache?',
    options: ['@CacheEvict', '@CacheRemove', '@CacheDelete', '@CacheClear'],
    correctAnswer: 0,
    explanation: '@CacheEvict removes entries from cache, either specific entries or clearing entire cache.'
  },
  {
    id: 41,
    category: 'intermediate',
    question: 'What is Spring Data JPA?',
    options: [
      'A database management system',
      'A project that simplifies data access using JPA',
      'A web framework',
      'A security framework'
    ],
    correctAnswer: 1,
    explanation: 'Spring Data JPA simplifies data access using JPA by providing repository abstractions and reducing boilerplate code.'
  },
  {
    id: 42,
    category: 'intermediate',
    question: 'Which HTTP methods does @GetMapping handle?',
    options: ['GET and POST', 'Only GET', 'GET and PUT', 'All HTTP methods'],
    correctAnswer: 1,
    explanation: '@GetMapping is a specialized version of @RequestMapping that handles only HTTP GET requests.'
  },
  {
    id: 43,
    category: 'intermediate',
    question: 'What is the difference between @RequestParam and @RequestBody?',
    options: [
      'They are identical',
      '@RequestParam extracts query parameters, @RequestBody binds request body',
      '@RequestParam is deprecated',
      '@RequestBody is for GET requests only'
    ],
    correctAnswer: 1,
    explanation: '@RequestParam extracts query parameters or form data, while @RequestBody binds the entire HTTP request body.'
  },
  {
    id: 44,
    category: 'intermediate',
    question: 'Which advice executes regardless of method outcome?',
    options: ['@Before', '@AfterReturning', '@After', '@AfterThrowing'],
    correctAnswer: 2,
    explanation: '@After advice executes after method completion regardless of outcome, similar to a finally block.'
  },
  {
    id: 45,
    category: 'intermediate',
    question: 'What does transaction isolation control?',
    options: [
      'Method visibility',
      'Concurrent transaction interaction',
      'Bean scope',
      'Exception handling'
    ],
    correctAnswer: 1,
    explanation: 'Transaction isolation controls how concurrent transactions interact and what changes they can see from each other.'
  },
  {
    id: 46,
    category: 'intermediate',
    question: 'Which pattern does Spring MVC follow?',
    options: ['Model-View-Controller', 'Observer', 'Factory', 'Singleton'],
    correctAnswer: 0,
    explanation: 'Spring MVC follows the Model-View-Controller design pattern for building web applications.'
  },
  {
    id: 47,
    category: 'intermediate',
    question: 'What is ModelAndView in Spring MVC?',
    options: [
      'A database entity',
      'An object containing model data and view name',
      'A validation framework',
      'A security component'
    ],
    correctAnswer: 1,
    explanation: 'ModelAndView contains both model data and view name, used by controllers to return data and specify the view.'
  },

  // EXPERT QUIZ QUESTIONS (23 questions)
  {
    id: 48,
    category: 'expert',
    question: 'What is Spring WebFlux built on?',
    options: ['Servlet API', 'Project Reactor', 'Netty only', 'Traditional blocking I/O'],
    correctAnswer: 1,
    explanation: 'Spring WebFlux is built on Project Reactor, providing reactive programming with Mono and Flux types.'
  },
  {
    id: 49,
    category: 'expert',
    question: 'Which types represent reactive streams in Spring WebFlux?',
    options: ['Stream and Optional', 'Mono and Flux', 'Future and Promise', 'Observable and Single'],
    correctAnswer: 1,
    explanation: 'Mono represents 0-1 element and Flux represents 0-N elements in reactive streams.'
  },
  {
    id: 50,
    category: 'expert',
    question: 'What is the difference between @Mock and @MockBean?',
    options: [
      'They are identical',
      '@MockBean integrates with Spring context, @Mock does not',
      '@Mock is deprecated',
      '@MockBean is only for web tests'
    ],
    correctAnswer: 1,
    explanation: '@MockBean creates mocks in Spring application context, while @Mock creates mocks outside Spring context.'
  },
  {
    id: 51,
    category: 'expert',
    question: 'What is the purpose of BeanPostProcessor?',
    options: [
      'Create new beans',
      'Modify bean instances before and after initialization',
      'Handle exceptions',
      'Manage transactions'
    ],
    correctAnswer: 1,
    explanation: 'BeanPostProcessor allows custom modification of bean instances before and after initialization.'
  },
  {
    id: 52,
    category: 'expert',
    question: 'Which annotation enables asynchronous method execution?',
    options: ['@Transactional', '@Async', '@Parallel', '@NonBlocking'],
    correctAnswer: 1,
    explanation: '@Async enables asynchronous method execution in separate threads using configured task executors.'
  },
  {
    id: 53,
    category: 'expert',
    question: 'What is Spring Boot Actuator used for?',
    options: [
      'Building user interfaces',
      'Providing production-ready features like health checks and metrics',
      'Managing databases',
      'Creating REST APIs'
    ],
    correctAnswer: 1,
    explanation: 'Spring Boot Actuator provides production-ready features including health checks, metrics, and management endpoints.'
  },
  {
    id: 54,
    category: 'expert',
    question: 'What is @ConfigurationProperties used for?',
    options: [
      'Creating custom annotations',
      'Binding external properties to Java objects',
      'Configuring databases',
      'Managing security'
    ],
    correctAnswer: 1,
    explanation: '@ConfigurationProperties binds external properties to Java objects with type-safe configuration management.'
  },
  {
    id: 55,
    category: 'expert',
    question: 'Which Spring Cloud component provides service discovery?',
    options: ['Spring Cloud Gateway', 'Spring Cloud Config', 'Spring Cloud Netflix Eureka', 'Spring Cloud Stream'],
    correctAnswer: 2,
    explanation: 'Spring Cloud Netflix Eureka provides service discovery capabilities for microservices.'
  },
  {
    id: 56,
    category: 'expert',
    question: 'What is SpEL in Spring?',
    options: [
      'Spring Programming Language',
      'Spring Expression Language',
      'Spring Entity Language',
      'Spring Process Language'
    ],
    correctAnswer: 1,
    explanation: 'SpEL (Spring Expression Language) is a powerful expression language for querying and manipulating objects at runtime.'
  },
  {
    id: 57,
    category: 'expert',
    question: 'Which annotation is used for scheduled task execution?',
    options: ['@Timer', '@Scheduled', '@Cron', '@Periodic'],
    correctAnswer: 1,
    explanation: '@Scheduled enables periodic task execution with support for cron expressions and fixed delays.'
  },
  {
    id: 58,
    category: 'expert',
    question: 'What is the purpose of @ConditionalOnClass?',
    options: [
      'Check if class is annotated',
      'Create bean only if specified class is present on classpath',
      'Validate class structure',
      'Enable class scanning'
    ],
    correctAnswer: 1,
    explanation: '@ConditionalOnClass creates beans only when specified classes are present on the classpath.'
  },
  {
    id: 59,
    category: 'expert',
    question: 'Which proxy mechanism does Spring use by default?',
    options: ['CGLIB proxies', 'JDK dynamic proxies for interfaces', 'AspectJ weaving', 'No proxies'],
    correctAnswer: 1,
    explanation: 'Spring uses JDK dynamic proxies for interface-based beans and CGLIB proxies for class-based beans.'
  },
  {
    id: 60,
    category: 'expert',
    question: 'What is the purpose of BeanFactoryPostProcessor?',
    options: [
      'Process beans after creation',
      'Modify bean definitions before instantiation',
      'Handle bean lifecycle events',
      'Create proxy beans'
    ],
    correctAnswer: 1,
    explanation: 'BeanFactoryPostProcessor modifies bean definitions before beans are instantiated.'
  },
  {
    id: 61,
    category: 'expert',
    question: 'Which return type should async methods use for results?',
    options: ['void only', 'Future or CompletableFuture', 'String', 'Object'],
    correctAnswer: 1,
    explanation: 'Async methods should return void, Future, CompletableFuture, or other async types for result handling.'
  },
  {
    id: 62,
    category: 'expert',
    question: 'What is Spring\'s testing slice for web layer?',
    options: ['@DataJpaTest', '@WebMvcTest', '@JsonTest', '@RestClientTest'],
    correctAnswer: 1,
    explanation: '@WebMvcTest provides a testing slice focused on Spring MVC components and web layer testing.'
  },
  {
    id: 63,
    category: 'expert',
    question: 'What does backpressure handle in reactive programming?',
    options: [
      'Network latency',
      'Controlling data flow when consumers are slower than producers',
      'Memory management',
      'Error handling'
    ],
    correctAnswer: 1,
    explanation: 'Backpressure controls data flow when consumers process data slower than producers generate it.'
  },
  {
    id: 64,
    category: 'expert',
    question: 'Which component resolves property placeholders in Spring?',
    options: ['PropertyResolver', 'PropertySourcesPlaceholderConfigurer', 'Environment', 'All of the above'],
    correctAnswer: 3,
    explanation: 'All mentioned components work together to resolve property placeholders: Environment, PropertyResolver, and PropertySourcesPlaceholderConfigurer.'
  },
  {
    id: 65,
    category: 'expert',
    question: 'What is the purpose of custom Spring Boot starters?',
    options: [
      'Start the application faster',
      'Package related dependencies and auto-configuration',
      'Handle application lifecycle',
      'Manage security'
    ],
    correctAnswer: 1,
    explanation: 'Custom starters package related dependencies and auto-configuration for easy inclusion in projects.'
  },
  {
    id: 66,
    category: 'expert',
    question: 'Which annotation enables caching configuration?',
    options: ['@EnableCaching', '@CacheConfig', '@Cacheable', '@CacheEnabled'],
    correctAnswer: 0,
    explanation: '@EnableCaching enables Spring\'s annotation-driven cache management capability.'
  },
  {
    id: 67,
    category: 'expert',
    question: 'What is transaction synchronization used for?',
    options: [
      'Synchronizing multiple threads',
      'Registering callbacks for transaction lifecycle events',
      'Managing database locks',
      'Handling concurrent access'
    ],
    correctAnswer: 1,
    explanation: 'Transaction synchronization allows registering callbacks for transaction lifecycle events like commit and rollback.'
  },
  {
    id: 68,
    category: 'expert',
    question: 'Which scope requires custom implementation of Scope interface?',
    options: ['Singleton', 'Prototype', 'Custom scopes', 'Request'],
    correctAnswer: 2,
    explanation: 'Custom scopes require implementing the Scope interface to define custom bean lifecycle management.'
  },
  {
    id: 69,
    category: 'expert',
    question: 'What is the primary benefit of reactive programming in Spring?',
    options: [
      'Faster startup time',
      'Better performance with high concurrency and non-blocking operations',
      'Simpler code structure',
      'Reduced memory usage'
    ],
    correctAnswer: 1,
    explanation: 'Reactive programming provides better performance with high concurrency through non-blocking, asynchronous operations.'
  },
  {
    id: 70,
    category: 'expert',
    question: 'Which feature enables conditional auto-configuration in Spring Boot?',
    options: [
      '@Profile annotations',
      '@ConditionalOn* annotations',
      '@Autowired with @Qualifier',
      '@Primary annotation'
    ],
    correctAnswer: 1,
    explanation: '@ConditionalOn* annotations (OnClass, OnMissingBean, OnProperty, etc.) enable conditional auto-configuration based on various conditions.'
  }
];