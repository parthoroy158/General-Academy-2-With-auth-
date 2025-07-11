
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import IframeVideo from '@/app/components/IframeVideo';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { getServerSession } from 'next-auth';

import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'সকল কোর্স || Sokol Course || All courses',
    keywords: ['General Academy', 'GeneralBD', 'BD General Academy', 'all courses'],
    description: 'All courses,Genetal Academy is a premier online coaching center dedicated to empowering aspiring legal professionals with the knowledge and skills they need to excel in competitive examinations. Specializing in law-focused education, Genetal Academy offers expertly designed courses for a wide range of legal exams, with a special emphasis on BJS',
}
const DetailsSinglePage = async ({ params }) => {

    const sessionData = await getServerSession(authOptions)



    const db = dbConnect(collectionNameObj.userCollections);
    const res = await db.find({}).toArray()

    const course = res.find(item => item.email == sessionData?.user?.email)
    console.log("This is the course", course)


    console.log('This is teh details pages:', params.id)
    const id = params.id



    const courses = [
        {
            id: "bjs18-general",
            course_name: "১৮ তম বিজেএস জেনারেল কোর্স",
            duration: "লিখিত পরীক্ষার পর্যন্ত",
            start_date: null,
            active: false,
            admission: false,
            class_time: "রাত ৯:৩০",
            orientation_class: {
                date: "২৬ জুন ২০২৫",
                time: "রাত ৯:৩০",
                image: "https://i.ibb.co/SDRtmMJ7/18.jpg"
            },
            modules: ["প্রিলিমিনারি", "লিখিত"],
            course_structure: {
                subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "জেনারেল নলেজ"],
                modules: ["প্রিলিমিনারি", "লিখিত"],
                class_days: ["রবি", "সোম", "মঙ্গল", "বুধ"],
                class_time: "রাত ৯:৩০",
                focus_areas: ["গণিত", "বিজ্ঞান"],
                weekly_schedule: {
                    classes_per_week: 4,
                    exams_per_week: 2
                },
                recordings_provided: true,
                weekly_classes: null,
                weekly_exams: null
            },
            mentors: [
                {
                    name: "রাগিব মোস্তফা নাঈম",
                    designation: "সহকারী জজ",
                    workplace: "ময়মনসিংহ"
                },
                {
                    name: "আমিনুল ইসলাম খান",
                    designation: "সহকারী জজ",
                    workplace: "শেরপুর",
                    note: "সাবেক আইন কর্মকর্তা, পূবালী ব্যাংক লি."
                },
                {
                    name: "আফরোজী সাচ্চু শাহনেওয়াজ",
                    designation: "সহকারী নিবন্ধক",
                    workplace: "ঢাকা"
                },
                {
                    name: "কাউসার আহমেদ",
                    designation: "সহকারী কমিশনার",
                    workplace: "রংপুর"
                },
                {
                    name: "মাহমুদা আখিঁ",
                    designation: "সহকারী জজ"
                },
                {
                    name: "শান্ত দেব রয় অর্ণ",
                    designation: "সহকারী জজ"
                },
                {
                    name: "তানজিনা এলিন",
                    designation: "সহকারী জজ"
                }
            ],
            special_responsibilities: null,
            fee: {
                regular: 5000,
                discounted: 3000,
                discount_deadline: "২৫ জুন",
                image: "https://i.ibb.co/SDRtmMJ7/18.jpg",
                installment_option: {
                    allowed: false,
                    breakdown: []
                }
            },
            admission_process: {
                instructions: [
                    "01325410258 নম্বরে (Bkash/Nagad) সেন্ড মানি করুন",
                    "ট্রানজেকশন আইডি বা স্ক্রিনশট পাঠান"
                ]
            },
            post_admission: {
                facebook_groups_added: 2
            },
            contact: [
                { name: "Mahmuda Akhi", phone: "01921-251997" },
                { name: "Himel", phone: "01533302578" },
                { platform: "WhatsApp", phone: "01306-274681" },
                { platform: "WhatsApp", phone: "01325410258" }
            ]
        },
        {
            id: "bjs19-full",
            course_name: "১৯ তম বি.জে.এস পূর্ণাঙ্গ কোর্স",
            duration: "১ বছর",
            active: true,
            admission: true,
            start_date: "১ জুলাই ২০২৫",
            class_time: "রাত ৯:৩০",
            orientation_class: {
                date: null,
                time: null,
                image: null
            },
            modules: ["প্রিলি", "লিখিত", "ভাইভা"],
            course_structure: {
                subjects: ["সব সাজেক্ট"],
                modules: ["প্রিলিমিনারি", "লিখিত"],
                class_days: null,
                class_time: null,
                focus_areas: null,
                weekly_schedule: null,
                recordings_provided: true,
                weekly_classes: 5,
                weekly_exams: 2
            },
            mentors: [
                {
                    name: "রাগিব মোস্তফা নাঈম",
                    designation: "সহকারী জজ",
                    workplace: "ময়মনসিংহ"
                },
                {
                    name: "আমিনুল ইসলাম খান",
                    designation: "সহকারী জজ",
                    workplace: "শেরপুর",
                    note: "সাবেক আইন কর্মকর্তা, পূবালী ব্যাংক লি."
                },
                {
                    name: "আফরোজী সাচ্চু শাহনেওয়াজ",
                    designation: "সহকারী নিবন্ধক",
                    workplace: "ঢাকা"
                },
                {
                    name: "কাউসার আহমেদ",
                    designation: "সহকারী কমিশনার",
                    workplace: "রংপুর"
                },
                {
                    name: "মাহমুদা আখিঁ",
                    designation: "সহকারী জজ"
                },
                {
                    name: "শান্ত দেব রয় অর্ণ",
                    designation: "সহকারী জজ"
                },
                {
                    name: "তানজিনা এলিন",
                    designation: "সহকারী জজ"
                }
            ],
            special_responsibilities: {
                law_guidance: "আমিনুল ইসলাম খান",
                general_guidance: "রাগিব মোস্তফা নাঈম"
            },
            fee: {
                regular: 15000,
                discounted: 13000,
                discount_deadline: "৩০ জুন",
                image: "https://i.ibb.co/4wR48YbQ/19.jpg",
                installment_option: {
                    allowed: true,
                    breakdown: [6500, 6500]
                }
            },
            admission_process: {
                instructions: [
                    "01325410258 (Bkash/Nagad) নম্বরে টাকা পাঠিয়ে লাস্ট ডিজিট বা ট্রানজেকশন আইডি জানাতে হবে",
                    "কনফার্ম হলে ক্লাস রেকর্ড গ্রুপে যুক্ত করা হবে"
                ]
            },
            post_admission: {
                facebook_groups_added: null
            },
            contact: null
        }
    ];


    const data = courses.find(item => item.id === id)

    return (
        <div className='w-full bg-gray-50'>
            <h1>This is the course: {JSON.stringify(sessionData)}</h1>

            <h1 className='text-black'> This is the session: {sessionData?.user?.email || "No session"}</h1>
            <div className="max-w-7xl mx-auto pt-1 px-4 min-h-screen">
                {/* Course Name */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex-grow border-t border-blue-300"></div>
                    <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 break-words">
                        {data.course_name}
                    </h1>
                    <div className="flex-grow border-t border-blue-300"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 text-gray-800">
                    {/* Left/Main Content */}
                    <div className="flex-1 w-full">
                        {/* Orientation Info */}
                        {/* <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 shadow">
                            <p className="text-lg mb-2">কোর্স শুরু: {data.start_date}</p>
                            <p className="mb-1">মেয়াদ: {data.duration}</p>
                            {data.orientation_class && (
                                <p className="mb-1">
                                    ওরিয়েন্টেশন ক্লাস: {data.orientation_class?.date} - {data.orientation_class?.time}
                                </p>
                            )}
                        </div> */}
                        <div className="stats shadow-xl w-full mb-3 flex flex-col md:flex-row gap-4 text-center">
                            <div className="stat flex-1 dark:text-black">
                                <div className="stat-figure text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current"
                                    >
                                    </svg>
                                </div>
                                <div className="stat-title dark:text-black font-bold text-lg">কোর্স শুরু:</div>
                                <div className="stat-value text-2xl  text-primary">{data.start_date}</div>
                                {/* <div className="stat-desc dark:text-black">21% more than last month</div> */}
                            </div>

                            <div className="stat flex-1">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current"
                                    >
                                    </svg>
                                </div>
                                <div className="stat-title dark:text-black font-bold text-lg">মেয়াদ:</div>
                                <div className="stat-value text-secondary text-2xl">{data.duration}</div>
                                {/* <div className="stat-desc">21% more than last month</div> */}
                            </div>

                            <div className="stat flex-1">
                                <div className="stat-figure text-secondary">
                                    {/* <div className="avatar avatar-online">
                                        <div className="w-16 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                                        </div>
                                    </div> */}
                                </div>
                                <div className="stat-title font-bold text-xl text-black text-lg">Admission:</div>
                                <div className={data.admission ? "text-green-600 text-2xl font-bold" : "text-red-500 text-2xl font-bold"}>{data.admission ? <>Open</> : <>Close</>}</div>

                                <div className="stat-desc text-secondary">{data.admission}</div>
                            </div>
                        </div>


                        {/* Course Structure */}
                        {data.course_structure && (
                            <div className="bg-white rounded-2xl p-6 shadow-xl mt-6 mb-8">
                                <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2 text-center">
                                    🧩 কোর্স কাঠামো
                                </h2>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* বিষয়সমূহ */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">📚 বিষয়সমূহ</h3>
                                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                                            {data.course_structure?.subjects?.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* মডিউল */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🗂️ মডিউল</h3>
                                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                                            {data.course_structure?.modules?.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* ক্লাসের দিন */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">📅 ক্লাসের দিন</h3>
                                        <p className="text-gray-800">{data.course_structure.class_days?.join(", ")}</p>
                                    </div>

                                    {/* ফোকাস এরিয়া */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🎯 ফোকাস এরিয়া</h3>
                                        <p className="text-gray-800">{data.course_structure.focus_areas?.join(", ")}</p>
                                    </div>

                                    {/* ক্লাস টাইম */}
                                    {
                                        data.course_structure.class_time == null ? <></> : <>
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <h3 className="font-semibold mb-2 text-blue-600">⏰ ক্লাস টাইম</h3>
                                                <p className="text-gray-800">{data.course_structure.class_time}</p>
                                            </div>

                                        </>
                                    }

                                    {/* সাপ্তাহিক রুটিন */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🗓️ সাপ্তাহিক রুটিন</h3>
                                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                                            <li>ক্লাস: {data.course_structure.weekly_schedule?.classes_per_week} দিন</li>
                                            <li>পরীক্ষা: {data.course_structure.weekly_schedule?.exams_per_week} দিন</li>
                                        </ul>
                                    </div>

                                    {/* রেকর্ডিং */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🎥 রেকর্ডিং</h3>
                                        <p className="text-gray-800">
                                            {data.course_structure.recordings_provided
                                                ? "প্রতিটি ক্লাসের রেকর্ডিং থাকবে"
                                                : "রেকর্ডিং প্রদান করা হবে না"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Mentor Team */}
                        <div className="mt-5 bg-white  rounded-xl p-5 mb-6">
                            <h2 className="text-xl font-semibold mb-4 text-blue-700 text-center">মেন্টর টিম</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center place-content-center items-stretch">
                                {data.mentors?.map((mentor, i) => (
                                    <div
                                        key={i}
                                        className=" p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center space-y-2"
                                    >
                                        {/* Optional avatar */}
                                        {/* <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl">
                                        {mentor.name?.charAt(0)}
                                        </div> */}
                                        <p className="text-lg font-bold text-blue-800">{mentor.name}</p>
                                        <p className="text-gray-700 text-sm">{mentor.designation}</p>
                                        {mentor.workplace && <p className="text-gray-600 text-sm">{mentor.workplace}</p>}
                                        {mentor.note && <p className="text-sm text-gray-500">{mentor.note}</p>}
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Admission Process Accordion */}
                        <div className="collapse collapse-arrow bg-white dark:bg-white border border-gray-200 dark:border-gray-700 rounded-xl mb-6 shadow-sm">
                            <input type="checkbox" className="peer" />

                            <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-black peer-checked:text-blue-600 transition-colors">
                                ভর্তি প্রক্রিয়া
                            </div>

                            <div className="collapse-content text-sm text-gray-700 dark:text-black px-4 pb-4 leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    {(Array.isArray(data.admission_process)
                                        ? data.admission_process
                                        : data.admission_process?.instructions
                                    )?.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        {/* This is the experimantal section-------------------------------------------------------------- */}
                        {
                            course?.corses == "bjs19-full" ?
                                <div className="collapse collapse-arrow bg-white dark:bg-white border border-gray-200 dark:border-gray-700 rounded-xl mb-6 shadow-sm">
                                    <input type="checkbox" className="peer" />

                                    <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-black peer-checked:text-blue-600 transition-colors">
                                        Class Video
                                    </div>
                                    <div className="collapse-content text-sm text-gray-700 dark:text-black px-4 pb-4 leading-relaxed">
                                        <ul className="list-disc pl-5 space-y-2">
                                            {(Array.isArray(data.admission_process)
                                                ? data.admission_process
                                                : data.admission_process?.instructions
                                            )?.map((step, index) => (
                                                <li key={index}>{step}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                :

                                <div
                                    className={`collapse collapse-arrow bg-white dark:bg-white border border-gray-200 dark:border-gray-700 rounded-xl mb-6 shadow-sm ${course?.courses !== "bjs19-full" ? "pointer-events-none opacity-60" : ""
                                        }`}
                                >
                                    <input type="checkbox" className="peer" />

                                    <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-black peer-checked:text-blue-600 transition-colors">
                                        Class Video
                                    </div>
                                    <div className="collapse-content text-sm text-gray-700 dark:text-black px-4 pb-4 leading-relaxed">
                                        <ul className="list-disc pl-5 space-y-2">
                                            {(Array.isArray(data.admission_process)
                                                ? data.admission_process
                                                : data.admission_process?.instructions
                                            )?.map((step, index) => (
                                                <li key={index}>{step}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                        }
                    </div>


                    {/* Right Sidebar */}
                    <div className="w-full lg:w-[400px]">
                        <div className="max-w-sm mx-auto bg-white border border-blue-200 rounded-xl shadow-md p-4 sm:p-5 space-y-4">
                            {/* Video */}
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="rounded-md w-full h-52"
                                    src="https://www.youtube.com/embed/dY2bBBhIEfghvk?si=z1rCtJFEoBlO8Qfw"
                                    title="New Admission Process"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                                {/* <IframeVideo></IframeVideo> */}
                            </div>

                            {/* Course Features */}
                            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
                                <li className="flex items-start gap-2 font-bold"> <span>
                                    নিম্নের নিচে বর্ণিত উপায়ে ফি পরিশোধ করুন:


                                </span></li>
                                <li className="flex items-start gap-2">📌<span>Bkash: বিকাশ থেকে 'Send Money' অপশন সিলেক্ট করে 01325-410258 নাম্বারে সেন্ড মানি করুন।</span></li>
                                <li className="flex items-start gap-2"> 📌<span>Nagad: নগদ থেকে 'Send Money' অপশন সিলেক্ট করে 01325-410258 নাম্বারে সেন্ড মানি করুন।</span></li>
                                <li className="flex items-start gap-2"> <span className='italic'>পেমেন্ট করে ট্রানজেকশন আইডিসহ ফর্মটি ফিলাপ করে সাবমিট করুন। ⤵️</span></li>
                            </ul>


                            {/* Enroll Button */}
                            {
                                data?.active ?
                                    <>
                                        <Link href={`/AdmissionForm/${data.id}`}>
                                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                                                Enroll Now
                                            </button>
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <button
                                            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                                            disabled={data?.active}
                                        >
                                            Admission Closed
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default DetailsSinglePage;