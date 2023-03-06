export default function Container({
  children,
  classNames = '',
}: {
  children: React.ReactNode
  classNames?: string
}) {
  return (
    <ul className={`m-auto max-w-xl bg-slate-300 py-1 ${classNames}`}>
      {children}
    </ul>
  )
}
