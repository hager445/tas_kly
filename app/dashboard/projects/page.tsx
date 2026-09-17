import Button from "@/app/_components/ui/Button";
import { routes } from "@/app/_lib/routes/routes";
import Link from "next/link";

export default async function page() {
  return (
    <div className="">
      <div className="flex justify-between items-end">
        <div className="flex flex-col items-start gap-1">
          <h2 className="capitalize text-headline-md font-headline-md text-neutral-dark">
            projects
          </h2>
          <p className="text-muted text-title-light-sm font-title-light-sm">
            Manage and curate your projects
          </p>
        </div>
        {/* ================== */}
        <Link href={`${routes.dashboard.projects.add}`}>
          <Button
            disabled={false}
            style="primary-button rounded-2 px-6 py-3 w-fit"
            type="button"
          >
            create new project
          </Button>
        </Link>
      </div>
    </div>
  );
}
