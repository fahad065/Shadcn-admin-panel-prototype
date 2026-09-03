import { PageHeader } from "@/components/page-header";
import { FileBrowser } from "./components/file-browser";

export default function FileManagerPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="File Manager"
        description="Browse, organize, and share the files and folders in your workspace."
      />

      <FileBrowser />
    </div>
  );
}
