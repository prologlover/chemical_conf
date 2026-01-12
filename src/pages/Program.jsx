import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Program = () => {
    const { t } = useLanguage();
    const [activeDay, setActiveDay] = useState(0);

    const days = [
        {
            title: t.program.day1,
            events: [
                { time: '08:00 - 09:00', title: t.program.registration, type: 'registration' },
                { time: '09:00 - 09:30', title: t.program.opening, type: 'ceremony' },
                { time: '09:30 - 10:30', title: `${t.program.keynote} 1`, type: 'keynote' },
                { time: '10:30 - 11:00', title: 'Coffee Break', type: 'break' },
                { time: '11:00 - 12:30', title: `${t.program.session}: ${t.program.session1}`, type: 'session' },
                { time: '12:30 - 14:00', title: t.program.lunch, type: 'break' },
                { time: '14:00 - 15:30', title: `${t.program.session}: ${t.program.session2}`, type: 'session' },
                { time: '15:30 - 16:00', title: 'Coffee Break', type: 'break' },
                { time: '16:00 - 17:30', title: t.program.poster, type: 'poster' },
                { time: '19:00 - 21:00', title: t.program.networking, type: 'networking' },
            ],
        },
        {
            title: t.program.day2,
            events: [
                { time: '09:00 - 10:00', title: `${t.program.keynote} 2`, type: 'keynote' },
                { time: '10:00 - 10:30', title: 'Coffee Break', type: 'break' },
                { time: '10:30 - 12:00', title: `${t.program.session}: ${t.program.session3}`, type: 'session' },
                { time: '12:00 - 13:30', title: t.program.lunch, type: 'break' },
                { time: '13:30 - 14:30', title: `${t.program.keynote} 3`, type: 'keynote' },
                { time: '14:30 - 16:00', title: `${t.program.session}: ${t.program.session4}`, type: 'session' },
                { time: '16:00 - 16:30', title: 'Coffee Break', type: 'break' },
                { time: '16:30 - 18:00', title: t.program.workshop, type: 'workshop' },
                { time: '19:30 - 22:00', title: t.program.dinner, type: 'dinner' },
            ],
        },
        {
            title: t.program.day3,
            events: [
                { time: '09:00 - 10:00', title: `${t.program.keynote} 4`, type: 'keynote' },
                { time: '10:00 - 10:30', title: 'Coffee Break', type: 'break' },
                { time: '10:30 - 12:00', title: `${t.program.session}: ${t.program.session5}`, type: 'session' },
                { time: '12:00 - 13:30', title: t.program.lunch, type: 'break' },
                { time: '13:30 - 15:00', title: `${t.program.session}: ${t.program.session6}`, type: 'session' },
                { time: '15:00 - 15:30', title: 'Coffee Break', type: 'break' },
                { time: '15:30 - 16:30', title: t.program.panel, type: 'panel' },
                { time: '16:30 - 17:30', title: t.program.closing, type: 'ceremony' },
            ],
        },
    ];

    const getEventStyle = (type) => {
        switch (type) {
            case 'keynote':
                return 'bg-primary-100 border-l-4 border-primary-700';
            case 'session':
                return 'bg-accent-50 border-l-4 border-accent-500';
            case 'workshop':
                return 'bg-purple-50 border-l-4 border-purple-500';
            case 'ceremony':
                return 'bg-amber-50 border-l-4 border-amber-500';
            case 'poster':
                return 'bg-green-50 border-l-4 border-green-500';
            case 'panel':
                return 'bg-indigo-50 border-l-4 border-indigo-500';
            case 'networking':
            case 'dinner':
                return 'bg-rose-50 border-l-4 border-rose-500';
            case 'break':
                return 'bg-gray-100 border-l-4 border-gray-400';
            default:
                return 'bg-gray-50';
        }
    };

    return (
        <div>
            {/* Page Header */}
            <section className="bg-primary-700 text-white py-16">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.program.title}</h1>
                    <p className="text-white/80">{t.program.subtitle}</p>
                </div>
            </section>

            {/* Program Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    {/* Day Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {days.map((day, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveDay(index)}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeDay === index
                                        ? 'bg-primary-700 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {day.title}
                            </button>
                        ))}
                    </div>

                    {/* Schedule */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {days[activeDay].events.map((event, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-lg ${getEventStyle(event.type)}`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="font-mono text-sm text-gray-600 sm:w-32 flex-shrink-0">
                                            {event.time}
                                        </span>
                                        <h3 className="font-medium text-gray-800">{event.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-primary-700 rounded"></div>
                                <span className="text-sm text-gray-600">{t.program.keynote}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-accent-500 rounded"></div>
                                <span className="text-sm text-gray-600">{t.program.session}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                                <span className="text-sm text-gray-600">{t.program.workshop}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-amber-500 rounded"></div>
                                <span className="text-sm text-gray-600">{t.program.opening}/{t.program.closing}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;
