import { FileScanIcon } from 'lucide-react'
import react from 'react'

const FileInput: react.FC<any> = (props) => {

    return (
        <>
            <div className="mx-auto mt-10 sm:w-1/2 w-4/5 py-9 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
                <div className="grid gap-1">
                    <FileScanIcon size={40} className='mx-auto'/>
                    <h2 className="text-center text-gray-400   text-xs leading-4">Upload file to scan</h2>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-center text-white text-sm font-medium leading-snug">Drag and Drop your file here or</h4>
                    <div className="flex items-center justify-center">
                        <label>
                            <input type="file" hidden />
                            <div className="btn btn-primary">Choose File</div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}


export default FileInput