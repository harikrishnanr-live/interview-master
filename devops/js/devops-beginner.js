// DevOps Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is DevOps?",
    answer:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery of high-quality software.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a team where chefs (developers) and waiters (operations) work together to serve food faster and better.",
    codeExample: "N/A",
  },
  {
    id: 2,
    question: "What is CI/CD?",
    answer:
      "CI/CD stands for Continuous Integration/Continuous Delivery. CI is the practice of merging code changes frequently, while CD automates the delivery of applications to selected infrastructure environments.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a factory where parts are assembled continuously and products are shipped out automatically.",
    codeExample: "N/A",
  },
  {
    id: 3,
    question: "What is Docker?",
    answer:
      "Docker is a platform for developing, shipping, and running applications inside lightweight, portable containers.",
    syntax: "docker run hello-world",
    example: "docker run ubuntu echo 'Hello World'",
    realTimeExample:
      "Like a shipping container that holds everything needed for a product, making it easy to transport and run anywhere.",
    codeExample: "docker build -t myapp .",
  },
  {
    id: 4,
    question: "What are containers?",
    answer:
      "Containers are lightweight, standalone, executable packages that include everything needed to run a piece of software, including the code, runtime, system tools, and libraries.",
    syntax: "docker run <image>",
    example: "docker run nginx",
    realTimeExample:
      "Like a lunchbox that has all the food and utensils packed together, ready to eat anywhere.",
    codeExample: "docker ps",
  },
  {
    id: 5,
    question: "What is Kubernetes?",
    answer:
      "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.",
    syntax: "kubectl get pods",
    example: "kubectl create deployment myapp --image=nginx",
    realTimeExample:
      "Like a conductor who manages an orchestra of musicians (containers), making sure everyone plays in harmony.",
    codeExample: "kubectl scale deployment myapp --replicas=3",
  },
  {
    id: 6,
    question: "What is version control?",
    answer:
      "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.",
    syntax: "git init",
    example: "git add .",
    realTimeExample:
      "Like a time machine for your files, allowing you to go back to previous versions if something goes wrong.",
    codeExample: "git commit -m 'Initial commit'",
  },
  {
    id: 7,
    question: "What is a software repository?",
    answer:
      "A software repository is a storage location where software packages and their metadata are stored and can be retrieved.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a library where books (software packages) are stored and can be borrowed (retrieved) by anyone.",
    codeExample: "N/A",
  },
  {
    id: 8,
    question: "What is continuous integration?",
    answer:
      "Continuous integration is the practice of merging all developer working copies to a shared mainline several times a day.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a team constantly sharing their work with each other to avoid conflicts and catch issues early.",
    codeExample: "N/A",
  },
  {
    id: 9,
    question: "What is continuous deployment?",
    answer:
      "Continuous deployment is a software release process that uses automated testing to validate if changes to a codebase are correct and stable for immediate autonomous deployment to a production environment.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a factory that automatically ships products as soon as they pass quality checks, without waiting for manual approval.",
    codeExample: "N/A",
  },
  {
    id: 10,
    question: "What is virtualization?",
    answer:
      "Virtualization is the process of creating a virtual version of something, such as a server, storage device, network, or even an operating system.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like creating a virtual pet that lives inside your computer, without needing a real pet.",
    codeExample: "N/A",
  },
  {
    id: 11,
    question: "What is a virtual machine?",
    answer:
      "A virtual machine is a software emulation of a physical computer that runs an operating system and applications.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a computer inside your computer, allowing you to run different operating systems without buying new hardware.",
    codeExample: "N/A",
  },
  {
    id: 12,
    question: "What is scalability in DevOps?",
    answer:
      "Scalability in DevOps refers to the ability of a system to handle increased load by adding resources to the system.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a restaurant that can add more tables and chairs when more customers come, without closing.",
    codeExample: "N/A",
  },
  {
    id: 13,
    question: "What is load balancing?",
    answer:
      "Load balancing is the process of distributing network traffic across multiple servers to ensure no single server becomes overwhelmed.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a traffic cop directing cars to different lanes to avoid congestion on one road.",
    codeExample: "N/A",
  },
  {
    id: 14,
    question: "What is logging in DevOps?",
    answer:
      "Logging is the process of recording events, messages, and data generated by applications and systems for monitoring and troubleshooting purposes.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a diary where you write down everything that happens, so you can look back and see what went wrong.",
    codeExample: "N/A",
  },
  {
    id: 15,
    question: "What is configuration management?",
    answer:
      "Configuration management is the process of maintaining systems, such as computer hardware and software, in a desired, consistent state.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like keeping your room tidy and organized, so everything is in its place and you can find things easily.",
    codeExample: "N/A",
  },
  {
    id: 16,
    question: "What is a build in DevOps?",
    answer:
      "A build is the process of converting source code into an executable application.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like baking a cake from a recipe, turning ingredients (code) into a finished product (application).",
    codeExample: "N/A",
  },
  {
    id: 17,
    question: "What is a release in DevOps?",
    answer:
      "A release is the process of making software available to users after it has been tested and approved.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like publishing a book after editing and proofreading, making it available for readers.",
    codeExample: "N/A",
  },
  {
    id: 18,
    question: "What is automation in DevOps?",
    answer:
      "Automation in DevOps involves using tools and scripts to perform repetitive tasks without manual intervention.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a robot that does the dishes for you, so you don't have to do it every time.",
    codeExample: "N/A",
  },
  {
    id: 19,
    question: "What is infrastructure in DevOps?",
    answer:
      "Infrastructure refers to the physical and virtual resources required to operate and support an application.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like the roads and bridges that support a city, allowing people (applications) to move around.",
    codeExample: "N/A",
  },
  {
    id: 20,
    question: "What is a server?",
    answer:
      "A server is a computer or system that provides resources, data, services, or programs to other computers over a network.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a waiter in a restaurant who brings food (data) to customers (computers).",
    codeExample: "N/A",
  },
  {
    id: 21,
    question: "What is a database?",
    answer:
      "A database is an organized collection of data stored and accessed electronically.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a filing cabinet where you store and retrieve documents (data) easily.",
    codeExample: "N/A",
  },
  {
    id: 22,
    question: "What is networking?",
    answer:
      "Networking is the practice of connecting computers and other devices to share resources and information.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a phone line that connects people, allowing them to talk and share information.",
    codeExample: "N/A",
  },
  {
    id: 23,
    question: "What is security in DevOps?",
    answer:
      "Security in DevOps involves implementing practices to protect applications, data, and infrastructure from threats.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like locks on your doors and windows to keep your home safe from intruders.",
    codeExample: "N/A",
  },
  {
    id: 24,
    question: "What is compliance?",
    answer:
      "Compliance refers to adhering to laws, regulations, and standards relevant to the industry and organization.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like following traffic rules to avoid fines and accidents.",
    codeExample: "N/A",
  },
  {
    id: 25,
    question: "What is a CI/CD pipeline?",
    answer:
      "A CI/CD pipeline is a series of automated processes that help developers build, test, and deploy software efficiently.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like an assembly line in a factory where products are built, checked, and packaged automatically.",
    codeExample: "N/A",
  },
  {
    id: 26,
    question: "What is a webhook?",
    answer:
      "A webhook is a mechanism that allows one system to send real-time data to another system when an event occurs.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a doorbell that rings when someone arrives, triggering the door to open automatically.",
    codeExample: "N/A",
  },
  {
    id: 27,
    question: "What is a trigger in CI/CD?",
    answer:
      "A trigger is an event or condition that initiates the execution of a CI/CD pipeline.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a starter pistol that signals the beginning of a race, starting the pipeline.",
    codeExample: "N/A",
  },
  {
    id: 28,
    question: "What is artifact management?",
    answer:
      "Artifact management involves storing, versioning, and distributing build artifacts like binaries and packages.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a warehouse where finished products are stored, labeled, and shipped to customers.",
    codeExample: "N/A",
  },
  {
    id: 29,
    question: "What is dependency management?",
    answer:
      "Dependency management is the process of handling external libraries and components that a project relies on.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like managing ingredients for a recipe, ensuring you have all the required items before cooking.",
    codeExample: "N/A",
  },
  {
    id: 30,
    question: "What is code quality?",
    answer:
      "Code quality refers to how well-written, maintainable, and efficient the source code is.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like the quality of a book: well-written, easy to read, and free of errors.",
    codeExample: "N/A",
  },
  {
    id: 31,
    question: "What is testing in DevOps?",
    answer:
      "Testing is the process of evaluating software to ensure it meets requirements and is free of defects.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like tasting food before serving it to guests, to make sure it's good.",
    codeExample: "N/A",
  },
  {
    id: 32,
    question: "What is unit testing?",
    answer:
      "Unit testing is a software testing method where individual units or components of software are tested in isolation.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like testing each ingredient separately before mixing them in a recipe.",
    codeExample: "N/A",
  },
  {
    id: 33,
    question: "What is integration testing?",
    answer:
      "Integration testing is a type of testing where different parts of the software are combined and tested as a group.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like testing how all the parts of a car work together when assembled.",
    codeExample: "N/A",
  },
  {
    id: 34,
    question: "What is performance testing?",
    answer:
      "Performance testing evaluates the speed, responsiveness, and stability of a system under a particular workload.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like testing how fast a car can go and how well it handles heavy traffic.",
    codeExample: "N/A",
  },
  {
    id: 35,
    question: "What is a DevOps engineer?",
    answer:
      "A DevOps engineer is a professional who works to bridge the gap between development and operations teams.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a translator who helps two groups speak the same language and work together.",
    codeExample: "N/A",
  },
  {
    id: 36,
    question: "What is site reliability engineering (SRE)?",
    answer:
      "Site reliability engineering is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a doctor who uses science to keep patients healthy and fix problems quickly.",
    codeExample: "N/A",
  },
  {
    id: 37,
    question: "What is incident management?",
    answer:
      "Incident management is the process of identifying, analyzing, and resolving incidents to restore normal service operation.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a fire department responding to a fire, putting it out and investigating how it started.",
    codeExample: "N/A",
  },
  {
    id: 38,
    question: "What is change management?",
    answer:
      "Change management is the approach to transitioning individuals, teams, and organizations from a current state to a desired future state.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like moving to a new house, planning the move and helping everyone adjust to the new place.",
    codeExample: "N/A",
  },
  {
    id: 39,
    question: "What is backup?",
    answer:
      "Backup is the process of creating copies of data to protect against data loss.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like making a copy of your homework in case you lose the original.",
    codeExample: "N/A",
  },
  {
    id: 40,
    question: "What is recovery?",
    answer:
      "Recovery is the process of restoring systems and data after a failure or disaster.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample: "Like fixing a broken toy and getting it working again.",
    codeExample: "N/A",
  },
  {
    id: 41,
    question: "What is disaster recovery?",
    answer:
      "Disaster recovery is a set of policies, tools, and procedures to enable the recovery or continuation of vital technology infrastructure after a natural or human-induced disaster.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like having a plan to rebuild your house after a storm destroys it.",
    codeExample: "N/A",
  },
  {
    id: 42,
    question: "What is high availability?",
    answer:
      "High availability refers to systems that are durable and likely to operate continuously without failure for a long time.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a reliable car that rarely breaks down and is always ready to drive.",
    codeExample: "N/A",
  },
  {
    id: 43,
    question: "What is redundancy?",
    answer:
      "Redundancy is the duplication of critical components or functions of a system to increase reliability.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like having spare tires in your car in case one goes flat.",
    codeExample: "N/A",
  },
  {
    id: 44,
    question: "What is failover?",
    answer:
      "Failover is the automatic switching to a redundant or standby system upon the failure of the currently active system.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like switching to a backup generator when the main power goes out.",
    codeExample: "N/A",
  },
  {
    id: 45,
    question: "What is a cloud provider?",
    answer:
      "A cloud provider is a company that offers cloud computing services, such as storage, processing power, and applications.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a utility company that provides electricity (services) to homes and businesses.",
    codeExample: "N/A",
  },
  {
    id: 46,
    question: "What is on-premises?",
    answer:
      "On-premises refers to computing resources that are deployed in the organization's own data center.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like having your own garden where you grow your own vegetables instead of buying from a store.",
    codeExample: "N/A",
  },
  {
    id: 47,
    question: "What is hybrid cloud?",
    answer:
      "Hybrid cloud is a computing environment that combines on-premises infrastructure with public cloud services.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like having a home garden and also buying some vegetables from the store when needed.",
    codeExample: "N/A",
  },
  {
    id: 48,
    question: "What is multi-cloud?",
    answer:
      "Multi-cloud is the use of multiple cloud computing services from different providers.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like shopping at different stores for different needs, instead of relying on one store.",
    codeExample: "N/A",
  },
  {
    id: 49,
    question: "What is serverless computing?",
    answer:
      "Serverless computing is a cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like using a taxi service where you don't own the car, you just pay for the ride when needed.",
    codeExample: "N/A",
  },
  {
    id: 50,
    question: "What is edge computing?",
    answer:
      "Edge computing is a distributed computing paradigm that brings computation and data storage closer to the location where it is needed.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like having a mini-fridge in your room instead of going to the kitchen every time you want a drink.",
    codeExample: "N/A",
  },
];

// Make data available globally
window.beginner = beginner;
