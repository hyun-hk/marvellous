'use client'

import { useState, useEffect, useRef } from "react"
import { cn } from "./lib/utils"
import { Button } from "@/app/components/button"
import { ArrowRight, Briefcase, Globe2, Shield, Wallet } from "lucide-react"

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1)
  const stepperRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isStepperVisible, setIsStepperVisible] = useState(false)
  const [hasPassedHero, setHasPassedHero] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStepperVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2 // Adjust this value to control when stepper becomes "visible"
      }
    )

    if (stepperRef.current) {
      observer.observe(stepperRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7 // Adjust this value based on your hero section height
      setHasPassedHero(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let lastScrollTime = Date.now()

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling || !isStepperVisible || !hasPassedHero) return
      
      const now = Date.now()
      const timeSinceLastScroll = now - lastScrollTime
      
      if (timeSinceLastScroll > 200) {
        event.preventDefault()
        
        setIsScrolling(true)
        lastScrollTime = now
        
        setCurrentStep(curr => {
          if (event.deltaY > 0) {
            // Scrolling down
            return curr < features.length ? curr + 1 : curr
          } else {
            // Scrolling up
            return curr > 1 ? curr - 1 : curr
          }
        })

        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          setIsScrolling(false)
        }, 500)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      clearTimeout(timeoutId)
    }
  }, [isScrolling, isStepperVisible, hasPassedHero])

  const features = [
    {
      number: 1,
      title: "글로벌 팀 관리",
      subtitle: "전 세계 어디서나 팀을 효율적으로 관리하세요",
      icon: Globe2,
      description: "국가별 법률 및 규정을 준수하면서 글로벌 팀을 손쉽게 관리할 수 있습니다."
    },
    {
      number: 2,
      title: "급여 및 복리후생",
      subtitle: "자동화된 급여 처리 시스템으로 편리하게",
      icon: Wallet,
      description: "다양한 통화와 현지 규정에 맞춘 급여 처리, 세금 계산을 자동으로 처리합니다."
    },
    {
      number: 3,
      title: "인사 관리",
      subtitle: "체계적인 인사 관리 시스템",
      icon: Briefcase,
      description: "채용부터 평가, 교육까지 모든 인사 업무를 한 곳에서 관리하세요."
    },
    {
      number: 4,
      title: "보안 및 규정 준수",
      subtitle: "안전한 데이터 보호와 규정 준수",
      icon: Shield,
      description: "국제 보안 표준을 준수하며, 중요한 데이터를 안전하게 보호합니다."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="flex flex-col">
        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-8">
                  <span className="text-sm font-medium">새로운 온보딩 경험</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  글로벌 팀 관리의 새로운 기준
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                  HR, 급여, 인사관리를 하나의 플랫폼에서 간편하게 관리하세요
                </p>
                <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg rounded-full">
                  시작하기 <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20" ref={stepperRef}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.number} 
                      className="relative transition-all duration-500"
                    >
                      {/* Connecting Line */}
                      {index < features.length - 1 && (
                        <div
                          className={cn(
                            "absolute left-10 top-[4rem] w-0.5 h-[calc(100%-2rem)] transition-colors duration-500",
                            currentStep > feature.number ? "bg-black" : "bg-gray-200"
                          )}
                        />
                      )}
                      
                      {/* Feature Content */}
                      <div className="relative flex items-start gap-6 group">
                        {/* Circle Icon */}
                        <div
                          className={cn(
                            "flex items-center justify-center w-20 h-20 rounded-full text-2xl transition-all duration-500",
                            currentStep === feature.number
                              ? "bg-black text-white"
                              : currentStep > feature.number
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-400"
                          )}
                        >
                          <feature.icon className="w-8 h-8" />
                        </div>
                        
                        {/* Text Content */}
                        <div className="pt-2 flex-1">
                          <h3 className={cn(
                            "text-2xl font-medium mb-2 transition-colors duration-500",
                            currentStep >= feature.number ? "text-gray-900" : "text-gray-400"
                          )}>
                            {feature.title}
                          </h3>
                          <p className={cn(
                            "text-lg mb-2 transition-colors duration-500",
                            currentStep >= feature.number ? "text-gray-600" : "text-gray-400"
                          )}>
                            {feature.subtitle}
                          </p>
                          <p className={cn(
                            "text-base transition-colors duration-500",
                            currentStep >= feature.number ? "text-gray-500" : "text-gray-400"
                          )}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}