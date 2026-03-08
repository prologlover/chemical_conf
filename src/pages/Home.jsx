import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t, language } = useLanguage();
    const brochurePath = language === 'ar' ? '/brochures/brochure_ar.pdf' : '/brochures/brochure_en.pdf';
    const brochureName = language === 'ar' ? 'ICMTOGI_Brochure_AR.pdf' : 'ICMTOGI_Brochure_EN.pdf';
    const brochureImages = language === 'ar'
        ? ['/brochures/images/ar_1.jpg', '/brochures/images/ar_2.jpg']
        : ['/brochures/images/en_1.jpg', '/brochures/images/en_2.jpg'];

    const keyDates = [
        { label: t.home.abstractDeadline, date: t.importantDates.date2 },
        { label: t.home.notificationDate, date: t.importantDates.date3 },
        { label: t.home.conferenceDate, date: t.importantDates.date7 },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden min-h-screen flex items-center"
                style={{ backgroundImage: "url('/HEROBG.jpeg')" }}
            >
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-700/90 via-primary-800/80 to-primary-900/90"></div>

                    {/* Animated Circles */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container-custom py-12 md:py-16 relative w-full">
                    {/* Mobile Logos */}
                    <div className="flex justify-center gap-6 mb-8 lg:hidden px-4">
                        <img src="/logo.jpg" alt="Department Logo" className="w-24 md:w-32 h-auto object-contain rounded-lg bg-white p-2 shadow-lg" />
                        <img src="/uni_logo.png" alt="University Logo" className="w-24 md:w-32 h-auto object-contain rounded-lg bg-white p-2 shadow-lg" />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 w-full">
                        {/* Left Logo (Desktop) */}
                        <div className="hidden lg:block w-36 xl:w-48 shrink-0">
                            <img src="/logo.jpg" alt="Department Logo" className="w-full h-auto object-contain rounded-xl bg-white p-3 shadow-xl" />
                        </div>

                        {/* Center Content */}
                        <div className="text-center max-w-4xl flex-1 mx-auto">
                            <p className="text-accent-300 font-medium text-xl md:text-2xl lg:text-3xl mb-2">{t.home.university}</p>
                            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl mb-6">{t.home.department}</p>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                {t.home.conferenceTitle}
                            </h1>

                            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                                <span className="text-2xl md:text-3xl font-bold text-accent-300">{t.home.conferenceAcronym}</span>
                            </div>

                            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-8 font-medium">
                                {t.home.theme}
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-6">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-base md:text-lg">{t.home.dates}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-base md:text-lg">{t.home.location}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/registration" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                                    {t.home.registerNow}
                                </Link>
                                <a
                                    href="https://icmtogd2026.edas.info/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700"
                                >
                                    {t.home.submitPaper}
                                </a>
                            </div>
                        </div> {/* End Center Content */}

                        {/* Right Logo (Desktop) */}
                        <div className="hidden lg:block w-36 xl:w-48 shrink-0">
                            <img src="/uni_logo.png" alt="University Logo" className="w-full h-auto object-contain rounded-xl bg-white p-3 shadow-xl" />
                        </div>
                    </div> {/* End Flex Layout */}
                </div>
            </section>

            {/* Welcome Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="heading-secondary mb-6">{t.home.welcomeTitle}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                            {t.home.welcomeText}
                        </p>
                        <Link to="/about" className="btn-primary mt-8 inline-flex">
                            {t.home.learnMore}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Conference Brochure Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.home.brochureTitle}</h2>
                        <div className="card overflow-hidden p-4">
                            <div className="flex flex-col gap-4">
                                {brochureImages.map((imgSrc, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={imgSrc}
                                            alt={`${t.home.brochureTitle} - Page ${index + 1}`}
                                            className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform group-hover:scale-[1.01]"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                const fallback = document.createElement('div');
                                                fallback.className = 'w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center';
                                                fallback.innerHTML = `<p class="text-gray-500">Brochure Page ${index + 1}</p>`;
                                                e.target.parentNode.appendChild(fallback);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <a
                                    href={brochurePath}
                                    download={brochureName}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2"
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

            {/* Key Dates Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.home.keyDates}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {keyDates.map((item, index) => (
                            <div key={index} className="card-hover text-center">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-primary-700 mb-2">{item.label}</h3>
                                <p className="text-gray-600">{item.date}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/important-dates" className="btn-secondary">
                            {t.home.learnMore}
                        </Link>
                    </div>
                </div>
            </section>



            {/* Partners Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.partners.title}</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                        <div className="text-center group">
                            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="/partners/mustaqbal.png"
                                    alt={t.partners.mustaqbal}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{t.partners.mustaqbal}</h3>
                        </div>

                        <div className="text-center group">
                            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="/partners/alqalam.jpg"
                                    alt={t.partners.alqalam}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{t.partners.alqalam}</h3>
                        </div>

                        <div className="text-center group">
                            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="/partners/knowledge.png"
                                    alt={t.partners.knowledge}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{t.partners.knowledge}</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics Preview */}
            <section className="section-padding bg-primary-700 text-white">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.about.topics}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[t.about.topic1, t.about.topic2, t.about.topic3, t.about.topic4,
                        t.about.topic5, t.about.topic6, t.about.topic7, t.about.topic8].map((topic, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                                <p className="font-medium">{topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
