"use client"
import FileInput from '@/src/components/FileInput'
import FileLoader from '@/src/components/FileLoader'
import ScanResults from '@/src/components/ScanResults'
import { RoboFlowResponse } from '@/src/utils/types'
import react, { useState } from 'react'

const DexaPage: react.FC<any> = (props) => {


    const [preview, setPreview] = useState<string | null>(null)
    const [response, setResponse] = useState<RoboFlowResponse>()
    const [loading, setLoading] = useState<boolean>(false)

    if (loading) {
        setTimeout(() => setLoading(false), 4000)
    }

    return (
        <>
            <FileInput setPreview={setPreview} setResponse={setResponse} setLoader={setLoading} />
            {loading && <FileLoader />}
            {(response && !loading) && response.predictions.length > 0 &&
                <ScanResults response={response} image={preview || ""} />
            }

        </>
    )
}


export default DexaPage