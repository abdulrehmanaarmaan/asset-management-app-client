import React from 'react';

const SkeletonLoader = ({ count = 6 }) => {
    return (
        <>
            {
                Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse bg-base-100 border border-gray-200 rounded-xl p-5 shadow-sm"
                    >
                        {/* Title */}
                        <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>

                        {/* Main number */}
                        <div className="h-8 w-3/4 bg-gray-300 rounded mb-6"></div>

                        {/* Footer */}
                        <div className="flex justify-between items-center">
                            <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
                            <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default SkeletonLoader;
