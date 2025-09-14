"use client"
import FileInput from '@/src/components/FileInput'
import ScanResults from '@/src/components/ScanResults'
import { RoboFlowResponse } from '@/src/utils/types'
import react, { useState } from 'react'

const DexaPage: react.FC<any> = (props) => {


    const [preview, setPreview] = useState<string | null>(null)
    const [response, setResponse] = useState<RoboFlowResponse>()
    return (
        <>
            <FileInput setPreview={setPreview} setResponse={setResponse} />
            {response && response.predictions.length > 0 &&
                <ScanResults response={response} image={preview || ""} />
            }

        </>
    )
}


export default DexaPage