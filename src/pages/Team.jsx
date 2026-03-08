import { useLanguage } from '../context/LanguageContext';

const Team = () => {
    const { t } = useLanguage();

    const teamMembers = [
        {
            name: t.team.member1Name,
            title: t.team.member1Title,
            image: '/team/abubakr.jpg', // Placeholder for photo
            linkedin: 'https://www.linkedin.com/in/prologlover/'
        }
    ];

    const TeamCard = ({ member }) => (
        <div className="card-hover">
            <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-md">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            // Show placeholder icon if image doesn't exist
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                                <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            `;
                        }}
                    />
                </div>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                </a>
                <p className="font-medium text-primary-700 mb-1">{member.title}</p>
                <p className="text-sm text-gray-500">{t.team.centerName}</p>
            </div>
        </div>
    );

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.team.title}</h1>
                    <p className="text-white/80 max-w-2xl mx-auto">{t.team.subtitle}</p>
                </div>
            </section>

            {/* Team Content */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-white min-h-[50vh]">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-center">
                            <div className="w-full max-w-sm">
                                {teamMembers.map((member, index) => (
                                    <TeamCard key={index} member={member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
