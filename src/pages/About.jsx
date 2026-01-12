import { motion } from 'framer-motion';
import { Users, Shield, Zap } from 'lucide-react';
import { use } from 'react';
import { useNavigate } from 'react-router';
import useUserInfo from '../hooks/UseUserInfo';
import { AuthContext } from '../contexts/AuthContext';

const About = () => {

    const { user } = use(AuthContext);

    const { role } = useUserInfo();

    const navigate = useNavigate();

    const handleGetStarted = () => {

        if (user && role === 'hr') {
            navigate('/dashboard/asset-list')
        }
        else if (user && role === 'employee') {
            navigate('/dashboard/request-asset')
        }
        else {
            navigate('/login')
        }
    }

    return (
        <div className="w-full overflow-hidden">

            {/* Hero Section */}
            <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-gray-50">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900"
                >
                    About AssetVerse
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-4 max-w-3xl text-lg text-gray-600"
                >
                    AssetVerse is a modern asset management platform that helps companies streamline operations,
                    track assets, and manage teams efficiently. Our mission is to simplify workflows, enhance transparency,
                    and make asset tracking effortless for HRs and employees alike.
                </motion.p>
            </section>

            {/* Features / Highlights Section */}
            <section className="py-20 px-6">
                <h2 className="text-3xl font-semibold text-gray-800 tracking-tight mb-6 text-center">
                    Why Choose AssetVerse?
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-300">
                        <Users className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Team Collaboration</h3>
                        <p className="text-gray-600 text-sm">
                            Connect teams seamlessly, assign assets efficiently, and enhance workflow transparency.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-300">
                        <Shield className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Security & Reliability</h3>
                        <p className="text-gray-600 text-sm">
                            Enterprise-grade data protection ensures your company’s information is safe at all times.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-300">
                        <Zap className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Fast & Optimized</h3>
                        <p className="text-gray-600 text-sm">
                            Experience smooth operations with a platform built for efficiency and speed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team / Info Section */}
            <section className="py-20 px-6 bg-gray-50 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 tracking-tight mb-6">
                    Our Mission
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-10">
                    We aim to empower HRs and employees by providing a **centralized, secure, and intuitive** platform
                    that simplifies asset management, boosts productivity, and ensures accountability.
                </p>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-300">
                        <h3 className="font-semibold text-lg mb-2">Vision</h3>
                        <p className="text-gray-600 text-sm">
                            To become the go-to asset management solution for organizations worldwide.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-300">
                        <h3 className="font-semibold text-lg mb-2">Values</h3>
                        <p className="text-gray-600 text-sm">
                            Security, efficiency, transparency, and user-first design drive everything we do.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-300">
                        <h3 className="font-semibold text-lg mb-2">Commitment</h3>
                        <p className="text-gray-600 text-sm">
                            Continuous improvement and reliable support to help teams succeed effortlessly.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 text-center bg-blue-600 text-white">
                <h2 className="text-3xl font-semibold tracking-tight mb-6">
                    Ready to Modernize Your Workflow?
                </h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Join AssetVerse today and start managing assets and teams with confidence.
                </p>
                <button
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer"
                    onClick={handleGetStarted}
                >
                    Get Started
                </button>
            </section>

        </div>
    );
};

export default About;

