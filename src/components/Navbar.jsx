import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { t, toggleLanguage, language, isRTL } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/committees', label: t.nav.committees },
        { path: '/call-for-papers', label: t.nav.callForPapers },
        { path: '/important-dates', label: t.nav.importantDates },
        { path: '/program', label: t.nav.program },
        { path: '/speakers', label: t.nav.speakers },
        { path: '/registration', label: t.nav.registration },
        { path: '/contact', label: t.nav.contact },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-primary-700 shadow-lg sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/logo.jpg"
                            alt="Department Logo"
                            className="h-12 w-auto rounded-md object-contain"
                        />
                        <span className="text-white font-semibold text-sm hidden sm:block">ICMTOGI 2026</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.path)
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Language Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1.5 text-sm font-medium bg-white text-primary-700 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            {language === 'en' ? 'العربية' : 'EN'}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.path)
                                        ? 'bg-white/20 text-white'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
