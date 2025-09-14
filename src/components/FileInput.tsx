"use client"
import { FileScanIcon } from "lucide-react"
import React, { useState } from "react"
import { RoboFlowResponse } from "../utils/types"
type FileInputProp = {
    setPreview: React.Dispatch<React.SetStateAction<string | null>>,
    setResponse: React.Dispatch<React.SetStateAction<any>>
}
// TODO: remove dummyResponse
let dummyResponse: RoboFlowResponse = {
    "predictions": [
        {
            "class": "osteophenia",
            "class_id": 0,
            "confidence": 0.982
        }
    ]
}
const FileInput: React.FC<FileInputProp> = (props) => {
    const [preview, setPreview] = useState<string | null>(null)
    const [response, setResponse] = useState<RoboFlowResponse>(dummyResponse)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        // local preview
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
        props.setPreview(objectUrl)
        props.setResponse(response)

    }

    return (
        <>{!preview &&
            <div className="mx-auto mt-10 sm:w-1/2 w-4/5 py-9 rounded-2xl border border-gray-300 gap-3 grid border-dashed">

                <div className="grid gap-1">
                    <FileScanIcon size={40} className="mx-auto" />
                    <h2 className="text-center text-gray-400 text-xs leading-4">
                        Upload file to scan
                    </h2>
                </div>

                <div className="grid gap-2">
                    <h4 className="text-center text-white text-sm font-medium leading-snug">
                        Drag and Drop your file here or
                    </h4>
                    <div className="flex items-center justify-center">
                        <label>
                            <input type="file" hidden onChange={handleFileChange} />
                            <div className="btn btn-primary">Choose File</div>
                        </label>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default FileInput
