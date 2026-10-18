function PlusIcon({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      className={`flex-none fill-current opacity-90 transition-transform duration-200 ease-in-out ${rotated ? 'rotate-45' : ''}`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <path d="M8 0h2v18H8z" />
      <path d="M0 8h18v2H0z" />
    </svg>
  )
}

export default PlusIcon
