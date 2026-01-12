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

            {/* Registration Fees */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.registration.categories}</h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary-700 text-white">
                                        <th className="px-6 py-4 text-start font-semibold rounded-tl-lg">{t.registration.categories}</th>
                                        <th className="px-6 py-4 text-center font-semibold">{t.registration.early}</th>
                                        <th className="px-6 py-4 text-center font-semibold rounded-tr-lg">{t.registration.late}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((cat, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="px-6 py-4 font-medium text-gray-800">{cat.type}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
                                                    {cat.early}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold">
                                                    {cat.late}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="heading-secondary text-center mb-12">{t.registration.included}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {includes.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Register Button */}
            <section className="section-padding bg-primary-700 text-white">
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">{t.registration.registerButton}</h2>
                        <p className="text-white/80 mb-8">{t.registration.registerInfo}</p>

                        <a
                            href="https://docs.google.com/forms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {t.registration.registerButton}
                        </a>
                    </div>
                </div>
            </section>

            {/* Payment Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="card">
                            <h3 className="heading-tertiary mb-4">{t.registration.paymentInfo}</h3>
                            <p className="text-gray-600 mb-6">{t.registration.paymentText}</p>
                            <p className="text-gray-600">{t.registration.contactInfo}</p>
                            <p className="text-primary-700 font-medium mt-2">{t.contact.emailAddress}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
