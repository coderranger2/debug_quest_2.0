export default function PracticeRoomPanel({ practice }) {
  const selectedOption = practice.currentQuestion ? practice.selectedAnswers[practice.currentQuestion.id] : undefined

  return (
    <article className="practice-card glass-panel">
      <header className="practice-header-row">
        <div>
          <h3>Practice Room</h3>
          <p>Sharpen your skills before the real test.</p>
        </div>

        <div className="practice-stats">
          <span className="practice-timer">{practice.displayedSeconds}s</span>
          <span className="practice-score">Score {practice.score}</span>
          <span className="practice-progress">Q {practice.progressLabel}</span>
        </div>
      </header>

      <div className="practice-tab-row" role="tablist" aria-label="Practice categories">
        {practice.categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={practice.activeCategory === category}
            className={`practice-tab ${practice.activeCategory === category ? 'active' : ''}`}
            onClick={() => practice.handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="practice-difficulty-row">
        {practice.difficulties.map((level) => (
          <button
            key={level}
            type="button"
            className={`practice-chip ${practice.difficulty === level ? 'active' : ''}`}
            onClick={() => practice.handleDifficultyChange(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="practice-question-shell">
        <span className="practice-category-pill">{practice.activeCategory}</span>
        <h4>{practice.currentQuestion?.prompt}</h4>

        <div className="practice-options-grid">
          {practice.currentQuestion?.options.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`practice-option ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => practice.handleSelectAnswer(index)}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              <strong>{option}</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="practice-actions-row">
        <button type="button" className="practice-cta" onClick={practice.handleStart}>
          Start
        </button>
        <button type="button" className="practice-cta" onClick={practice.handlePause}>
          Pause
        </button>
        <button type="button" className="practice-cta" onClick={practice.handleResume}>
          Resume
        </button>
        <button type="button" className="practice-next" onClick={practice.handleNextQuestion}>
          Next Question
        </button>
      </div>
    </article>
  )
}
