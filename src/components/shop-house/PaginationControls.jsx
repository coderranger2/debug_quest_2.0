export default function PaginationControls({ page, totalPages, onPageChange }) {
  return (
    <div className="pagination" role="navigation" aria-label="Pagination">
      <button type="button" onClick={() => onPageChange((previous) => Math.max(1, previous - 1))} disabled={page === 1}>
        Prev
      </button>

      {[1, 2, 3].map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPageChange(Math.min(pageNumber, totalPages))}
          className={page === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange((previous) => Math.min(totalPages, previous + 1))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  )
}
