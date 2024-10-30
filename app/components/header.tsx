'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Menu, X } from 'lucide-react'

const NavItem: React.FC<{ 
  title: string; 
  items: { name: string; href: string }[]; 
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, items, isOpen, onClick }) => (
  <div className="relative">
    <motion.button
      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </motion.button>
  </div>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  const menuItems = [
    {
      title: '팀 소개',
      items: [
        { name: '팀 역사', href: '/team/history' },
        { name: '멤버 프로필', href: '/team/profiles' },
        { name: '팀 업적', href: '/team/achievements' },
        { name: '미션 및 비전', href: '/team/mission' },
      ],
    },
    {
      title: '방송',
      items: [
        { name: '라이브 스트림', href: '/broadcast/live' },
        { name: '방송 일정', href: '/broadcast/schedule' },
        { name: '지난 방송 다시보기', href: '/broadcast/vod' },
        { name: '클립 및 하이라이트', href: '/broadcast/highlights' },
      ],
    },
    {
      title: '커뮤니티',
      items: [
        { name: '공지사항', href: '/community/notices' },
        { name: '이벤트', href: '/community/events' },
        { name: '포럼/게시판', href: '/community/forum' },
        { name: '팬 아트 갤러리', href: '/community/fan-art' },
      ],
    },
    {
      title: '스토어',
      items: [
        { name: '굿즈 목록', href: '/store/products' },
        { name: '주문 내역', href: '/store/orders' },
        { name: '배송 정보', href: '/store/shipping' },
        { name: '환불 및 교환 정책', href: '/store/policy' },
      ],
    },
    {
      title: '지원 및 후원',
      items: [
        { name: '후원 방법', href: '/support/donate' },
        { name: '멤버십 가입', href: '/support/membership' },
        { name: '스폰서십 정보', href: '/support/sponsorship' },
        { name: '문의하기', href: '/support/contact' },
      ],
    },
  ]

  const handleMenuClick = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">Marvellous</span>
            </a>
          </motion.div>
          <nav className="hidden lg:flex space-x-4">
            {menuItems.map((item, index) => (
              <NavItem 
                key={index} 
                title={item.title} 
                items={item.items} 
                isOpen={openMenuIndex === index}
                onClick={() => handleMenuClick(index)}
              />
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              로그인 / 회원가입
            </motion.button>
          </div>
          <div className="lg:hidden">
            <motion.button
              className="text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openMenuIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 left-0 w-full bg-white shadow-lg py-4"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{menuItems[openMenuIndex].title}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {menuItems[openMenuIndex].items.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-gray-600 hover:text-gray-900 block py-1">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => handleMenuClick(index)}
                  >
                    {item.title}
                  </button>
                  {openMenuIndex === index && (
                    <div className="pl-4">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
                로그인 / 회원가입
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}