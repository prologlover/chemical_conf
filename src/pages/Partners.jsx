import { useLanguage } from '../context/LanguageContext';

const Partners = () => {
    const { t } = useLanguage();

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">{t.partners.title}</h1>
                </div>
            </section>

            {/* Partners Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                        <div className="text-center group">
                            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 flex items-center justify-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                                <img
                                    src="/partners/alqalam.jpg"
                                    alt={t.partners.alqalam}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">{t.partners.alqalam}</h3>
                        </div>

                        <div className="text-center group">
                            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 flex items-center justify-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                                <img
                                    src="/partners/knowledge.png"
                                    alt={t.partners.knowledge}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">{t.partners.knowledge}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
