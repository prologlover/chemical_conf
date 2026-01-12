import { useLanguage } from '../context/LanguageContext';

const CallForPapers = () => {
    const { t } = useLanguage();

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

    const guidelines = [
        t.callForPapers.guideline1,
        t.callForPapers.guideline2,
        t.callForPapers.guideline3,
        t.callForPapers.guideline4,
        t.callForPapers.guideline5,
    ];

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">{t.callForPapers.title}</h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-600 leading-relaxed text-lg text-center">
                            {t.callForPapers.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* Topics */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.callForPapers.topics}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {topics.map((topic, index) => (
                            <div key={index} className="card flex items-center gap-3">
                                <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                </div>
                                <span className="text-gray-700 font-medium">{topic}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submission Guidelines */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.callForPapers.guidelines}</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {guidelines.map((guideline, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-gray-600">{guideline}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Template & Submission */}
            <section className="section-padding bg-primary-700 text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Template Download */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{t.callForPapers.template}</h3>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {t.callForPapers.downloadTemplate}
                                </a>
                            </div>

                            {/* Online Submission */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{t.callForPapers.submissionPortal}</h3>
                                <p className="text-white/80 text-sm mb-6">{t.callForPapers.submissionInfo}</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    {t.callForPapers.submitOnline}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CallForPapers;
