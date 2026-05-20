import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  description,
  align = 'center', // center, left
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-12 max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
          {subtitle}
        </span>
      )}
      
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
        {title}
      </h2>
      
      {description && (
        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal mt-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
