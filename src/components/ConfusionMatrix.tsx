import React from 'react'

interface ConfusionMatrixProps {
    matrix: number[][]
}

const ConfusionMatrix: React.FC<ConfusionMatrixProps> = ({ matrix }) => {

    // Using a record for cleaner lookups and type safety
    const getColorClass = (value: number): string => {
        const colorMap: Record<number, string> = {
            0: 'bg-primary ',
            1: 'bg-primary/20 ',
            5: 'bg-primary/40 ',
            6: 'bg-primary/60 ',
        }

        // Fallback to a default color if value isn't in the map
        return colorMap[value] || 'bg-slate-100'
    }

    return (
        <div className='lg:w-[40vw]'>
            <p className="text-2xl px-4 font-bold mt-3 not-lg:text-center">Confusion Matrix</p>
            <div className="grid grid-cols-3 gap-2 p-4 lg:w-[24vw] text-center">
                {matrix.flatMap((row, rowIndex) =>
                    row.map((value, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`h-[7vw] w-[7vw] flex items-center justify-center border border-base-content rounded-sm transition-colors ${getColorClass(value)}`}
                        >
                            {value * 10}
                        </div>
                    ))
                )}
                <p>normal</p>
                <p>ostreophenia</p>
                <p>ostreoporosis</p>
            </div>
            <p className="text-xl px-4 font-bold mb-3 not-lg:text-center">Actual Values</p>
            <div className="flex mx-4">
                <div className="h-12 w-12 flex items-center justify-center transition-colors bg-primary/20">1</div>
                <div className="h-12 w-12 flex items-center justify-center transition-colors bg-primary/40">5</div>
                <div className="h-12 w-12 flex items-center justify-center transition-colors bg-primary/60">6</div>
                <div className="h-12 w-12 flex items-center justify-center transition-colors bg-primary">0</div>
            </div>
        </div>

    )
}

export default ConfusionMatrix