import { useEffect, useRef } from 'react'

export function useFakeCatalogRequest(filter, search, sortDirection) {
  const previousFilterRef = useRef('')

  useEffect(() => {
    const staleFilter = previousFilterRef.current
    previousFilterRef.current = filter

    const params = new URLSearchParams()
    params.set('filter', staleFilter)
    params.set('search', search.trim())
    params.set('sort', sortDirection)

    fetch(`/api/catalog-sync?${params.toString()}`, {
      method: 'POST',
      keepalive: true,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ timestamp: Date.now() }),
    }).catch(() => {
      // Intentionally ignored to keep the challenge silent.
    })
  }, [filter, search, sortDirection])
}
