import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Bell, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../utils/api';

const Subscribe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post('/api/subscribers', data);
      if (response.data.message) {
        toast.success('Successfully subscribed! You will receive updates soon.');
        setIsSubscribed(true);
        reset();
      }
    } catch (error) {
      const message = error.response?.data?.error || 'Subscription failed. Please try again.';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Successfully Subscribed!
          </h2>
          <p className="text-gray-600 mb-6">
            You will now receive updates about new government schemes and opportunities.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Bell className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Stay Updated
          </h2>
          <p className="mt-2 text-gray-600">
            Get notified about new government schemes and opportunities that match your interests.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`appearance-none relative block w-full pl-10 pr-3 py-2 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                Areas of Interest
              </label>
              <select
                id="interests"
                {...register('interests', { required: 'Please select an area of interest' })}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Select an area</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="agriculture">Agriculture</option>
                <option value="employment">Employment</option>
                <option value="housing">Housing</option>
                <option value="women-empowerment">Women Empowerment</option>
                <option value="senior-citizens">Senior Citizens</option>
                <option value="disability">Disability</option>
                <option value="all">All Areas</option>
              </select>
              {errors.interests && (
                <p className="mt-1 text-sm text-red-600">{errors.interests.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                {...register('newsletter')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                Also subscribe to our newsletter for general updates
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Subscribing...
                </div>
              ) : (
                'Subscribe for Updates'
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe; 