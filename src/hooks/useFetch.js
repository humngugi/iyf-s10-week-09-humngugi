import { useState, useEffect } from 'react'

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const json = await response.json()
        if (isMounted) setData(json)
        
      } catch (err) {
        if (err.name !== 'AbortError' && isMounted) {
          setError(err.message)
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()
    
    return () => {
      isMounted = false
      controller.abort()
    }
  }, [url])

  return { data, loading, error, refetch: () => { /* trigger refetch if needed */ } }
}