
import AdminDashBoardNav from "./components/AdminDashBoardNav";


export default function DashboardLayout({ children }) {
    return (
        <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-50">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full bg-gray-50 ">

                {/* Sidebar */}
                <aside className="w-full lg:w-64 bg-base-100 dark:bg-gray-50 border-b lg:border-b-0 lg:border-r border-none dark:border-black px-4 py-3">
                    <AdminDashBoardNav/>
                </aside>

                {/* Main content */}
                <main className="w-full lg:flex-1 px-10  bg-gray-50 mt-6">
                    <div className="w-full">
                        {children}
                    </div>
                </main>

            </div>
        </div>


    );
}
