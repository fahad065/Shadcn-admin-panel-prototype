"use client";

import { Fragment, useMemo, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { FolderPlus, Home, Search, Upload } from "lucide-react";
import { toast } from "sonner";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import {
  addChild,
  formatBytes,
  getNodeAtPath,
  getPathSegments,
  inferFileKind,
  initialFileTree,
  removeChild,
  renameChild,
  type FolderNode,
  type FsNode,
} from "./data";
import { FileRow, type FileRowAction } from "./file-row";

const CURRENT_USER = "You";

function createId() {
  return Math.random().toString(36).slice(2, 10);
}

export function FileBrowser() {
  const [tree, setTree] = useState<FolderNode>(initialFileTree);
  const [pathIds, setPathIds] = useState<string[]>(["root"]);
  const [search, setSearch] = useState("");
  const [renameTarget, setRenameTarget] = useState<FsNode | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentFolder = useMemo(() => getNodeAtPath(tree, pathIds), [tree, pathIds]);
  const segments = useMemo(() => getPathSegments(tree, pathIds), [tree, pathIds]);

  const items = useMemo(() => {
    const query = search.trim().toLowerCase();
    const children = query
      ? currentFolder.children.filter((child) => child.name.toLowerCase().includes(query))
      : currentFolder.children;
    return [...children].sort((a, b) => {
      if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
  }, [currentFolder, search]);

  function goToSegment(index: number) {
    setPathIds(segments.slice(0, index + 1).map((segment) => segment.id));
    setSearch("");
  }

  function openFolder(node: FsNode) {
    if (node.type !== "folder") return;
    setPathIds((prev) => [...prev, node.id]);
    setSearch("");
  }

  function handleNewFolder() {
    const existingNames = new Set(currentFolder.children.map((child) => child.name));
    let name = "New Folder";
    let counter = 2;
    while (existingNames.has(name)) {
      name = `New Folder ${counter}`;
      counter += 1;
    }
    const newFolder: FolderNode = {
      type: "folder",
      id: createId(),
      name,
      modified: "Just now",
      owner: CURRENT_USER,
      children: [],
    };
    setTree((prev) => addChild(prev, pathIds, newFolder));
    toast.success(`"${name}" created`);
  }

  function handleUploadClick() {
    fileInputRef.current?.click();
  }

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    event.target.value = "";
    if (!fileList || fileList.length === 0) return;

    const uploaded: FsNode[] = Array.from(fileList).map((uploadedFile) => ({
      type: "file",
      id: createId(),
      name: uploadedFile.name,
      fileType: inferFileKind(uploadedFile.name),
      size: formatBytes(uploadedFile.size),
      modified: "Just now",
      owner: CURRENT_USER,
    }));

    setTree((prev) =>
      uploaded.reduce<FolderNode>((acc, node) => addChild(acc, pathIds, node), prev)
    );
    toast.success(
      uploaded.length === 1 ? `"${uploaded[0].name}" uploaded` : `${uploaded.length} files uploaded`
    );
  }

  function handleAction(action: FileRowAction, node: FsNode) {
    if (action === "rename") {
      setRenameTarget(node);
      setRenameValue(node.name);
      return;
    }
    if (action === "share") {
      toast.success(`Share link copied for "${node.name}"`);
      return;
    }
    if (action === "download") {
      toast.success(`Downloading "${node.name}"`);
      return;
    }
    setTree((prev) => removeChild(prev, pathIds, node.id));
    toast.success(`"${node.name}" deleted`);
  }

  function submitRename() {
    if (!renameTarget) return;
    const trimmed = renameValue.trim();
    if (trimmed && trimmed !== renameTarget.name) {
      setTree((prev) => renameChild(prev, pathIds, renameTarget.id, trimmed));
      toast.success(`Renamed to "${trimmed}"`);
    }
    setRenameTarget(null);
  }

  function handleRenameKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitRename();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            {segments.map((segment, index) => {
              const isLast = index === segments.length - 1;
              return (
                <Fragment key={segment.id}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="flex items-center gap-1.5">
                        {index === 0 && <Home className="size-3.5" />}
                        {segment.name}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        render={
                          <button
                            type="button"
                            className="flex items-center gap-1.5"
                            onClick={() => goToSegment(index)}
                          />
                        }
                      >
                        {index === 0 && <Home className="size-3.5" />}
                        {segment.name}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-56">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search this folder"
              className="pl-8"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={handleNewFolder}>
            <FolderPlus className="size-3.5" />
            New Folder
          </Button>
          <Button size="sm" className="gap-1.5" onClick={handleUploadClick}>
            <Upload className="size-3.5" />
            Upload
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            hidden
            onChange={handleFilesSelected}
          />
        </div>
      </div>

      {items.length > 0 ? (
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((node) => (
                <FileRow
                  key={node.id}
                  node={node}
                  onOpen={() => openFolder(node)}
                  onAction={handleAction}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed py-16 text-center">
          <p className="text-sm font-medium">No results</p>
          <p className="text-xs text-muted-foreground">
            {search ? `Nothing matches "${search}" in this folder.` : "This folder is empty."}
          </p>
        </div>
      )}

      <Dialog open={renameTarget !== null} onOpenChange={(open) => !open && setRenameTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename {renameTarget?.type === "folder" ? "folder" : "file"}</DialogTitle>
            <DialogDescription>
              Enter a new name for &quot;{renameTarget?.name}&quot;.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={renameValue}
            onChange={(event) => setRenameValue(event.target.value)}
            onKeyDown={handleRenameKeyDown}
            autoFocus
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setRenameTarget(null)}>
              Cancel
            </Button>
            <Button onClick={submitRename}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
