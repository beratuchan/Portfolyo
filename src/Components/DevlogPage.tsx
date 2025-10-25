// DevlogPage.tsx
import { Devlog } from "./Devlog"
import { Outlet } from "react-router-dom"
import { useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"

const DevlogPage = () => {
  const outletRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Route değişikliğinde Outlet bölümüne scroll yap
  useEffect(() => {
    if (outletRef.current && location.pathname !== "/devlog") {
      setTimeout(() => {
        outletRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }, 100) // Kısa bir gecikme ile animasyonun düzgün çalışmasını sağla
    }
  }, [location.pathname])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Devlog detay içeriği - Scroll hedefi bu div */}
      <div ref={outletRef} className="mt-8">
        <Outlet />
      </div>
      
      {/* Atlıkarınca - Tüm devlog yazıları */}
      <div className="mt-16">
        <Devlog 
          title="Tüm Devlog Yazıları"
          maxItems={5} 
        />
      </div>
    </div>
  )
}

export default DevlogPage