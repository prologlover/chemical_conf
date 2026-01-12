import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    const quickLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/call-for-papers', label: t.nav.callForPapers },
        { path: '/registration', label: t.nav.registration },
        { path: '/contact', label: t.nav.contact },
    ];

    return (
        <footer className="bg-primary-800 text-white">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Conference Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.jpg"
                                alt="Department Logo"
                                className="h-12 w-auto rounded-md object-contain"
                            />
                            <div>
                                <h3 className="font-bold text-lg">ICMTOGI 2026</h3>
                                <p className="text-sm text-white/70">{t.home.department}</p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {t.home.university}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">{t.footer.contact}</h4>
                        <div className="space-y-3 text-sm text-white/70">
                            <p className="flex items-start gap-2">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{t.contact.emailAddress}</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>{t.contact.phoneNumber}</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Baghdad, Iraq</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-8 pt-8 text-center">
                    <p className="text-white/70 text-sm mb-2">{t.footer.organizedBy}</p>
                    <p className="text-white/60 text-xs mb-2">{t.footer.designedBy}</p>
                    <p className="text-white/50 text-xs">{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
