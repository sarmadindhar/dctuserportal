import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className='felx mb-10 w-full'>
        <a href="#" className="rounded-xl bg-orange px-8 py-3 text-md font-semibold text-white shadow-sm hover:bg-transparent hover:border-orange border-orange  border hover:text-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">License</a>
        <a href="#" className="ml-4 rounded-xl bg-transparent px-8 py-3 text-md font-semibold text-orange hover:border-orange shadow-sm hover:bg-orange border-orange  border hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Approval</a>
        <a href="#" className="ml-4 rounded-xl bg-transparent px-8 py-3 text-md font-semibold text-orange hover:border-orange shadow-sm hover:bg-orange border-orange  border hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Approval</a>

      </div>
      <div className='w-full'>

        <div className="bg-transparent">
          <div className="w-full mx-auto pb-20">


            <div className="flex w-full justify-between gap-8">
              <div className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056]">
                <h1 className="text-4xl font-bold ">Request to Issue</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply  </a>
              </div>
              <div className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056]">
                <h1 className="text-4xl font-bold ">Request to Amend</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply </a>
              </div>
              <div className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056]">
                <h1 className="text-4xl font-bold ">Request to Cancel</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply </a>
              </div>
              <div className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056]">
                <h1 className="text-4xl font-bold ">Request to Renew</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
