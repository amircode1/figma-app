'use client'

import { useActionState, useEffect, useState } from 'react';
import { submitContactForm, type ActionResult } from '../../lib/actions';

const ContactForm = () => {
  const formActionWrapper = async (prevState: ActionResult | null, formData: FormData): Promise<ActionResult | null> => {
    return await submitContactForm(formData);
  };

  const [state, formAction, pending] = useActionState<ActionResult | null, FormData>(
    formActionWrapper,
    null
  );
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
      // Reset form by reloading the component
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-8">
      <h2 className="text-2xl font-bold text-white mb-6 font-morabba text-right">
        ارتباط با ما
      </h2>
      
      {showSuccess && state?.success && (
        <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-right">
          {state.message}
        </div>
      )}

      {state && !state.success && (
        <div className="mb-6 p-4 bg-red-600 text-white rounded-lg text-right">
          {state.message}
        </div>
      )}
      
      <form action={formAction} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
              placeholder="نام و نام خانوادگی"
              dir="rtl"
              disabled={pending}
            />
            {state?.errors?.name && (
              <p className="text-red-400 text-sm mt-1 text-right">{state.errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              required
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
              placeholder="شماره تماس"
              dir="rtl"
              disabled={pending}
            />
            {state?.errors?.phone && (
              <p className="text-red-400 text-sm mt-1 text-right">{state.errors.phone}</p>
            )}
          </div>
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
            placeholder="ایمیل"
            dir="rtl"
            disabled={pending}
          />
          {state?.errors?.email && (
            <p className="text-red-400 text-sm mt-1 text-right">{state.errors.email}</p>
          )}
        </div>
        
        <div>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 resize-none"
            placeholder="پیام شما"
            dir="rtl"
            disabled={pending}
          ></textarea>
          {state?.errors?.message && (
            <p className="text-red-400 text-sm mt-1 text-right">{state.errors.message}</p>
          )}
        </div>
        
        <div className="text-left">
          <button
            type="submit"
            disabled={pending}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            {pending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                در حال ارسال...
              </>
            ) : (
              'ارسال پیام'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
