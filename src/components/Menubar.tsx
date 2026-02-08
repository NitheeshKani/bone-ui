import { BoneIcon, ChartColumnBigIcon, ChartPieIcon, FileScanIcon, HouseIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Menubar() {
    return (
        <>
            <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
                <li>
                    <Link href="/" className="bg-primary rounded-box">
                        {/* <Image
                            className="dark:invert"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={100}
                            height={20}
                            priority
                        /> */}
                        <Activity />
                        <p className=" text-l">OsteoVision</p>
                    </Link>
                </li>
                <li>
                    <Link href="/" className="tooltip" data-tip="Home">
                        <HouseIcon size={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/dexa" className="tooltip" data-tip="Dexa">
                        <FileScanIcon size={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/xray" className="tooltip" data-tip="X-Ray">
                        <BoneIcon size={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/details" className="tooltip" data-tip="Details">
                        <ChartPieIcon size={20} />
                    </Link>
                </li>
            </ul>
        </>
    )
}

const Activity = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
)