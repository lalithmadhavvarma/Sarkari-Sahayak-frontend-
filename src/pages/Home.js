import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Users, Award, ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Search,
      title: 'Easy Search',
      description: 'Find government schemes tailored to your needs with our intelligent search system.'
    },
    {
      icon: TrendingUp,
      title: 'Latest Updates',
      description: 'Stay informed about new schemes and policy changes in real-time.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others and share experiences about government schemes.'
    },
    {
      icon: Award,
      title: 'Verified Information',
      description: 'All scheme information is verified and sourced from official government portals.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Schemes Listed' },
    { number: '10K+', label: 'Users Helped' },
    { number: '50+', label: 'Categories' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Government Schemes
              <span className="block text-blue-200">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Find and understand government schemes you're eligible for. 
              Get personalized recommendations and stay updated with the latest opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schemes"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <Search className="mr-2 h-5 w-5" />
                Explore Schemes
              </Link>
              <Link
                to="/subscribe"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sarkari Sahayak?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make government schemes accessible, understandable, and actionable for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Scheme?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover government schemes that can change your life. 
            Get personalized recommendations and stay updated with the latest opportunities.
          </p>
          <Link
            to="/schemes"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Explore Schemes Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 