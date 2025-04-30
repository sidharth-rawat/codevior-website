import { Suspense } from 'react';
import { Loading } from '@/components/ui/loading';
import ServiceDetailClient from './ServiceDetailClient';

const serviceDetails = {
  'web-development': {
    title: 'Web Application Development',
    icon: 'Code2',
    description:
      'We Offer End-to-end Web Development Solutions that provides a Great Start to Your Digital Journey',
    longDescription: `A powerful and efficient website needs quite aesthetically pleasing color themes and graphics. Does your site have a strong content management system that gives full-functionality? Is it SEO-friendly? Is navigation intuitive and user-friendly? Is it quick to load and straightforward to use?

    Above all, does it facilitate conversion?

    Here, at our company, we look out for all of these and far more, right from your website inception to execution. With over a decade of experience across multiple domains, we are equipped to supply you a comprehensive web development solution.

    Our team has developed and delivered simple websites to complex ecommerce websites to highly customized web applications to many clients across the planet. Our track-record speaks for itself.`,
    features: [
      'Interactive Web Development – Where Design meets Functionality',
      'Custom CMS Development',
      'System Integration',
      'Web Application Development',
      'Intranet Development',
      'Security Implementation',
      'E-commerce Solutions',
      'Analytics Integration',
      'Accounting System Integration',
      'Performance Optimization',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'Python',
      'Django',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Git',
    ],
    pillars: [
      {
        title: 'Functionality',
        description:
          "We don't just design pretty sites. We make them wholly functional using cutting-edge technology and data insights.",
        icon: 'Cpu',
      },
      {
        title: 'Usability',
        description:
          'Ease-of-use and navigability are what makes our website truly exceptional. We ensure that your customers navigate through the pages with ease and find your website extremely user-friendly.',
        icon: 'Users',
      },
      {
        title: 'Creativity',
        description:
          "Whether we're designing a simple corporate website or a complex e-commerce site, we make sure that our designs are fresh, innovative and stand out from the crowd.",
        icon: 'Sparkles',
      },
    ],
    services: [
      { name: 'Website Development', icon: 'Globe' },
      { name: 'Corporate Website Development', icon: 'Building2' },
      { name: 'Ecommerce Website Development', icon: 'ShoppingCart' },
      { name: 'CMS Website Development', icon: 'Layout' },
      { name: 'Mobile Website Development', icon: 'SmartphoneIcon' },
      { name: 'Community Web Portals', icon: 'Users2' },
      { name: 'B2B Website Development', icon: 'Briefcase' },
      { name: 'B2C Website Development', icon: 'Store' },
      { name: 'Website Management', icon: 'Settings' },
    ],
  },
  'app-development': {
    title: 'Mobile App Development',
    icon: 'Smartphone',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    longDescription: `Our mobile app development services help businesses reach their customers on the go. We create native and cross-platform applications that are intuitive, performant, and engaging.

    From concept to deployment, we handle every aspect of the app development process, ensuring that your app meets the highest standards of quality and user experience. Our team combines technical expertise with creative design to deliver apps that users love.`,
    features: [
      'Native iOS and Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Maintenance',
      'Performance Optimization',
      'Push Notifications',
      'Offline Functionality',
      'App Store Optimization',
      'Analytics Integration',
      'Security Implementation',
    ],
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'Xcode',
      'Android Studio',
      'Redux',
      'GraphQL',
      'AWS',
    ],
    pillars: [
      {
        title: 'Performance',
        description:
          'We optimize every aspect of your app to ensure smooth performance and fast loading times, even on older devices.',
        icon: 'Cpu',
      },
      {
        title: 'User Experience',
        description:
          'Our apps are designed with the user in mind, featuring intuitive navigation and engaging interfaces that keep users coming back.',
        icon: 'Users',
      },
      {
        title: 'Innovation',
        description:
          'We stay ahead of the curve with the latest mobile technologies and trends to deliver cutting-edge solutions.',
        icon: 'Sparkles',
      },
    ],
    services: [
      { name: 'iOS App Development', icon: 'SmartphoneIcon' },
      { name: 'Android App Development', icon: 'SmartphoneIcon' },
      { name: 'Cross-platform Development', icon: 'RefreshCw' },
      { name: 'App UI/UX Design', icon: 'Palette' },
      { name: 'App Maintenance', icon: 'Settings' },
      { name: 'App Store Optimization', icon: 'Store' },
      { name: 'App Analytics', icon: 'Cpu' },
      { name: 'Push Notifications', icon: 'Bell' },
      { name: 'App Security', icon: 'Shield' },
    ],
  },
  'web-design': {
    title: 'Web Design',
    icon: 'Palette',
    description:
      'Beautiful and intuitive user interfaces that enhance user experience and drive conversions.',
    longDescription: `Our web design services focus on creating visually appealing and user-friendly interfaces that engage visitors and drive conversions. We combine aesthetics with functionality to deliver designs that work.

    We follow a user-centered design approach, ensuring that every element serves a purpose and enhances the overall user experience. Our designs are not just beautiful, they're strategic and results-driven.`,
    features: [
      'Responsive Design',
      'UI/UX Design',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Brand Integration',
      'User Research',
      'Accessibility',
      'Animation',
      'Design Documentation',
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'HTML/CSS',
      'JavaScript',
      'Tailwind CSS',
      'Framer Motion',
      'Adobe Creative Suite',
      'InVision',
      'Zeplin',
    ],
    pillars: [
      {
        title: 'Visual Appeal',
        description:
          "We create stunning visual designs that capture attention and reflect your brand's personality.",
        icon: 'Palette',
      },
      {
        title: 'User Experience',
        description:
          'Every design decision is made with the user in mind, ensuring intuitive navigation and engagement.',
        icon: 'Users',
      },
      {
        title: 'Conversion Focus',
        description:
          'Our designs are optimized to drive conversions and achieve your business goals.',
        icon: 'Target',
      },
    ],
    services: [
      { name: 'UI/UX Design', icon: 'Palette' },
      { name: 'Responsive Design', icon: 'SmartphoneIcon' },
      { name: 'Wireframing', icon: 'Layout' },
      { name: 'Prototyping', icon: 'Cpu' },
      { name: 'Design Systems', icon: 'Settings' },
      { name: 'Brand Integration', icon: 'Brush' },
      { name: 'User Research', icon: 'Users' },
      { name: 'Accessibility Design', icon: 'Accessibility' },
      { name: 'Animation Design', icon: 'Sparkles' },
    ],
  },
  'graphic-design': {
    title: 'Graphic Design',
    icon: 'Brush',
    description:
      'Creative visual solutions that help your brand stand out and communicate effectively.',
    longDescription: `Our graphic design services help businesses establish a strong visual identity and communicate their message effectively. We create designs that are not just visually appealing but also strategically aligned with your brand goals.

    From brand identity to marketing materials, we deliver designs that make an impact and help you connect with your audience.`,
    features: [
      'Brand Identity Design',
      'Marketing Materials',
      'Social Media Graphics',
      'Print Design',
      'Digital Assets',
      'Logo Design',
      'Typography',
      'Color Theory',
      'Layout Design',
      'Visual Storytelling',
    ],
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe InDesign',
      'Canva',
      'Figma',
      'CorelDRAW',
      'Affinity Designer',
      'Procreate',
      'Sketch',
      'Adobe Creative Cloud',
    ],
    pillars: [
      {
        title: 'Brand Identity',
        description:
          "We create cohesive visual identities that reflect your brand's values and resonate with your audience.",
        icon: 'Brush',
      },
      {
        title: 'Visual Communication',
        description:
          'Our designs effectively communicate your message and capture attention in a crowded marketplace.',
        icon: 'MessageSquare',
      },
      {
        title: 'Creativity',
        description:
          'We bring fresh perspectives and innovative ideas to every project, ensuring your brand stands out.',
        icon: 'Sparkles',
      },
    ],
    services: [
      { name: 'Logo Design', icon: 'Brush' },
      { name: 'Brand Identity', icon: 'Palette' },
      { name: 'Marketing Materials', icon: 'FileText' },
      { name: 'Social Media Graphics', icon: 'Share2' },
      { name: 'Print Design', icon: 'Printer' },
      { name: 'Digital Assets', icon: 'ImageIcon' },
      { name: 'Typography', icon: 'Type' },
      { name: 'Layout Design', icon: 'Layout' },
      { name: 'Visual Storytelling', icon: 'BookOpen' },
    ],
  },
  'llm-solutions': {
    title: 'LLM Solutions',
    icon: 'Bot',
    description: 'Leverage the power of Large Language Models to enhance your business operations.',
    longDescription: `Our LLM solutions help businesses harness the power of artificial intelligence to automate tasks, improve efficiency, and gain valuable insights. We create custom AI solutions that are tailored to your specific needs.

    From chatbots to content generation, we help you leverage the latest advancements in AI technology to stay ahead of the competition.`,
    features: [
      'Custom LLM Integration',
      'AI-powered Chatbots',
      'Content Generation',
      'Data Analysis',
      'Process Automation',
      'Natural Language Processing',
      'Sentiment Analysis',
      'Text Classification',
      'Language Translation',
      'AI Model Training',
    ],
    technologies: [
      'OpenAI',
      'TensorFlow',
      'PyTorch',
      'Python',
      'API Integration',
      'Hugging Face',
      'LangChain',
      'Pandas',
      'NumPy',
      'Scikit-learn',
    ],
    pillars: [
      {
        title: 'Intelligence',
        description:
          'We leverage cutting-edge AI models to deliver intelligent solutions that understand and respond to human language.',
        icon: 'Cpu',
      },
      {
        title: 'Automation',
        description:
          'Our solutions automate complex tasks, saving time and resources while improving accuracy.',
        icon: 'RefreshCw',
      },
      {
        title: 'Innovation',
        description:
          'We stay at the forefront of AI technology to deliver innovative solutions that give you a competitive edge.',
        icon: 'Sparkles',
      },
    ],
    services: [
      { name: 'AI Chatbots', icon: 'MessageSquare' },
      { name: 'Content Generation', icon: 'FileText' },
      { name: 'Data Analysis', icon: 'BarChart' },
      { name: 'Process Automation', icon: 'RefreshCw' },
      { name: 'NLP Solutions', icon: 'Type' },
      { name: 'Sentiment Analysis', icon: 'Heart' },
      { name: 'Text Classification', icon: 'Tag' },
      { name: 'Language Translation', icon: 'Globe' },
      { name: 'AI Model Training', icon: 'Cpu' },
    ],
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    icon: 'RefreshCw',
    description:
      'Transform your business with cutting-edge digital solutions that drive growth and efficiency.',
    longDescription: `Our digital transformation services help businesses evolve and thrive in the digital age. We combine strategic consulting with technical expertise to help you modernize your operations, enhance customer experiences, and drive innovation.

    From process automation to digital strategy, we guide you through every step of your digital transformation journey, ensuring sustainable growth and competitive advantage.`,
    features: [
      'Digital Strategy Development',
      'Process Automation',
      'Cloud Migration',
      'Data Analytics',
      'Customer Experience Enhancement',
      'Workflow Optimization',
      'Digital Infrastructure',
      'Change Management',
      'Security Implementation',
      'Performance Monitoring',
    ],
    technologies: [
      'Cloud Platforms',
      'AI/ML',
      'IoT',
      'Big Data',
      'Blockchain',
      'DevOps',
      'Microservices',
      'API Integration',
      'Security Tools',
      'Analytics Platforms',
    ],
    pillars: [
      {
        title: 'Strategy',
        description:
          'We develop comprehensive digital strategies aligned with your business goals and market opportunities.',
        icon: 'Target',
      },
      {
        title: 'Innovation',
        description:
          'We leverage cutting-edge technologies to drive innovation and create competitive advantages.',
        icon: 'Sparkles',
      },
      {
        title: 'Transformation',
        description:
          'We guide your organization through successful digital transformation with minimal disruption.',
        icon: 'RefreshCw',
      },
    ],
    services: [
      { name: 'Digital Strategy', icon: 'Target' },
      { name: 'Process Automation', icon: 'RefreshCw' },
      { name: 'Cloud Migration', icon: 'Cloud' },
      { name: 'Data Analytics', icon: 'BarChart' },
      { name: 'Customer Experience', icon: 'Users' },
      { name: 'Workflow Optimization', icon: 'Settings' },
      { name: 'Digital Infrastructure', icon: 'Server' },
      { name: 'Change Management', icon: 'Users2' },
      { name: 'Security Implementation', icon: 'Shield' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((service) => ({
    service,
  }));
}

type Props = {
  params: Promise<{ service: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.service as keyof typeof serviceDetails];

  if (!service) {
    return <Loading size="lg" />;
  }

  return (
    <Suspense fallback={<Loading size="lg" />}>
      <ServiceDetailClient service={service} />
    </Suspense>
  );
}
