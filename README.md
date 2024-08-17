<div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
  <div style="flex: 1;">
    <h3 style="margin: 0; font-size: 30px;">Welcome Trip Genius Repository!</h3>
  </div>
  <div style="flex: 1;">
    <img src="./z-other/Logo.jpg" alt="Trip Genius Logo" style="border-radius: 50%; height: 100px; width: 100px;">
  </div>
</div>

#
![Repository Banner](./z-other/Trip-Genius.gif)

## Overview

[**Trip Genius**](https://om-ghante-trip-genius.vercel.app/) is an advanced travel recommendation platform developed using the MERN stack and powered by the Google Gemini API. Leveraging the power of artificial intelligence, Trip Genius delivers personalized itineraries and insightful travel recommendations. This project demonstrates a sophisticated integration of full-stack development and AI technologies, offering an innovative solution for travelers seeking customized travel experiences.

## Features

- **Personalized Itineraries**: Generate tailored travel plans based on user preferences and interests.
- **AI-Powered Insights**: Utilize advanced AI algorithms to provide accurate and relevant travel recommendations.
- **Full-Stack Integration**: Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for a seamless and scalable application.
- **Google Gemini API**: Harness the capabilities of the Gemini API for enhanced AI-driven functionalities.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel [frontend](https://om-ghante-trip-genius.vercel.app/), [backend](https://trip-genius-server.vercel.app/)

## Getting Started

To get started with Trip Genius locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- MongoDB installed or access to a MongoDB Atlas instance

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/om-ghante/trip-genius.git
2. **Change the work derectory**

   ```bash
   cd trip-genius
3. **Frontend setup**

   ```bash
   cd client
   npm install
4. **Backend setup**

   ```bash
   cd ../server
   npm install
4. **Configure Environment Variables for fronted**

   ```bash
   VITE_SERVER_API=http://localhost:7173
4. **Configure Environment Variables for backend**

   ```bash
   ORIGIN_API=http://localhost:5173
   PORT=7173
   JWT_SECRET=your_jwt_secret
   JWT_TIMEOUT=24h
   DATABASE_API=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
3. **Start the Development Servers**

   ```bash
   cd client
   npm run dev
4. **Start the Development Servers**

   ```bash
   cd ../server
   npm run dev

## Access the Application

Open your web browser and navigate to `http://localhost:${PORT}` to view the Trip Genius application.

## Usage
- Sign Up / Log In: Create an account or log in to access personalized recommendations.
- Explore Destinations: Browse and receive recommendations for travel destinations.
- View Itineraries: Generate and review detailed travel itineraries.

## Contributing
- Contributions are welcome! To contribute to the Trip Genius project:
- Fork the repository.
- Create a new branch for your feature or fix.
- Make your changes and commit them.
- Open a pull request with a clear description of your updates.

## License
 This project is not licensed under any License.

## Contact
 For any questions or feedback, please contact me at omghante.work@gmail.com