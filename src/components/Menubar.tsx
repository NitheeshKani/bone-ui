import { BoneIcon, ChartColumnBigIcon, ChartPieIcon, FileScanIcon, HouseIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Menubar() {
    return (
        <>
            <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
                <li>
                    <Link href="/u">
                        <Image
                            className="dark:invert"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={100}
                            height={20}
                            priority
                        />
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

