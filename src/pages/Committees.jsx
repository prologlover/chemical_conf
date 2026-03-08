import { useLanguage } from '../context/LanguageContext';

const Committees = () => {
    const { t } = useLanguage();

    const supervisoryCommittee = [
        {
            name: t.committees.supMember4,
            title: t.committees.supMember4Title,
            image: '/supervisory/member4.jpg', // Placeholder for photo
        },
        {
            name: t.committees.supMember1,
            title: t.committees.supMember1Title,
            image: '/supervisory/member1.jpg', // Placeholder for photo
        },
        {
            name: t.committees.supMember3,
            title: t.committees.supMember3Title,
            image: '/supervisory/member3.jpg', // Placeholder for photo
        },
        {
            name: t.committees.supMember2,
            title: t.committees.supMember2Title,
            image: '/supervisory/member2.jpg', // Placeholder for photo
        },
        {
            name: t.committees.supMember5,
            title: t.committees.supMember5Title,
            image: '/supervisory/member5.jpg', // Placeholder for photo
        },
        {
            name: t.committees.supMember6,
            title: t.committees.supMember6Title,
            image: '/supervisory/member6.jpg', // Placeholder for photo
        },
        // President (Al-Qalam)
        {
            name: t.committees.supMember7,
            title: t.committees.supMember7Title,
            image: '/supervisory/latif.jpeg',
        },
        // President (Knowledge)
        {
            name: t.committees.supMember8,
            title: t.committees.supMember8Title,
            image: '/supervisory/ahmedanwar.jpeg',
        },
        // Dean (Al-Mustaqbal Engineering)
        {
            name: t.committees.supMember11,
            title: t.committees.supMember11Title,
            image: '/supervisory/placeholder.jpg',
        },
        // Dean (Al-Mustaqbal Engineering Tech)
        {
            name: t.committees.supMember12,
            title: t.committees.supMember12Title,
            image: '/supervisory/placeholder.jpg',
        },
        // Vice President (Al-Qalam)
        {
            name: t.committees.supMember10,
            title: t.committees.supMember10Title,
            image: '/supervisory/ayden.jpeg',
        },
        // Vice President (Knowledge)
        {
            name: t.committees.supMember9,
            title: t.committees.supMember9Title,
            image: '/supervisory/placeholder.jpg',
        },
    ];

    // Hidden committees - uncomment if needed
    // const honoraryCommittee = [
    //     {
    //         name: t.committees.honoraryChair,
    //         title: t.committees.honoraryChairTitle,
    //         role: t.committees.chair,
    //     },
    // ];

    const organizingCommittee = [
        {
            name: t.committees.orgMember1,
            title: t.committees.orgMember1Title,
            image: '/supervisory/wasan.jpeg',
        },
        {
            name: t.committees.orgMember3,
            title: t.committees.orgMember3Title,
            image: '/supervisory/marwan.jpeg',
        },
        {
            name: t.committees.orgMember4,
            title: t.committees.orgMember4Title,
            image: '/supervisory/abdulkader.jpeg',
        },
    ];

    const scientificCommittee = [
        {
            name: t.committees.sciMember1,
            title: t.committees.sciMember1Title,
            image: '/supervisory/talib.jpg',
        },
        {
            name: t.committees.sciMember2,
            title: t.committees.sciMember2Title,
            image: '/supervisory/dana.jpeg',
        },
        {
            name: t.committees.sciMember3,
            title: t.committees.sciMember3Title,
            image: '/supervisory/Dr.Rasan .jpeg',
        },
        {
            name: t.committees.sciMember4,
            title: t.committees.sciMember4Title,
            image: '/supervisory/rebwar.jpeg',
        },
    ];

    const preparatoryCommittee = [
        {
            name: t.committees.prepMember1,
            title: t.committees.prepMember1Title,
        },
        {
            name: t.committees.prepMember2,
            title: t.committees.prepMember2Title,
        },
        {
            name: t.committees.prepMember3,
            title: t.committees.prepMember3Title,
        },
        {
            name: t.committees.prepMember4,
            title: t.committees.prepMember4Title,
        },
    ];

    const CommitteeCard = ({ member }) => (
        <div className="card-hover">
            <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `
                                    <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                `;
                            }}
                        />
                    ) : (
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    )}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{member.name}</h3>
                {member.role && (
                    <p className="text-sm text-accent-600 font-medium mb-1">{member.role}</p>
                )}
                <p className="text-sm text-gray-600">{member.title}</p>
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

            {/* Supervisory Committee */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="heading-secondary text-center mb-12">{t.committees.supervisory}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {supervisoryCommittee.map((member, index) => (
                                <CommitteeCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hidden committees - uncomment sections below if needed */}

            {/* Honorary Committee */}
            {/* <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.committees.honorary}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {honoraryCommittee.map((member, index) => (
                                <CommitteeCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Scientific Committee */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.committees.scientific}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {scientificCommittee.map((member, index) => (
                                <CommitteeCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizing Committee (Hidden) */}
            {/* <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.committees.organizing}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {organizingCommittee.map((member, index) => (
                                <CommitteeCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Preparatory Committee (Now includes organizing) */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-secondary text-center mb-8">{t.committees.preparatory}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...organizingCommittee, ...preparatoryCommittee].map((member, index) => (
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
