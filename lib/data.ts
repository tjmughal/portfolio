import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'talhajmughal@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Talha, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/talhamughal2',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/tjmughal' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/talha-mughal-93a97b178' },
    { name: 'facebook', url: 'https://www.facebook.com/talha.mughal.901032' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript (ES6+)',
            icon: '/logo/js.png',
        },
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'HTML5',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS3',
            icon: '/logo/css.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'PHP (Laravel)',
            icon: '/logo/php.svg',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.svg',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Redis',
            icon: '/logo/redis.svg',
        },
        {
            name: 'MSSQL',
            icon: '/logo/mssql.svg',
        },
    ],
    tools: [
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Linux',
            icon: '/logo/linux.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Fanzine',
        slug: 'fanzine',
        liveUrl: 'https://fanzine.com',
        year: 2024,
        description: `
      Fanzine is the all-in-one sports news platform that offers the latest and unparalleled experience to sports consumers. It follows Football, NFL, NBA, MLB and Cricket news and live matches.<br/> <br/>

      Key Features:<br/>
      <ul>
        <li>⚽ Multi-Sport Coverage: Football, NFL, NBA, MLB, and Cricket news</li>
        <li>🏆 Dedicated Team Websites: Separate websites for each Premier League and Championship teams</li>
        <li>📱 Mobile App: Exclusive mobile application for on-the-go access</li>
        <li>📸 Social & Video Content: Integrated social media posts and videos</li>
        <li>🌍 Global Accessibility: Available worldwide for sports fans</li>
      </ul><br/>

      Technical Implementation:
      <ul>
        <li>Developed using React and Redux for robust state management</li>
        <li>Backend powered by Laravel for scalable API infrastructure</li>
        <li>Real-time sports data integration and live match updates</li>
        <li>Responsive design optimized for web and mobile platforms</li>
      </ul>
      `,
        role: `
      Full-Stack Developer<br/>
      Responsibilities:
      <ul>
        <li>🎨 Frontend: Built responsive interfaces using React and Redux</li>
        <li>🔧 Backend: Developed REST APIs and business logic using Laravel</li>
        <li>📊 Data Integration: Integrated real-time sports data feeds</li>
        <li>🚀 Deployment: Managed cloud infrastructure and deployment pipeline</li>
        <li>📱 Mobile: Contributed to mobile app development for iOS and Android</li>
      </ul>
      `,
        techStack: [
            'React',
            'Redux',
            'Laravel',
            'REST APIs',
            'MongoDB',
            'AWS',
        ],
        thumbnail: '/projects/thumbnail/fanzine.png',
        longThumbnail: '/projects/long/fanzine.png',
        images: [
            '/projects/images/fanzine.png',
        ],
    },
    {
        title: 'Sport Skins',
        slug: 'sport-skins',
        techStack: [
            'React',
            'Redux',
            'React-Native',
            'Laravel',
            'MySQL',
            'AWS',
        ],
        thumbnail: '/projects/thumbnail/sport_skins.png',
        longThumbnail: '/projects/long/sport_skins.png',
        images: [
            '/projects/images/sport_skins.png',
        ],
        liveUrl: 'https://sportskins.uk',
        year: 2024,
        description: `Sport Skins is a low stake, high return competitions gaming product. It combines sports engagement with competitive gameplay, allowing users to participate in various sports-based challenges and competitions with rewarding outcomes.`,
        role: `As part of the Code Studio team, I:<br/>
        - Developed the full-stack solution from backend to frontend<br/>
        - Built web application using React and Redux for dynamic UI<br/>
        - Developed mobile applications using React-Native for cross-platform availability<br/>
        - Designed and optimized MySQL database for competition and user management<br/>
        - Managed AWS cloud infrastructure and deployment pipeline<br/>
        - Implemented real-time game logic and scoring algorithms`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Software Engineer',
        company: 'OBS Technologia',
        duration: 'Sept 2025 - Present',
    },
    {
        title: 'Software Engineer',
        company: 'Code Studio',
        duration: 'Sept 2021 - Aug 2025',
    },
    {
        title: 'Web Developer',
        company: 'Innovo Technologies',
        duration: 'June 2019 - Aug 2021',
    },
    {
        title: 'Web Development Intern',
        company: 'Code Studio',
        duration: 'Sept 2018 - Mar 2019',
    },
];
