'use server'

import { revalidatePath } from 'next/cache'

export type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

export type ActionResult = {
  success: boolean
  message: string
  errors?: Record<string, string>
}

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  try {
    // Extract form data
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    }

    // Validation
    const errors: Record<string, string> = {}
    
    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'نام باید حداقل 2 کاراکتر باشد'
    }
    
    if (!data.email || !isValidEmail(data.email)) {
      errors.email = 'لطفا ایمیل معتبر وارد کنید'
    }
    
    if (!data.phone || data.phone.trim().length < 10) {
      errors.phone = 'شماره تماس معتبر وارد کنید'
    }
    
    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'پیام باید حداقل 10 کاراکتر باشد'
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'لطفا خطاهای فرم را اصلاح کنید',
        errors
      }
    }

    // Simulate API call to send email/save to database
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real application, you would:
    // 1. Send an email using services like Resend, SendGrid, etc.
    // 2. Save to database
    // 3. Send notification to admin
    
    console.log('Contact form submitted:', data)

    // Revalidate the contact page
    revalidatePath('/contact')

    return {
      success: true,
      message: 'پیام شما با موفقیت ارسال شد! در اسرع وقت با شما تماس خواهیم گرفت.'
    }

  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message: 'خطایی در ارسال پیام رخ داد. لطفا دوباره تلاش کنید.'
    }
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Newsletter subscription action
export async function subscribeNewsletter(formData: FormData): Promise<ActionResult> {
  try {
    const email = formData.get('email') as string

    if (!email || !isValidEmail(email)) {
      return {
        success: false,
        message: 'لطفا ایمیل معتبر وارد کنید'
      }
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('Newsletter subscription:', email)

    return {
      success: true,
      message: 'با موفقیت در خبرنامه عضو شدید!'
    }

  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return {
      success: false,
      message: 'خطایی رخ داد. لطفا دوباره تلاش کنید.'
    }
  }
}
