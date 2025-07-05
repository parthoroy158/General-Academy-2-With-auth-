import AllCoursesNav from "./components/AllcoursesNav";


export default function DashboardLayout({ children }) {
    return (
        <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-50">
            <div className="max-w-7xl mx-auto w-full bg-gray-50 ">
                {/* Sidebar */}
                <aside className="w-full max-w-7xl mx-auto lg:w-64 bg-base-100 dark:bg-gray-50 border-b lg:border-b-0 lg:border-r border-none dark:border-black px-4 py-6">
                    <AllCoursesNav></AllCoursesNav>
                </aside>

                {/* Main content */}
                <main className="w-full px-10 py-6 bg-gray-50 mt-14">
                    <div className="w-full">
                        {children}
                    </div>
                </main>

            </div>
        </div>


    );
}
