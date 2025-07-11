'use client';


import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiEdit3 } from 'react-icons/fi';


export default function CreatePost() {

    const router = useRouter()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const res = await fetch('https://general-accademy-lilac.vercel.app/api/post', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                content,
                createdAt: new Date(),
            }),
        });

        console.log("This is the res:", res);

        if (res.ok) {
            router.push('/notifications')
            setTitle('');
            setContent('');
            setSuccess(true);
            toast.success("Post submitted successfully!");
        } else {
            toast.error("Something went wrong while submitting.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
            <div className="w-full max-w-lg bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 space-y-6 transition-all">
                <div className="flex items-center justify-center space-x-2 text-primary">
                    <FiEdit3 className="text-2xl" />
                    <h2 className="text-2xl font-bold">Create a Important Post</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium flex items-center gap-1">
                                Title
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Give your post a title"
                            className="input input-bordered w-full"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium flex items-center gap-1">
                                Content
                            </span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            placeholder="What's on your mind?"
                            rows={5}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className={`btn btn-primary w-full transition-all ${loading ? 'btn-disabled' : ''} mt-2`}
                        disabled={loading}
                    >
                        {loading ? 'Posting...' : 'Publish Post'}
                    </button>
                </form>
            </div>
        </div>
    );
}
