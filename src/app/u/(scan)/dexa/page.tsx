
import FileInput from '@/src/components/FileInput'
import ScanResults from '@/src/components/ScanResults'
import react from 'react'
export const metadata = {
    title: "Dexa",
}
const DexaPage: react.FC<any> = (props) => {

    return (
        <>
            <FileInput />
            <ScanResults />

        </>
    )
}


export default DexaPage