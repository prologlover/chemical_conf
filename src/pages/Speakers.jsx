import { useLanguage } from '../context/LanguageContext';

const Speakers = () => {
    const { t } = useLanguage();

    const speakers = [
        t.speakers.keynote1,
        t.speakers.keynote2,
        t.speakers.keynote3,
        t.speakers.keynote4,
    ];

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.speakers.title}</h1>
                    <p className="text-white/80">{t.speakers.subtitle}</p>
                </div>
            </section>

            {/* Speakers Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="card-hover">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 text-center sm:text-start">
                                        <h3 className="text-xl font-bold text-primary-800 mb-1">{speaker.name}</h3>
                                        <p className="text-gray-500 text-sm mb-3">{speaker.affiliation}</p>

                                        <div className="bg-primary-50 rounded-lg p-3 mb-4">
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium text-primary-700">Topic: </span>
                                                {speaker.topic}
                                            </p>
                                        </div>

                                        <p className="text-gray-600 text-sm leading-relaxed">{speaker.bio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="heading-secondary mb-6">{t.home.registerNow}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Don't miss the opportunity to learn from world-renowned experts in chemical engineering.
                    </p>
                    <a href="/registration" className="btn-primary">
                        {t.home.registerNow}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Speakers;
