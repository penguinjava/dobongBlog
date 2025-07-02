import { ref } from 'vue'

const isKakaoLoaded = ref(false)
const isKakaoInitialized = ref(false)

export const useKakao = () => {
  const loadKakaoSDK = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      // 이미 로드된 경우
      if (document.getElementById('kakao-sdk')) {
        if (window.Kakao) {
          isKakaoLoaded.value = true
          resolve()
        } else {
          reject(new Error('window.Kakao가 존재하지 않음'))
        }
        return
      }

      // 새로 로드
      const script = document.createElement('script')
      script.id = 'kakao-sdk'
      script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js'
      script.onload = () => {
        isKakaoLoaded.value =true
        resolve()
      }
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  const initKakao = async () => {
    try {
      await loadKakaoSDK()

      if (window.Kakao && !window.Kakao.isInitialized()) {
        const key = import.meta.env.VITE_KAKAO_JS_KEY
        if (!key) {
          throw new Error('VITE_KAKAO_JS_KEY가 .env에 정의되지 않았습니다.')
        }

        window.Kakao.init(key)

        if (window.Kakao.isInitialized()) {
          isKakaoInitialized.value = true
          console.log('[Kakao] SDK 초기화 완료')
        } else {
          throw new Error('Kakao.init() 호출했지만 초기화 상태 false')
        }
      } else {
        isKakaoInitialized.value = true
        console.log('[Kakao] 이미 초기화됨')
      }
    } catch (error) {
      console.error('[Kakao] SDK 초기화 실패:', error)
    }
  }

  const isKakaoReallyInitialized = () => {
    return typeof window !== 'undefined' && !!window.Kakao && window.Kakao.isInitialized()
  }

  return {
    isKakaoLoaded,
    isKakaoInitialized,
    isKakaoReallyInitialized,
    initKakao
  }
}
