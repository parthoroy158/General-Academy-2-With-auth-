
import IframeVideo from '@/app/components/IframeVideo';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'সকল কোর্স || Sokol Course',
}
const DetailsSinglePage = ({ params }) => {

    console.log('This is teh details pages:', params.id)
    const id = params.id



    const courses = [
        {
            id: "bjs18-general",
            course_name: "১৮তম বিজেএস জেনারেল কোর্স",
            duration: "১৮তম জুডিশিয়ারি লিখিত পরীক্ষার পর্যন্ত",
            start_date: null,
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
            mentors: null,
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
            course_name: "১৯তম বিজেএস পূর্ণাঙ্গ কোর্স",
            duration: "১ বছর",
            start_date: "১ জুলাই ২০২৫",
            class_time: "রাত ৯:৩০",
            orientation_class: {
                date: null,
                time: null,
                image: null
            },
            modules: ["প্রিলি", "লিখিত", "ভাইভা"],
            course_structure: {
                subjects: null,
                modules: null,
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
            <div className="max-w-7xl mx-auto pt-24 px-4 min-h-screen">
                {/* Course Name */}
                <h1 className="text-center text-3xl font-bold text-blue-800 mb-8">{data.course_name}</h1>

                <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 text-gray-800">
                    {/* Left/Main Content */}
                    <div className="flex-1 w-full">
                        {/* Orientation Info */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 shadow">
                            <p className="text-lg mb-2">কোর্স শুরু: {data.start_date}</p>
                            <p className="mb-1">মেয়াদ: {data.duration}</p>
                            {data.orientation_class && (
                                <p className="mb-1">
                                    ওরিয়েন্টেশন ক্লাস: {data.orientation_class.date} - {data.orientation_class.time}
                                </p>
                            )}
                        </div>

                        {/* Course Structure */}
                        {data.course_structure && (
                            <div className="bg-white border rounded-xl p-5 shadow-sm mb-6">
                                <h2 className="text-xl font-semibold mb-3 text-blue-700">কোর্স কাঠামো</h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-semibold">বিষয়সমূহ:</h3>
                                        <ul className="list-disc list-inside ml-2">
                                            {data.course_structure.subjects?.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">মডিউল:</h3>
                                        <ul className="list-disc list-inside ml-2">
                                            {data.course_structure.modules?.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">ক্লাসের দিন:</h3>
                                        <p>{data.course_structure.class_days?.join(', ')}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">ফোকাস এরিয়া:</h3>
                                        <p>{data.course_structure.focus_areas?.join(', ')}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">ক্লাস টাইম:</h3>
                                        <p>{data.course_structure.class_time}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">সাপ্তাহিক রুটিন:</h3>
                                        <ul className="list-disc list-inside ml-2">
                                            <li>ক্লাস: {data.course_structure.weekly_schedule?.classes_per_week} দিন</li>
                                            <li>পরীক্ষা: {data.course_structure.weekly_schedule?.exams_per_week} দিন</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">রেকর্ডিং:</h3>
                                        <p>{data.course_structure.recordings_provided ? "প্রতিটি ক্লাসের রেকর্ডিং থাকবে" : "রেকর্ডিং প্রদান করা হবে না"}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Mentor Team */}
                        <div className="bg-gray-100 border rounded-xl p-5 mb-6">
                            <h2 className="text-xl font-semibold mb-4 text-blue-700">মেন্টর টিম</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {data.mentors?.map((mentor, i) => (
                                    <div key={i} className="border p-3 rounded-lg bg-white shadow-sm">
                                        <p className="font-semibold text-blue-800">{mentor.name}</p>
                                        <p>{mentor.designation}</p>
                                        {mentor.workplace && <p>{mentor.workplace}</p>}
                                        {mentor.note && <p className="text-sm text-gray-600">{mentor.note}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Admission Process Accordion */}
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl mb-6">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-semibold">
                                ভর্তি প্রক্রিয়া
                            </div>
                            <div className="collapse-content text-sm">
                                <ul className="list-disc list-inside ml-4">
                                    {(Array.isArray(data.admission_process)
                                        ? data.admission_process
                                        : data.admission_process?.instructions)?.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-full lg:w-[400px]">
                        <div className="max-w-sm mx-auto bg-white border border-blue-200 rounded-xl shadow-md p-4 sm:p-5 space-y-4">
                            {/* Video */}
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="rounded-md w-full h-52"
                                    src="https://www.youtube.com/embed/dY2bBBhIEvk?si=z1rCtJFEoBlO8Qfw"
                                    title="New Admission Process"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                                {/* <IframeVideo></IframeVideo> */}
                            </div>

                            {/* Course Features */}
                            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
                                <li className="flex items-start gap-2">✅ <span>১৮০+ লাইভ ক্লাস</span></li>
                                <li className="flex items-start gap-2">✅ <span>১৪০+ ক্লাস টেস্ট</span></li>
                                <li className="flex items-start gap-2">✅ <span>৮০০০+ প্রশ্নের প্রশ্নব্যাংক</span></li>
                                <li className="flex items-start gap-2">✅ <span>৪০+ ভোকাবুলারি কুইজ গেম</span></li>
                                <li className="flex items-start gap-2">✅ <span>২৪/৭ টেলিগ্রাম মেন্টর সাপোর্ট</span></li>
                                <li className="flex items-start gap-2">✅ <span>৬ টি প্রিন্টেড লেকচার বুক</span></li>
                            </ul>

                            {/* Enroll Button */}
                            <Link href="https://docs.google.com/document/d/1EMzkfWY7AmRYSgJ1I4BDi0THLUFYOlvviC7h19YEvc4/edit?tab=t.0" passHref>
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                                    Google Form
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailsSinglePage;