import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { BsBellFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdNewReleases } from 'react-icons/md';

export const dynamic = 'force-dynamic';

const page = async () => {
    const db = await dbConnect(collectionNameObj.postNotifications);
    const res = await db.find({}).sort({ createdAt: -1 }).toArray();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-18 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold flex items-center justify-center gap-3 text-primary">
                        <BsBellFill className="text-3xl text-primary" /> Notice Center
                    </h1>
                    <p className="text-gray-500 mt-2">Stay informed with the latest updates</p>
                </div>
                

                {/* No notifications */}
                {res.length === 0 ? (
                    <div className="alert alert-info shadow text-center max-w-md mx-auto">
                        No notifications found.
                    </div>
                ) : (
                    <div className="space-y-8">
                        {res.map((item, index) => {
                            const isLatest = index === 0;

                            return (
                                <div
                                    key={item._id}
                                    className={`relative p-6 rounded-xl border-l-4 transition-all duration-200 group${isLatest
                                            ? 'bg-blue-50 border-blue-600 shadow-lg scale-[1.01]'
                                            : 'bg-white border-blue-500 shadow-sm hover:shadow-md'}`}
                                >
                                    {/* Latest badge */}
                                    {isLatest && (
                                        <div className="absolute -top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <MdNewReleases className="text-base" />
                                            Latest
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-3">
                                        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                            {item.title}
                                        </h2>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <AiOutlineClockCircle className="text-sm" />
                                            <span>
                                                {new Date(item.createdAt || item._id.getTimestamp()).toLocaleString('bn-BD', {
                                                    weekday: 'short',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: true,
                                                })}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                                        {item.content}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;
