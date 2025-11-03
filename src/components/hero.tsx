'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { data } from '../constants'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { IconCloudDemo } from './icon-cloud-demo'
import { Terminal, TypingAnimation, AnimatedSpan } from './ui/magicui/terminal'

// Typing text effect
type TypingTextProps = {
  text: string
  speed?: number
  className?: string
}

const TypingText = ({ text, speed = 80, className = '' }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === text.length) {
        clearInterval(interval)
        setTimeout(() => {
          setDisplayedText('')
          setCycle((prev) => prev + 1)
        }, 5000)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, cycle])

  return (
    <h1 className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  )
}

export default TypingText

// Hero section with Bento Grid
export function Hero() {
  const { avatar, about, links } = data

  const cleanParagraph = about.description
    .split('\n')
    .filter(Boolean)
    .map((line) => line.replace(/^[-•]\s*/, ''))
    .join(' ')

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Profile Card - Left Side with Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-2 rounded-3xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 backdrop-blur-sm relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-4 h-full">
              <motion.a
                href="https://github.com/YasH-Bodhe"
                target="_blank"
                rel="noopener noreferrer"
                className="group/avatar"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-xl opacity-30 group-hover/avatar:opacity-50 transition-opacity" />
                  <Avatar className="size-40 sm:size-44 shadow-2xl border-4 border-neutral-800 relative z-10">
                    <AvatarImage 
                      alt={avatar.name} 
                      src="/assets/avatar.png"
                      className="object-cover"
                    />
                    <AvatarFallback className="font-bold text-2xl bg-neutral-900">
                      {avatar.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </motion.a>

              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  Greetings! I'm Yash.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                  Cloud & DevOps Engineer
                </p>
              </div>

              <Button
                variant='default'
                size="sm"
                className='font-bold text-xs px-4 py-2 rounded-full shadow-md bg-neutral-900 dark:bg-neutral-800 text-white border border-neutral-800 dark:border-neutral-700 hover:bg-neutral-800 dark:hover:bg-neutral-700 hover:scale-105 transition-all'
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/yash-bodhe-devops/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="size-2 bg-green-400 rounded-full animate-pulse" />
                  Connect Here
                </a>
              </Button>

              {/* Terminal Component */}
              <div className="w-full mt-4 flex-1 flex items-center justify-center">
                <Terminal className="max-h-[280px] text-xs">
                  <TypingAnimation>&gt; git clone https://github.com/YasH-Bodhe/devops-infra.git</TypingAnimation>
                  <AnimatedSpan className="text-green-500">
                    ✔ Repository cloned successfully.
                  </AnimatedSpan>
                  <TypingAnimation>&gt; terraform init && terraform apply -auto-approve</TypingAnimation>
                  <AnimatedSpan className="text-green-500">
                    ✔ AWS infrastructure deployed.
                  </AnimatedSpan>
                  <TypingAnimation>&gt; docker build -t yash-app .</TypingAnimation>
                  <AnimatedSpan className="text-green-500">
                    ✔ Docker image built successfully.
                  </AnimatedSpan>
                  <TypingAnimation>&gt; kubectl apply -f deployment.yaml</TypingAnimation>
                  <AnimatedSpan className="text-green-500">
                    ✔ Application running on Kubernetes ☁️
                  </AnimatedSpan>
                </Terminal>
              </div>
            </div>
          </motion.div>

          {/* Hero Title Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="md:col-span-8 rounded-3xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-10 backdrop-blur-sm relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <TypingText
                text="Building scalable infrastructure in the cloud ☁️"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white"
              />
            </div>

            <motion.div
              className="absolute bottom-6 right-6 bg-neutral-900 dark:bg-neutral-800 rounded-full p-3 border border-neutral-800 dark:border-neutral-700"
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowUpRight className="size-5 text-white" />
            </motion.div>
          </motion.div>

          {/* About Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2,  ease: [0.25, 0.1, 0.25, 1],}}
            whileHover={{ y: -5 }}
            className="md:col-span-5 rounded-3xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-8 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                {about.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">
                {cleanParagraph}
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="md:col-span-3 rounded-3xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 backdrop-blur-sm relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white text-center mb-2">My Tech Stack</h3>
              <div className="flex-1 flex items-center justify-center w-full">
                <IconCloudDemo />
              </div>
            </div>  
          </motion.div>

          {/* Projects Box */}
          <motion.a
            href="/projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="md:col-span-6 md:row-span-1 rounded-3xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 backdrop-blur-sm relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full flex flex-col justify-center items-center gap-4">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white text-center">Check My Projects</h3>
              <p className="text-xs sm:text-sm text-center text-neutral-600 dark:text-neutral-400">
                Explore my DevOps & Cloud solutions
              </p>      
            </div>
          </motion.a>

          {/* Social Profiles Box - Extended Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="md:col-span-6 rounded-3xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 backdrop-blur-sm relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full flex flex-col justify-center gap-4">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Social Profiles 🔗</h3>
              </div>

              {/* Social Links - Side by Side */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
                          asChild
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.title}
                            className="flex items-center justify-center gap-2"
                          >
                            <link.icon className="size-4 stroke-[1.5] text-neutral-900 dark:text-white" />
                            <span className="font-semibold text-xs text-neutral-900 dark:text-white hidden sm:inline">{link.title}</span>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{link.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}