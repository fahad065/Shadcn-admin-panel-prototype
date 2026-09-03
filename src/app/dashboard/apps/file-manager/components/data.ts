export type FileKind =
  | "image"
  | "pdf"
  | "doc"
  | "sheet"
  | "video"
  | "zip"
  | "audio"
  | "other";

export type FileNode = {
  type: "file";
  id: string;
  name: string;
  fileType: FileKind;
  size: string;
  modified: string;
  owner: string;
};

export type FolderNode = {
  type: "folder";
  id: string;
  name: string;
  modified: string;
  owner: string;
  children: FsNode[];
};

export type FsNode = FileNode | FolderNode;

export type PathSegment = { id: string; name: string };

function file(
  id: string,
  name: string,
  fileType: FileKind,
  size: string,
  modified: string,
  owner: string
): FileNode {
  return { type: "file", id, name, fileType, size, modified, owner };
}

function folder(
  id: string,
  name: string,
  modified: string,
  owner: string,
  children: FsNode[]
): FolderNode {
  return { type: "folder", id, name, modified, owner, children };
}

export const initialFileTree: FolderNode = folder("root", "Home", "Aug 20, 2026", "Ava Chen", [
  folder("projects", "Projects", "Aug 19, 2026", "Ava Chen", [
    folder("design-assets", "Design Assets", "Aug 18, 2026", "Priya Nair", [
      file("hero-banner", "hero-banner.png", "image", "4.2 MB", "Aug 18, 2026", "Priya Nair"),
      file("logo-final", "logo-final.svg", "image", "86 KB", "Aug 17, 2026", "Priya Nair"),
      file(
        "brand-guidelines",
        "brand-guidelines.pdf",
        "pdf",
        "2.1 MB",
        "Aug 15, 2026",
        "Marcus Bell"
      ),
      file(
        "moodboard-exports",
        "moodboard-exports.zip",
        "zip",
        "18.4 MB",
        "Aug 12, 2026",
        "Priya Nair"
      ),
    ]),
    folder("website-redesign", "Website Redesign", "Aug 14, 2026", "Diego Alvarez", [
      file(
        "wireframes-v3",
        "wireframes-v3.pdf",
        "pdf",
        "3.6 MB",
        "Aug 14, 2026",
        "Diego Alvarez"
      ),
      file("sprint-notes", "sprint-notes.docx", "doc", "412 KB", "Aug 13, 2026", "Sofia Larsen"),
      file(
        "budget-tracker",
        "budget-tracker.xlsx",
        "sheet",
        "228 KB",
        "Aug 11, 2026",
        "Marcus Bell"
      ),
    ]),
    file("roadmap-2026", "roadmap-2026.docx", "doc", "156 KB", "Aug 9, 2026", "Ava Chen"),
    file(
      "kickoff-recording",
      "kickoff-recording.mp4",
      "video",
      "128.5 MB",
      "Aug 3, 2026",
      "Liam Brooks"
    ),
  ]),
  folder("marketing", "Marketing", "Aug 16, 2026", "Sofia Larsen", [
    folder("campaigns", "Campaigns", "Aug 16, 2026", "Sofia Larsen", [
      file(
        "q3-campaign-brief",
        "q3-campaign-brief.docx",
        "doc",
        "340 KB",
        "Aug 16, 2026",
        "Sofia Larsen"
      ),
      file(
        "social-assets",
        "social-assets.zip",
        "zip",
        "42.7 MB",
        "Aug 15, 2026",
        "Liam Brooks"
      ),
      file(
        "campaign-hero",
        "campaign-hero.jpg",
        "image",
        "3.8 MB",
        "Aug 14, 2026",
        "Priya Nair"
      ),
    ]),
    file(
      "press-release-launch",
      "press-release-launch.pdf",
      "pdf",
      "512 KB",
      "Aug 10, 2026",
      "Sofia Larsen"
    ),
    file(
      "podcast-episode-12",
      "podcast-episode-12.mp3",
      "audio",
      "24.6 MB",
      "Aug 6, 2026",
      "Marcus Bell"
    ),
  ]),
  folder("team-photos", "Team Photos", "Aug 5, 2026", "Liam Brooks", [
    file("offsite-2026", "offsite-2026.jpg", "image", "5.1 MB", "Aug 5, 2026", "Liam Brooks"),
    file(
      "team-headshot-01",
      "team-headshot-01.jpg",
      "image",
      "2.3 MB",
      "Jul 28, 2026",
      "Liam Brooks"
    ),
    file(
      "team-headshot-02",
      "team-headshot-02.jpg",
      "image",
      "2.1 MB",
      "Jul 28, 2026",
      "Liam Brooks"
    ),
    file(
      "team-headshot-03",
      "team-headshot-03.jpg",
      "image",
      "2.4 MB",
      "Jul 28, 2026",
      "Liam Brooks"
    ),
  ]),
  file(
    "quarterly-report-q2",
    "Quarterly Report Q2.pdf",
    "pdf",
    "1.8 MB",
    "Aug 20, 2026",
    "Marcus Bell"
  ),
  file(
    "budget-overview",
    "Budget Overview.xlsx",
    "sheet",
    "312 KB",
    "Aug 19, 2026",
    "Marcus Bell"
  ),
  file(
    "company-handbook",
    "Company Handbook.docx",
    "doc",
    "890 KB",
    "Jul 30, 2026",
    "Ava Chen"
  ),
  file(
    "onboarding-video",
    "Onboarding Video.mp4",
    "video",
    "210.3 MB",
    "Jul 22, 2026",
    "Diego Alvarez"
  ),
  file("archive-2025", "Archive 2025.zip", "zip", "64.2 MB", "Jul 10, 2026", "Ava Chen"),
]);

/** Walks the tree from root following a list of folder ids (path[0] is always the root id). */
export function getNodeAtPath(root: FolderNode, pathIds: string[]): FolderNode {
  return pathIds.slice(1).reduce<FolderNode>((current, id) => {
    const next = current.children.find(
      (child): child is FolderNode => child.type === "folder" && child.id === id
    );
    return next ?? current;
  }, root);
}

/** Same walk as getNodeAtPath, but returns the {id, name} pairs for breadcrumb rendering. */
export function getPathSegments(root: FolderNode, pathIds: string[]): PathSegment[] {
  const segments: PathSegment[] = [{ id: root.id, name: root.name }];
  let current = root;
  for (const id of pathIds.slice(1)) {
    const next = current.children.find(
      (child): child is FolderNode => child.type === "folder" && child.id === id
    );
    if (!next) break;
    segments.push({ id: next.id, name: next.name });
    current = next;
  }
  return segments;
}

function updateFolderAtPath(
  target: FolderNode,
  remainingIds: string[],
  updater: (folder: FolderNode) => FolderNode
): FolderNode {
  if (remainingIds.length === 0) {
    return updater(target);
  }
  const [nextId, ...rest] = remainingIds;
  return {
    ...target,
    children: target.children.map((child) =>
      child.type === "folder" && child.id === nextId
        ? updateFolderAtPath(child, rest, updater)
        : child
    ),
  };
}

export function addChild(root: FolderNode, pathIds: string[], newNode: FsNode): FolderNode {
  return updateFolderAtPath(root, pathIds.slice(1), (target) => ({
    ...target,
    children: [...target.children, newNode],
  }));
}

export function removeChild(root: FolderNode, pathIds: string[], nodeId: string): FolderNode {
  return updateFolderAtPath(root, pathIds.slice(1), (target) => ({
    ...target,
    children: target.children.filter((child) => child.id !== nodeId),
  }));
}

export function renameChild(
  root: FolderNode,
  pathIds: string[],
  nodeId: string,
  name: string
): FolderNode {
  return updateFolderAtPath(root, pathIds.slice(1), (target) => ({
    ...target,
    children: target.children.map((child) =>
      child.id === nodeId ? { ...child, name } : child
    ),
  }));
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 KB";
  const units = ["B", "KB", "MB", "GB"];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** exponent;
  return `${exponent === 0 ? value : value.toFixed(1)} ${units[exponent]}`;
}

const EXTENSION_KIND_MAP: Record<string, FileKind> = {
  png: "image",
  jpg: "image",
  jpeg: "image",
  gif: "image",
  svg: "image",
  webp: "image",
  pdf: "pdf",
  doc: "doc",
  docx: "doc",
  txt: "doc",
  rtf: "doc",
  xls: "sheet",
  xlsx: "sheet",
  csv: "sheet",
  mp4: "video",
  mov: "video",
  avi: "video",
  webm: "video",
  zip: "zip",
  rar: "zip",
  "7z": "zip",
  mp3: "audio",
  wav: "audio",
  m4a: "audio",
};

export function inferFileKind(name: string): FileKind {
  const extension = name.split(".").pop()?.toLowerCase() ?? "";
  return EXTENSION_KIND_MAP[extension] ?? "other";
}
