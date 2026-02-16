"use client"
import BoxOverlapChart from '@/src/components/BoxOverlapChart'
import ConfusionMatrix from '@/src/components/ConfusionMatrix'
import react from 'react'


const DetailsPage: react.FC<any> = (props) => {
    const actualData = ["Spam", "Ham", "Spam", "Spam", "Ham"]
    const predData = ["Spam", "Ham", "Ham", "Spam", "Ham"]

    return (
        <><div className='flex items-center justify-center flex-wrap'>

            <ConfusionMatrix matrix={[[1, 5, 6], [1, 5, 6], [1, 5, 6]]} />
            <BoxOverlapChart />

        </div>
        </>
    )
}


export default DetailsPage