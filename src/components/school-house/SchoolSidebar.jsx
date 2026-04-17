export default function SchoolSidebar({ sections, activeSection, onSectionChange }) {
  return (
    <aside className="school-left-sidebar glass-panel">
      <h2>Navigation</h2>
      <div className="school-section-list">
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            className={`school-nav-item ${activeSection === section.key ? 'active' : ''}`}
            onClick={() => onSectionChange(section.key)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </aside>
  )
}
