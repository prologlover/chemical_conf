import { useLanguage } from '../context/LanguageContext';

const ImportantDates = () => {
    const { t } = useLanguage();

    const dates = [
        { label: t.importantDates.abstractSubmission, date: t.importantDates.date1, icon: 'start' },
        { label: t.importantDates.abstractDeadline, date: t.importantDates.date2, icon: 'deadline' },
        { label: t.importantDates.fullPaperDeadline, date: t.importantDates.date3, icon: 'deadline' },
        { label: t.importantDates.notification, date: t.importantDates.date4, icon: 'notification' },
        { label: t.importantDates.cameraReady, date: t.importantDates.date5, icon: 'deadline' },
        { label: t.importantDates.earlyRegistration, date: t.importantDates.date6, icon: 'registration' },
        { label: t.importantDates.lateRegistration, date: t.importantDates.date7, icon: 'registration' },
        { label: t.importantDates.conferenceStart, date: t.importantDates.date8, icon: 'conference' },
        { label: t.importantDates.conferenceEnd, date: t.importantDates.date9, icon: 'conference' },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'start':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                );
            case 'deadline':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'notification':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                );
            case 'registration':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                );
            case 'conference':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.importantDates.title}</h1>
                    <p className="text-white/80">{t.importantDates.subtitle}</p>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />

                            <div className="space-y-6">
                                {dates.map((item, index) => (
                                    <div key={index} className="relative flex items-start gap-6">
                                        {/* Icon */}
                                        <div className="relative z-10 w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                            {getIcon(item.icon)}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 card-hover">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <h3 className="font-semibold text-primary-800">{item.label}</h3>
                                                <span className="inline-flex items-center px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full font-medium text-sm">
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="heading-secondary mb-6">{t.home.registerNow}</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#" className="btn-primary">{t.callForPapers.submitOnline}</a>
                            <a href="/registration" className="btn-secondary">{t.home.registerNow}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImportantDates;
