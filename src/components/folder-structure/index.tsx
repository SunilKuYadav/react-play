import { useState } from "react";

interface FileNode {
  name: string;
  isFolder: boolean;
  id: string;
  children?: FileNode[];
}
const DATA = [
  {
    name: "src",
    id: 'src',
    isFolder: true,
    children: [
      {
        name: "components",
        isFolder: true,
        id: 'scr/components',
        children: [
          {
            name: "folder-structure",
            id: "scr/components/folder-structure",
            isFolder: true,
            children: [
              {
                name: "index.tsx",
                id:"scr/components/folder-structure/index.tsx",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        name: "App.tsx",
          id: 'scr/App.tsx',
        isFolder: false,
      },
      {
        name: "main.tsx",
          id: 'scr/main.tsx',
        isFolder: false,
      },
    ],
  },
  {
    name: "package.json",
    id: "package.json",
    isFolder: false,
  },
  {
    name: "test",
    id: "test",
    isFolder: true,
    children: [
      {
        name: "root-test",
        id: "test/root-test",
        isFolder: true,
        children: [
          {
            name: "test-folder-structure",
            id: "test/root-test/test-folder-structure",
            isFolder: true,
            children: [
              {
                name: "index.tsx",
                id: "test/root-test/test-folder-structure/index.tsx",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        name: "App.tsx",
        id: "test/App.tsx",
        isFolder: false,
      },
      {
        name: "main.tsx",
        id: "test/main.tsx",
        isFolder: false,
      },
    ],
  },
];

const RenderList = ({ data }: { data: Array<FileNode> }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginLeft: "20px" }}>
      {data.map((item, index) => (
        <div key={index}>
          {item.children && (
            <span onClick={() => setExpanded((prev) => !prev)}>
              {expanded ? "-" : "+"}
            </span>
          )}
          {item.isFolder ? "📁" : "📄"} {item.name}
          {item.children && expanded && <RenderList data={item.children} />}
        </div>
      ))}
    </div>
  );
};

const FolderStructure = () => {
  return (
    <div style={{ textAlign: "left" }}>
      {DATA.map((item) => (
        <RenderList key={item.name} data={[item]} />
      ))}
    </div>
  );
};

export { FolderStructure };
