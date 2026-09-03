"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  Download,
  File,
  FileArchive,
  FileSpreadsheet,
  FileText,
  ImageIcon,
  MoreHorizontal,
  Music,
  Presentation,
  Share2,
  SlidersHorizontal,
  Trash2,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type FileKind =
  | "pdf"
  | "image"
  | "video"
  | "audio"
  | "spreadsheet"
  | "slides"
  | "archive"
  | "doc";

type UploadedFile = {
  name: string;
  kind: FileKind;
  size: string;
  uploadDate: string;
};

const files: UploadedFile[] = [
  { name: "Q3 Financial Report.pdf", kind: "pdf", size: "4.2 MB", uploadDate: "Sep 2, 2026" },
  { name: "Hero Banner v2.png", kind: "image", size: "6.4 MB", uploadDate: "Sep 2, 2026" },
  { name: "Team Offsite Recap.mp4", kind: "video", size: "1.1 GB", uploadDate: "Sep 1, 2026" },
  { name: "Brand Guidelines.pdf", kind: "pdf", size: "12.8 MB", uploadDate: "Aug 31, 2026" },
  { name: "Product Shoot - Final.zip", kind: "archive", size: "284.5 MB", uploadDate: "Aug 30, 2026" },
  { name: "Investor Pitch Deck.pptx", kind: "slides", size: "18.3 MB", uploadDate: "Aug 29, 2026" },
  { name: "Revenue Forecast.xlsx", kind: "spreadsheet", size: "2.1 MB", uploadDate: "Aug 28, 2026" },
  { name: "Podcast Episode 14.mp3", kind: "audio", size: "48.7 MB", uploadDate: "Aug 27, 2026" },
  { name: "Onboarding Handbook.pdf", kind: "pdf", size: "3.6 MB", uploadDate: "Aug 26, 2026" },
  { name: "Warehouse Floor Plan.png", kind: "image", size: "9.8 MB", uploadDate: "Aug 25, 2026" },
];

const fileIcons: Record<FileKind, typeof File> = {
  pdf: FileText,
  image: ImageIcon,
  video: Video,
  audio: Music,
  spreadsheet: FileSpreadsheet,
  slides: Presentation,
  archive: FileArchive,
  doc: FileText,
};

const columns: ColumnDef<UploadedFile>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const Icon = fileIcons[row.original.kind];
      return (
        <div className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted">
            <Icon className="size-4 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium">{row.original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "uploadDate",
    header: "Upload Date",
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <MoreHorizontal className="size-4" />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Download className="size-4" />
            Download
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2 className="size-4" />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2 className="size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function RecentlyUploadedTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Uploaded</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={files} pageSize={8} itemLabel="files" />
      </CardContent>
    </Card>
  );
}
