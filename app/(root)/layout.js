import Navbar from '@/app/components/Navbar';
import '../globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
