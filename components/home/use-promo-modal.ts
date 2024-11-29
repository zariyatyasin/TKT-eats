import { useState, useEffect } from 'react'

export function usePromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // const hasSeenPromo = localStorage.getItem('hasSeenPromo')
    const hasSeenPromo = false
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem('hasSeenPromo', 'true')
      }, 15000) // 30 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const onClose = () => setIsOpen(false)

  return { isOpen, onClose }
}

