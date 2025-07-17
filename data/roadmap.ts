export interface Resource {
  title: string;
  url: string;
  type: 'course' | 'tutorial' | 'documentation' | 'book' | 'practice';
  duration?: string;
  provider?: string;
  isPrimary?: boolean;
  isAlternative?: boolean;
  category?: 'comprehensive' | 'fast-track' | 'quick-option' | 'reference';
}

export interface WeekContent {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  projects?: string[];
  goals: string[];
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  duration: string;
  weeks: WeekContent[];
  color: string;
}

export interface Tool {
  name: string;
  category: string;
  description: string;
  importance: 'essential' | 'recommended' | 'optional';
}

export const roadmapData: Phase[] = [
  {
    id: 'phase1',
    title: 'Foundations',
    description: 'Build essential Python and ML knowledge',
    duration: 'Weeks 1-4',
    color: 'primary',
    weeks: [
      {
        id: 'week1',
        title: 'Python & Math Refresher',
        description: 'Get comfortable with Python and basic mathematical concepts',
        goals: [
          'Master Python syntax and data structures',
          'Understand basic linear algebra and probability',
          'Set up development environment'
        ],
        resources: [
          {
            title: 'Python for Everybody',
            url: 'https://www.coursera.org/specializations/python',
            type: 'course',
            provider: 'University of Michigan, Coursera',
            isPrimary: true
          },
          {
            title: 'Automate the Boring Stuff',
            url: 'https://automatetheboringstuff.com/',
            type: 'book',
            duration: 'Free'
          },
          {
            title: 'Kaggle Python Micro-course',
            url: 'https://www.kaggle.com/learn/python',
            type: 'course',
            duration: '4 hours',
            provider: 'Kaggle'
          }
        ]
      },
      {
        id: 'week2',
        title: 'Core Machine Learning',
        description: 'Learn fundamental ML concepts and algorithms',
        goals: [
          'Understand supervised vs unsupervised learning',
          'Know common algorithms and evaluation metrics',
          'Practice with scikit-learn'
        ],
        resources: [
          {
            title: 'Machine Learning Specialization',
            url: 'https://www.coursera.org/specializations/machine-learning-introduction',
            type: 'course',
            provider: 'Andrew Ng, Coursera',
            isPrimary: true,
            category: 'comprehensive'
          },
          {
            title: 'Machine Learning Crash Course + Kaggle Intro to ML',
            url: 'https://developers.google.com/machine-learning/crash-course',
            type: 'course',
            provider: 'Google',
            category: 'fast-track'
          },
          {
            title: 'Kaggle Learn - Intermediate ML',
            url: 'https://www.kaggle.com/learn/intermediate-machine-learning',
            type: 'course',
            provider: 'Kaggle',
            duration: 'Follow-up'
          },
          {
            title: 'Hands-On ML with Scikit-Learn & TensorFlow (Chapters 1-4)',
            url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
            type: 'book',
            provider: 'Geron',
            category: 'reference'
          }
        ]
      },
      {
        id: 'week3',
        title: 'Deep Learning & Python ML Stack',
        description: 'Get hands-on with neural networks and ML libraries',
        goals: [
          'Train your first neural network',
          'Master NumPy, Pandas, scikit-learn',
          'Understand PyTorch basics'
        ],
        resources: [
          {
            title: 'Deep Learning with PyTorch: 60-Minute Blitz',
            url: 'https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html',
            type: 'tutorial',
            provider: 'Official PyTorch',
            isPrimary: true,
            category: 'quick-option'
          },
          {
            title: 'fast.ai Practical Deep Learning (Lessons 1-2)',
            url: 'https://course.fast.ai/',
            type: 'course',
            provider: 'fast.ai',
            duration: 'Free, hands-on',
            category: 'comprehensive'
          },
          {
            title: 'Hands-On ML with Scikit-Learn & TensorFlow (Chapters 5-8)',
            url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
            type: 'book',
            provider: 'Geron',
            category: 'reference'
          }
        ],
        projects: [
          'Train a simple neural network on MNIST',
          'Data analysis project with Pandas'
        ]
      },
      {
        id: 'week4',
        title: 'NLP & RL Fundamentals',
        description: 'Introduction to language processing and reinforcement learning',
        goals: [
          'Understand transformer architecture basics',
          'Learn RL concepts: states, actions, rewards',
          'Use Hugging Face transformers'
        ],
        resources: [
          {
            title: 'Hugging Face NLP Course (Chapters 1-3)',
            url: 'https://huggingface.co/course/',
            type: 'course',
            provider: 'Hugging Face',
            duration: 'Free',
            isPrimary: true,
            category: 'fast-track'
          },
          {
            title: 'NLP Specialization',
            url: 'https://www.coursera.org/specializations/natural-language-processing',
            type: 'course',
            provider: 'DeepLearning.AI',
            category: 'comprehensive'
          },
          {
            title: 'Spinning Up - Reinforcement Learning Intro',
            url: 'https://spinningup.openai.com/en/latest/spinningup/rl_intro.html',
            type: 'documentation',
            provider: 'OpenAI'
          }
        ]
      }
    ]
  },
  {
    id: 'phase2',
    title: 'Agentic AI Specialization',
    description: 'Master LLMs, agents, and specialized frameworks',
    duration: 'Weeks 5-8',
    color: 'accent',
    weeks: [
      {
        id: 'week5',
        title: 'LLM Mastery & Prompt Engineering',
        description: 'Learn to work effectively with large language models',
        goals: [
          'Master prompt engineering techniques',
          'Integrate OpenAI API in Python',
          'Handle token limits and costs'
        ],
        resources: [
          {
            title: 'ChatGPT Prompt Engineering for Developers',
            url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/',
            type: 'course',
            provider: 'DeepLearning.AI',
            isPrimary: true,
            duration: 'Free'
          },
          {
            title: 'OpenAI API Documentation',
            url: 'https://platform.openai.com/docs',
            type: 'documentation',
            provider: 'OpenAI'
          }
        ],
        projects: [
          'Build a simple Q&A bot',
          'Implement conversation with context management'
        ]
      },
      {
        id: 'week6',
        title: 'Agent Frameworks',
        description: 'Build autonomous agents using LangChain',
        goals: [
          'Master LangChain framework',
          'Create agents that use tools',
          'Implement memory and state management'
        ],
        resources: [
          {
            title: 'LangChain Documentation',
            url: 'https://python.langchain.com/',
            type: 'documentation',
            provider: 'LangChain',
            isPrimary: true
          },
          {
            title: 'Fundamentals of AI Agents using RAG and LangChain',
            url: 'https://www.coursera.org/learn/fundamentals-of-ai-agents-using-rag-and-langchain',
            type: 'course',
            provider: 'IBM, Coursera'
          }
        ],
        projects: [
          'Build tool-using agent (web search + LLM)',
          'AI Research Assistant with LangChain',
          'Tool-using agent with multiple capabilities'
        ]
      },
      {
        id: 'week7',
        title: 'Reinforcement Learning & Agent Patterns',
        description: 'Practical RL implementation and advanced agent patterns',
        goals: [
          'Train RL agents with Stable-Baselines3',
          'Understand multi-agent systems',
          'Create learning performance visualizations'
        ],
        resources: [
          {
            title: 'Stable-Baselines3 + Gymnasium Tutorials',
            url: 'https://stable-baselines3.readthedocs.io/en/master/guide/examples.html',
            type: 'documentation',
            isPrimary: true
          },
          {
            title: 'AutoGen Paper/Blog',
            url: 'https://microsoft.github.io/autogen/',
            type: 'documentation',
            provider: 'Microsoft'
          },
          {
            title: 'Deep RL (Spinning Up)',
            url: 'https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html',
            type: 'documentation',
            provider: 'OpenAI'
          }
        ],
        projects: [
          'Train RL agent on CartPole or MountainCar environment',
          'Create RL demo with learning curves visualization',
          'Hands-on RL implementation with Stable-Baselines3'
        ]
      },
      {
        id: 'week8',
        title: 'Capstone Project',
        description: 'Build a comprehensive AI agent system',
        goals: [
          'Create a polished, deployable project',
          'Demonstrate end-to-end AI system',
          'Build portfolio-worthy demo'
        ],
        resources: [
          {
            title: 'Streamlit Documentation',
            url: 'https://docs.streamlit.io/',
            type: 'documentation'
          },
          {
            title: 'Gradio Documentation',
            url: 'https://gradio.app/docs/',
            type: 'documentation'
          }
        ],
        projects: [
          'Autonomous Task Assistant (email/scheduling)',
          'Multi-Agent Collaboration System',
          'RL Game-Playing Agent with UI'
        ]
      }
    ]
  },
  {
    id: 'phase3',
    title: 'Specialization & Job Prep',
    description: 'Advanced courses, portfolio polish, and job preparation',
    duration: 'Weeks 9-12',
    color: 'purple',
    weeks: [
      {
        id: 'week9-10',
        title: 'Course Completion + Portfolio Polish',
        description: 'Complete specialization and refine projects',
        goals: [
          'Complete chosen specialization course',
          'Polish 2-3 best projects',
          'Create professional documentation'
        ],
        resources: [
          {
            title: '🥇 AI Agents and Agentic AI in Python (Top Choice - Comprehensive)',
            url: 'https://www.coursera.org/specializations/ai-agents',
            type: 'course',
            provider: 'Vanderbilt University, Coursera',
            isPrimary: true,
            duration: 'Complete agent framework building, prompt engineering mastery, multi-agent collaboration, trustworthy AI design'
          },
          {
            title: '🚀 The Complete Agentic AI Engineering Course (Intensive Practical)',
            url: 'https://www.google.com/aclk?sa=l&ai=DChsSEwj1zvvJm8OOAxU2fUECHQw1JT0YACICCAEQARoCd3M&co=1&ase=2&category=acrcp_v1_48&sig=AOD64_04KL_Yl6kPEx6r83zi-QU1wfb61g&q&nis=4&adurl&ved=2ahUKEwiS8fTJm8OOAxWQSKQEHRgiMHMQ0Qx6BAgOEAE',            type: 'course',
            provider: 'Udemy',
            duration: '8 real-world projects in 30 days, OpenAI Agents SDK, CrewAI, LangGraph, Model Context Protocol (MCP), Commercial applications'
          },
          {
            title: '🤗 Hugging Face AI Agents Course (Modern Open-Source Agents)',
            url: 'https://huggingface.co/learn/agents-course/unit0/introduction',
            type: 'course',
            provider: 'Hugging Face',
            duration: 'Theory, design, and practice of AI agents, hands-on with smolagents, LangGraph, LlamaIndex, real-world use cases, certification, community leaderboard, bonus units'
          },
          {
            title: '🤝 Multi AI Agent Systems with crewAI (Multi-Agent Systems)',
            url: 'https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/',
            type: 'course',
            provider: 'DeepLearning.AI',
            duration: 'Agent collaboration patterns, role-based agent design, memory and tool assignment'
          },
          {
            title: '🎨 AI Agentic Design Patterns with AutoGen (Design Patterns)',
            url: 'https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/',
            type: 'course',
            provider: 'DeepLearning.AI',
            duration: 'Advanced agent architectures, reflection frameworks, custom agent development'
          }
        ]
      },
      {
        id: 'week11',
        title: 'Job Search Preparation',
        description: 'Prepare for technical interviews and job applications',
        goals: [
          'Practice coding challenges',
          'Prepare for AI concept interviews',
          'Build professional online presence'
        ],
        resources: [
          {
            title: 'LeetCode',
            url: 'https://leetcode.com/',
            type: 'practice',
            duration: 'Easy/Medium, Python focus'
          },
          {
            title: 'Pramp',
            url: 'https://www.pramp.com/',
            type: 'practice',
            duration: 'Mock interviews'
          }
        ]
      },
      {
        id: 'week12',
        title: 'Active Job Search & Continuous Learning',
        description: 'Apply for positions and stay updated with latest developments',
        goals: [
          'Submit job applications',
          'Network with AI community',
          'Continue learning and building'
        ],
        resources: [
          {
            title: 'Hugging Face Blog',
            url: 'https://huggingface.co/blog',
            type: 'documentation'
          },
          {
            title: 'LangChain Blog',
            url: 'https://blog.langchain.dev/',
            type: 'documentation'
          },
          {
            title: 'OpenAI Research',
            url: 'https://openai.com/research/',
            type: 'documentation'
          }
        ]
      }
    ]
  }
];

export const tools: Tool[] = [
  { name: 'NumPy', category: 'Core Python Stack', description: 'N-dimensional arrays and math', importance: 'essential' },
  { name: 'Pandas', category: 'Core Python Stack', description: 'Data manipulation', importance: 'essential' },
  { name: 'scikit-learn', category: 'Core Python Stack', description: 'Basic ML algorithms', importance: 'essential' },
  { name: 'PyTorch', category: 'Core Python Stack', description: 'Deep learning framework', importance: 'essential' },
  { name: 'LangChain', category: 'Agentic AI Frameworks', description: 'Industry standard for LLM apps', importance: 'essential' },
  { name: 'Hugging Face Transformers', category: 'Agentic AI Frameworks', description: 'Pre-trained models and pipelines', importance: 'essential' },
  { name: 'Stable-Baselines3', category: 'Agentic AI Frameworks', description: 'RL algorithms', importance: 'essential' },
  { name: 'OpenAI API/SDK', category: 'Agentic AI Frameworks', description: 'LLM integration', importance: 'essential' },
  { name: 'LangGraph', category: 'Emerging Frameworks', description: 'Graph-based agent workflows', importance: 'recommended' },
  { name: 'AutoGen', category: 'Emerging Frameworks', description: 'Multi-agent conversations', importance: 'recommended' },
  { name: 'CrewAI', category: 'Emerging Frameworks', description: 'Agent orchestration', importance: 'recommended' },
  { name: 'Streamlit', category: 'Deployment & UI', description: 'Quick demos and prototypes', importance: 'recommended' },
  { name: 'FastAPI', category: 'Deployment & UI', description: 'Production APIs', importance: 'recommended' },
  { name: 'Docker', category: 'Deployment & UI', description: 'Containerization', importance: 'optional' }
];

export const specializationCourses = [
  {
    id: 'vanderbilt',
    emoji: '🥇',
    title: 'AI Agents and Agentic AI in Python',
    subtitle: 'Top Choice - Comprehensive',
    url: 'https://www.coursera.org/specializations/ai-agents',
    provider: 'Vanderbilt University, Coursera',
    description: 'Complete agent framework building from scratch',
    features: [
      'Complete agent framework building',
      'Prompt engineering mastery',
      'Multi-agent collaboration',
      'Trustworthy AI design'
    ]
  },
  {
    id: 'udemy',
    emoji: '🚀',
    title: 'The Complete Agentic AI Engineering Course',
    subtitle: 'Intensive Practical',
    url: 'https://www.udemy.com/course/agentic-ai-engineering/',
    provider: 'Udemy',
    description: '8 real-world projects in 30 days',
    features: [
      '8 real-world projects in 30 days',
      'OpenAI Agents SDK, CrewAI, LangGraph',
      'Model Context Protocol (MCP)',
      'Commercial applications'
    ]
  },
  {
    id: 'huggingface',
    emoji: '🤗',
    title: 'Hugging Face AI Agents Course',
    subtitle: 'Modern Open-Source Agents',
    url: 'https://huggingface.co/learn/agents-course/unit0/introduction',
    provider: 'Hugging Face',
    description: 'Free, hands-on course covering agent fundamentals, frameworks (smolagents, LangGraph, LlamaIndex), and real-world projects. Includes certification and community challenges.',
    features: [
      'Theory, design, and practice of AI agents',
      'Hands-on with smolagents, LangGraph, LlamaIndex',
      'Real-world use cases and final project',
      'Certification and community leaderboard',
      'Bonus units: function-calling, observability, agents in games'
    ]
  },
  {
    id: 'crewai',
    emoji: '🤝',
    title: 'Multi AI Agent Systems with crewAI',
    subtitle: 'Multi-Agent Systems',
    url: 'https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/',
    provider: 'DeepLearning.AI',
    description: 'Agent collaboration and coordination',
    features: [
      'Agent collaboration patterns',
      'Role-based agent design',
      'Memory and tool assignment',
      'Multi-agent workflows'
    ]
  },
  {
    id: 'autogen',
    emoji: '🎨',
    title: 'AI Agentic Design Patterns with AutoGen',
    subtitle: 'Design Patterns',
    url: 'https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/',
    provider: 'DeepLearning.AI',
    description: 'Advanced architectures and patterns',
    features: [
      'Advanced agent architectures',
      'Reflection frameworks',
      'Custom agent development',
      'Design pattern mastery'
    ]
  }
];

export const successMetrics = {
  phase1: 'Train a simple ML model, understand AI concepts',
  phase2: 'Build a functioning AI agent with tools',
  phase3: '2-3 portfolio projects, job applications sent'
};

export const keyPrinciples = [
  {
    title: 'Learn by Building, Not Just Consuming',
    description: 'Start coding projects from Week 1 - build while you learn',
    items: [
      'Use high-level frameworks (LangChain, Hugging Face) to move fast',
      'Prioritize hands-on implementation over theoretical depth'
    ]
  },
  {
    title: 'Leverage Your Software Engineering Background',
    description: 'Skip basic programming concepts - focus on AI-specific skills',
    items: [
      'Apply your debugging, system design, and API integration experience',
      'Use your coding rigor to build reliable, well-structured AI agents'
    ]
  },
  {
    title: 'Portfolio Over Perfection',
    description: '2-3 polished projects > many incomplete experiments',
    items: [
      'Document everything with clear READMEs and demos',
      'Show learning progression and problem-solving approach'
    ]
  },
  {
    title: 'Stay Practical and Job-Focused',
    description: 'Emphasize skills mentioned in job postings',
    items: [
      'Build projects that demonstrate real-world problem solving',
      'Network actively and showcase your rapid learning journey'
    ]
  }
]; 