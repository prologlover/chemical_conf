import { useLanguage } from '../context/LanguageContext';

const Committees = () => {
    const { t } = useLanguage();

    const honoraryCommittee = [
        {
            name: t.committees.honoraryChair,
            title: t.committees.honoraryChairTitle,
            role: t.committees.chair,
        },
    ];

    const organizingCommittee = [
        {
            name: t.committees.orgChair,
            title: t.committees.orgChairTitle,
            role: t.committees.chair,
        },
        {
            name: t.committees.orgCoChair,
            title: t.committees.orgCoChairTitle,
            role: t.committees.coChair,
        },
        {
            name: t.committees.orgMember1,
            title: t.committees.orgMember1Title,
        },
        {
            name: t.committees.orgMember2,
            title: t.committees.orgMember2Title,
        },
        {
            name: t.committees.orgMember3,
            title: t.committees.orgMember3Title,
        },
    ];

    const scientificCommittee = [
        {
            name: t.committees.sciChair,
            title: t.committees.sciChairTitle,
            role: t.committees.chair,
        },
        {
            name: t.committees.sciMember1,
            title: t.committees.sciMember1Title,
        },
        {
            name: t.committees.sciMember2,
            title: t.committees.sciMember2Title,
        },
        {
            name: t.committees.sciMember3,
            title: t.committees.sciMember3Title,
        },
        {
            name: t.committees.sciMember4,
            title: t.committees.sciMember4Title,
        },
    ];

    const CommitteeCard = ({ member }) => (
        <div className="card-hover">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    {member.role && (
                        <p className="text-sm text-accent-600 font-medium mb-1">{member.role}</p>
                    )}
                    <p className="text-sm text-gray-600">{member.title}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">{t.committees.title}</h1>
                </div>
            </section>

            {/* Honorary Committee */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.committees.honorary}</h2>
                        <div className="space-y-4">
                            {honoraryCommittee.map((member, index) => (
                                <CommitteeCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizing Committee */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.committees.organizing}</h2>
                        <div className="space-y-4">
                            {organizingCommittee.map((member, index) => (
                                <CommitteeCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Scientific Committee */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.committees.scientific}</h2>
                        <div className="space-y-4">
                            {scientificCommittee.map((member, index) => (
                                <CommitteeCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Committees;
