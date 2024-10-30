import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Twitch, MessageCircle, ArrowUp } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 팀 소개 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">마블러스 팀</h3>
            <p className="mb-4">우리는 최고의 엔터테인먼트를 제공하는 스트리밍 팀입니다. 함께 즐기고, 성장하며, 꿈을 이뤄갑니다.</p>
            <img src="/placeholder.svg?height=50&width=150&text=Marvellous" alt="Marvellous 로고" className="h-12" />
          </div>

          {/* 퀵 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">대충 머</h3>
            <ul className="space-y-2">
              {['홈', '팀 멤버', '이벤트', '커뮤니티', '공지사항', 'FAQ'].map((item) => (
                <li key={item}><Link href="#" className="hover:text-purple-600 transition-colors duration-200">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* 연락처 및 소셜 미디어 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <p className="mb-2">이메일: Marvellous241029@gmail.com</p>
            <p className="mb-2">주소: 서울특별시 도봉구 도봉동 162단지</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-200"><Twitch size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-200"><Youtube size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-200"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-200"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-200"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-200"><MessageCircle size={24} /></a>
            </div>
          </div>

          {/* 뉴스레터 구독 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">뉴스레터 구독</h3>
            <form className="mb-4">
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
              >
                구독하기
              </button>
            </form>
            <p className="text-sm">
              구독하시면 <Link href="#" className="text-purple-600 hover:underline">개인정보 처리방침</Link>에 동의하시는 것으로 간주됩니다.
            </p>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p>&copy; 2024 Marvellous. All rights reserved.</p>
            </div>
            <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end space-x-4">
              <Link href="#" className="text-sm hover:text-purple-600 transition-colors duration-200">이용 약관</Link>
              <Link href="#" className="text-sm hover:text-purple-600 transition-colors duration-200">개인정보 처리방침</Link>
              <Link href="#" className="text-sm hover:text-purple-600 transition-colors duration-200">저작권 정책</Link>
              <Link href="#" className="text-sm hover:text-purple-600 transition-colors duration-200">쿠키 정책</Link>
            </div>
          </div>
        </div>

        {/* 언어 선택 및 맨 위로 버튼 */}
        <div className="mt-4 flex justify-between items-center">
          <select className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1">
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
          <button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition-colors duration-200"
            aria-label="맨 위로"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer