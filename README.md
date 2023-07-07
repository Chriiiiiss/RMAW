# Rick and Morty API Wrapper

## Introduction

Welcome to the Rick and Morty API Wrapper project! This is a robust and easy-to-use interface to access information about the wonderful universe of Rick and Morty. By using our API Wrapper, you can fetch data regarding various characters, episodes, and other intricacies of the show.

## Getting Started

Before you start with the setup, please make sure Docker and Docker Compose are properly installed on your machine.

### Configuration

This project requires a configuration file to start. A sample file named `.env.sample` is included in the project. Copy this file and name the copy `.env.local`.

```shell
cp .env.sample .env.local
```

In the `.env.local` file, update the `RICK_AND_MORTY_API_URL` variable with the URL of the Rick and Morty API.

**Note**: Even though the Rick and Morty API does not require an API key, it's crucial to not expose any sensitive data such as API keys or secrets in your code or version control system. Always keep them in environment variables or some sort of secure configuration that is not tracked by version control.

### Starting the application

Once your `.env.local` file is set up, you can start the application by running the following command:

```shell
docker-compose up
```

This command will build the Docker image and start the container. Once the container is running, the API Wrapper will be accessible on the defined port in the Docker Compose file.

## Usage

You can now send HTTP requests to the application to retrieve data from the Rick and Morty API.

## API Documentation

This section outlines the details of the API endpoints.

### Characters

**Endpoint:** `/rem/characters`

**Method:** `GET`

**Description:** This endpoint fetches a list of all characters from the Rick and Morty series. The data is returned as an array of objects, with each object containing details about a single character.

**Response Format:**

Each object in the response array includes the following properties:

- `id`: A unique identifier for the character.
- `name`: The name of the character.
- `status`: The current status of the character, which can be "Alive", "Dead", or "unknown".
- `species`: The species of the character, such as "Human" or "Alien".
- `gender`: The gender of the character, which can be "Male", "Female", or "Genderless".
- `image`: A URL to an image of the character.

**Example Response:**

```json
[
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        ...
    },
    ...
]
```

Stay tuned for more endpoints coming soon!

## Contributing

We appreciate your interest in contributing to the Rick and Morty API Wrapper project. Please feel free to submit issues, pull requests, and contribute in any way you can.

## License

This project is licensed under the MIT license. See the LICENSE file for details.

Happy Coding!
