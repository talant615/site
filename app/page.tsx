"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Youtube, MessageCircle, Music, X, AlertTriangle } from "lucide-react"

export default function VideoEditorPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [showAgeWarning, setShowAgeWarning] = useState(false)
  const [hasSeenWarning, setHasSeenWarning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasSeenWarning) {
        setShowAgeWarning(true)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [hasSeenWarning])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleVideoClick = (videoUrl: string) => {
    if (videoUrl !== "#") {
      window.open(videoUrl, "_blank")
    }
  }

  const confirmAge = () => {
    setShowAgeWarning(false)
    setHasSeenWarning(true)
  }

  const portfolioVideos = [
    {
      id: 1,
      title: "Новые проекты",
      description: "Место для будущих работ",
      thumbnail: "/coming-soon.png",
      videoUrl: "#",
      previewVideo: "/coming-soon.png",
    },
    {
      id: 2,
      title: "Cinematic Travel Edit",
      description: "Эпичное путешествие через горы",
      thumbnail: "/cinematic-mountain-thumbnail.png",
      videoUrl: "https://www.youtube.com/watch?v=AyLCdiKy6vw",
      previewVideo: "/mountain-travel-video-preview.png",
    },
    {
      id: 3,
      title: "Music Video Production",
      description: "Динамичный музыкальный клип",
      thumbnail: "/dark-neon-music-video.png",
      videoUrl: "https://www.youtube.com/@Talant615",
      previewVideo: "/music-video-neon.png",
    },
    {
      id: 4,
      title: "Commercial Advertisement",
      description: "Рекламный ролик для бренда",
      thumbnail: "/modern-commercial-thumbnail.png",
      videoUrl: "https://www.youtube.com/@Talant615",
      previewVideo: "/modern-commercial-preview.png",
    },
    {
      id: 5,
      title: "Event Highlights",
      description: "Лучшие моменты мероприятия",
      thumbnail: "/event-highlights-thumbnail.png",
      videoUrl: "https://www.youtube.com/@Talant615",
      previewVideo: "/placeholder-oaa9i.png",
    },
    {
      id: 6,
      title: "Fashion Film",
      description: "Стильный модный ролик",
      thumbnail: "/fashion-video-thumbnail.png",
      videoUrl: "https://www.youtube.com/@Talant615",
      previewVideo: "/fashion-video.png",
    },
    {
      id: 7,
      title: "Documentary Short",
      description: "Короткий документальный фильм",
      thumbnail: "/documentary-thumbnail.png",
      videoUrl: "https://www.youtube.com/@Talant615",
      previewVideo: "/documentary-video.png",
    },
    {
      id: 8,
      title: "Corporate Video",
      description: "Корпоративная презентация",
      thumbnail: "/corporate-video-thumbnail.png",
      videoUrl: "https://www.youtube.com/@Talant615",
      previewVideo: "/corporate-video-scene.png",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto bg-neutral-950 border-neutral-50 border-0 py-2.5 px-7">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-500">Talant 天 赋 615</div>
            <div className="flex space-x-8">
              {[
                { id: "home", label: "Главная" },
                { id: "portfolio", label: "Работы" },
                { id: "contact", label: "Обратная связь" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg transition-colors hover:text-purple-400 ${
                    activeSection === item.id ? "text-purple-500" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Talant</span>
            <span className="text-purple-500 ml-4">天 赋</span>
            <span className="text-white ml-4">615</span>
          </h1>
          
          
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">Мои</span>
            <span className="text-purple-500 ml-3">Работы</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioVideos.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden group cursor-pointer transition-transform hover:scale-105 bg-neutral-950 border-neutral-800"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play overlay */}
                  {video.videoUrl !== "#" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-purple-600 rounded-full p-4">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  {video.id === 1 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">Скоро</div>
                        <div className="text-lg text-gray-300">Новые проекты</div>
                      </div>
                    </div>
                  )}

                  {/* Video preview on hover */}
                  {hoveredVideo === video.id && video.id !== 1 && (
                    <div className="absolute inset-0">
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src="/placeholder.mp4" type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                  <p className="text-gray-400">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showAgeWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <Card className="bg-gray-900 border-gray-700 p-8 max-w-md mx-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold text-white">Предупреждение</h3>
              </div>
              <button onClick={() => setShowAgeWarning(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Данный сайт может содержать контент, предназначенный для зрителей старше 18 лет. Продолжая просмотр, вы
              подтверждаете, что достигли совершеннолетия.
            </p>

            <div className="flex space-x-4">
              <Button onClick={confirmAge} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                Мне есть 18 лет
              </Button>
              <Button
                onClick={() => setShowAgeWarning(false)}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Отмена
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Обратная</span>
            <span className="text-purple-500 ml-3">Связь</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* YouTube */}
            <Card className="p-8 hover:border-purple-500 transition-colors bg-neutral-950 border-neutral-800">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-red-600 rounded-full p-4">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">YouTube</h3>
                <p className="text-gray-400 text-center">Подписывайтесь на мой канал для новых работ</p>
                <Button
                  onClick={() => window.open("https://www.youtube.com/@Talant615", "_blank")}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Перейти на канал
                </Button>
              </div>
            </Card>

            {/* Telegram */}
            <Card className="p-8 hover:border-purple-500 transition-colors bg-neutral-950 border-neutral-800">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-blue-500 rounded-full p-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Telegram</h3>
                <p className="text-gray-400 text-center">Свяжитесь со мной для сотрудничества</p>
                <Button
                  onClick={() => window.open("https://t.me/talant615", "_blank")}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Написать в Telegram
                </Button>
              </div>
            </Card>

            {/* TikTok */}
            <Card className="p-8 hover:border-purple-500 transition-colors border-neutral-800 bg-neutral-950">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-purple-600 rounded-full p-4">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">TikTok</h3>
                <p className="text-gray-400 text-center">Короткие видео и творческие эксперименты</p>
                <Button
                  onClick={() => window.open("https://tiktok.com/@talant615", "_blank")}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Смотреть TikTok
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-black border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Talant 天 赋 615. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
