import { useRef, useState } from "react"
import "./FileStructure.css"
import { Folder, FolderClosed, File } from "lucide-react"
import { useDispatch } from "react-redux"
import { setCurrentFolder } from "../../stores/folderSlice"

export type FileType = {
    name: string,
}

export type FolderType = {
    path: string
    folders?: FolderType[]
    files?: FileType[]
}


type FileStructureProps = {
    folders?: FolderType[]
}

type FileProps = {
    file: FileType
}

function FileItem({ file }: FileProps) {
    return (
        <div className="file">
            <File />{file.name}
        </div>
    )
}

export function FolderItem({ folder }: { folder: FolderType }) {
    const [open, setOpen] = useState(false)
    const innerRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    return (
        <div className="row-wrapper">
            {/* Строка папки */}
            <div className="row folder-row" onDoubleClick={() => { setOpen(o => !o); dispatch(setCurrentFolder(folder)) }}>
                <span>{open ? <Folder /> : <FolderClosed />}</span>
                <span>{folder.path}</span>
            </div>

            {/* Строка-детали (collapse row) */}
            <div
                className={`row-detail ${open && "row-detail--opened"}`}
            >
                <div className="row-detail-inner" ref={innerRef}>
                    {folder.folders?.map(sub => (
                        <FolderItem key={sub.path} folder={sub} />
                    ))}

                    {folder.files?.map(file => (
                        <FileItem key={file.name} file={file} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function FileStructure({ folders }: FileStructureProps) {
    if (!folders) return null

    return (
        <div className="file-structure">
            {folders.map((folder) => (
                <FolderItem key={folder.path} folder={folder} />
            ))}
        </div>
    )
}