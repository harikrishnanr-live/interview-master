// DevOps Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is Ansible?",
    answer:
      "Ansible is an open-source software provisioning, configuration management, and application-deployment tool.",
    syntax: "ansible-playbook playbook.yml",
    example: "ansible-playbook deploy.yml",
    realTimeExample:
      "Like a conductor directing an orchestra, Ansible automates the configuration of multiple servers simultaneously.",
    codeExample:
      "---\n- hosts: webservers\n  tasks:\n  - name: Install nginx\n    apt:\n      name: nginx\n      state: present",
  },
  {
    id: 2,
    question: "What is Terraform?",
    answer:
      "Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.",
    syntax: "terraform init",
    example: "terraform plan",
    realTimeExample:
      "Like a blueprint for building a house, Terraform defines and provisions infrastructure in a repeatable way.",
    codeExample:
      'resource "aws_instance" "example" {\n  ami           = "ami-0c55b159cbfafe1d0"\n  instance_type = "t2.micro"\n}',
  },
  {
    id: 3,
    question: "What is a microservices architecture?",
    answer:
      "Microservices is an architectural style that structures an application as a collection of small, independent services that communicate over well-defined APIs.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a team of specialists working together, each microservice handles a specific function and communicates with others via APIs.",
    codeExample: "N/A",
  },
  {
    id: 4,
    question: "What is cloud computing?",
    answer:
      "Cloud computing is the delivery of computing services over the internet, including servers, storage, databases, networking, software, and analytics.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like renting a car instead of buying one, you pay for computing resources as needed without maintaining physical hardware.",
    codeExample: "N/A",
  },
  {
    id: 5,
    question: "What are the main cloud service models?",
    answer:
      "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like different levels of a building: IaaS is the foundation, PaaS is the floors, SaaS is the furnished rooms.",
    codeExample: "N/A",
  },
  {
    id: 6,
    question: "What is Istio?",
    answer:
      "Istio is an open-source service mesh that provides a uniform way to integrate microservices, manage traffic flow, enforce policies, and aggregate telemetry data.",
    syntax: "istioctl install",
    example: "istioctl proxy-config clusters",
    realTimeExample:
      "Like a traffic control system for microservices, Istio manages communication, security, and observability between services.",
    codeExample:
      "apiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: my-gateway\nspec:\n  selector:\n    istio: ingressgateway",
  },
  {
    id: 7,
    question: "What is Prometheus?",
    answer:
      "Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability, particularly suited for dynamic cloud environments.",
    syntax: "prometheus --config.file=prometheus.yml",
    example: "prometheus --web.listen-address=:9090",
    realTimeExample:
      "Like a vigilant watchman, Prometheus collects and stores metrics from applications and infrastructure for monitoring and alerting.",
    codeExample:
      "global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']",
  },
  {
    id: 8,
    question: "What is Grafana?",
    answer:
      "Grafana is an open-source platform for monitoring and observability that allows you to query, visualize, alert on, and understand your metrics.",
    syntax: "grafana-server",
    example: "grafana-cli plugins install grafana-piechart-panel",
    realTimeExample:
      "Like a dashboard in a car, Grafana displays metrics and data in easy-to-understand charts and graphs.",
    codeExample: "N/A",
  },
  {
    id: 9,
    question: "What is the ELK stack?",
    answer:
      "The ELK stack consists of Elasticsearch (search and analytics), Logstash (data processing), and Kibana (visualization), used for log management and analysis.",
    syntax: "docker run -d elasticsearch",
    example: "logstash -f logstash.conf",
    realTimeExample:
      "Like a library system: Elasticsearch stores and searches data, Logstash processes incoming logs, Kibana visualizes the information.",
    codeExample:
      'input {\n  file {\n    path => "/var/log/*.log"\n  }\n}\n\noutput {\n  elasticsearch {\n    hosts => ["localhost:9200"]\n  }\n}',
  },
  {
    id: 10,
    question: "What is Splunk?",
    answer:
      "Splunk is a software platform for searching, monitoring, and analyzing machine-generated big data via a web-style interface.",
    syntax: "splunk start",
    example: "splunk search 'error'",
    realTimeExample:
      "Like a powerful search engine for logs and data, Splunk helps find patterns and insights in large amounts of machine data.",
    codeExample: "N/A",
  },
  {
    id: 11,
    question: "What is Jaeger?",
    answer:
      "Jaeger is an open-source distributed tracing system that helps monitor and troubleshoot microservices-based distributed systems.",
  },
  {
    id: 12,
    question: "What is OpenTelemetry?",
    answer:
      "OpenTelemetry is a collection of tools, APIs, and SDKs used to instrument, generate, collect, and export telemetry data for analysis.",
  },
  {
    id: 13,
    question: "What is chaos engineering?",
    answer:
      "Chaos engineering is the discipline of experimenting on a system to build confidence in the system's capability to withstand turbulent conditions in production.",
  },
  {
    id: 14,
    question: "What is GitOps?",
    answer:
      "GitOps is a operational framework that takes DevOps best practices used for application development such as version control, collaboration, compliance, and CI/CD, and applies them to infrastructure automation.",
  },
  {
    id: 15,
    question: "What is ArgoCD?",
    answer:
      "ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes that automates the deployment of applications.",
  },
  {
    id: 16,
    question: "What is Flux?",
    answer:
      "Flux is a set of continuous and progressive delivery solutions for Kubernetes that are open and extensible.",
  },
  {
    id: 17,
    question: "What is serverless architecture?",
    answer:
      "Serverless architecture is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers.",
  },
  {
    id: 18,
    question: "What is AWS Lambda?",
    answer:
      "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
  },
  {
    id: 19,
    question: "What is Azure Functions?",
    answer:
      "Azure Functions is a serverless compute service that enables you to run event-triggered code without having to explicitly provision or manage infrastructure.",
  },
  {
    id: 20,
    question: "What is Google Cloud Functions?",
    answer:
      "Google Cloud Functions is a serverless execution environment for building and connecting cloud services.",
  },
  {
    id: 21,
    question: "What is container security?",
    answer:
      "Container security involves protecting containerized applications and their underlying infrastructure from threats throughout the container lifecycle.",
  },
  {
    id: 22,
    question: "What is image scanning?",
    answer:
      "Image scanning is the process of analyzing container images for vulnerabilities, malware, and compliance issues before deployment.",
  },
  {
    id: 23,
    question: "What is vulnerability management?",
    answer:
      "Vulnerability management is the process of identifying, evaluating, treating, and reporting on security vulnerabilities in systems and software.",
  },
  {
    id: 24,
    question: "What is DevSecOps?",
    answer:
      "DevSecOps integrates security practices within the DevOps process, ensuring security is built into every stage of the software development lifecycle.",
  },
  {
    id: 25,
    question: "What is compliance automation?",
    answer:
      "Compliance automation uses software tools to automatically enforce regulatory and organizational policies, reducing manual effort and errors.",
  },
  {
    id: 26,
    question: "What is policy as code?",
    answer:
      "Policy as code is the practice of writing code to manage and automate organizational policies, including security, compliance, and operational policies.",
  },
  {
    id: 27,
    question: "What is Open Policy Agent (OPA)?",
    answer:
      "Open Policy Agent is an open-source, general-purpose policy engine that unifies policy enforcement across the stack.",
  },
  {
    id: 28,
    question: "What is infrastructure security?",
    answer:
      "Infrastructure security involves protecting the underlying IT infrastructure, including networks, servers, and data centers, from cyber threats.",
  },
  {
    id: 29,
    question: "What is zero trust architecture?",
    answer:
      "Zero trust architecture is a security model that assumes no user or device is trustworthy by default, requiring verification for every access request.",
  },
  {
    id: 30,
    question: "What is immutable infrastructure?",
    answer:
      "Immutable infrastructure is an approach where servers are never modified after deployment; instead, new instances are created and old ones are replaced.",
  },
  {
    id: 31,
    question: "What are ephemeral environments?",
    answer:
      "Ephemeral environments are temporary, on-demand environments created for specific purposes like testing or development, and destroyed when no longer needed.",
  },
  {
    id: 32,
    question: "What is A/B testing?",
    answer:
      "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better.",
  },
  {
    id: 33,
    question: "What are feature flags?",
    answer:
      "Feature flags are a software development technique that allows teams to modify system behavior without changing code, enabling safer deployments and experimentation.",
  },
  {
    id: 34,
    question: "What is dark launching?",
    answer:
      "Dark launching is a technique where new features are deployed to production but are not visible to users until they are ready, allowing for testing in a live environment.",
  },
  {
    id: 35,
    question: "What is distributed tracing?",
    answer:
      "Distributed tracing is a method for tracking requests as they flow through distributed systems, providing visibility into the performance and behavior of microservices.",
  },
  {
    id: 36,
    question: "What is service discovery?",
    answer:
      "Service discovery is the automatic detection of devices and services on a network, allowing applications to find and communicate with each other dynamically.",
  },
  {
    id: 37,
    question: "What is the circuit breaker pattern?",
    answer:
      "The circuit breaker pattern is a design pattern that prevents a service from repeatedly trying to execute an operation that's likely to fail, improving system resilience.",
  },
  {
    id: 38,
    question: "What is the bulkhead pattern?",
    answer:
      "The bulkhead pattern is a design pattern that isolates elements of an application into pools so that if one fails, the others will continue to function.",
  },
  {
    id: 39,
    question: "What is the saga pattern?",
    answer:
      "The saga pattern is a design pattern for managing distributed transactions in microservices, coordinating a series of local transactions.",
  },
  {
    id: 40,
    question: "What is event sourcing?",
    answer:
      "Event sourcing is a design pattern where state changes are logged as a sequence of events, allowing the current state to be reconstructed from the event log.",
  },
  {
    id: 41,
    question: "What is CQRS (Command Query Responsibility Segregation)?",
    answer:
      "CQRS is a pattern that separates read and update operations for a data store, allowing different models for queries and commands.",
  },
  {
    id: 42,
    question: "What is domain-driven design (DDD)?",
    answer:
      "Domain-driven design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain.",
  },
  {
    id: 43,
    question: "What is hexagonal architecture?",
    answer:
      "Hexagonal architecture is a design pattern that aims to create loosely coupled application components that can be easily connected to their software environment.",
  },
  {
    id: 44,
    question: "What is the twelve-factor app methodology?",
    answer:
      "The twelve-factor app is a methodology for building software-as-a-service apps that are scalable, maintainable, and deployable in cloud environments.",
  },
  {
    id: 45,
    question: "What is cloud-native?",
    answer:
      "Cloud-native is an approach to building and running applications that exploit the advantages of the cloud computing delivery model.",
  },
  {
    id: 46,
    question: "What is CNCF (Cloud Native Computing Foundation)?",
    answer:
      "CNCF is a Linux Foundation project that promotes the adoption of cloud-native technologies and hosts projects like Kubernetes, Prometheus, and Istio.",
  },
  {
    id: 47,
    question: "What are Kubernetes operators?",
    answer:
      "Kubernetes operators are software extensions that use custom resources to manage applications and their components in a Kubernetes cluster.",
  },
  {
    id: 48,
    question: "What are custom resource definitions (CRDs)?",
    answer:
      "Custom resource definitions allow you to extend Kubernetes by defining your own resource types, enabling the creation of custom controllers and operators.",
  },
  {
    id: 49,
    question: "What is etcd?",
    answer:
      "etcd is a distributed key-value store that serves as the backing store for all cluster data in Kubernetes, providing a reliable way to store configuration data.",
  },
  {
    id: 50,
    question: "What is kubelet?",
    answer:
      "Kubelet is an agent that runs on each node in a Kubernetes cluster, ensuring that containers are running in a pod as expected.",
  },
];

// Make data available globally
window.advanced = advanced;
