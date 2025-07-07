import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'সকল কোর্স || Sokol Course',
}

const SakalCourse = () => {

    const courses = [
        {
            id: "bjs18-general",
            course_name: "১৮তম বিজেএস জেনারেল কোর্স",
            duration: "১৮তম জুডিশিয়ারি লিখিত পরীক্ষার পর্যন্ত",
            orientation_class: {
                date: "২৬ জুন ২০২৫",
                time: "রাত ৯:৩০",
                image: "https://i.ibb.co/SDRtmMJ7/18.jpg"
            },
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
                recordings_provided: true
            },
            fee: {
                regular: 5000,
                discounted: 3000,
                discount_deadline: "২৫ জুন",
                image: "https://i.ibb.co/SDRtmMJ7/18.jpg"
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
            modules: ["প্রিলি", "লিখিত", "ভাইভা"],
            course_structure: {
                weekly_classes: 5,
                weekly_exams: 2,
                recordings_provided: true
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
            admission_process: [
                "01325410258 (Bkash/Nagad) নম্বরে টাকা পাঠিয়ে লাস্ট ডিজিট বা ট্রানজেকশন আইডি জানাতে হবে",
                "কনফার্ম হলে ক্লাস রেকর্ড গ্রুপে যুক্ত করা হবে"
            ]
        }
    ];


    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 place-content-center">
            <div className="flex flex-wrap gap-6 justify-center ">
                {courses.map((item) => (
                    <Link href={`/sakalCourse/${item.id}`} key={item.id}>
                        <div className="w-full max-w-sm">
                            <div className="card w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-10 rounded-xl overflow-hidden">
                                <figure className="h-60 overflow-hidden">
                                    <img
                                        src={item.fee.image}
                                        alt={item.course_name || "Course Image"}
                                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </figure>
                                <div className="card-body space-y-2 px-5 py-4">
                                    <h2 className="card-title text-xl text-blue-700 dark:text-blue-300">{item.course_name}</h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        বিস্তৃত তথ্যের জন্য বিস্তারিত বাটনে ক্লিক করুন।
                                    </p>
                                    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mt-4">
                                        <p className="text-md font-semibold text-gray-800 dark:text-gray-200">
                                            Price: {item.fee?.regular?.toLocaleString()} BDT
                                        </p>
                                        <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-transform duration-200 rounded-md px-4">
                                            বিস্তারিত
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default SakalCourse;