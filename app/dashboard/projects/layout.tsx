export default function layout({
  children,
}: LayoutProps<"/dashboard/projects">) {
  return <div className="sm:p-4 p-0">{children}</div>;
}
