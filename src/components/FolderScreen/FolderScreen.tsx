import "./FolderScreen.css"
import type { FolderType, FileType } from "../FileStructure/FileStructure"
import { FolderClosed, File as LRFile } from "lucide-react"
import { useDispatch } from "react-redux"
import { setCurrentFolder } from "../../stores/folderSlice"


type FolderScreenProps = {
    folder?: FolderType
}

function Folder({ folder }: { folder: FolderType }) {
    const dispatch = useDispatch()

    return (
        <div className="folder-screen__folder" onClick={() => dispatch(setCurrentFolder(folder))}>
            <FolderClosed />
            <span className="folder-screen__folder__label">{folder.path.split('/').pop()}</span>
        </div>
    )
}
function File({ file }: { file: FileType }) {
    return (
        <div className="folder-screen__file">
            <LRFile />
            <span className="folder-screen__file__label">{file.name}</span>
        </div>
    )
}
export default function FolderScreen({ folder }: FolderScreenProps) {
    return (
        <div className="folder-screen">
            {folder?.folders?.map((currentFolder) => {
                return (
                    <Folder folder={currentFolder} />
                )
            })}
            {folder?.files?.map((currentFile) => {
                return (
                    <File file={currentFile} />
                )
            })}
        </div>
    )
}