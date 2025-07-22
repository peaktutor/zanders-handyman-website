import Button from '../ui/Button'
import Card from '../ui/Card'

interface PricingPlan {
  name: string
  price: string
  setupFee: string
  monthlyFee: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonVariant?: 'primary' | 'secondary' | 'outline'
}

const plans: PricingPlan[] = [
  {
    name: 'Foundation',
    price: '$199',
    setupFee: '$199',
    monthlyFee: '$29',
    description: 'Perfect for small businesses and startups getting their first professional website online.',
    features: [
      'Up to 5 custom pages',
      'Mobile-responsive design',
      'Basic SEO optimization',
      'Contact forms with email notifications',
      'Google Analytics integration',
      'SSL certificate included',
      'Monthly performance reports',
      'Same-day email support'
    ],
    buttonText: 'Start with Foundation',
    buttonVariant: 'outline'
  },
  {
    name: 'Growth',
    price: '$499',
    setupFee: '$499',
    monthlyFee: '$49',
    description: 'Most popular choice for established businesses ready to accelerate their online presence.',
    features: [
      'Up to 10 custom pages',
      'Blog functionality with CMS',
      'Advanced SEO optimization',
      'Lead generation forms',
      'Google Analytics & Search Console',
      'Social media integration',
      'Local business schema markup',
      'Priority email & phone support',
      'Quarterly strategy consultations'
    ],
    popular: true,
    buttonText: 'Choose Growth',
    buttonVariant: 'primary'
  },
  {
    name: 'Enterprise',
    price: '$999',
    setupFee: '$999',
    monthlyFee: '$99',
    description: 'Comprehensive solution for businesses requiring advanced functionality and custom features.',
    features: [
      'Unlimited custom pages',
      'E-commerce integration (Stripe/PayPal)',
      'Advanced custom functionality',
      'Multi-location SEO optimization',
      'Conversion rate optimization',
      'A/B testing setup',
      'Advanced analytics & reporting',
      'Priority phone support',
      'Monthly strategy consultations',
      'Custom integrations & APIs'
    ],
    buttonText: 'Go Enterprise',
    buttonVariant: 'secondary'
  }
]

export function PricingTable() {
  return (
    <div className="space-y-12">
      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`relative p-8 ${
              plan.popular 
                ? 'border-2 border-blue-600 shadow-xl transform scale-105' 
                : 'hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Orbitron']">
                {plan.name}
              </h3>
              <div className="mb-3">
                <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                <span className="text-gray-600 ml-2">setup</span>
              </div>
              <div className="text-xl text-gray-700 mb-3">
                <span className="font-semibold">{plan.monthlyFee}</span>
                <span className="text-gray-600">/month hosting</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {plan.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full text-center"
                href="/contact"
              >
                {plan.buttonText}
              </Button>
              
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  No contracts • Cancel anytime • 100% satisfaction guarantee
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Value Propositions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Hidden Fees</h3>
          <p className="text-gray-600">
            What you see is what you pay. Setup fee + monthly hosting. No surprises, no upsells, no contracts.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
          <p className="text-gray-600">
            Our websites average 285% more traffic and 340% more leads compared to DIY platforms.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Montana Local</h3>
          <p className="text-gray-600">
            Face-to-face meetings, same-day support, and deep understanding of Montana business needs.
          </p>
        </div>
      </div>

      {/* Payment Options */}
      <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Orbitron']">
            Flexible Payment Options
          </h3>
          <p className="text-gray-600">
            We understand cash flow matters for small businesses. Choose what works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Pay in Full</h4>
            <p className="text-gray-600 mb-3">
              Save with upfront payment. Setup fee paid at project start, monthly hosting begins after launch.
            </p>
            <div className="text-sm text-green-600 font-semibold">
              ✓ No additional fees
            </div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Payment Plans</h4>
            <p className="text-gray-600 mb-3">
              Split setup fee over 3, 6, or 12 months with zero interest. Monthly hosting billed separately.
            </p>
            <div className="text-sm text-blue-600 font-semibold">
              ✓ 0% interest • No credit check
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}