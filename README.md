# 🚀 Agentic AI Developer Roadmap

A comprehensive, interactive roadmap to transform from Software Engineer to Job-Ready Agentic AI Developer in 2-3 months. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Interactive Progress Tracking**: Check off completed resources, projects, and goals
- **Persistent Progress**: Your progress is saved locally in your browser
- **3-Phase Learning Structure**: Foundations → Agentic AI Specialization → Job Prep
- **"Choose One Approach" Structure**: Multiple learning paths (comprehensive vs. fast-track)
- **5 Detailed Specialization Courses**: Complete coverage of Phase 3 options with emojis and features
- **Success Metrics Display**: Clear goals and outcomes for each phase
- **Resource Organization**: Curated courses, tutorials, and documentation with category groupings
- **Mobile Responsive**: Works seamlessly on all devices
- **Modern UI**: Clean, professional design with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd agentic-ai-roadmap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Deployment to Vercel

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js and configure deployment

3. **Configure settings (if needed)**
   - Build Command: `npm run build`
   - Output Directory: `out` (for static export)
   - Install Command: `npm install`

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Configure project settings

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Storage**: localStorage (client-side progress tracking)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main roadmap interface
├── data/
│   └── roadmap.ts           # Roadmap content and data structures
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Roadmap Content

The roadmap is organized into **3 main phases**:

### Phase 1: Foundations (Weeks 1-4)
- Python & Math Refresher
- Core Machine Learning
- Deep Learning & Python ML Stack
- NLP & RL Fundamentals

### Phase 2: Agentic AI Specialization (Weeks 5-8)
- LLM Mastery & Prompt Engineering
- Agent Frameworks (LangChain)
- Reinforcement Learning & Agent Patterns
- Capstone Project

### Phase 3: Specialization & Job Prep (Weeks 9-12)
- Advanced Course Completion
- Portfolio Polish
- Job Search Preparation
- Continuous Learning

## 🔧 Customization

### Adding New Content

Edit `data/roadmap.ts` to:
- Add new resources to existing weeks
- Create new weeks or phases
- Update tools and frameworks
- Modify key principles

### Styling Changes

- Update `tailwind.config.js` for theme customization
- Modify `app/globals.css` for global styles
- Adjust component styles in `app/page.tsx`

### Progress Tracking

Progress is automatically saved to `localStorage`. To reset:
```javascript
localStorage.removeItem('roadmap-progress')
```

## 📊 Key Features

- **Progress Visualization**: Real-time progress bars for each phase
- **Resource Categorization**: Courses, tutorials, documentation, books, practice
- **Interactive Checklists**: Mark completion of goals, resources, and projects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Static export for fast loading

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📄 License

This project is open source. Feel free to use, modify, and distribute.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or issues:
- Create an issue in the repository
- Check the documentation
- Review the roadmap content

---

**Happy Learning! 🚀** Transform your career with this comprehensive Agentic AI roadmap. # agentic_ai_roadmap
