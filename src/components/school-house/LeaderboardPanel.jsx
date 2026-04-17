export default function LeaderboardPanel({ rows }) {
  return (
    <article className="leaderboard-card glass-panel">
      <header className="leaderboard-header-row">
        <h3>Leaderboard Matrix</h3>
        <span>Ranking pulse: live</span>
      </header>

      <ul className="leaderboard-list">
        {rows.map((row, index) => (
          <li key={`${row.name}-${index}`}>
            <span className="lb-rank">#{index + 1}</span>
            <span className="lb-name">{row.name}</span>
            <strong className="lb-score">{row.score}</strong>
            <em className="lb-streak">{row.streak}</em>
          </li>
        ))}
      </ul>
    </article>
  )
}
