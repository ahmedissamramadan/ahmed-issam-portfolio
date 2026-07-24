import { Project, SkillCategory, Credential, WorkflowStep } from '../types';

export const personalDetails = {
  name: {
    ar: 'أحمد عصام رمضان',
    en: 'Ahmed Issam Ramadan'
  },
  title: {
    ar: 'مبتكر منتجات رقمية ومطور عصامي | مهندس أتمتة سير العمل وذكاء اصطناعي',
    en: 'Self-Taught Product Builder & Automation Architect | AI & Workflow Specialist'
  },
  tagline: {
    ar: 'أبني أنظمة برمجية متكاملة، واجهات مستخدم استثنائية، وسلاسل أتمتة ذكية تربط بين بيئات العمل ورسائل واتساب للشركات.',
    en: 'Building high-converting digital products, seamless UI/UX designs, and automated AI workflows connecting enterprise systems with official WhatsApp APIs.'
  },
  aboutBio: {
    ar: `أنا أحمد عصام رمضان، مطور ومبتكر منتجات رقمية عصامي (Self-Taught Developer). حاصل على ليسانس الحقوق من جامعة الزقازيق عام 2022، ولكنني وجّهت شغفي الكامل منذ البداية للتكنولوجيا، البرمجة، وتصميم المنتجات الرقمية دون العمل في المجال القانوني.

تعلّمت وتطوّرت ذاتياً من خلال التطبيق العملي وبناء مشاريع وتطبيقات فعلية من الصفر. أمتلك خبرة عميقة في تصميم واجهات المستخدم (UI/UX) باستخدام Figma وStitch وAnima، وتطوير الواجهات الأمامية بالاعتماد على React وNext.js وTypeScript وTailwind CSS، بالإضافة إلى بناء البنيات الخلفية المحلية وسلاسل الأتمتة المتقدمة بـ Node.js وPython وSQLite وn8n وMake.com وربطها بالواتساب الرسمي للشركات.`,
    en: `I am Ahmed Issam Ramadan, a self-taught digital product builder and automation architect. Holding a Bachelor of Laws (LL.B.) from Zagazig University (2022), I pivoted my focus entirely to practical technology, software building, and product design.

All my software engineering, design, and database capabilities are self-taught and honed through real-world applications. I specialize in crafting ultra-responsive UI/UX designs (Figma, Stitch, Anima), developing dynamic frontend platforms (React, Next.js, TypeScript, Tailwind CSS), and engineering automated backend pipelines (Node.js, Python, SQLite, n8n, Make.com, and WhatsApp Business API).`
  },
  stats: [
    { label: { ar: 'مشاريع وأنظمة مبنية', en: 'Systems & Apps Built' }, value: '15+' },
    { label: { ar: 'تدفقات أتمتة نشطة', en: 'Active Automation Flows' }, value: '40+' },
    { label: { ar: 'شهادات ALX المعتمدة', en: 'Verified ALX Certificates' }, value: '2' },
    { label: { ar: 'التركيز على القيمة', en: 'Value & Impact Driven' }, value: '100%' }
  ],
  whatsappLink: 'https://wa.me/?text=Hello%20Ahmed,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com'
};

export const credentialsData: Credential[] = [
  {
    id: 'alx-aice',
    title: { ar: 'ALX AI Career Essentials (AiCE)', en: 'ALX AI Career Essentials (AiCE)' },
    issuer: { ar: 'ALX Global', en: 'ALX Global' },
    type: 'certification',
    status: 'completed',
    date: '2024',
    description: {
      ar: 'شهادة معتمدة ورسمية في أساسيات الذكاء الاصطناعي، أدوات الإنتاجية المتقدمة، وهندسة الأوامر (Prompt Engineering).',
      en: 'Official verified certificate in AI fundamentals, advanced productivity tools, and modern prompt engineering techniques.'
    },
    badgeText: { ar: 'شهادة رسمية معتمدة', en: 'Official Certificate' },
    icon: 'Brain'
  },
  {
    id: 'alx-pm-crash',
    title: { ar: 'دورة إدارة المشاريع السريعة (PM Crash Course)', en: 'ALX Project Management Crash Course' },
    issuer: { ar: 'ALX Global', en: 'ALX Global' },
    type: 'certification',
    status: 'completed',
    date: '2024',
    description: {
      ar: 'شهادة معتمدة ورسمية في أطر إدارة المشاريع Agile & Scrum وتخطيط المنتجات الرقمية.',
      en: 'Official verified certificate covering Agile, Scrum frameworks, sprint planning, and digital product leadership.'
    },
    badgeText: { ar: 'شهادة رسمية معتمدة', en: 'Official Certificate' },
    icon: 'Target'
  },
  {
    id: 'law-degree',
    title: { ar: 'ليسانس الحقوق - جامعة الزقازيق', en: 'Bachelor of Laws (LL.B.) - Zagazig University' },
    issuer: { ar: 'جامعة الزقازيق (2022)', en: 'Zagazig University (2022)' },
    type: 'degree',
    status: 'completed',
    date: '2022',
    description: {
      ar: 'المؤهل الأكاديمي الأساسي (دون ممارسة الحقوق أو عضوية النقابة)، مما يعكس شغفي الكامل بالتحول الذاتي لنواحي التقنية وتطوير البرمجيات.',
      en: 'Academic foundation (without legal practice or bar association membership), serving as the backdrop for my full self-taught pivot to tech.'
    },
    badgeText: { ar: 'مؤهل أكاديمي (تحول تقني)', en: 'Academic Background' },
    icon: 'GraduationCap'
  },
  {
    id: 'founder-academy',
    title: { ar: 'أكاديمية رواد الأعمال (Founder Academy)', en: 'ALX Founder Academy Studies' },
    issuer: { ar: 'ALX Program', en: 'ALX Program' },
    type: 'coursework',
    status: 'completed',
    date: '2024',
    description: {
      ar: 'دراسة مكثفة لبناء الشركات الناشئة، إستراتيجيات التوسع (Go-to-Market)، وتصميم المنتجات القابلة للنمو.',
      en: 'In-depth startup building methodology, go-to-market strategies, and product market fit analysis.'
    },
    badgeText: { ar: 'دراسات تطبيقية', en: 'Applied Study' },
    icon: 'Rocket'
  },
  {
    id: 'ai-starter-kit',
    title: { ar: 'مجموعة أدوات الذكاء الاصطناعي (AI Starter Kit)', en: 'AI Starter Kit Deep Dive' },
    issuer: { ar: 'Self-Directed / ALX Track', en: 'Self-Directed / ALX Track' },
    type: 'coursework',
    status: 'completed',
    date: '2024',
    description: {
      ar: 'دراسة وتطبيق بناء الوكلاء المستقلين (Autonomous Agents) ودمج النماذج الذكية في سير العمل.',
      en: 'Practical exploration of autonomous AI agent design, workflow integration, and API orchestration.'
    },
    badgeText: { ar: 'تطبيق عملي', en: 'Practical Track' },
    icon: 'Cpu'
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'ui_ux',
    title: { ar: 'تصميم الواجهات والتجربة (UI/UX)', en: 'UI/UX & Product Design' },
    iconName: 'Palette',
    skills: [
      { name: 'Figma', level: 'Master', desc: { ar: 'تصميم الأنظمة البصرية (Design Systems)، النماذج التفاعلية، والواجهات المتجاوبة.', en: 'Design systems, interactive prototypes, and modern dynamic layouts.' }, highlight: true },
      { name: 'Stitch (Stitch with Google)', level: 'Advanced', desc: { ar: 'توليد وتصميم أفكار الواجهات الرقمية بسرعة عالية بالذكاء الاصطناعي.', en: 'AI-assisted rapid interface conceptualization & styling.' }, highlight: true },
      { name: 'Anima', level: 'Advanced', desc: { ar: 'تحويل تصميمات Figma إلى كود واجهات أمامي عالي الجودة.', en: 'Translating Figma designs into production-ready frontend code.' } }
    ]
  },
  {
    id: 'frontend',
    title: { ar: 'تطوير الواجهات الأمامية (Frontend)', en: 'Frontend Engineering' },
    iconName: 'Layout',
    skills: [
      { name: 'React.js & Next.js', level: 'Advanced', desc: { ar: 'بناء تطبيقات محركات البحث السريعة والتطبيقات أحادية الصفحة SPA.', en: 'SSR, App Router, single page applications with rich interactive state.' }, highlight: true },
      { name: 'TypeScript & JavaScript', level: 'Advanced', desc: { ar: 'كتابة برمجيات آمنة النوعية ومعالجة البيانات المعقدة.', en: 'Strong type safety, ES6+ features, and async state management.' }, highlight: true },
      { name: 'Tailwind CSS & Vanilla CSS', level: 'Master', desc: { ar: 'تطبيق مؤثرات Glassmorphism، التدرجات الضوئية، ودعم RTL/LTR كامل.', en: 'Glassmorphism, custom animations, design tokens, and RTL support.' }, highlight: true },
      { name: 'HTML5 Semantic', level: 'Master', desc: { ar: 'هيكلة صفحات صديقة لمحركات البحث (SEO) وسهلة الوصول (a11y).', en: 'Semantic HTML, SEO optimization, and standard web accessibility.' } }
    ]
  },
  {
    id: 'backend_automation',
    title: { ar: 'الأتمتة والقواعد والبيانات الخلفية', en: 'Automation & Backend Stack' },
    iconName: 'Zap',
    skills: [
      { name: 'n8n & Make.com Workflows', level: 'Master', desc: { ar: 'تصميم تدفقات عمل معقدة للشركات وربط الخدمات بدون كود أو بكود خفيف.', en: 'Complex enterprise automation pipelines and multi-app orchestration.' }, highlight: true },
      { name: 'Official WhatsApp Business API', level: 'Advanced', desc: { ar: 'ربط البوتات الذكية، الرسائل التفاعلية، ورسائل الإشعارات الرسمية.', en: 'Integrating official Meta WhatsApp Webhooks, templates, & AI bots.' }, highlight: true },
      { name: 'Node.js & Express', level: 'Advanced', desc: { ar: 'بناء واجهات API محلية وسريعة لمعالجة الطلبات.', en: 'Lightweight REST APIs, background task listeners, and middleware.' } },
      { name: 'Python & Automation Scripts', level: 'Advanced', desc: { ar: 'سكربتات أتمتة البيانات والمعالجة المحلية والتجريف الذكي.', en: 'Custom scripting, data cleaning, and local workflow automation.' } },
      { name: 'SQLite', level: 'Advanced', desc: { ar: 'إدارة قواعد البيانات المحلية الخفيفة والموثوقة للمشاريع.', en: 'Fast, dependable embedded local relational database storage.' } }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'artelligence-os',
    title: {
      ar: 'Artelligence OS - نظام إدارة الأعمال الذكي المتكامل',
      en: 'Artelligence OS - Integrated AI Business Workspace'
    },
    category: 'ai_os',
    shortDesc: {
      ar: 'منظومة عمل ذكية تجمع بين إدارة الوكلاء، الأتمتة المباشرة، وتوليد المحتوى التسويقي ببطاقات Glassmorphic متقدمة.',
      en: 'A comprehensive multi-agent workspace integrating direct automation, content pipelines, and glassmorphic dashboards.'
    },
    fullDesc: {
      ar: 'مشروع رئيسي يمثل بيئة عمل متكاملة للمشاريع الذكية. يتيح النظام تشغيل وكلاء ذكاء اصطناعي متخصصين، وتتبع الأنشطة اليومية، ومزامنة البيانات محلياً وعبر السحابة مع دعم كامل للغة العربية الفصحى.',
      en: 'A flagship system representing a unified environment for smart digital tasks. Features multi-agent AI execution, task orchestration, dynamic activity timelines, and seamless Arabic RTL UI support.'
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'n8n', 'Node.js', 'AI Agents'],
    metrics: {
      ar: 'تسريع كفاءة إدارة العمليات بنسبة 400%',
      en: '400% Efficiency Boost in Operations Management'
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'whatsapp-n8n-automation',
    title: {
      ar: 'شبكة أتمتة الواتساب الرسمي وتدفقات n8n',
      en: 'Official WhatsApp Business API & n8n Automation Engine'
    },
    category: 'automation',
    shortDesc: {
      ar: 'سلسلة تدفقات عمل تلتقط رسائل العملاء على الواتساب، تعالجها بالذكاء الاصطناعي، وتحدّث قاعدة البيانات وتلخص الطلبات تلقائياً.',
      en: 'Automated workflow system processing incoming Meta WhatsApp webhooks, AI intent analysis, and automated database sync.'
    },
    fullDesc: {
      ar: 'نظام أتمتة احترافي يعتمد على n8n و Make.com و Node.js لاستقبال استفسارات العملاء على حساب الواتساب الرسمي للشركة، وتحليل نيتها بالذكاء الاصطناعي، وإرسال ردود تفاعلية وقائمة خيارات، وتسجيل بيانات طلباتهم في SQLite مباشرة.',
      en: 'Enterprise automation pipeline linking Meta Official WhatsApp API webhooks to AI reasoning engines and local SQLite databases via n8n, enabling automated instant customer support and lead management.'
    },
    tags: ['n8n', 'Make.com', 'WhatsApp Business API', 'Node.js', 'SQLite', 'Python'],
    metrics: {
      ar: 'معالجة +1000 محادثة يومياً دون تدخل بشري',
      en: 'Processes 1000+ Daily Conversations Zero-Touch'
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'modest-fashion-engine',
    title: {
      ar: 'منصة تسويق الأزياء المحتشمة وتوليد الحملات',
      en: 'Modest Fashion Campaign & Digital Store Showcase'
    },
    category: 'web_apps',
    shortDesc: {
      ar: 'تطبيق ويب فاخر ومخصص لعلامات الأزياء المحتشمة مع نصوص تسويقية ذكية ومولد إعلانات دون نفقات عارضات.',
      en: 'A premium web showcase and creative ad narrative builder tailored for conservative and modest fashion brands.'
    },
    fullDesc: {
      ar: 'تطبيق موجه لعلامات الأزياء المحتشمة والمحافظة، يوفر واجهات استعراض متجاوبة تعتمد على ألوان HSL الهادئة، ونظام صياغة حجج تسويقية ونصوص إعلانية مبنية على الذكاء الاصطناعي لتشغيل حملات ناجحة بميزانية معقولة.',
      en: 'A high-converting web showcase designed with HSL color harmony, smooth micro-interactions, and automated copy-generation engines specifically tuned for modest fashion ecommerce.'
    },
    tags: ['Next.js', 'Tailwind CSS', 'Figma Design', 'UI/UX', 'SEO'],
    metrics: {
      ar: 'زيادة معدل تحويل الزوار بنسبة 35%',
      en: '35% Higher Visitor Conversion Rate'
    },
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'local-media-optimizer',
    title: {
      ar: 'أداة معالجة وصنع محتوى الميديا المحلي (Media Automation)',
      en: 'Local Media Automation & Social Video Scripting Tool'
    },
    category: 'automation',
    shortDesc: {
      ar: 'سكربتات وأدوات أتمتة لتعديل صور المنتجات، إزالة الخلفيات، وصياغة سيناريوهات Reels المنصات.',
      en: 'Automated Python/Node scripts for background removal, metadata analysis, and viral Reels scripting.'
    },
    fullDesc: {
      ar: 'أداة مساعدة داخلية تحسّن جودة ومقاسات صور المنتجات رقمياً، وتنتج سيناريوهات مقاطع الفيديو قصيرة الطول (Reels / Shorts) مع ضبط الجداول الزمنية لمسؤول التسويق.',
      en: 'Internal media processor leveraging custom local scripts to adjust image dimensions, apply background transparency, and generate engagement-focused video storyboards.'
    },
    tags: ['Python', 'Media Processing', 'Node.js', 'Automation'],
    metrics: {
      ar: 'توفير 80% من وقت تحرير صور المنتجات',
      en: 'Saves 80% of Product Image Editing Time'
    },
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
  }
];

export const workflowDemoSteps: WorkflowStep[] = [
  {
    id: 1,
    title: { ar: 'استقبال طلب الواتساب الرسمية', en: 'Incoming WhatsApp Webhook' },
    icon: 'MessageSquare',
    status: 'idle',
    detail: {
      ar: 'عميل يرسل: "أريد معرفة تفاصيل الباقات والخدمات الرقمية المتوفرة"',
      en: 'Customer sends: "Hi! I need information on your automation services"'
    }
  },
  {
    id: 2,
    title: { ar: 'معالجة n8n وتحليل النية بالذكاء الاصطناعي', en: 'n8n Workflow & AI Intent Processing' },
    icon: 'Cpu',
    status: 'idle',
    detail: {
      ar: 'n8n يلتقط الطلب ويحلل استفسار العميل ويستخرج الخدمات المطلوبة',
      en: 'n8n parses payload, runs LLM intent classification & extracts service interest'
    }
  },
  {
    id: 3,
    title: { ar: 'تحديث قاعدة البيانات المحلية (SQLite)', en: 'Local SQLite Database Record' },
    icon: 'Database',
    status: 'idle',
    detail: {
      ar: 'تسجيل العميل كـ (New Lead) وتحديث ملف التفاعل في قاعدة البيانات',
      en: 'Inserts contact as New Lead into SQLite database table with timestamp'
    }
  },
  {
    id: 4,
    title: { ar: 'إرسال رد تفاعلي مخصص على الواتساب', en: 'Interactive WhatsApp Response' },
    icon: 'Send',
    status: 'idle',
    detail: {
      ar: 'إرسال قوالب رد رسائل تفاعلية بها أزرار اختيار الخدمة ورابط المعرض',
      en: 'Dispatches Meta interactive button list with customized project catalog'
    }
  }
];
