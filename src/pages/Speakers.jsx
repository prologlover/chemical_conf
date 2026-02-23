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

            {/* Coming Soon */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center py-20">
                    <p className="text-2xl font-semibold text-primary-700 mb-4">Coming Soon</p>
                    <p className="text-xl text-gray-500">قريباً</p>
                </div>
            </section>
        </div>
    );
};

export default Speakers;
