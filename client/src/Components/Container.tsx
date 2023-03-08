export default function Container({
  children,
  classNames = '',
}: {
  children: React.ReactNode
  classNames?: string
}) {
  return <ul className={`${classNames}`}>{children}</ul>
}
