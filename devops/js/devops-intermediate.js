// DevOps Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What is Infrastructure as Code (IaC)?",
    answer:
      "Infrastructure as Code is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like writing a recipe for setting up a kitchen, so anyone can follow it to create the same setup.",
    codeExample: "N/A",
  },
  {
    id: 2,
    question: "What is Git?",
    answer:
      "Git is a distributed version control system that tracks changes in source code during software development.",
    syntax: "git init",
    example: "git add .",
    realTimeExample:
      "Like a time machine for code, allowing multiple people to work on the same project without overwriting each other's changes.",
    codeExample: "git commit -m 'Initial commit'",
  },
  {
    id: 3,
    question: "What are the benefits of DevOps?",
    answer:
      "Faster delivery, improved collaboration, increased reliability, better scalability, and more efficient resource utilization.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a well-oiled machine where all parts work together smoothly to produce results faster and better.",
    codeExample: "N/A",
  },
  {
    id: 4,
    question: "What is monitoring in DevOps?",
    answer:
      "Monitoring involves tracking the performance and health of applications and infrastructure to identify issues and ensure optimal operation.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a doctor checking a patient's vital signs regularly to catch any health issues early.",
    codeExample: "N/A",
  },
  {
    id: 5,
    question: "What is Jenkins?",
    answer:
      "Jenkins is an open-source automation server that enables developers to build, test, and deploy their software reliably.",
    syntax: "jenkins pipeline",
    example: "pipeline { agent any; stages { stage('Build') { steps { sh 'make' } } } }",
    realTimeExample:
      "Like an automated assembly line that takes raw materials (code) and produces finished products (deployed software) without manual intervention.",
    codeExample: "jenkinsfile",
  },
  {
    id: 6,
    question: "What is a pull request?",
    answer:
      "A pull request is a method of submitting contributions to an open development project. It allows developers to notify team members about changes they've pushed to a branch in a repository.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like submitting a proposal for a group project, where others can review and approve your changes before they are added.",
    codeExample: "N/A",
  },
  {
    id: 7,
    question: "What is branching in version control?",
    answer:
      "Branching is the practice of creating a separate line of development within a version control system, allowing developers to work on features or fixes without affecting the main codebase.",
    syntax: "git branch feature-branch",
    example: "git checkout -b new-feature",
    realTimeExample:
      "Like creating a side path in a garden to test new plants without disturbing the main garden.",
    codeExample: "git branch",
  },
  {
    id: 8,
    question: "What is merging in version control?",
    answer:
      "Merging is the process of combining changes from different branches into a single branch, typically the main branch, in a version control system.",
    syntax: "git merge branch-name",
    example: "git merge feature-branch",
    realTimeExample:
      "Like combining two recipes into one, incorporating the best parts from each.",
    codeExample: "git merge --no-ff feature",
  },
  {
    id: 9,
    question: "What is a commit in version control?",
    answer:
      "A commit is a snapshot of changes made to the codebase at a specific point in time, along with a message describing the changes.",
    syntax: "git commit -m 'message'",
    example: "git commit -m 'Add new feature'",
    realTimeExample:
      "Like taking a photo of your work at the end of the day, so you can remember what you did and go back if needed.",
    codeExample: "git commit -a -m 'Update files'",
  },
  {
    id: 10,
    question: "What is continuous delivery?",
    answer:
      "Continuous delivery is a software development practice where code changes are automatically built, tested, and prepared for release to production, but deployment is manual.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like preparing meals in advance and having them ready to serve, but waiting for the signal to serve them.",
    codeExample: "N/A",
  },
  {
    id: 11,
    question: "What is blue-green deployment?",
    answer:
      "Blue-green deployment is a release strategy where two identical production environments (blue and green) are maintained, and traffic is switched from one to the other after testing.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like having two identical stages for a play, rehearsing on one while the other is performing, then switching.",
    codeExample: "N/A",
  },
  {
    id: 12,
    question: "What is canary deployment?",
    answer:
      "Canary deployment is a technique where a new version of software is gradually rolled out to a small subset of users before full deployment.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like testing a new recipe on a few friends before serving it to the whole party.",
    codeExample: "N/A",
  },
  {
    id: 13,
    question: "What is rolling deployment?",
    answer:
      "Rolling deployment is a strategy where the new version of an application is gradually replaced across all instances, minimizing downtime.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like changing the tires on a car one by one while driving, so the car never stops.",
    codeExample: "N/A",
  },
  {
    id: 14,
    question: "What is a service mesh?",
    answer:
      "A service mesh is a dedicated infrastructure layer for handling service-to-service communication, providing features like load balancing, service discovery, and security.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a network of roads and traffic lights that manage how cars (services) move and communicate in a city.",
    codeExample: "N/A",
  },
  {
    id: 15,
    question: "What is observability?",
    answer:
      "Observability is the ability to measure the internal states of a system by examining its outputs, including logs, metrics, and traces.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like being able to see inside a black box by looking at what comes out, to understand how it works.",
    codeExample: "N/A",
  },
  {
    id: 16,
    question: "What are metrics in monitoring?",
    answer:
      "Metrics are quantitative measurements of system performance, such as CPU usage, memory consumption, and response times.",
  },
  {
    id: 17,
    question: "What is alerting in DevOps?",
    answer:
      "Alerting is the process of notifying teams when predefined conditions or thresholds are met, indicating potential issues in the system.",
  },
  {
    id: 18,
    question: "What is a dashboard in monitoring?",
    answer:
      "A dashboard is a visual display of key metrics and data points that provides an overview of system health and performance.",
  },
  {
    id: 19,
    question: "What is log aggregation?",
    answer:
      "Log aggregation is the process of collecting, centralizing, and analyzing logs from multiple sources to gain insights into system behavior.",
  },
  {
    id: 20,
    question: "What is a build tool?",
    answer:
      "A build tool is software that automates the process of compiling source code, running tests, and packaging applications for deployment.",
  },
  {
    id: 21,
    question: "What is Maven?",
    answer:
      "Maven is a build automation tool primarily used for Java projects, managing dependencies and the build lifecycle.",
  },
  {
    id: 22,
    question: "What is Gradle?",
    answer:
      "Gradle is a build automation tool that supports multiple languages and provides a flexible build system with Groovy or Kotlin DSL.",
  },
  {
    id: 23,
    question: "What is a package manager?",
    answer:
      "A package manager is a tool that automates the process of installing, updating, and removing software packages and their dependencies.",
  },
  {
    id: 24,
    question: "What is npm?",
    answer:
      "npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript packages.",
  },
  {
    id: 25,
    question: "What is pip?",
    answer:
      "pip is the package installer for Python, used to install and manage Python packages from the Python Package Index (PyPI).",
  },
  {
    id: 26,
    question: "What is a container registry?",
    answer:
      "A container registry is a storage and distribution system for container images, allowing teams to store, manage, and share containerized applications.",
  },
  {
    id: 27,
    question: "What is Docker Hub?",
    answer:
      "Docker Hub is a cloud-based registry service provided by Docker for finding, sharing, and managing container images.",
  },
  {
    id: 28,
    question: "What is orchestration in DevOps?",
    answer:
      "Orchestration is the automated configuration, coordination, and management of computer systems and software.",
  },
  {
    id: 29,
    question: "What is a pod in Kubernetes?",
    answer:
      "A pod is the smallest deployable unit in Kubernetes, consisting of one or more containers that share storage and network resources.",
  },
  {
    id: 30,
    question: "What is a service in Kubernetes?",
    answer:
      "A service in Kubernetes is an abstraction that defines a logical set of pods and a policy to access them, providing load balancing and service discovery.",
  },
  {
    id: 31,
    question: "What is a deployment in Kubernetes?",
    answer:
      "A deployment in Kubernetes provides declarative updates for pods and replica sets, managing the rollout of application updates.",
  },
  {
    id: 32,
    question: "What is Helm?",
    answer:
      "Helm is a package manager for Kubernetes that simplifies the deployment and management of applications using charts.",
  },
  {
    id: 33,
    question: "What is pipeline as code?",
    answer:
      "Pipeline as code is the practice of defining and managing CI/CD pipelines using code, stored in version control, for better collaboration and maintainability.",
  },
  {
    id: 34,
    question: "What is declarative configuration?",
    answer:
      "Declarative configuration describes the desired state of a system, and the system automatically achieves and maintains that state.",
  },
  {
    id: 35,
    question: "What is imperative configuration?",
    answer:
      "Imperative configuration specifies the exact steps to achieve a desired state, requiring manual intervention for changes.",
  },
  {
    id: 36,
    question: "What is a secret in DevOps?",
    answer:
      "A secret is sensitive information, such as passwords or API keys, that needs to be protected and managed securely in applications and infrastructure.",
  },
  {
    id: 37,
    question: "What is a config map in Kubernetes?",
    answer:
      "A config map in Kubernetes is used to store non-confidential data in key-value pairs, which can be consumed by pods as environment variables or configuration files.",
  },
  {
    id: 38,
    question: "What is a namespace in Kubernetes?",
    answer:
      "A namespace in Kubernetes provides a mechanism for isolating groups of resources within a single cluster.",
  },
  {
    id: 39,
    question: "What is a cluster in Kubernetes?",
    answer:
      "A cluster in Kubernetes is a set of nodes (physical or virtual machines) running containerized applications managed by the Kubernetes control plane.",
  },
  {
    id: 40,
    question: "What is auto-scaling?",
    answer:
      "Auto-scaling is the ability of a system to automatically adjust its resources based on demand, ensuring optimal performance and cost efficiency.",
  },
  {
    id: 41,
    question: "What is horizontal scaling?",
    answer:
      "Horizontal scaling involves adding more instances of an application to handle increased load, distributing the workload across multiple machines.",
  },
  {
    id: 42,
    question: "What is vertical scaling?",
    answer:
      "Vertical scaling involves increasing the resources (CPU, memory) of a single instance to handle increased load.",
  },
  {
    id: 43,
    question: "What is a load balancer?",
    answer:
      "A load balancer is a device or software that distributes network traffic across multiple servers to ensure no single server becomes overwhelmed.",
  },
  {
    id: 44,
    question: "What is a reverse proxy?",
    answer:
      "A reverse proxy is a server that sits between client devices and web servers, forwarding client requests to the appropriate server.",
  },
  {
    id: 45,
    question: "What is an API gateway?",
    answer:
      "An API gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, and routing requests to the appropriate service.",
  },
  {
    id: 46,
    question: "What is microservices communication?",
    answer:
      "Microservices communication refers to the methods and protocols used by microservices to interact with each other, such as HTTP/REST, gRPC, or message queues.",
  },
  {
    id: 47,
    question: "What is event-driven architecture?",
    answer:
      "Event-driven architecture is a software architecture pattern where the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs.",
  },
  {
    id: 48,
    question: "What is a message queue?",
    answer:
      "A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures.",
  },
  {
    id: 49,
    question: "What is RabbitMQ?",
    answer:
      "RabbitMQ is an open-source message broker software that implements the Advanced Message Queuing Protocol (AMQP).",
  },
  {
    id: 50,
    question: "What is Apache Kafka?",
    answer:
      "Apache Kafka is an open-source distributed event streaming platform used for building real-time data pipelines and streaming applications.",
  },
];

// Make data available globally
window.intermediate = intermediate;
