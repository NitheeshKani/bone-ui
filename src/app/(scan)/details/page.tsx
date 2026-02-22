"use client"
import BoxOverlapChart from '@/src/components/BoxOverlapChart'
import ConfusionMatrix from '@/src/components/ConfusionMatrix'
import TrainingLoss from '@/src/components/TrainingLoss'
import ValidationChart from '@/src/components/ValidationChart'
import react from 'react'


const DetailsPage: react.FC<any> = (props) => {


    return (
        <><div className='flex items-center justify-center flex-wrap'>

            <ConfusionMatrix />
            <ValidationChart />
            <TrainingLoss />
            <BoxOverlapChart />
        </div>
        </>
    )
}


export default DetailsPage