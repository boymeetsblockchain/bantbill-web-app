import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";


export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >
          <div className="flex min-h-screen">
            <aside className="w-64 bg-white text-white border-r-2 ">
              <Sidebar />
            </aside>
  
            <div className="flex-1 flex flex-col">
              <header className="bg-white text-white p-4">
                <Header />
              </header>
              <main className="flex-1 p-6 bg-gray-100">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    );
  }