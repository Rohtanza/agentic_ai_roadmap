'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Circle, ExternalLink, BookOpen, Play, FileText, Code, Zap, Target, Users, Briefcase } from 'lucide-react'
import { roadmapData, tools, successMetrics, keyPrinciples, specializationCourses } from '../data/roadmap'

interface ProgressData {
  [key: string]: boolean
}

export default function RoadmapPage() {
  const [progress, setProgress] = useState<ProgressData>({})
  const [activePhase, setActivePhase] = useState(0)

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('roadmap-progress')
    if (saved) {
      setProgress(JSON.parse(saved))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('roadmap-progress', JSON.stringify(progress))
  }, [progress])

  const toggleProgress = (id: string) => {
    setProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const calculateProgress = (phaseId: string) => {
    const phase = roadmapData.find(p => p.id === phaseId)
    if (!phase) return 0
    
    const totalItems = phase.weeks.reduce((acc, week) => {
      return acc + week.resources.length + (week.projects?.length || 0) + week.goals.length
    }, 0)
    
    const completedItems = phase.weeks.reduce((acc, week) => {
      const weekProgress = week.resources.filter(r => progress[`${week.id}-${r.title}`]).length +
        (week.projects?.filter(p => progress[`${week.id}-project-${p}`]).length || 0) +
        week.goals.filter(g => progress[`${week.id}-goal-${g}`]).length
      return acc + weekProgress
    }, 0)
    
    return totalItems > 0 ? (completedItems / totalItems) * 100 : 0
  }

  const getIconForResourceType = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4" />
      case 'tutorial': return <Play className="w-4 h-4" />
      case 'documentation': return <FileText className="w-4 h-4" />
      case 'book': return <BookOpen className="w-4 h-4" />
      case 'practice': return <Code className="w-4 h-4" />
      default: return <ExternalLink className="w-4 h-4" />
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-50',
          border: 'border-primary-200',
          text: 'text-primary-700',
          accent: 'bg-primary-600'
        }
      case 'accent':
        return {
          bg: 'bg-accent-50',
          border: 'border-accent-200',
          text: 'text-accent-700',
          accent: 'bg-accent-600'
        }
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-700',
          accent: 'bg-purple-600'
        }
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-700',
          accent: 'bg-gray-600'
        }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="roadmap-container py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🚀 Zargiya's Agentic AI Developer Roadmap
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Zargiya, from 7th Semester Software Engineer to Job-Ready Agentic AI Developer in 2-3 months
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                Python-Focused
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Project-Based Learning
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                Job-Ready Skills
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Overview */}
      <section className="bg-white border-b">
        <div className="roadmap-container py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Zargiya's Learning Progress</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {roadmapData.map((phase, index) => {
              const progressPercent = calculateProgress(phase.id)
              const colors = getColorClasses(phase.color)
              
              return (
                <div
                  key={phase.id}
                  className={`phase-card cursor-pointer ${colors.bg} ${colors.border} ${
                    activePhase === index ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-semibold ${colors.text}`}>{phase.title}</h3>
                    <span className="text-sm text-gray-500">{phase.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                  <div className="progress-bar">
                    <div 
                      className={`progress-fill ${colors.accent}`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-2">
                    {Math.round(progressPercent)}% complete
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 border-b">
        <div className="roadmap-container py-8">
                     <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Zargiya's Success Milestones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Phase 1</div>
              <p className="text-gray-700">{successMetrics.phase1}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">Phase 2</div>
              <p className="text-gray-700">{successMetrics.phase2}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Phase 3</div>
              <p className="text-gray-700">{successMetrics.phase3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="roadmap-container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <nav className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Phases</h3>
                <div className="space-y-2">
                  {roadmapData.map((phase, index) => (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activePhase === index
                          ? 'bg-primary-100 text-primary-700 border border-primary-200'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div className="font-medium">{phase.title}</div>
                      <div className="text-sm opacity-75">{phase.duration}</div>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Phase Content */}
          <div className="lg:col-span-3">
            {roadmapData[activePhase] && (
              <div className="space-y-8">
                {/* Phase Header */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {roadmapData[activePhase].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    {roadmapData[activePhase].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {roadmapData[activePhase].duration}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">
                        {Math.round(calculateProgress(roadmapData[activePhase].id))}%
                      </div>
                      <div className="text-sm text-gray-500">Complete</div>
                    </div>
                  </div>
                </div>

                {/* Weeks */}
                {roadmapData[activePhase].weeks.map((week, weekIndex) => (
                  <div key={week.id} className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {week.title}
                        </h3>
                        <p className="text-gray-600">{week.description}</p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-700 font-semibold">
                            {weekIndex + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Goals */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Learning Goals
                      </h4>
                      <div className="space-y-2">
                        {week.goals.map((goal, index) => {
                          const goalId = `${week.id}-goal-${goal}`
                          return (
                            <label key={index} className="flex items-start cursor-pointer">
                              <input
                                type="checkbox"
                                checked={progress[goalId] || false}
                                onChange={() => toggleProgress(goalId)}
                                className="checkbox-custom mt-0.5 mr-3"
                              />
                              <span className={`text-sm ${progress[goalId] ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                                {goal}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Resources
                      </h4>
                      
                      {/* Check if we have categorized resources */}
                      {week.resources.some(r => r.category) ? (
                        <div className="space-y-4">
                          {/* Show "Choose One Approach" header if we have categories */}
                          <div className="bg-blue-50 rounded-lg p-3 mb-4">
                            <h5 className="font-medium text-blue-900 mb-1">📍 Choose One Approach:</h5>
                            <p className="text-sm text-blue-700">Select the learning path that matches your time and depth preferences</p>
                          </div>
                          
                          {['comprehensive', 'fast-track', 'quick-option'].map(category => {
                            const categoryResources = week.resources.filter(r => r.category === category)
                            if (categoryResources.length === 0) return null
                            
                            return (
                              <div key={category} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center mb-3">
                                  <div className={`w-3 h-3 rounded-full mr-2 ${
                                    category === 'comprehensive' ? 'bg-green-500' :
                                    category === 'fast-track' ? 'bg-yellow-500' : 'bg-blue-500'
                                  }`} />
                                  <h6 className="font-medium text-gray-900 capitalize">
                                    {category === 'fast-track' ? 'Fast Track' : 
                                     category === 'quick-option' ? 'Quick Start' : category}
                                  </h6>
                                </div>
                                <div className="space-y-3">
                                  {categoryResources.map((resource, index) => {
                                    const resourceId = `${week.id}-${resource.title}`
                                    return (
                                      <div key={index} className="flex items-start">
                                        <input
                                          type="checkbox"
                                          checked={progress[resourceId] || false}
                                          onChange={() => toggleProgress(resourceId)}
                                          className="checkbox-custom mt-1 mr-3"
                                        />
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2 mb-1">
                                            {getIconForResourceType(resource.type)}
                                            <a
                                              href={resource.url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className={`resource-link ${progress[resourceId] ? 'line-through text-gray-500' : ''}`}
                                            >
                                              {resource.title}
                                            </a>
                                            {resource.isPrimary && (
                                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                                                Primary
                                              </span>
                                            )}
                                          </div>
                                          <div className="text-sm text-gray-500">
                                            {resource.provider && <span>{resource.provider}</span>}
                                            {resource.duration && <span> • {resource.duration}</span>}
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )
                          })}
                          
                          {/* Reference materials */}
                          {week.resources.filter(r => r.category === 'reference' || !r.category).length > 0 && (
                            <div className="border-t pt-4">
                              <h6 className="font-medium text-gray-700 mb-3">📚 Reference Materials & Follow-up:</h6>
                              <div className="space-y-3">
                                {week.resources.filter(r => r.category === 'reference' || !r.category).map((resource, index) => {
                                  const resourceId = `${week.id}-${resource.title}`
                                  return (
                                    <div key={index} className="flex items-start">
                                      <input
                                        type="checkbox"
                                        checked={progress[resourceId] || false}
                                        onChange={() => toggleProgress(resourceId)}
                                        className="checkbox-custom mt-1 mr-3"
                                      />
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                          {getIconForResourceType(resource.type)}
                                          <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`resource-link ${progress[resourceId] ? 'line-through text-gray-500' : ''}`}
                                          >
                                            {resource.title}
                                          </a>
                                          {resource.isPrimary && (
                                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                                              Primary
                                            </span>
                                          )}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          {resource.provider && <span>{resource.provider}</span>}
                                          {resource.duration && <span> • {resource.duration}</span>}
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Regular resources display for weeks without categories */
                        <div className="space-y-3">
                          {week.resources.map((resource, index) => {
                            const resourceId = `${week.id}-${resource.title}`
                            return (
                              <div key={index} className="flex items-start">
                                <input
                                  type="checkbox"
                                  checked={progress[resourceId] || false}
                                  onChange={() => toggleProgress(resourceId)}
                                  className="checkbox-custom mt-1 mr-3"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    {getIconForResourceType(resource.type)}
                                    <a
                                      href={resource.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`resource-link ${progress[resourceId] ? 'line-through text-gray-500' : ''}`}
                                    >
                                      {resource.title}
                                    </a>
                                    {resource.isPrimary && (
                                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                                        Primary
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {resource.provider && <span>{resource.provider}</span>}
                                    {resource.duration && <span> • {resource.duration}</span>}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>

                    {/* Projects */}
                    {week.projects && week.projects.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Hands-on Projects
                        </h4>
                        <div className="space-y-2">
                          {week.projects.map((project, index) => {
                            const projectId = `${week.id}-project-${project}`
                            return (
                              <label key={index} className="flex items-start cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={progress[projectId] || false}
                                  onChange={() => toggleProgress(projectId)}
                                  className="checkbox-custom mt-0.5 mr-3"
                                />
                                <span className={`text-sm ${progress[projectId] ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                                  {project}
                                </span>
                              </label>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Specialization Courses Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-b">
        <div className="roadmap-container py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎓 Recommended Specialization Courses</h2>
            <p className="text-lg text-gray-600">Pick 1-2 courses for Phase 3 to deepen your expertise</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {specializationCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{course.emoji}</div>
                  <a 
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    View Course
                  </a>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {course.title}
                </h3>
                <div className="text-sm font-medium text-primary-600 mb-2">
                  {course.subtitle}
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {course.provider}
                </div>
                <p className="text-gray-700 mb-4">
                  {course.description}
                </p>
                
                <div className="space-y-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center bg-white rounded-xl p-6">
            <p className="text-gray-600">
              💡 <strong>Tip:</strong> Choose what you like - comprehensive learning, practical projects, enterprise focus, or cutting-edge patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Resources Section */}
      <section className="bg-white border-t">
        <div className="roadmap-container py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Tools & Frameworks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(
              tools.reduce((acc, tool) => {
                if (!acc[tool.category]) acc[tool.category] = []
                acc[tool.category].push(tool)
                return acc
              }, {} as Record<string, typeof tools>)
            ).map(([category, categoryTools]) => (
              <div key={category} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                <div className="space-y-2">
                  {categoryTools.map((tool, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0 ${
                        tool.importance === 'essential' ? 'bg-red-500' :
                        tool.importance === 'recommended' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`} />
                      <div>
                        <div className="font-medium text-sm text-gray-900">{tool.name}</div>
                        <div className="text-xs text-gray-600">{tool.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <span className="inline-flex items-center mr-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
              Essential
            </span>
            <span className="inline-flex items-center mr-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1" />
              Recommended
            </span>
            <span className="inline-flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-1" />
              Optional
            </span>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="bg-gray-50">
        <div className="roadmap-container py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Principles for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 mb-4">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center bg-primary-50 rounded-xl p-6">
            <p className="text-lg font-medium text-primary-900 mb-2">
              💡 Remember, Zargiya: You're compressing 6-9 months of learning into 2-3 months.
            </p>
            <p className="text-primary-700">
              Stay focused, build consistently, and trust the process! You've got this! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="roadmap-container py-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Zargiya's Success Formula</h3>
            <p className="text-gray-300 mb-4">
              Python + LLMs + Agent Frameworks + Portfolio Projects = Job Ready!
            </p>
            <div className="text-sm text-gray-400">
              <p>🌟 Designed specifically for Zargiya's learning journey</p>
              <p>Built by _rayhan</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 