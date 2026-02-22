import React from 'react'

interface ConfusionMatrixProps {
    matrix?: number[][]
}

const ConfusionMatrix: React.FC<ConfusionMatrixProps> = ({ matrix = [
    [22, 2, 0],  // Normal (Actual)
    [2, 32, 2],  // Osteopenia (Actual)
    [0, 6, 53]   // Osteoporosis (Actual)
] }) => {

    // Using a record for cleaner lookups and type safety
    const getColorClass = (value: number): string => {
        const colorMap: Record<number, string> = {
            0: 'bg-primary/0 ',
            2: 'bg-primary/10 ',
            6: 'bg-primary/30 ',
            22: 'bg-primary/35 ',
            32: 'bg-primary/50 ',
            53: 'bg-primary ',
        }

        // Fallback to a default color if value isn't in the map
        return colorMap[value] || 'bg-slate-100'
    }

    return (
        <div className='lg:w-[40vw]'>
            <p className="text-2xl px-4 font-bold mt-3 not-lg:text-center">Confusion Matrix</p>
            <div className='flex justify-center'>
                <div className="[writing-mode:vertical-lr] rotate-180  font-medium text-lg text-center">
                    Actual Label
                </div>
                <div className="grid grid-cols-3 gap-2 p-4 lg:w-[24vw] text-center">
                    <p >normal</p>
                    <p >ostreophenia</p>
                    <p >ostreoporosis</p>
                    {matrix.flatMap((row, rowIndex) =>
                        row.map((value, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`sm:h-[7vw] sm:w-[7vw] h-20 w-20 flex items-center justify-center border border-base-content rounded-sm transition-colors ${getColorClass(value)}`}
                            >
                                {value}
                            </div>
                        ))
                    )}
                </div>
            </div>
            <p className="text-xl mb-3  text-center">Predicted Values</p>
            <div className="flex">
                <p className="text-sm mx-4">Number of <br /> Samples</p>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/10"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/20"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/30"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/40"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/50"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/60"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/70"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/80"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary/90"></div>
                <div className="h-12 w-6 flex items-center justify-center transition-colors bg-primary"></div>
            </div>
        </div>

    )
}

export default ConfusionMatrix