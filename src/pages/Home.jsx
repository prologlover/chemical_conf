import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();

    const keyDates = [
        { label: t.home.abstractDeadline, date: t.importantDates.date2 },
        { label: t.home.fullPaperDeadline, date: t.importantDates.date3 },
        { label: t.home.notificationDate, date: t.importantDates.date4 },
        { label: t.home.conferenceDate, date: t.importantDates.date8 },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden min-h-screen flex items-center">
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
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-accent-300 font-medium text-base md:text-lg mb-1">{t.home.university}</p>
                        <p className="text-white/80 text-base md:text-lg mb-4">{t.home.department}</p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                            {t.home.conferenceTitle}
                        </h1>

                        <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                            <span className="text-2xl md:text-3xl font-bold text-accent-300">{t.home.conferenceAcronym}</span>
                        </div>

                        <p className="text-xl md:text-2xl text-white/90 mb-6 font-light">
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
                            <Link to="/call-for-papers" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
                                {t.home.submitPaper}
                            </Link>
                        </div>
                    </div>
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

            {/* Key Dates Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.home.keyDates}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
