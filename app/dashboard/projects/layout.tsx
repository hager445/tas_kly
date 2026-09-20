import { PaginationProvider } from "@/app/contexts/PaginationContext";

export default function layout({
  children,
}: LayoutProps<"/dashboard/projects">) {
  return (
    <div className="sm:p-4 p-0 relative">
      <PaginationProvider>{children}</PaginationProvider>
    </div>
  );
}
