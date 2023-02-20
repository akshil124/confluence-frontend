import React from 'react';
import PricingOffers from './PricingOffers';
const Plan = () => {
    const planPage = [{ planType: 'Basic', price: '5', message: ['Get started with messaging', 'Flexible team meetings', '5 TB cloud storage'] },
        { planType: 'StartUp', price: '25', message: ['All features in Basic', 'Flexible call scheduling ', '15 TB cloud storage'] },
        { planType: 'Enterprise', price: '35', message: ['All features in Startup', 'Growth oriented', 'Unlimited cloud storage'] }];
    return (<div className="font-sans bg-gray-100">
        <div className="min-h-screen flex justify-center items-center">
            <div className="">
                <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                        <span className="text-blue-700 tracking-wide">Flexible </span>
                        <span>Plans</span>
                    </h1>
                    <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                    Choose a plan that works best for you and<br/> your team.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-16 space-y-16 lg:flex-row lg:items-stretch lg:space-x-0 lg:space-y-1">
                    {/* eslint-disable-next-line array-callback-return */}
                    {planPage && planPage.map((offers, index) => {
                        // eslint-disable-next-line react/jsx-key
                        return (<PricingOffers offersData={offers} key={index}/>);
                    })}
                </div>
            </div>
        </div>
    </div>);
};
export default Plan;
