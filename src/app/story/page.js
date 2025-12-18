"use client";

import ScrollReveal from "@/components/ScrollReveal";

const timelineEvents = [
    {
        year: "2018",
        title: "Pertemuan Pertama",
        description: "Takdir mempertemukan kami di sebuah kedai kopi kecil di sudut Jakarta. Senyuman pertama yang tak terlupakan.",
    },
    {
        year: "2020",
        title: "Mulai Melangkah Bersama",
        description: "Setelah mengenal lebih dalam, kami memutuskan untuk menjalin hubungan dan saling mendukung satu sama lain.",
    },
    {
        year: "2023",
        title: "Lamaran",
        description: "Di bawah langit senja Bali, dia berlutut dan meminta izin untuk menghabiskan sisa hidupnya bersamaku.",
    },
    {
        year: "2025",
        title: "Janji Suci",
        description: "Dan hari ini, kami mengundang Anda untuk menjadi saksi pengikatan janji suci kami selamanya.",
    }
];

export default function StoryPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal width="100%">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-[#ec4899] mb-12 drop-shadow-sm font-serif">
                        Perjalanan Cinta Kami
                    </h1>
                </ScrollReveal>

                <div className="relative border-l-4 border-[#ec4899]/30 ml-4 md:ml-1/2 space-y-12">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            <span className="absolute -left-[14px] top-2 w-6 h-6 bg-[#ec4899] rounded-full border-4 border-white shadow-md"></span>

                            <ScrollReveal delay={index * 0.2}>
                                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <span className="inline-block px-3 py-1 bg-[#fce7f3] text-[#ec4899] rounded-full text-sm font-semibold mb-2">
                                        {event.year}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
