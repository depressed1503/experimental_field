import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { FolderType } from "../components/FileStructure/FileStructure"

interface FolderState {
    currentFolder?: FolderType
}

const initialState: FolderState = {
    currentFolder: undefined
}

const folderSlice = createSlice({
    name: "folders",
    initialState,
    reducers: {
        setCurrentFolder(state, action: PayloadAction<FolderType | undefined>) {
            state.currentFolder = action.payload
        }
    }
})

export const { setCurrentFolder } = folderSlice.actions
export default folderSlice.reducer
