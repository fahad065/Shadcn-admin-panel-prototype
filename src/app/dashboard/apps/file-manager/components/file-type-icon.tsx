import {
  File as FileIcon,
  FileArchive,
  FileImage,
  FileMusic,
  FileSpreadsheet,
  FileText,
  FileType as FileTypeDoc,
  FileVideo,
  Folder,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { FileKind, FsNode } from "./data";

const FILE_KIND_META: Record<FileKind, { icon: LucideIcon; className: string }> = {
  image: { icon: FileImage, className: "text-violet-500" },
  pdf: { icon: FileText, className: "text-red-500" },
  doc: { icon: FileTypeDoc, className: "text-blue-500" },
  sheet: { icon: FileSpreadsheet, className: "text-emerald-500" },
  video: { icon: FileVideo, className: "text-pink-500" },
  zip: { icon: FileArchive, className: "text-orange-500" },
  audio: { icon: FileMusic, className: "text-cyan-500" },
  other: { icon: FileIcon, className: "text-muted-foreground" },
};

export function FileTypeIcon({ node, className }: { node: FsNode; className?: string }) {
  if (node.type === "folder") {
    return <Folder className={cn("fill-amber-500/20 text-amber-500", className)} />;
  }

  const { icon: Icon, className: kindClassName } = FILE_KIND_META[node.fileType];
  return <Icon className={cn(kindClassName, className)} />;
}
