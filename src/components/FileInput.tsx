"use client"
import axios from "axios"
import { FileScanIcon } from "lucide-react"
import React, { useState } from "react"

type FileInputProp = {
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
    setResponse: React.Dispatch<React.SetStateAction<any>>
}

const FileInput: React.FC<FileInputProp> = (props) => {
    const [preview, setPreview] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        // Local preview
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
        props.setPreview(objectUrl)

        try {
            setLoading(true)

            // Convert file to base64
            const base64 = await fileToBase64(file)

            // Send file to Roboflow
            const response = await axios.post(
                "https://serverless.roboflow.com/spine-0lruq/2",
                base64,
                {
                    params: { api_key: "kGswFHIRh87wAxSQCcxt" },
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                }
            )

            props.setResponse(response.data)
            console.log(response.data)

        } catch (err: any) {
            console.error("Upload failed:", err.message)
            props.setResponse({ error: err.message })
        } finally {
            setLoading(false)
        }
    }

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                // Remove the "data:*/*;base64," prefix
                const base64Data = (reader.result as string).split(",")[1]
                resolve(base64Data)
            }
            reader.onerror = (error) => reject(error)
        })
    }

    return (
        <>
            {!preview && (
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
                                <div className="btn btn-primary">{loading ? "Uploading..." : "Choose File"}</div>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FileInput
