import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const objectives = [
        t.about.objective1,
        t.about.objective2,
        t.about.objective3,
        t.about.objective4,
    ];

    const topics = [
        t.about.topic1,
        t.about.topic2,
        t.about.topic3,
        t.about.topic4,
        t.about.topic5,
        t.about.topic6,
        t.about.topic7,
        t.about.topic8,
    ];

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">{t.about.title}</h1>
                </div>
            </section>

            {/* Description */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.about.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.about.objectives}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {objectives.map((objective, index) => (
                            <div key={index} className="card flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">{index + 1}</span>
                                </div>
                                <p className="text-gray-600">{objective}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Topics */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.about.topics}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {topics.map((topic, index) => (
                            <div key={index} className="card-hover text-center">
                                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-medium text-gray-800">{topic}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conference Brochure Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.home.brochureTitle}</h2>
                        <div className="card overflow-hidden p-4">
                            <div className="relative group">
                                <img 
                                    src="/conference-brochure.jpg" 
                                    alt={t.home.brochureTitle}
                                    className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform group-hover:scale-[1.02]"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const fallback = document.createElement('div');
                                        fallback.className = 'w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center';
                                        fallback.innerHTML = '<p class="text-gray-500">Conference Brochure Image</p>';
                                        e.target.parentNode.appendChild(fallback);
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                                    <a 
                                        href="/conference-brochure.jpg" 
                                        download="conference-brochure.jpg"
                                        className="btn-primary bg-white text-primary-700 hover:bg-gray-100 pointer-events-auto"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg className="w-5 h-5 inline-block me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {t.home.downloadBrochure}
                                    </a>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <a 
                                    href="/conference-brochure.jpg" 
                                    download="conference-brochure.jpg"
                                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {t.home.downloadBrochure}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Venue */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.about.venue}</h2>
                        <div className="card">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <p className="text-gray-600 leading-relaxed">
                                        {t.about.venueDescription}
                                    </p>
                                    <div className="mt-6 flex items-center gap-3 text-primary-700">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="font-medium">{t.home.location}</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <p className="text-sm">University of Technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
