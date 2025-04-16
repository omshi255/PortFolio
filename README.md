Portfolio Sections
✔️ Summary and About me
✔️ Skills
✔️ Education
✔️ Work Experience
✔️ Open Source Projects Connected with GitHub
✔️ Big Projects
✔️ Achievements And Certifications 🏆
✔️ Blogs
✔️ Talks
✔️ Podcast
✔️ Contact me
✔️ Twitter Timeline
✔️ GitHub Profile

To view a live example, click here.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need Git and Node.js (which comes with npm) installed on your computer or use Docker.

node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
Docker Commands
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
How To Use
From your command line, clone and run developerFolio:

# Clone this repository
git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
cd developerFolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
