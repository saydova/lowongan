import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';


function Job(props){

    
    const [data, setData] = useState(null)


    
    useEffect(() => {
      axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data])
          console.log(data)
        })
        .catch((error) => {
        })
    }, [])





    return (
        <>
<Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item title="Job" icon={MdDashboard}>
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Applicants" icon={HiClipboardList}>
        This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
    </Tabs>

         <section class="bg-black p-5">



<div class="container mx-auto flex-wrap flex gap-10 items-center justify-start">

    {/* <!-- Batas awal Card section --> */}
    { data !== null && data.map((res, index) => {
            return (
    <div key={index} class="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={res.company_image_url}
            class="w-1/3 bg-cover bg-center bg-landscape" />
        <div class="w-2/3 p-4">
            <h1 class="text-gray-900 font-bold text-2xl">
            {res.title}
            </h1>
            <small>{res.job_type}</small>
            <p class="mt-2 text-gray-600 text-sm">
            {res.job_tenure}
            </p>
            <div class=" item-center mt-2 text-gray-500">
                <span>{res.company_name}</span>
            </div>
            <div class=" item-center mt-2 text-gray-500">
                <span>{res.company_city}</span>
            </div>
            <div class="flex item-center justify-between mt-3">
                <h1 class="text-gray-700 font-bold text-xl">
                
                </h1>
                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Apply
                </button>
            </div>
        </div>
    </div>
    )
})}
    {/* <!-- Batas akhir Card section --> */}


</div>

</section>




 </>
    )
}

export default Job