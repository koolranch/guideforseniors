"use client";

import * as React from 'react';
import { Community } from '@/data/facilities';

interface CommunityCareTypesProps {
  community: Community;
}

export default function CommunityCareTypes({ community }: CommunityCareTypesProps) {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Care Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {community.careTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {type}
              </h3>
              <p className="text-gray-600">
                {type === 'Independent Living' && 'Perfect for active seniors who want maintenance-free living with amenities and social opportunities.'}
                {type === 'Assisted Living' && 'Ideal for seniors who need help with daily activities while maintaining independence.'}
                {type === 'Memory Care' && 'Specialized care for seniors with Alzheimer's or other forms of dementia.'}
                {type === 'Skilled Nursing' && '24/7 medical care and supervision for seniors with complex health needs.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 