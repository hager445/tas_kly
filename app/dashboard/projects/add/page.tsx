import CreateNewProjectForm from "@/app/_components/projects/CreateNewProjectForm";
import BreadCrumbs from "@/app/_components/ui/BreadCrumbs";

export default function page() {
  return (
    <div>
      <BreadCrumbs />
      <div className="mt-4">
        <h2 className="text-neutral-dark capitalize hidden sm:block text-left text-[36px] font-active-side-item">
          Add New Project
        </h2>
      </div>
      <div className="flex justify-center mt-11">
        <CreateNewProjectForm />
      </div>
    </div>
  );
}
