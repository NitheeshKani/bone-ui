import { BotIcon } from 'lucide-react'
import Image from 'next/image'
import react from 'react'
import { RoboFlowResponse } from '../utils/types'
type ScanResultsProps = {
    response: RoboFlowResponse
    image: string
}
const ScanResults: react.FC<ScanResultsProps> = (props) => {

    return (
        <>
            <div className="p-6 min-h-screen space-y-6">
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Section: Analytics */}
                    <div className="lg:col-span-2 space-y-6 border p-3 border-gray-200/25 rounded-lg bg-base-300">
                        <h2 className="text-xl font-semibold">AI-Powered Osteoporosis Analytics</h2>
                        <h2 className="text-xl font-semibold">{props.response.predictions[0].class}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card title="Bone Density Score (BMD)" value="-2.1" description="Osteopenia Range" />
                            <Card title="Fracture Risk (10-year)" value="18%" description="Above Average" />
                            <Card title="T-Score" value="-2.1" description="-2.5 or lower indicates osteoporosis" />
                            <Card title="Z-Score" value="-1.8" description="Compared to same age/gender" />
                        </div>
                        {/* TODO: import a chart */}
                        <div className="border-dashed rounded-lg p-4 shadow h-40 flex items-center justify-center border-gray-200/25">
                            Bone density chart visualization
                        </div>

                        <div className="text-sm inline-flex gap-2 border-dashed border w-full rounded-xl p-2"><BotIcon /> Model Confidence: <strong>94%</strong></div>
                    </div>


                    {/* Right Section: Interpretation */}
                    <div className="space-y-6">
                        <div className="bg-base-200 border-dashed border rounded-lg p-4 shadow space-y-2 border-gray-200/25">
                            <h3 className="font-semibold text-lg">Interpretation</h3>
                            <div className="text-warning text-sm">⚠ Your results show signs of moderate osteopenia in the lumbar region. Further clinical assessment is advised.</div>
                            <div className="space-y-2 mt-2">
                                <button className="badge badge-primary m-2">Consult Orthopedic</button>
                                <button className="badge badge-primary m-2">Schedule Repeat DEXA</button>
                                <button className="badge badge-primary m-2">Consider Calcium + D</button>
                            </div>
                        </div>

                        <div className="bg-base-200 border-dashed border rounded-lg p-4 shadow border-gray-200/25">
                            <h3 className="font-semibold text-lg">Security & Trust</h3>
                            <ul className="text-sm mt-2 space-y-1 text-gray-100">
                                <li>🔒 HIPAA Compliant</li>
                                <li>📁 Data Encrypted</li>
                                <li>✅ FDA-Model Support</li>
                                <li className="text-xs text-gray-300">Scans are removed after 24 hours.</li>
                            </ul>
                        </div>

                        <div className="bg-info/30 rounded-lg p-4 shadow text-sm border-gray-200/25">
                            <strong>AI-enhanced. Clinician reviewed.</strong> Our AI provides preliminary analysis. Always consult with healthcare professionals for final diagnosis.
                        </div>
                    </div>

                    {props.image && <div className="lg:col-span-2 space-y-6 border p-3 border-gray-200/25 rounded-lg bg-base-300">
                        <h2 className="text-xl font-semibold">Scan Analysis</h2>
                        <img alt='scan image' src={props.image} width={500} height={500} />
                    </div>}
                </div>
            </div>
        </>
    )
}

function Card({ title, value, description }: { title: string, value: string, description: string }) {
    return (
        <div className="bg-base-200 rounded-lg p-4 border border-white/10">
            <div className="text-sm font-medium ">{title}</div>
            <div className="text-2xl font-semibold text-primary-content">{value}</div>
            <div className="text-xs text-primary-content/75">{description}</div>
        </div>
    )
}


export default ScanResults