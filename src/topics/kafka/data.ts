import { Category, CategoryData, Flashcard, QuizQuestion } from '../../types';

export const categoryData: Record<Category, CategoryData> = {
  basics: {
    name: 'Kafka Basics',
    description: 'Topics, partitions, producers, consumers, and fundamental messaging concepts',
    color: '#FF6B35'
  },
  intermediate: {
    name: 'Kafka Intermediate',
    description: 'Kafka Streams, consumer groups, replication, configuration, and cluster management',
    color: '#E55722'
  },
  expert: {
    name: 'Kafka Expert',
    description: 'Advanced architectures, performance tuning, exactly-once semantics, and production patterns',
    color: '#CC4A0F'
  }
};

export const flashcards: Flashcard[] = [
  // BASICS FLASHCARDS (25 cards)
  {
    id: 1,
    category: 'basics',
    question: 'What is Apache Kafka?',
    answer: 'Apache Kafka is a distributed streaming platform designed for building real-time data pipelines and streaming applications. It provides high-throughput, low-latency message publishing and subscribing, with built-in partitioning, replication, and fault tolerance capabilities.'
  },
  {
    id: 2,
    category: 'basics',
    question: 'What is a Kafka Topic?',
    answer: 'A Topic is a category or feed name to which messages are published. Topics are partitioned and distributed across multiple brokers for scalability. Each topic can have multiple partitions, and messages within a partition are ordered by offset.'
  },
  {
    id: 3,
    category: 'basics',
    question: 'What is a Kafka Partition?',
    answer: 'A Partition is a unit of parallelism in Kafka. Each topic is divided into one or more partitions, which are distributed across brokers. Partitions allow Kafka to scale horizontally and enable parallel processing by multiple consumers. Messages within a partition are ordered.'
  },
  {
    id: 4,
    category: 'basics',
    question: 'What is a Kafka Producer?',
    answer: 'A Producer is a client application that publishes messages to Kafka topics. Producers determine which partition to send messages to (either randomly, by key hash, or using custom partitioning logic), and handle batching, compression, and delivery guarantees.'
  },
  {
    id: 5,
    category: 'basics',
    question: 'What is a Kafka Consumer?',
    answer: 'A Consumer is a client application that reads messages from Kafka topics. Consumers can read from one or more partitions and belong to consumer groups for load balancing. They track their position using offsets and can choose to commit offsets manually or automatically.'
  },
  {
    id: 6,
    category: 'basics',
    question: 'What is a Kafka Broker?',
    answer: 'A Broker is a Kafka server that stores and serves messages. Brokers form a cluster and handle client requests for producing and consuming messages. Each broker hosts multiple partitions and can act as a leader or follower for different partitions.'
  },
  {
    id: 7,
    category: 'basics',
    question: 'What is a Kafka Offset?',
    answer: 'An Offset is a unique identifier for each message within a partition. It represents the position of a message in the partition log and is used by consumers to track their reading progress. Offsets are sequential numbers starting from 0.'
  },
  {
    id: 8,
    category: 'basics',
    question: 'What is ZooKeeper\'s role in Kafka?',
    answer: 'ZooKeeper (being phased out in favor of KRaft) manages Kafka cluster metadata, including broker information, topic configurations, partition leadership, and consumer group coordination. It provides distributed coordination services for cluster management and configuration storage.'
  },
  {
    id: 9,
    category: 'basics',
    question: 'What is a Kafka Consumer Group?',
    answer: 'A Consumer Group is a set of consumers that work together to consume a topic. Partitions are distributed among consumers in the group, ensuring each partition is consumed by only one consumer in the group at a time. This enables load balancing and fault tolerance.'
  },
  {
    id: 10,
    category: 'basics',
    question: 'What is partition replication in Kafka?',
    answer: 'Partition replication creates multiple copies of each partition across different brokers for fault tolerance. Each partition has one leader and multiple followers (replicas). The leader handles reads and writes, while followers replicate the data for backup purposes.'
  },
  {
    id: 11,
    category: 'basics',
    question: 'What is the difference between a queue and pub-sub model in Kafka?',
    answer: 'Kafka supports both models: Queue model (consumers in the same group share partitions, each message consumed once), and Pub-Sub model (different consumer groups each receive all messages). A single consumer group provides queue semantics, multiple groups provide pub-sub semantics.'
  },
  {
    id: 12,
    category: 'basics',
    question: 'What determines message ordering in Kafka?',
    answer: 'Messages are ordered within a partition, not across partitions. If you need global ordering, use a single partition. For key-based ordering, messages with the same key go to the same partition, maintaining order for that key while allowing parallelism across different keys.'
  },
  {
    id: 13,
    category: 'basics',
    question: 'What is message retention in Kafka?',
    answer: 'Retention determines how long messages are stored in Kafka. It can be time-based (e.g., 7 days) or size-based (e.g., 1GB per partition). Messages are not deleted immediately after consumption; they remain available for the retention period, allowing multiple consumers or reprocessing.'
  },
  {
    id: 14,
    category: 'basics',
    question: 'What is the role of the Kafka partition key?',
    answer: 'The partition key determines which partition a message is sent to. Messages with the same key always go to the same partition (unless partition count changes), ensuring ordering for related messages. If no key is provided, messages are distributed round-robin across partitions.'
  },
  {
    id: 15,
    category: 'basics',
    question: 'What are Kafka bootstrap servers?',
    answer: 'Bootstrap servers are the initial list of Kafka brokers that clients use to connect to the cluster. Clients only need to specify a few brokers initially - they will discover the full cluster topology automatically. This provides resilience if some brokers are temporarily unavailable.'
  },
  {
    id: 16,
    category: 'basics',
    question: 'What is producer acknowledgment (acks) in Kafka?',
    answer: 'Acknowledgment (acks) controls producer delivery guarantees: acks=0 (no acknowledgment, fastest but riskiest), acks=1 (leader acknowledgment only), acks=all/-1 (all in-sync replicas must acknowledge, slowest but safest). Higher acks values provide better durability.'
  },
  {
    id: 17,
    category: 'basics',
    question: 'What is consumer lag in Kafka?',
    answer: 'Consumer lag is the difference between the latest message offset in a partition and the last committed offset by a consumer. High lag indicates the consumer is falling behind producers. Monitoring lag helps identify performance issues and scaling needs.'
  },
  {
    id: 18,
    category: 'basics',
    question: 'What is the purpose of Kafka Connect?',
    answer: 'Kafka Connect is a framework for connecting Kafka with external systems (databases, search engines, file systems). It provides pre-built connectors and handles scalability, fault tolerance, and data transformation, making it easy to stream data in and out of Kafka.'
  },
  {
    id: 19,
    category: 'basics',
    question: 'What are Kafka message headers?',
    answer: 'Message headers are optional key-value metadata attached to Kafka messages. They don\'t affect partitioning but provide additional context like message type, source, timestamp, or routing information. Headers are useful for filtering, routing, or processing decisions.'
  },
  {
    id: 20,
    category: 'basics',
    question: 'What is the Kafka log structure?',
    answer: 'Kafka stores messages in append-only logs on disk. Each partition is a log file that grows by appending new messages. The log is segmented into files for efficient management, cleanup, and compaction. This design provides high throughput and durability.'
  },
  {
    id: 21,
    category: 'basics',
    question: 'What is auto-commit in Kafka consumers?',
    answer: 'Auto-commit automatically commits consumer offsets at regular intervals (default every 5 seconds). While convenient, it can lead to message loss or duplication if failures occur between commits. Manual commit provides more control over when offsets are committed.'
  },
  {
    id: 22,
    category: 'basics',
    question: 'What is the difference between synchronous and asynchronous producers?',
    answer: 'Synchronous producers wait for acknowledgment before sending the next message, providing immediate feedback but lower throughput. Asynchronous producers send messages without waiting, achieving higher throughput but requiring error handling through callbacks.'
  },
  {
    id: 23,
    category: 'basics',
    question: 'What is partition leadership in Kafka?',
    answer: 'Each partition has one leader broker that handles all reads and writes for that partition. Follower brokers replicate the leader\'s data. If the leader fails, one of the followers becomes the new leader through automatic failover, ensuring high availability.'
  },
  {
    id: 24,
    category: 'basics',
    question: 'What is the Kafka client API structure?',
    answer: 'Kafka provides four main client APIs: Producer API (publish messages), Consumer API (consume messages), Streams API (process streams), and Admin API (manage cluster). Each API is designed for specific use cases and provides different levels of abstraction.'
  },
  {
    id: 25,
    category: 'basics',
    question: 'What is message serialization in Kafka?',
    answer: 'Serialization converts objects to bytes for storage/transmission. Kafka requires serializers for keys and values (e.g., StringSerializer, IntegerSerializer, AvroSerializer). Proper serialization is crucial for data compatibility and evolution, especially in heterogeneous environments.'
  },

  // INTERMEDIATE FLASHCARDS (25 cards)
  {
    id: 26,
    category: 'intermediate',
    question: 'What is Kafka Streams?',
    answer: 'Kafka Streams is a Java library for building stream processing applications on top of Kafka. It provides high-level APIs for transforming and aggregating data streams, handles state management, and offers features like windowing, joins, and fault tolerance without requiring external systems.'
  },
  {
    id: 27,
    category: 'intermediate',
    question: 'What is the difference between KStream and KTable?',
    answer: 'KStream represents an event stream where each record is an independent event. KTable represents a changelog stream where records represent updates to a table (key-value store). KStream is append-only, while KTable maintains the latest value for each key.'
  },
  {
    id: 28,
    category: 'intermediate',
    question: 'What is consumer group rebalancing?',
    answer: 'Rebalancing redistributes partitions among consumers in a group when membership changes (consumer joins/leaves/fails). During rebalancing, all consumers pause consumption while partitions are reassigned. This ensures each partition is consumed by exactly one consumer in the group.'
  },
  {
    id: 29,
    category: 'intermediate',
    question: 'What are Kafka Streams tasks?',
    answer: 'Tasks are the units of parallelism in Kafka Streams. Each task processes one or more partitions and maintains its own state. The number of tasks equals the maximum number of partitions across all input topics. Tasks can be distributed across multiple application instances.'
  },
  {
    id: 30,
    category: 'intermediate',
    question: 'What is log compaction in Kafka?',
    answer: 'Log compaction retains only the latest value for each key within a partition, removing older versions. This creates a key-value snapshot while preserving the log structure. It\'s useful for maintaining current state (like user profiles) while providing durability and replication.'
  },
  {
    id: 31,
    category: 'intermediate',
    question: 'What is ISR (In-Sync Replicas) in Kafka?',
    answer: 'ISR is the set of replica brokers that are fully caught up with the partition leader. Only ISR members can become leaders during failover. The ISR list dynamically changes as replicas fall behind or catch up, ensuring data consistency and availability trade-offs.'
  },
  {
    id: 32,
    category: 'intermediate',
    question: 'What are Kafka producer batching and compression?',
    answer: 'Batching groups multiple messages before sending to improve throughput and reduce network overhead. Compression (gzip, snappy, lz4, zstd) reduces message size. Both optimizations increase latency slightly but significantly improve overall performance, especially for high-volume scenarios.'
  },
  {
    id: 33,
    category: 'intermediate',
    question: 'What is the purpose of Kafka Schema Registry?',
    answer: 'Schema Registry manages and enforces schemas for Kafka messages, providing schema evolution, compatibility checking, and centralized schema storage. It works with serialization formats like Avro, JSON Schema, and Protobuf to ensure data consistency across producers and consumers.'
  },
  {
    id: 34,
    category: 'intermediate',
    question: 'What are Kafka consumer offset management strategies?',
    answer: 'Offset management strategies include: auto-commit (periodic automatic commits), manual sync commit (blocks until committed), manual async commit (non-blocking), and commit on rebalance. Choice depends on delivery guarantees needed (at-most-once, at-least-once, exactly-once).'
  },
  {
    id: 35,
    category: 'intermediate',
    question: 'What is Kafka Connect and its benefits?',
    answer: 'Kafka Connect is a framework for streaming data between Kafka and external systems. It provides fault tolerance, automatic scaling, centralized configuration, and distributed execution. Connectors handle common integrations (databases, files, cloud services) without custom code.'
  },
  {
    id: 36,
    category: 'intermediate',
    question: 'What are Kafka topic configurations?',
    answer: 'Key topic configurations include: retention.ms (retention time), segment.ms (segment roll time), cleanup.policy (delete or compact), min.insync.replicas (minimum replicas for writes), compression.type, and max.message.bytes. These control behavior, performance, and durability.'
  },
  {
    id: 37,
    category: 'intermediate',
    question: 'What is Kafka Streams state management?',
    answer: 'Kafka Streams manages local state stores (RocksDB by default) for aggregations and joins. State stores are backed by changelog topics for fault tolerance. When instances fail, state is restored from changelogs, enabling stateful processing with fault tolerance.'
  },
  {
    id: 38,
    category: 'intermediate',
    question: 'What are Kafka producer idempotence and transactions?',
    answer: 'Idempotent producers prevent duplicate messages during retries by assigning sequence numbers. Transactions provide atomicity across multiple partitions/topics, enabling exactly-once processing. Both features help achieve exactly-once delivery semantics in stream processing applications.'
  },
  {
    id: 39,
    category: 'intermediate',
    question: 'What is Kafka Streams windowing?',
    answer: 'Windowing groups events by time intervals for aggregations. Types include: tumbling (fixed, non-overlapping), hopping (fixed, overlapping), sliding (dynamic based on event timing), and session (gap-based). Windows enable time-based analytics and aggregations.'
  },
  {
    id: 40,
    category: 'intermediate',
    question: 'What are Kafka consumer group coordination protocols?',
    answer: 'Consumer groups use protocols for coordination: heartbeat mechanism (detect failures), partition assignment strategies (range, round-robin, sticky), and group coordinator (manages membership and assignments). These ensure balanced consumption and fault tolerance.'
  },
  {
    id: 41,
    category: 'intermediate',
    question: 'What is Kafka MirrorMaker and its use cases?',
    answer: 'MirrorMaker replicates data between Kafka clusters for disaster recovery, data migration, or multi-datacenter deployments. MirrorMaker 2.0 provides bidirectional replication, topic/consumer group synchronization, and improved operational features for cross-cluster scenarios.'
  },
  {
    id: 42,
    category: 'intermediate',
    question: 'What are Kafka security features?',
    answer: 'Security features include: SSL/TLS encryption, SASL authentication (PLAIN, SCRAM, GSSAPI, OAUTHBEARER), ACL authorization, quotas for rate limiting, and audit logging. These provide end-to-end security for authentication, authorization, encryption, and monitoring.'
  },
  {
    id: 43,
    category: 'intermediate',
    question: 'What is Kafka controller and its responsibilities?',
    answer: 'The controller is a designated broker that manages cluster-wide operations: partition leader elections, replica management, topic creation/deletion, and broker membership changes. Only one controller exists at a time, with automatic failover if the controller broker fails.'
  },
  {
    id: 44,
    category: 'intermediate',
    question: 'What are Kafka monitoring and observability best practices?',
    answer: 'Key metrics to monitor include: throughput (messages/sec, bytes/sec), latency (produce/consume), consumer lag, broker disk/CPU/memory usage, replication metrics, and error rates. Tools like JMX, Prometheus, and specialized Kafka monitoring solutions provide insights.'
  },
  {
    id: 45,
    category: 'intermediate',
    question: 'What is Kafka partition key strategies?',
    answer: 'Partition key strategies include: hash-based (default, even distribution), custom partitioners (business logic based), null keys (round-robin), and key-based ordering (related messages together). Choice affects load balancing, ordering guarantees, and consumer parallelism.'
  },
  {
    id: 46,
    category: 'intermediate',
    question: 'What is Kafka consumer fetch configuration?',
    answer: 'Fetch configurations control consumer behavior: fetch.min.bytes (minimum data before returning), fetch.max.wait.ms (maximum wait time), max.poll.records (records per poll), and max.partition.fetch.bytes (maximum per partition). These balance throughput and latency.'
  },
  {
    id: 47,
    category: 'intermediate',
    question: 'What are Kafka cluster scaling strategies?',
    answer: 'Scaling strategies include: adding brokers (horizontal scaling), increasing partition count (more parallelism), optimizing configurations (batch sizes, compression), and load balancing (partition reassignment). Consider replication factor, network, and storage capacity when scaling.'
  },
  {
    id: 48,
    category: 'intermediate',
    question: 'What is Kafka Streams topology?',
    answer: 'A topology defines the computational logic of a stream processing application as a directed acyclic graph (DAG) of processors. Processors transform, filter, aggregate, or join data streams. Topologies can be built using high-level DSL or low-level Processor API.'
  },
  {
    id: 49,
    category: 'intermediate',
    question: 'What are Kafka delivery semantics?',
    answer: 'Delivery semantics define message processing guarantees: at-most-once (no duplicates, possible loss), at-least-once (no loss, possible duplicates), exactly-once (no loss or duplicates). Choice depends on business requirements and affects performance and complexity.'
  },
  {
    id: 50,
    category: 'intermediate',
    question: 'What is Kafka log segment management?',
    answer: 'Kafka divides partition logs into segments for efficient management. Active segment receives new messages, while closed segments are available for retention, compaction, or deletion. Segment size and time configurations affect performance, storage, and recovery characteristics.'
  },

  // EXPERT FLASHCARDS (25 cards)
  {
    id: 51,
    category: 'expert',
    question: 'What is exactly-once semantics (EOS) in Kafka Streams?',
    answer: 'EOS ensures each message is processed exactly once, preventing duplicates and losses. It uses idempotent producers, transactions, and consumer offset management. EOS requires careful coordination between producer transactions and consumer commits, trading some performance for consistency guarantees.'
  },
  {
    id: 52,
    category: 'expert',
    question: 'What is KRaft mode and how does it replace ZooKeeper?',
    answer: 'KRaft (Kafka Raft) is Kafka\'s built-in consensus protocol replacing ZooKeeper. It uses a distributed log for metadata management, eliminates external dependencies, improves startup time, and supports larger clusters. Controllers use Raft protocol for leader election and metadata replication.'
  },
  {
    id: 53,
    category: 'expert',
    question: 'What are Kafka performance optimization strategies?',
    answer: 'Performance optimizations include: proper partition count (2-3x broker count), SSD storage, adequate memory for page cache, network optimization, compression tuning, batch size optimization, proper threading, and avoiding small messages. Monitor bottlenecks and tune systematically.'
  },
  {
    id: 54,
    category: 'expert',
    question: 'What is Kafka cluster federation and multi-tenancy?',
    answer: 'Federation connects multiple Kafka clusters for scaling beyond single cluster limits. Multi-tenancy uses topics, quotas, security policies, and namespacing to isolate different applications/teams within a cluster. Both approaches address scalability and organizational boundaries.'
  },
  {
    id: 55,
    category: 'expert',
    question: 'What are advanced Kafka Streams patterns?',
    answer: 'Advanced patterns include: event sourcing (commands → events), CQRS (separate read/write models), saga patterns (distributed transactions), stateful stream joins, custom processors, interactive queries, and stream-table duality for building event-driven architectures.'
  },
  {
    id: 56,
    category: 'expert',
    question: 'What is Kafka disaster recovery and backup strategies?',
    answer: 'DR strategies include: cross-datacenter replication (MirrorMaker), backup to object storage, automated failover procedures, RTO/RPO planning, and testing recovery processes. Consider network partitions, split-brain scenarios, and data consistency during disasters.'
  },
  {
    id: 57,
    category: 'expert',
    question: 'What are Kafka advanced security patterns?',
    answer: 'Advanced security includes: end-to-end encryption, field-level security, dynamic ACLs, integration with external systems (LDAP, OAuth), audit trails, secrets management, network segmentation, and compliance frameworks (GDPR, SOX). Balance security with performance requirements.'
  },
  {
    id: 58,
    category: 'expert',
    question: 'What is Kafka operational complexity management?',
    answer: 'Operations include: automated deployment, configuration management, capacity planning, upgrade procedures, performance tuning, troubleshooting, alerting, and runbooks. Use Infrastructure as Code, monitoring automation, and operational maturity models for complex environments.'
  },
  {
    id: 59,
    category: 'expert',
    question: 'What are Kafka anti-patterns to avoid?',
    answer: 'Anti-patterns include: too many/few partitions, wrong partition keys, inefficient consumers (polling too frequently/infrequently), ignoring consumer lag, misusing compacted topics, blocking operations in stream processors, and inadequate error handling strategies.'
  },
  {
    id: 60,
    category: 'expert',
    question: 'What is Kafka capacity planning methodology?',
    answer: 'Capacity planning considers: message throughput/size, retention requirements, replication overhead, consumer lag tolerance, peak traffic patterns, growth projections, hardware specifications, and network bandwidth. Use benchmarking and modeling tools for accurate planning.'
  },
  {
    id: 61,
    category: 'expert',
    question: 'What are Kafka advanced troubleshooting techniques?',
    answer: 'Troubleshooting involves: JMX metrics analysis, log correlation, network analysis, disk I/O profiling, GC tuning, thread dump analysis, consumer group debugging, partition skew detection, and using tools like kafka-log-dirs, kafka-topics, and kafka-consumer-groups.'
  },
  {
    id: 62,
    category: 'expert',
    question: 'What is Kafka stream processing architecture design?',
    answer: 'Architecture design considers: event sourcing patterns, data lineage, schema evolution, error handling strategies, state store design, scaling patterns, monitoring approaches, testing strategies, and integration patterns with other systems in event-driven architectures.'
  },
  {
    id: 63,
    category: 'expert',
    question: 'What are Kafka custom partitioner and serializer strategies?',
    answer: 'Custom partitioners enable business-specific routing logic, geographic distribution, or load balancing. Custom serializers handle complex data formats, encryption, compression, or schema evolution. Both require careful consideration of compatibility, performance, and maintainability.'
  },
  {
    id: 64,
    category: 'expert',
    question: 'What is Kafka inter-cluster communication patterns?',
    answer: 'Patterns include: hub-and-spoke (central cluster), mesh (peer-to-peer), hierarchical (regional aggregation), and active-active (bidirectional). Each pattern addresses different use cases for geographical distribution, latency requirements, and disaster recovery needs.'
  },
  {
    id: 65,
    category: 'expert',
    question: 'What are Kafka testing strategies for stream applications?',
    answer: 'Testing strategies include: unit tests (TopologyTestDriver), integration tests (embedded clusters), contract testing, property-based testing, chaos engineering, performance testing, and production traffic replay. Focus on correctness, performance, and fault tolerance.'
  },
  {
    id: 66,
    category: 'expert',
    question: 'What is Kafka memory and JVM tuning?',
    answer: 'JVM tuning includes: heap sizing (producer/consumer buffers), GC tuning (G1/ZGC for low latency), off-heap storage (page cache optimization), native memory tracking, and JVM flags optimization. Balance throughput, latency, and resource utilization.'
  },
  {
    id: 67,
    category: 'expert',
    question: 'What are Kafka advanced monitoring and alerting patterns?',
    answer: 'Advanced monitoring includes: custom metrics, distributed tracing, anomaly detection, predictive alerting, SLA monitoring, business metrics correlation, log aggregation, and end-to-end transaction tracking. Implement proactive monitoring beyond basic metrics.'
  },
  {
    id: 68,
    category: 'expert',
    question: 'What is Kafka cloud-native deployment strategies?',
    answer: 'Cloud-native patterns include: Kubernetes operators (Strimzi), serverless streaming, managed services integration, auto-scaling, ephemeral storage handling, service mesh integration, and cloud-specific optimizations. Consider vendor lock-in, networking, and cost optimization.'
  },
  {
    id: 69,
    category: 'expert',
    question: 'What are Kafka data governance and lineage strategies?',
    answer: 'Data governance includes: schema registry policies, data classification, privacy controls, audit trails, lineage tracking, metadata management, quality monitoring, and compliance frameworks. Implement governance early to scale effectively.'
  },
  {
    id: 70,
    category: 'expert',
    question: 'What is Kafka performance benchmarking methodology?',
    answer: 'Benchmarking methodology includes: realistic workload modeling, environment isolation, baseline establishment, systematic parameter variation, statistical analysis, bottleneck identification, and continuous performance regression testing for production readiness.'
  },
  {
    id: 71,
    category: 'expert',
    question: 'What are Kafka zero-downtime upgrade strategies?',
    answer: 'Zero-downtime upgrades use: rolling upgrades (one broker at a time), compatibility matrices, feature flag management, monitoring during upgrades, rollback procedures, client compatibility validation, and coordination with application deployments.'
  },
  {
    id: 72,
    category: 'expert',
    question: 'What is Kafka edge computing and IoT integration?',
    answer: 'Edge integration involves: lightweight clients, intermittent connectivity handling, local buffering, data aggregation at edge, security in constrained environments, bandwidth optimization, and synchronization with central clusters for IoT scenarios.'
  },
  {
    id: 73,
    category: 'expert',
    question: 'What are Kafka advanced consumer patterns?',
    answer: 'Advanced patterns include: custom rebalance listeners, manual partition assignment, consumer pause/resume, offset reset strategies, consumer interceptors, multi-threaded consumption, backpressure handling, and poison message handling for robust applications.'
  },
  {
    id: 74,
    category: 'expert',
    question: 'What is Kafka cost optimization strategies?',
    answer: 'Cost optimization includes: right-sizing clusters, tiered storage (hot/warm/cold), compression optimization, retention tuning, quota management, resource sharing, cloud cost monitoring, and automation to reduce operational overhead while maintaining SLAs.'
  },
  {
    id: 75,
    category: 'expert',
    question: 'What are Kafka enterprise integration patterns?',
    answer: 'Enterprise patterns include: event-driven architecture, microservices communication, legacy system integration, API gateway integration, enterprise service bus replacement, master data management, and real-time analytics pipelines for large-scale enterprise adoption.'
  }
];

export const quizQuestions: QuizQuestion[] = [
  // BASICS QUIZ QUESTIONS (23 questions)
  {
    id: 1,
    category: 'basics',
    question: 'What is Apache Kafka primarily designed for?',
    options: [
      'Batch processing',
      'Distributed streaming and real-time data pipelines',
      'File storage',
      'Web hosting'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    category: 'basics',
    question: 'What is a Kafka Topic?',
    options: [
      'A consumer application',
      'A category or feed name for messages',
      'A broker server',
      'A partition within a message'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    category: 'basics',
    question: 'What determines which partition a message goes to?',
    options: [
      'Message size',
      'Producer ID',
      'Partition key (or round-robin if no key)',
      'Consumer group'
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    category: 'basics',
    question: 'What is a Kafka Producer?',
    options: [
      'A service that reads messages',
      'A client application that publishes messages to topics',
      'A storage system for messages',
      'A message routing service'
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    category: 'basics',
    question: 'What is a Kafka Consumer?',
    options: [
      'A client application that reads messages from topics',
      'A server that stores messages',
      'A tool for creating topics',
      'A message compression service'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    category: 'basics',
    question: 'What is a Kafka Broker?',
    options: [
      'A client application',
      'A message format',
      'A Kafka server that stores and serves messages',
      'A consumer group'
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    category: 'basics',
    question: 'What is an offset in Kafka?',
    options: [
      'A time delay',
      'A unique identifier for each message within a partition',
      'A broker address',
      'A consumer group name'
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    category: 'basics',
    question: 'What was ZooKeeper\'s primary role in Kafka?',
    options: [
      'Message storage',
      'Data compression',
      'Cluster metadata management and coordination',
      'Message routing'
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    category: 'basics',
    question: 'What is a Kafka Consumer Group?',
    options: [
      'A collection of topics',
      'A set of consumers working together to consume a topic',
      'A group of producers',
      'A cluster of brokers'
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    category: 'basics',
    question: 'What is the purpose of partition replication?',
    options: [
      'To increase message throughput',
      'To provide fault tolerance and data backup',
      'To reduce storage costs',
      'To improve message ordering'
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    category: 'basics',
    question: 'How are messages ordered in Kafka?',
    options: [
      'Globally across all topics',
      'Within each partition only',
      'By timestamp only',
      'By consumer group'
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    category: 'basics',
    question: 'What is message retention in Kafka?',
    options: [
      'How fast messages are processed',
      'How long messages are stored before being deleted',
      'How many consumers can read a message',
      'How messages are compressed'
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    category: 'basics',
    question: 'What are bootstrap servers?',
    options: [
      'Backup servers for failover',
      'The initial list of Kafka brokers for client connection',
      'Servers that start topics',
      'Consumer coordination servers'
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    category: 'basics',
    question: 'What does acks=all mean for a producer?',
    options: [
      'Acknowledge all consumers',
      'All in-sync replicas must acknowledge the message',
      'Acknowledge all partitions',
      'Send to all topics'
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    category: 'basics',
    question: 'What is consumer lag?',
    options: [
      'Slow consumer processing',
      'Difference between latest offset and consumer\'s committed offset',
      'Network delay',
      'Time between message production and consumption'
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    category: 'basics',
    question: 'What is Kafka Connect used for?',
    options: [
      'Connecting consumers to producers',
      'Connecting Kafka with external systems',
      'Connecting brokers together',
      'Network connectivity testing'
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    category: 'basics',
    question: 'What are message headers in Kafka?',
    options: [
      'The first line of a message',
      'Optional key-value metadata attached to messages',
      'Routing information for partitions',
      'Consumer group assignments'
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    category: 'basics',
    question: 'How does auto-commit work for consumers?',
    options: [
      'Commits after each message',
      'Automatically commits offsets at regular intervals',
      'Commits when consumer shuts down',
      'Never commits automatically'
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    category: 'basics',
    question: 'What is partition leadership?',
    options: [
      'The first partition in a topic',
      'One broker handles reads/writes for each partition',
      'The largest partition',
      'The most recently created partition'
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    category: 'basics',
    question: 'What are the main Kafka client APIs?',
    options: [
      'Read and Write APIs',
      'Producer, Consumer, Streams, and Admin APIs',
      'Input and Output APIs',
      'Send and Receive APIs'
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    category: 'basics',
    question: 'Why is message serialization important?',
    options: [
      'To make messages smaller',
      'To convert objects to bytes for storage/transmission',
      'To encrypt messages',
      'To order messages'
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    category: 'basics',
    question: 'What happens if no partition key is provided?',
    options: [
      'Message is rejected',
      'Messages are distributed round-robin across partitions',
      'Message goes to partition 0',
      'Producer assigns a random key'
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    category: 'basics',
    question: 'How does Kafka achieve high throughput?',
    options: [
      'By compressing all messages',
      'Through append-only logs, batching, and parallel processing',
      'By using faster networks',
      'By limiting message size'
    ],
    correctAnswer: 1
  },

  // INTERMEDIATE QUIZ QUESTIONS (24 questions)
  {
    id: 24,
    category: 'intermediate',
    question: 'What is Kafka Streams?',
    options: [
      'A storage system',
      'A Java library for stream processing',
      'A monitoring tool',
      'A configuration manager'
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    category: 'intermediate',
    question: 'What is the difference between KStream and KTable?',
    options: [
      'No difference',
      'KStream is event stream, KTable is changelog/table',
      'KTable is faster than KStream',
      'KStream stores data, KTable processes it'
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    category: 'intermediate',
    question: 'What triggers consumer group rebalancing?',
    options: [
      'High message volume',
      'Consumer joins, leaves, or fails',
      'Broker failure',
      'Topic creation'
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    category: 'intermediate',
    question: 'What are Kafka Streams tasks?',
    options: [
      'Background processes',
      'Units of parallelism that process partitions',
      'Configuration settings',
      'Error handling mechanisms'
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    category: 'intermediate',
    question: 'What is log compaction?',
    options: [
      'Compressing messages',
      'Retaining only the latest value for each key',
      'Removing old log files',
      'Combining multiple logs'
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    category: 'intermediate',
    question: 'What does ISR stand for?',
    options: [
      'Internal State Replicas',
      'In-Sync Replicas',
      'Index Storage Replicas',
      'Integrated System Replicas'
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    category: 'intermediate',
    question: 'What is the benefit of producer batching?',
    options: [
      'Better message ordering',
      'Improved throughput and reduced network overhead',
      'Stronger durability guarantees',
      'Simplified configuration'
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    category: 'intermediate',
    question: 'What is Schema Registry used for?',
    options: [
      'User authentication',
      'Managing and enforcing message schemas',
      'Topic administration',
      'Performance monitoring'
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    category: 'intermediate',
    question: 'What is the difference between manual and auto-commit?',
    options: [
      'No difference',
      'Manual provides more control over when offsets are committed',
      'Auto-commit is faster',
      'Manual commit uses less memory'
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    category: 'intermediate',
    question: 'What does Kafka Connect provide?',
    options: [
      'Message compression',
      'Framework for streaming data between Kafka and external systems',
      'Consumer group coordination',
      'Broker clustering'
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    category: 'intermediate',
    question: 'What is cleanup.policy=compact used for?',
    options: [
      'Deleting old messages',
      'Log compaction to retain latest values',
      'Compressing messages',
      'Cleaning up consumer groups'
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    category: 'intermediate',
    question: 'How does Kafka Streams handle state?',
    options: [
      'Stateless processing only',
      'Local state stores backed by changelog topics',
      'External database storage',
      'In-memory only'
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    category: 'intermediate',
    question: 'What are idempotent producers?',
    options: [
      'Producers that send identical messages',
      'Producers that prevent duplicate messages during retries',
      'Producers that never fail',
      'Producers that send to multiple topics'
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    category: 'intermediate',
    question: 'What types of windows does Kafka Streams support?',
    options: [
      'Fixed windows only',
      'Tumbling, hopping, sliding, and session windows',
      'Time windows only',
      'Count-based windows only'
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    category: 'intermediate',
    question: 'What is MirrorMaker used for?',
    options: [
      'Creating topic copies',
      'Replicating data between Kafka clusters',
      'Mirroring consumer groups',
      'Creating backup brokers'
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    category: 'intermediate',
    question: 'Which authentication methods does Kafka support?',
    options: [
      'Password only',
      'SSL/TLS, SASL (PLAIN, SCRAM, GSSAPI)',
      'API keys only',
      'Certificate-based only'
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    category: 'intermediate',
    question: 'What is the Kafka controller responsible for?',
    options: [
      'Message routing',
      'Cluster-wide operations like leader elections',
      'Consumer coordination',
      'Message compression'
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    category: 'intermediate',
    question: 'What metrics are important for Kafka monitoring?',
    options: [
      'CPU usage only',
      'Throughput, latency, consumer lag, error rates',
      'Disk space only',
      'Network bandwidth only'
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    category: 'intermediate',
    question: 'How do custom partitioners work?',
    options: [
      'They randomly assign partitions',
      'They implement business-specific routing logic',
      'They balance load automatically',
      'They replicate across brokers'
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    category: 'intermediate',
    question: 'What does fetch.min.bytes control?',
    options: [
      'Maximum fetch size',
      'Minimum data size before consumer returns',
      'Fetch timeout',
      'Number of records per fetch'
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    category: 'intermediate',
    question: 'What is a Kafka Streams topology?',
    options: [
      'Network layout',
      'Computational logic as a directed graph of processors',
      'Physical cluster arrangement',
      'Consumer group structure'
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    category: 'intermediate',
    question: 'What are the three delivery semantics?',
    options: [
      'Fast, medium, slow',
      'At-most-once, at-least-once, exactly-once',
      'Single, double, triple',
      'Low, medium, high'
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    category: 'intermediate',
    question: 'How are Kafka log segments managed?',
    options: [
      'As single files',
      'Divided into segments for efficient management',
      'Stored in memory',
      'Compressed automatically'
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    category: 'intermediate',
    question: 'What happens during partition reassignment?',
    options: [
      'Data is lost',
      'Partitions are moved between brokers for load balancing',
      'Topics are recreated',
      'Consumers are restarted'
    ],
    correctAnswer: 1
  },

  // EXPERT QUIZ QUESTIONS (23 questions)
  {
    id: 48,
    category: 'expert',
    question: 'What is required for exactly-once semantics in Kafka Streams?',
    options: [
      'High replication factor',
      'Idempotent producers, transactions, and careful offset management',
      'Fast network',
      'Large batch sizes'
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    category: 'expert',
    question: 'What is KRaft mode?',
    options: [
      'A compression algorithm',
      'Kafka\'s built-in consensus protocol replacing ZooKeeper',
      'A consumer pattern',
      'A security feature'
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    category: 'expert',
    question: 'What should be considered for optimal partition count?',
    options: [
      'Always use 1 partition',
      '2-3 times the number of brokers for parallelism',
      'As many as possible',
      'Equal to number of consumers'
    ],
    correctAnswer: 1
  },
  {
    id: 51,
    category: 'expert',
    question: 'What is cluster federation in Kafka?',
    options: [
      'Broker clustering',
      'Connecting multiple Kafka clusters for scaling',
      'Consumer group federation',
      'Topic replication'
    ],
    correctAnswer: 1
  },
  {
    id: 52,
    category: 'expert',
    question: 'Which pattern is useful for distributed transactions?',
    options: [
      'Pub-sub pattern',
      'Saga pattern with event sourcing',
      'Request-response pattern',
      'Batch processing pattern'
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    category: 'expert',
    question: 'What is important for Kafka disaster recovery?',
    options: [
      'Local backups only',
      'Cross-datacenter replication and automated failover',
      'Single datacenter is sufficient',
      'Manual recovery procedures'
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    category: 'expert',
    question: 'What advanced security features does Kafka provide?',
    options: [
      'Basic authentication only',
      'End-to-end encryption, ACLs, audit trails, quotas',
      'Network firewalls only',
      'Password protection only'
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    category: 'expert',
    question: 'What should be avoided in Kafka deployments?',
    options: [
      'Monitoring',
      'Too many/few partitions, wrong partition keys, blocking operations',
      'Replication',
      'Load balancing'
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    category: 'expert',
    question: 'What factors affect Kafka capacity planning?',
    options: [
      'Message count only',
      'Throughput, retention, replication, growth projections',
      'Broker count only',
      'Network speed only'
    ],
    correctAnswer: 1
  },
  {
    id: 57,
    category: 'expert',
    question: 'What tools help with Kafka troubleshooting?',
    options: [
      'Basic logs only',
      'JMX metrics, kafka-log-dirs, kafka-consumer-groups',
      'Network monitors only',
      'CPU monitors only'
    ],
    correctAnswer: 1
  },
  {
    id: 58,
    category: 'expert',
    question: 'What should custom serializers consider?',
    options: [
      'Speed only',
      'Compatibility, performance, schema evolution',
      'Size only',
      'Compression only'
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    category: 'expert',
    question: 'What are inter-cluster communication patterns?',
    options: [
      'Single cluster only',
      'Hub-and-spoke, mesh, hierarchical, active-active',
      'Point-to-point only',
      'Broadcast only'
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    category: 'expert',
    question: 'What testing strategies are important for Kafka Streams?',
    options: [
      'Manual testing only',
      'Unit tests, integration tests, TopologyTestDriver',
      'Performance tests only',
      'Load tests only'
    ],
    correctAnswer: 1
  },
  {
    id: 61,
    category: 'expert',
    question: 'What JVM optimizations help Kafka performance?',
    options: [
      'Default settings are best',
      'Heap sizing, GC tuning, page cache optimization',
      'Maximum memory allocation',
      'Minimum memory allocation'
    ],
    correctAnswer: 1
  },
  {
    id: 62,
    category: 'expert',
    question: 'What advanced monitoring techniques are valuable?',
    options: [
      'Basic metrics only',
      'Custom metrics, distributed tracing, anomaly detection',
      'Log files only',
      'Manual observation'
    ],
    correctAnswer: 1
  },
  {
    id: 63,
    category: 'expert',
    question: 'What cloud-native patterns apply to Kafka?',
    options: [
      'Traditional deployment only',
      'Kubernetes operators, auto-scaling, service mesh',
      'Virtual machines only',
      'Bare metal only'
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    category: 'expert',
    question: 'What is important for data governance in Kafka?',
    options: [
      'Basic permissions only',
      'Schema policies, lineage tracking, compliance frameworks',
      'Topic names only',
      'Consumer group names'
    ],
    correctAnswer: 1
  },
  {
    id: 65,
    category: 'expert',
    question: 'How should zero-downtime upgrades be performed?',
    options: [
      'Upgrade all at once',
      'Rolling upgrades with compatibility checks',
      'Offline upgrades only',
      'Replace entire cluster'
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    category: 'expert',
    question: 'What considerations apply to Kafka at the edge?',
    options: [
      'Same as datacenter deployment',
      'Lightweight clients, intermittent connectivity, local buffering',
      'High bandwidth requirements',
      'Centralized processing only'
    ],
    correctAnswer: 1
  },
  {
    id: 67,
    category: 'expert',
    question: 'What advanced consumer patterns improve robustness?',
    options: [
      'Simple polling only',
      'Custom rebalance listeners, poison message handling',
      'Auto-commit only',
      'Single-threaded consumption'
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    category: 'expert',
    question: 'What strategies help optimize Kafka costs?',
    options: [
      'Use maximum resources',
      'Tiered storage, compression, retention tuning',
      'Ignore resource usage',
      'Always use premium instances'
    ],
    correctAnswer: 1
  },
  {
    id: 69,
    category: 'expert',
    question: 'What enterprise patterns does Kafka enable?',
    options: [
      'Batch processing only',
      'Event-driven architecture, microservices communication',
      'Monolithic applications',
      'File-based integration'
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    category: 'expert',
    question: 'What is key to Kafka performance benchmarking?',
    options: [
      'Single test scenario',
      'Realistic workloads, systematic testing, bottleneck analysis',
      'Maximum throughput only',
      'Default configurations'
    ],
    correctAnswer: 1
  }
];