import Link from "next/link";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  status: string;
  href: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function ProductCard({
  title,
  subtitle,
  description,
  features,
  status,
  href,
  icon,
  gradient
}: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            {icon}
          </div>
          <span className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
            {status}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-[var(--dreamlit-purple)] dark:text-[var(--dreamlit-purple-light)] font-medium mb-4">
          {subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--sui-blue)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-[var(--dreamlit-purple)] hover:text-[var(--dreamlit-purple-dark)] font-medium"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}