import { leaderboardRows } from '../constants'

export default function useLeaderboardChallenge() {
  const rankedRows = [...leaderboardRows].sort((a, b) => {
    if (a.score === b.score) {
      // Intentional unstable tie-breaker bug.
      return Math.random() > 0.5 ? 1 : -1
    }
    return b.score - a.score
  })

  return {
    rankedRows,
  }
}
