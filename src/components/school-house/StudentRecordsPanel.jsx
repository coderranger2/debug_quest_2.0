export default function StudentRecordsPanel({
  records,
  onSearchChange,
  onClassChange,
  onPageChange,
}) {
  return (
    <article className="records-card glass-panel">
      <header className="records-header-row">
        <h3>Student Records</h3>
        <span className="records-muted">Directory index mirrored from unstable node</span>
      </header>

      <div className="records-toolbar">
        <label className="records-control">
          <span>Student Search</span>
          <input
            type="search"
            value={records.queryInput}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by student name..."
          />
        </label>

        <label className="records-control">
          <span>Class Filter</span>
          <select value={records.selectedClass} onChange={(event) => onClassChange(event.target.value)}>
            <option value="all">All Classes</option>
            <option value="A">Class A</option>
            <option value="B">Class B</option>
            <option value="C">Class C</option>
          </select>
        </label>
      </div>

      <div className="records-network-row">
        <span className={`sync-indicator ${records.isSyncing ? 'active' : ''}`}>{records.isSyncing ? 'Syncing...' : 'Synced'}</span>
        <span className="records-request-meta">API class param: {records.requestClass}</span>
      </div>

      <div className="records-table-wrap">
        <table className="records-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Class</th>
              <th>Marks</th>
              <th>Attempts</th>
            </tr>
          </thead>
          <tbody>
            {records.students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>{student.marks}</td>
                <td>{student.attempts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="records-footer-row">
        <span>Total visible: {records.totalStudents}</span>
        <div className="records-pagination">
          <button type="button" onClick={() => onPageChange((value) => Math.max(1, value - 1))} disabled={records.page === 1}>
            Prev
          </button>
          <span>
            Page {records.page} / {records.totalPages}
          </span>
          <button type="button" onClick={() => onPageChange((value) => Math.min(records.totalPages, value + 1))} disabled={records.page === records.totalPages}>
            Next
          </button>
        </div>
      </div>
    </article>
  )
}
