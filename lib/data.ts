import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'talhajmughal@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Talha, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/talhamughal2',
};

export const SOCIAL_LINKS = [
    { name: 'Github', url: 'https://github.com/tjmughal' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/talha-mughal-93a97b178' },
    { name: 'Facebook', url: 'https://www.facebook.com/talha.mughal.901032' },
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
    cms:[
        {
            name: 'Wordpress',
            icon: '/logo/wordpress.svg',
        },
        {
            name: 'Shopify',
            icon: '/logo/shopify.svg',
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
            '/projects/images/fanzine-1.png',
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
            '/projects/images/sport_skins-1.png',
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
    {
        title: 'AQL Tech Solutions',
        slug: 'aql-tech-solutions',
        techStack: [
            'Wordpress',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/aql-tech-solutions.png',
        longThumbnail: '/projects/long/aql-tech-solutions.png',
        images: [
            '/projects/images/aql-tech-solutions.png',
            '/projects/images/aql-tech-solutions-1.png',
        ],
        liveUrl: 'https://aqltechsolutions.com/',
        year: 2023,
        description: 'AQL Tech Solutions is a leading, global Semi Conductor company and we designed and developed their website. At code studio we believe your website is a mirror of your company and we design the website in accordance to you business model',
        role: `As part of the Code Studio team, I:<br/>
        - Developed and customized the WordPress website from setup to deployment<br/>
        - Built responsive website pages using WordPress themes, templates, HTML, CSS, and JavaScript<br/>
        - Customized WordPress theme functionality based on project requirements<br/>
        - Integrated and configured plugins for forms, SEO, performance, security, and content management<br/>
        - Created and managed custom post types, fields, menus, and dynamic website content<br/>
        - Optimized website speed, responsiveness, and cross-browser compatibility<br/>
        - Managed hosting, domain setup, deployment, backups, and ongoing website maintenance`,
    },
    {
        title: 'AKDoc',
        slug: 'akdoc',
        techStack: [
            'Wordpress',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/akdoc.jpg',
        longThumbnail: '/projects/long/akdoc.jpg',
        images: [
            '/projects/images/akdoc.jpg',
            '/projects/images/akdoc-1.png',
            '/projects/images/akdoc-2.jpg',
            '/projects/images/akdoc-3.jpg',
            '/projects/images/akdoc-4.jpg',
        ],
        liveUrl: 'https://akdoc.com/',
        year: 2023,
        description: 'AKDoc is a healthcare facility based in Atlanta, USA. The client had an existing website but wanted to upgrade their online presence with a more professional, more' +
            ' user-friendly and better UI/UX based website. We developed their website to meet all the requirements and made them a satisfied client for all their future technology needs',
        role: `As part of the Code Studio team, I:<br/>
        - Developed and customized the WordPress website from setup to deployment<br/>
        - Built responsive website pages using WordPress themes, templates, HTML, CSS, and JavaScript<br/>
        - Customized WordPress theme functionality based on project requirements<br/>
        - Integrated and configured plugins for forms, SEO, performance, security, and content management<br/>
        - Created and managed custom post types, fields, menus, and dynamic website content<br/>
        - Optimized website speed, responsiveness, and cross-browser compatibility<br/>
        - Managed hosting, domain setup, deployment, backups, and ongoing website maintenance`,
    },
    {
        title: 'The Tejori',
        slug: 'the-tejori',
        techStack: [
            'Wordpress',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/the-tejori.png',
        longThumbnail: '/projects/long/the-tejori.png',
        images: [
            '/projects/images/the-tejori.png',
            '/projects/images/the-tejori-1.png',
            '/projects/images/the-tejori-2.png',
            '/projects/images/the-tejori-3.png',
        ],
        liveUrl: '#',
        year: 2023,
        description: 'The Tejori Marketplace is a unique platform designed to transform the way South Asian fashion is consumed and appreciated. As a peer-to-peer marketplace, ' +
            'we provide a sustainable solution for buying and selling preloved South Asian outfits, ensuring these beautifully crafted garments get a second life. ' +
            'Our mission is to break the cycle of waste by introducing a circular approach to fashion, making sustainability both accessible and glamorous. ' +
            'In the UK’s South Asian community, traditional outfits hold deep cultural significance. However, they are often worn once for weddings, festivals, or celebrations and ' +
            'then left unused. At The Tejori Marketplace, we offer a space where individuals can declutter their wardrobes, earn extra cash, and give others access to luxurious ' +
            'brands and styles at a fraction of the price. This not only benefits buyers and sellers but also respects the craftsmanship and artistry that go into these garments. ' +
            'Our platform is more than just a marketplace—it is a community. We believe in fostering connections between individuals who share a love for South Asian fashion, ' +
            'sustainability, and conscious consumerism. By making it easier than ever to buy and sell high-quality outfits, we encourage people to embrace sustainable shopping while ' +
            'celebrating their culture in a meaningful way. Sustainability is at the core of everything we do. Every outfit sold on our platform contributes to a more circular economy, ' +
            'reducing textile waste and promoting eco-conscious fashion choices. We aim to redefine South Asian fashion by demonstrating that sustainability and style can go hand in hand. ' +
            'Founded by Saika Waheed, The Tejori Marketplace is built on a personal connection to South Asian heritage and a passion for preserving the beauty of traditional craftsmanship. ' +
            'Growing up, Saika witnessed firsthand how intricate, elegant garments would often sit in closets unused after a single event. She realized that this not only contributed to ' +
            'fashion waste but also overlooked the immense skill and effort put into creating each piece. Through The Tejori Marketplace, she hopes to inspire a shift in mindset—one that values ' +
            'sustainability while honoring the cultural significance of these outfits. Whether you are looking to refresh your wardrobe, find a stunning outfit for your next event, ' +
            'or contribute to a more eco-friendly fashion industry, The Tejori Marketplace is the perfect place to start. Join us in redefining South Asian fashion, where sustainability meets ' +
            'elegance, and every outfit tells a new story.',
        role: `As part of the Code Studio team, I:<br/>
        - Developed and customized the WordPress website from setup to deployment<br/>
        - Built responsive website pages using WordPress themes, templates, HTML, CSS, and JavaScript<br/>
        - Customized WordPress theme functionality based on project requirements<br/>
        - Integrated and configured the Dokan multivendor plugin to support vendor registration, product management, commissions, and marketplace functionality<br/>
        - Integrated and configured plugins for forms, SEO, performance, security, and content management<br/>
        - Created and managed custom post types, fields, menus, and dynamic website content<br/>
        - Optimized website speed, responsiveness, and cross-browser compatibility<br/>
        - Managed hosting, domain setup, deployment, backups, and ongoing website maintenance`,
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
