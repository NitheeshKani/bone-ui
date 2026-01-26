"use client"
import axios from "axios"
import { FileScanIcon } from "lucide-react"
import React, { useState } from "react"
import fileToBase64 from "../utils/fileToBase64"
import { imageProcessor } from "../utils/imageProcessor"
import FileLoader from "./FileLoader"
import ImgLoader from "./ImgLoader"
type FileInputProp = {
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
    setResponse: React.Dispatch<React.SetStateAction<any>>
    setLoader: React.Dispatch<React.SetStateAction<boolean>>
}
const FileInput: React.FC<FileInputProp> = (props) => {
    const [preview, setPreview] = useState<string | null>(null)
    const [denoise, setDenoise] = useState<string | null>(null)
    const [contrast, setcontrast] = useState<string | null>(null)
    const [sharp, setsharp] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        // Local preview
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // Apply image processing
        await applyImageProcessing(objectUrl)

        try {
            setLoading(true)
            props.setLoader(true)
            // Convert file to base64
            const base64Img = await fileToBase64(file)

            // Send file to Roboflow
            const response = await axios.post(
                "https://serverless.roboflow.com/spine-0lruq/2",
                base64Img,
                {
                    params: { api_key: "kGswFHIRh87wAxSQCcxt" },
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                }
            )

            props.setResponse(response.data)
            // console.log(response.data)

        } catch (err: any) {
            console.error("Upload failed:", err.message)
            props.setResponse({ error: err.message })
        } finally {
            setLoading(false)
        }

        async function applyImageProcessing(objectUrl: string) {
            const img = new Image()
            img.src = objectUrl
            await img.decode()

            const denoisedBlob = await imageProcessor(img, { denoise: 50 })
            const denoisedURL = URL.createObjectURL(denoisedBlob)

            const contrastBlob = await imageProcessor(img, { denoise: 50, contrast: 0.6 })
            const contrastURL = URL.createObjectURL(contrastBlob)

            const sharpBlob = await imageProcessor(img, { denoise: 50, contrast: 0.6, sharpenRadius: 10, sharpenAmount: 1.5 })
            const sharpURL = URL.createObjectURL(sharpBlob)

            setTimeout(() => {
                setDenoise(denoisedURL)
                setTimeout(() => {
                    setcontrast(contrastURL)
                    setTimeout(() => {
                        setsharp(sharpURL)
                        props.setPreview(objectUrl)
                    }, 1000)
                }, 1000)
            }, 1000)
        }
    }

    return (
        <>
            <div className="mx-auto mt-10 sm:w-1/2 w-4/5 py-9 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
                {!preview && <div className="grid gap-1">
                    <FileScanIcon size={40} className="mx-auto" />
                    <h2 className="text-center text-gray-400 text-xs leading-4">
                        Upload file to scan
                    </h2>
                </div>}

                <div className="grid gap-2">
                    <h4 className="text-center text-white text-sm font-medium leading-snug">
                        Drag and Drop your file here or
                    </h4>
                    <div className="flex items-center justify-center">
                        <label>
                            <input type="file" hidden onChange={handleFileChange} />
                            <div className="btn btn-primary">{loading ? "Uploading..." : !preview ? "Choose File" : "Choose Another File"}</div>
                        </label>
                    </div>
                </div>
            </div>
            {preview && (
                <div className="flex flex-wrap align-center flex-row gap-5 p-10 justify-center">
                    <img className="h-60" src={preview} alt="Preview" />
                    {denoise ? <img className="h-60" src={denoise} alt="denoised" /> : null}
                    {contrast ? <img className="h-60" src={contrast} alt="contrast" /> : null}
                    {sharp ? <img className="h-60" src={sharp} alt="sharp" /> : null}
                </div>
            )}
        </>
    )
}

export default FileInput
