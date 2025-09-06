# Warhammer 30k Horus Heresy API

This is a simple REST API developed using Node.js and Express. It provides information about various legions from the Warhammer 30k Horus Heresy series. The API allows you to retrieve details about legions, including their names, descriptions, primarchs, and whether they are traitors.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- NPM (Node Package Manager)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies:
   `npm install`
4. Start the server:
   `npm start`

### Usage

Once the server is running, you can access the API endpoints:

- **Get All Legions:**
- Endpoint: `/legions`
- Method: GET
- Description: Returns a list of all legions with their details.

- **Get Specific Legion by ID:**
- Endpoint: `/legion/:id`
- Method: GET
- Description: Returns the details of a specific legion based on the provided ID.

- **Get All Loyalist Legions:**
- Endpoint: `/legions/loyalists`
- Method: GET
- Description: Returns a list and details of all loyalist legions.

- **Get All Traitor Legions:**
- Endpoint: `/legions/traitors`
- Method: GET
- Description: Returns a list and details of all traitor legions.

### To:do

- Add API Documentation Page ~~
- Add Examples Page ~~
- Add notable characters.
- Add colorschemes.
- ~~Add all the legions to the array.~~
- ~~Add homeworld property.~~
- ~~Connect database (Vercel Postgres).~~

## Deployment

For deploying this application, you can use Vercel or any other preferred hosting platform. Refer to the specific platform's documentation for deployment instructions.

## Built With

-[Next.js](https://nextjs.org/) - Javascript Framework - Frontend
- [Node.js](https://nodejs.org/) - The JavaScript runtime used
- [Sanity](www.sanity.io) - CMS


## Authors

- **Rasmus Bremholm** - [https://github.com/Visceral89](#)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
