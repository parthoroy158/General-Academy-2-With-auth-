// Add this if using interactivity in `UserProfileNav` (e.g., mobile toggles)

import UserProfileNav from "./components/UserProfileNav";

export default function UserProfileLayout({ children }) {
    return (
        <div className="pt-16 bg-gray-50 min-h-screen">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full">

                {/* Sidebar */}
                <aside className="w-full lg:w-100 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 px-4 py-4 sm:py-6">
                    <UserProfileNav />
                </aside>

                {/* Main content */}
                <main className="w-full flex-1 px-4 sm:px-6 lg:px-10 py-6">
                    <div className="w-full">{children}</div>
                </main>

            </div>
        </div>
    );
}
