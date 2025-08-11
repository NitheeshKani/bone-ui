import Menubar from '@/src/components/Menubar'


export default function userLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (<>
        <div className='flex flex-col items-center'>
            <Menubar />
        </div>
        {children}
    </>)
}