// Sample file structure data for rendering file trees
// This structure includes various file types, nested folders, and metadata

const fileStructureData = {
  id: "root",
  name: "project-root",
  type: "folder",
  path: "/",
  size: null,
  lastModified: "2024-12-15T10:30:00Z",
  permissions: "rwxr-xr-x",
  children: [
    {
      id: "src",
      name: "src",
      type: "folder",
      path: "/src",
      size: null,
      lastModified: "2024-12-15T09:15:00Z",
      permissions: "rwxr-xr-x",
      children: [
        {
          id: "components",
          name: "components",
          type: "folder",
          path: "/src/components",
          size: null,
          lastModified: "2024-12-15T09:00:00Z",
          permissions: "rwxr-xr-x",
          children: [
            {
              id: "header-tsx",
              name: "Header.tsx",
              type: "file",
              path: "/src/components/Header.tsx",
              extension: "tsx",
              size: 2048,
              lastModified: "2024-12-15T08:45:00Z",
              permissions: "rw-r--r--",
              language: "typescript",
              children: null,
            },
            {
              id: "sidebar-tsx",
              name: "Sidebar.tsx",
              type: "file",
              path: "/src/components/Sidebar.tsx",
              extension: "tsx",
              size: 3072,
              lastModified: "2024-12-15T08:30:00Z",
              permissions: "rw-r--r--",
              language: "typescript",
              children: null,
            },
            {
              id: "ui",
              name: "ui",
              type: "folder",
              path: "/src/components/ui",
              size: null,
              lastModified: "2024-12-14T16:20:00Z",
              permissions: "rwxr-xr-x",
              children: [
                {
                  id: "button-tsx",
                  name: "Button.tsx",
                  type: "file",
                  path: "/src/components/ui/Button.tsx",
                  extension: "tsx",
                  size: 1536,
                  lastModified: "2024-12-14T15:30:00Z",
                  permissions: "rw-r--r--",
                  language: "typescript",
                  children: null,
                },
                {
                  id: "modal-tsx",
                  name: "Modal.tsx",
                  type: "file",
                  path: "/src/components/ui/Modal.tsx",
                  extension: "tsx",
                  size: 2560,
                  lastModified: "2024-12-14T16:00:00Z",
                  permissions: "rw-r--r--",
                  language: "typescript",
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: "hooks",
          name: "hooks",
          type: "folder",
          path: "/src/hooks",
          size: null,
          lastModified: "2024-12-14T14:00:00Z",
          permissions: "rwxr-xr-x",
          children: [
            {
              id: "use-auth-ts",
              name: "useAuth.ts",
              type: "file",
              path: "/src/hooks/useAuth.ts",
              extension: "ts",
              size: 1024,
              lastModified: "2024-12-14T13:45:00Z",
              permissions: "rw-r--r--",
              language: "typescript",
              children: null,
            },
            {
              id: "use-fetch-ts",
              name: "useFetch.ts",
              type: "file",
              path: "/src/hooks/useFetch.ts",
              extension: "ts",
              size: 1792,
              lastModified: "2024-12-14T14:00:00Z",
              permissions: "rw-r--r--",
              language: "typescript",
              children: null,
            },
          ],
        },
        {
          id: "utils",
          name: "utils",
          type: "folder",
          path: "/src/utils",
          size: null,
          lastModified: "2024-12-13T11:30:00Z",
          permissions: "rwxr-xr-x",
          children: [
            {
              id: "helpers-ts",
              name: "helpers.ts",
              type: "file",
              path: "/src/utils/helpers.ts",
              extension: "ts",
              size: 2304,
              lastModified: "2024-12-13T11:15:00Z",
              permissions: "rw-r--r--",
              language: "typescript",
              children: null,
            },
            {
              id: "constants-ts",
              name: "constants.ts",
              type: "file",
              path: "/src/utils/constants.ts",
              extension: "ts",
              size: 512,
              lastModified: "2024-12-13T10:00:00Z",
              permissions: "rw-r--r--",
              language: "typescript",
              children: null,
            },
          ],
        },
        {
          id: "app-tsx",
          name: "App.tsx",
          type: "file",
          path: "/src/App.tsx",
          extension: "tsx",
          size: 4096,
          lastModified: "2024-12-15T09:15:00Z",
          permissions: "rw-r--r--",
          language: "typescript",
          children: null,
        },
        {
          id: "index-tsx",
          name: "index.tsx",
          type: "file",
          path: "/src/index.tsx",
          extension: "tsx",
          size: 768,
          lastModified: "2024-12-12T16:00:00Z",
          permissions: "rw-r--r--",
          language: "typescript",
          children: null,
        },
      ],
    },
    {
      id: "public",
      name: "public",
      type: "folder",
      path: "/public",
      size: null,
      lastModified: "2024-12-12T14:30:00Z",
      permissions: "rwxr-xr-x",
      children: [
        {
          id: "index-html",
          name: "index.html",
          type: "file",
          path: "/public/index.html",
          extension: "html",
          size: 1280,
          lastModified: "2024-12-12T14:30:00Z",
          permissions: "rw-r--r--",
          language: "html",
          children: null,
        },
        {
          id: "favicon-ico",
          name: "favicon.ico",
          type: "file",
          path: "/public/favicon.ico",
          extension: "ico",
          size: 32768,
          lastModified: "2024-12-10T10:00:00Z",
          permissions: "rw-r--r--",
          language: "binary",
          children: null,
        },
        {
          id: "assets",
          name: "assets",
          type: "folder",
          path: "/public/assets",
          size: null,
          lastModified: "2024-12-11T15:45:00Z",
          permissions: "rwxr-xr-x",
          children: [
            {
              id: "logo-png",
              name: "logo.png",
              type: "file",
              path: "/public/assets/logo.png",
              extension: "png",
              size: 65536,
              lastModified: "2024-12-11T15:45:00Z",
              permissions: "rw-r--r--",
              language: "binary",
              children: null,
            },
            {
              id: "hero-jpg",
              name: "hero-image.jpg",
              type: "file",
              path: "/public/assets/hero-image.jpg",
              extension: "jpg",
              size: 245760,
              lastModified: "2024-12-11T15:30:00Z",
              permissions: "rw-r--r--",
              language: "binary",
              children: null,
            },
          ],
        },
      ],
    },
    {
      id: "docs",
      name: "docs",
      type: "folder",
      path: "/docs",
      size: null,
      lastModified: "2024-12-10T12:00:00Z",
      permissions: "rwxr-xr-x",
      children: [
        {
          id: "readme-md",
          name: "README.md",
          type: "file",
          path: "/docs/README.md",
          extension: "md",
          size: 4608,
          lastModified: "2024-12-10T11:45:00Z",
          permissions: "rw-r--r--",
          language: "markdown",
          children: null,
        },
        {
          id: "api-md",
          name: "API.md",
          type: "file",
          path: "/docs/API.md",
          extension: "md",
          size: 8192,
          lastModified: "2024-12-10T12:00:00Z",
          permissions: "rw-r--r--",
          language: "markdown",
          children: null,
        },
      ],
    },
    {
      id: "tests",
      name: "tests",
      type: "folder",
      path: "/tests",
      size: null,
      lastModified: "2024-12-14T17:30:00Z",
      permissions: "rwxr-xr-x",
      children: [
        {
          id: "setup-ts",
          name: "setup.ts",
          type: "file",
          path: "/tests/setup.ts",
          extension: "ts",
          size: 1024,
          lastModified: "2024-12-13T09:00:00Z",
          permissions: "rw-r--r--",
          language: "typescript",
          children: null,
        },
        {
          id: "components",
          name: "components",
          type: "folder",
          path: "/tests/components",
          size: null,
          lastModified: "2024-12-14T17:30:00Z",
          permissions: "rwxr-xr-x",
          children: [
            {
              id: "header-test-tsx",
              name: "Header.test.tsx",
              type: "file",
              path: "/tests/components/Header.test.tsx",
              extension: "tsx",
              size: 1536,
              lastModified: "2024-12-14T17:30:00Z",
              permissions: "rw-r--r--",
              language: "typescript",
              children: null,
            },
          ],
        },
      ],
    },
    {
      id: "package-json",
      name: "package.json",
      type: "file",
      path: "/package.json",
      extension: "json",
      size: 2048,
      lastModified: "2024-12-15T10:30:00Z",
      permissions: "rw-r--r--",
      language: "json",
      children: null,
    },
    {
      id: "tsconfig-json",
      name: "tsconfig.json",
      type: "file",
      path: "/tsconfig.json",
      extension: "json",
      size: 1024,
      lastModified: "2024-12-12T10:00:00Z",
      permissions: "rw-r--r--",
      language: "json",
      children: null,
    },
    {
      id: "gitignore",
      name: ".gitignore",
      type: "file",
      path: "/.gitignore",
      extension: "",
      size: 512,
      lastModified: "2024-12-10T09:00:00Z",
      permissions: "rw-r--r--",
      language: "text",
      children: null,
    },
    {
      id: "env-example",
      name: ".env.example",
      type: "file",
      path: "/.env.example",
      extension: "example",
      size: 256,
      lastModified: "2024-12-10T09:30:00Z",
      permissions: "rw-r--r--",
      language: "text",
      children: null,
    },
  ],
};

// Alternative flat structure for different use cases
const flatFileStructure = [
  { id: "1", name: "package.json", type: "file", parentId: null, level: 0 },
  { id: "2", name: "src", type: "folder", parentId: null, level: 0 },
  { id: "3", name: "components", type: "folder", parentId: "2", level: 1 },
  { id: "4", name: "Header.tsx", type: "file", parentId: "3", level: 2 },
  { id: "5", name: "Sidebar.tsx", type: "file", parentId: "3", level: 2 },
  { id: "6", name: "hooks", type: "folder", parentId: "2", level: 1 },
  { id: "7", name: "useAuth.ts", type: "file", parentId: "6", level: 2 },
  { id: "8", name: "utils", type: "folder", parentId: "2", level: 1 },
  { id: "9", name: "helpers.ts", type: "file", parentId: "8", level: 2 },
  { id: "10", name: "public", type: "folder", parentId: null, level: 0 },
  { id: "11", name: "index.html", type: "file", parentId: "10", level: 1 },
];

// Utility functions for working with file structure data

// Convert flat structure to nested
function flatToNested(flatArray) {
  const map = {};
  const roots = [];

  // Create map of all items
  flatArray.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  // Build tree structure
  flatArray.forEach((item) => {
    if (item.parentId === null) {
      roots.push(map[item.id]);
    } else {
      if (map[item.parentId]) {
        map[item.parentId].children.push(map[item.id]);
      }
    }
  });

  return roots;
}

// Convert nested structure to flat
function nestedToFlat(nestedData, parentId = null, level = 0) {
  const result = [];

  if (Array.isArray(nestedData)) {
    nestedData.forEach((item) => {
      const flatItem = {
        id: item.id,
        name: item.name,
        type: item.type,
        parentId: parentId,
        level: level,
      };
      result.push(flatItem);

      if (item.children && item.children.length > 0) {
        result.push(...nestedToFlat(item.children, item.id, level + 1));
      }
    });
  } else {
    const flatItem = {
      id: nestedData.id,
      name: nestedData.name,
      type: nestedData.type,
      parentId: parentId,
      level: level,
    };
    result.push(flatItem);

    if (nestedData.children && nestedData.children.length > 0) {
      result.push(
        ...nestedToFlat(nestedData.children, nestedData.id, level + 1)
      );
    }
  }

  return result;
}

// Get file icon based on extension
function getFileIcon(fileName, type) {
  if (type === "folder") return "📁";

  const extension = fileName.split(".").pop()?.toLowerCase();

  const iconMap = {
    tsx: "⚛️",
    ts: "📘",
    js: "📄",
    jsx: "⚛️",
    html: "🌐",
    css: "🎨",
    scss: "🎨",
    json: "📋",
    md: "📝",
    png: "🖼️",
    jpg: "🖼️",
    jpeg: "🖼️",
    gif: "🖼️",
    svg: "🎭",
    ico: "🔷",
    pdf: "📄",
    txt: "📄",
  };

  return iconMap[extension] || "📄";
}

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0 || bytes === null) return "-";

  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
}

// Export for use
export {
  fileStructureData,
  flatFileStructure,
  flatToNested,
  nestedToFlat,
  getFileIcon,
  formatFileSize,
};
