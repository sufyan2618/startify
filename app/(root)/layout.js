import Navbar from '@/components/Navbar';
import '../globals.css'
import 'easymde/dist/easymde.min.css'; 
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
