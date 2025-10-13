import "./globals.css"
import Menubar from "../components/Menubar"


export const metadata = {
  title: {
    default: "OstreoVision",
    template: "%s | OstreoVision",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      <body>
        <div className='flex flex-col items-center'>
          <Menubar />
        </div>
        {children}
      </body>
    </html>
  )
}
