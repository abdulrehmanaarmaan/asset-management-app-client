import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../hooks/UseAxiosSecure';
import Loader from '../components/Loader';

const AssetDetails = () => {

    const { id } = useParams();

    const axiosInstanceSecure = useAxiosSecure();

    const { data: asset, isLoading, isError } = useQuery({
        queryKey: ['assets', id],
        enabled: !!id,
        queryFn: async () => {
            const result = await axiosInstanceSecure.get(`/assets/${id}`);
            return result?.data
        }
    })

    console.log(asset)

    const navigate = useNavigate();

    if (isLoading) return <Loader></Loader>;

    if (isError || !asset) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-600">Asset not found</h2>
                <button className="btn btn-sm btn-outline mt-4" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        )
    }

    const { productImage, productName, companyName, productType, productQuantity, availableQuantity,
        dateAdded, hrEmail } = asset;

    return (
        <div className="max-w-4xl mx-auto px-4">

            <h1 className="text-3xl font-semibold text-gray-800 tracking-tight text-center mb-6 heading">
                {productName}
            </h1>
            <p className="text-2xl font-bold mb-6 text-center text-gray-600 sub-heading">{companyName}</p>

            {/* Optional: show where user came from */}

            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Asset Image */}
                    <img
                        src={productImage}
                        alt={productName}
                        className="h-32 w-32 mask mask-squircle object-cover mx-auto md:mx-0"
                    />

                    {/* Asset Basic Info */}
                    <div className="flex-1">
                        <div className="mt-2 flex gap-2 flex-wrap">
                            <span
                                className={`badge text-[12px] font-semibold ${productType === 'Returnable'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}
                            >
                                {productType}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Asset Details Grid */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <div>
                        <h3 className="font-semibold text-gray-800 heading">Total Quantity:</h3>
                        <p className='text-lg font-medium'>{productQuantity}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 heading">Available Quantity:</h3>
                        <p className='text-lg font-medium'>{availableQuantity}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 heading">Date Added:</h3>
                        <p>{new Date(dateAdded).toLocaleDateString()}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 heading">HR Email:</h3>
                        <p>{hrEmail}</p>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-gray-800 heading">Company Name:</h3>
                        <p>{companyName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetDetails;
