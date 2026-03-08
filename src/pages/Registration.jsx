import { useLanguage } from '../context/LanguageContext';

const Registration = () => {
    const { t } = useLanguage();

    const categories = [
        {
            type: t.registration.regular,
            early: t.registration.price1,
            late: t.registration.price2,
        },
        {
            type: t.registration.student,
            early: t.registration.price3,
            late: t.registration.price4,
        },
        {
            type: t.registration.virtual,
            early: t.registration.price5,
            late: t.registration.price6,
        },
    ];

    const includes = [
        t.registration.include1,
        t.registration.include2,
        t.registration.include3,
        t.registration.include4,
        t.registration.include5,
    ];

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.registration.title}</h1>
                    <p className="text-white/80">{t.registration.subtitle}</p>
                </div>
            </section>

            {/* Registration Form */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto py-16">
                        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                            <svg className="w-16 h-16 mx-auto mb-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8" dir="auto">
                                {t.registration.formText}
                            </h2>
                            <a
                                href="https://forms.gle/u99nQteHc9UfgNbq8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-600 border border-transparent rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                            >
                                <span>Google Form</span>
                                <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
