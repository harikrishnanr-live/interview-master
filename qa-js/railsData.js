// Rails Q&A Data
let railsData = [
    {
        "id": 1,
        "question": "What is Ruby on Rails?",
        "answer": "Ruby on Rails is a web application framework written in Ruby that follows the MVC (Model-View-Controller) architectural pattern."
    },
    {
        "id": 2,
        "question": "What is MVC in Rails?",
        "answer": "MVC stands for Model-View-Controller. Models handle data, Views handle presentation, and Controllers handle user input and business logic."
    },
    {
        "id": 3,
        "question": "What is ActiveRecord?",
        "answer": "ActiveRecord is Rails' Object-Relational Mapping (ORM) system that provides an interface between database tables and Ruby objects."
    },
    {
        "id": 4,
        "question": "What are migrations in Rails?",
        "answer": "Migrations are a way to alter the database schema over time in a consistent and easy way."
    },
    {
        "id": 5,
        "question": "What is REST in Rails?",
        "answer": "REST (Representational State Transfer) is an architectural style for designing networked applications, commonly used in Rails for API development."
    },
    {
        "id": 6,
        "question": "What are Rails routes?",
        "answer": "Routes in Rails map URLs to controller actions, defining how requests are handled by the application."
    },
    {
        "id": 7,
        "question": "What is a Rails controller?",
        "answer": "A controller in Rails handles user requests, processes data, and returns responses, typically in the form of rendered views or JSON."
    },
    {
        "id": 8,
        "question": "What are Rails helpers?",
        "answer": "Helpers are methods that can be used in views to perform common tasks, such as formatting dates or generating HTML."
    },
    {
        "id": 9,
        "question": "What is the Rails asset pipeline?",
        "answer": "The asset pipeline provides a framework to concatenate and minify JavaScript and CSS assets."
    },
    {
        "id": 10,
        "question": "What are Rails concerns?",
        "answer": "Concerns are modules that allow you to extract common functionality from models, controllers, or other classes."
    },
    {
        "id": 11,
        "question": "What is Rails Active Job?",
        "answer": "Active Job is a framework for declaring jobs and making them run on a variety of queuing backends."
    },
    {
        "id": 12,
        "question": "What are Rails validations?",
        "answer": "Validations are rules that ensure data integrity by checking the validity of data before it's saved to the database."
    },
    {
        "id": 13,
        "question": "What is Rails scaffolding?",
        "answer": "Scaffolding is a quick way to generate the major pieces of an application: models, views, and controllers for a new resource."
    },
    {
        "id": 14,
        "question": "What are Rails partials?",
        "answer": "Partials are reusable view templates that can be rendered within other views to avoid code duplication."
    },
    {
        "id": 15,
        "question": "What is Rails Active Storage?",
        "answer": "Active Storage facilitates uploading files to a cloud storage service like Amazon S3, Google Cloud Storage, or Microsoft Azure Storage."
    }
];

// Make data available globally
window.railsData = railsData;
