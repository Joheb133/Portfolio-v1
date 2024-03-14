import lingoAssistImg from './assets/images/lingo-assist.png'
import lingoAssistVid from './assets/images/lingo-assist.webm'

import audioVisualImg from './assets/images/audio-visual.png'
import audioVisualVid from './assets/images/audio-visual.webm'

import weatherAppImg from './assets/images/weather-app.png'
import weatherAppVid from './assets/images/weather-app.webm'

// Information for different projects I've done, used to render project card component

const projects = [
    {
        title: 'Lingo Assist',
        description: 'A Chrome Extension to help assist you with familiarising yourself with the words you learn on Duolingo.',
        techs: ['JavaScript', 'Chrome Extension API', 'Azure Functions'],
        imgPath: lingoAssistImg,
        videoPath: lingoAssistVid,
        githubLink: 'https://github.com/Joheb133/Lingo-Assist',
        deploymentLink: null
    },
    {
        title: 'Audio Visual 2.0',
        description: 'The second iteration of an Audio Visualiser built using React. I simply built it because I wanted to look at something while listening to music.',
        techs: ['React', 'TypeScript', 'Tailwind', 'Vercel Serverless'],
        imgPath: audioVisualImg,
        videoPath: audioVisualVid,
        githubLink: 'https://github.com/Joheb133/Audio-Visual-2',
        deploymentLink: 'https://audio-visual-2.vercel.app/'
    },
    {
        title: '3D Weather App',
        description: 'Everybody has a weather app on their portfolio, to make things more interesting and challenging, this weather app has 3D graphics.',
        techs: ['TypeScript', 'ThreeJS', 'Vercel Serverless'],
        imgPath: weatherAppImg,
        videoPath: weatherAppVid,
        githubLink: 'https://github.com/Joheb133/3d-weather-app',
        deploymentLink: 'https://3d-weather-app.vercel.app/'
    }
]

export default projects