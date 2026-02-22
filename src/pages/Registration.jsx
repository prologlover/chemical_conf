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

            {/* Coming Soon */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <div className="max-w-xl mx-auto py-16">
                        <svg className="w-20 h-20 mx-auto mb-6 text-primary-700 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-3xl font-bold text-primary-700 mb-3">Coming Soon</h2>
                        <p className="text-2xl font-bold text-primary-700 mb-6">قريباً</p>
                        <p className="text-gray-500 text-lg">Registration details will be announced soon.</p>
                        <p className="text-gray-500 text-lg mt-1">سيتم الإعلان عن تفاصيل التسجيل قريباً.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
