import { createFileRoute } from '@tanstack/react-router'
import FileStructure from '../components/FileStructure'
import FolderScreen from '../components/FolderScreen'
import { useSelector } from 'react-redux'
import { type RootState } from '../stores/folderStore'
import { useEffect } from 'react'

export const Route = createFileRoute('/file_structure')({
    component: Index,
})

function Index() {
    const data = [
        {
            path: "src",
            folders: [
                {
                    path: "components",
                    folders: [
                        {
                            path: "ui",
                            files: [
                                { name: "Button.tsx" },
                                { name: "Input.tsx" }
                            ]
                        }
                    ],
                    files: [
                        { name: "Header.tsx" },
                        { name: "Footer.tsx" }
                    ]
                },
                {
                    path: "pages",
                    files: [
                        { name: "Home.tsx" },
                        { name: "Dashboard.tsx" }
                    ]
                }
            ],
            files: [{ name: "main.tsx" }]
        },
        {
            path: "public",
            files: [
                { name: "index.html" },
                { name: "favicon.ico" }
            ]
        }
    ]
    const currentFolder = useSelector((state: RootState) => state.folders.currentFolder)
    useEffect(() => console.log(currentFolder), [currentFolder])
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <FileStructure folders={data} />
            <FolderScreen folder={currentFolder}></FolderScreen>
        </div>
    )
}