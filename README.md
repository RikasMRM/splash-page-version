
# Warmur Website Project

Welcome to the repository for the Warmur website project. This project is built using Next.js and can be containerized using Docker for ease of deployment.

## Prerequisites

Before you start, ensure you have the following software installed on your system:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)

## Getting Started

Follow the steps below to set up and run the project locally:

### 1. Clone the Repository

Clone this repository using the following command:

```sh
git clone https://github.com/your-github-username/warmur-website.git
```

### 2. Navigate to the Project Directory

Change your working directory to the project's root directory with the command:

```sh
cd warmur-website
```

### 3. Setup and Running the Project

You can set up and run the project using one of the following methods:

### Running with Docker

**Step 1:** Build the Docker image in the project root directory with the command:

```sh
docker build -t warmur-website .
```

**Step 2:** Run the Docker container using the command below. This command also names the container "warmur_website_container":

```sh
docker run -d -p 3000:3000 --name warmur_website_container warmur-website
```

### Running Manually

**Step 1:** Install all necessary dependencies with the command:

```sh
npm install
```

**Step 2:** Start the Next.js application with the command:

```sh
npm run dev
```

### 4. Access the Application

Once the application is running, you can access the Warmur website at [http://localhost:3000](http://localhost:3000) in your web browser.

## Support

For support, feel free to contact us at `rikas@warmur.co.uk`. We are here to assist you with any issues or queries you may have regarding the setup or functionality of the project.

Thank you for your interest in the Warmur website project!
