'use client'
import React from 'react'
import ArrowBlackIcon from '@/assets/svgs/arrow-black-right.svg'
import { Button } from '../ui/button'
import Link from 'next/link'

const AnnouncementComponent = () => {
  return (
    <div className="bg-[#FEF0EB] w-full py-10 sm:py-24 relative px-4 h-fit mb-[150px]">
      <div className="w-full sm:max-w-[796px] mx-auto mb-20">
        <h1 className="pb-4 text-xs uppercase text-[#4D5154] border-b mb-4">
          Announcements
        </h1>
        {[1, 2, 3].map((item) => (
        <div key={item} className="flex flex-col space-y-2 pb-6 border-b mb-4">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Nigerian MaaS startup Treepz closes $2.8M seed round to fund
            </h1>
            <span className="w8 h-8 cursor-pointer">
              <ArrowBlackIcon />
            </span>
          </div>
          <p className="text-[#6F7174] text-base capitalize mt-6">
            Jan 17, 2023
          </p>
        </div>
        ))}
        <Button
          variant={"outline"}
          className="cursor-pointer rounded-full w-fit mt-8  border-gray-900 text-black flex gap-2"
          //onClick={() => {}}
        >
          Show more
        </Button>
      </div>
      {/* Media */}
      <div className="p-4 sm:p-8 w-[96%] sm:max-w-[1138px] mx-auto absolute left-0 right-0 bg-[url(/cta-card.png)] bg-cover rounded-2xl justify-center flex flex-col mb-[150px] sm:mb-24">
        <div className="text-white w-full flex flex-col space-y-8 justify-center items-center">
          <p className="text-[28px] sm:text-[56px] leading-[32px] sm:leading-[64px]">MEDIA ENQUIRIES</p>
          <p className="text-base sm:text-xl text-[#DEE0E3]">
            Get in touch with us at{" "}
            <Link href="#" className="underline">
              press@treepz.com
            </Link>
            .
          </p>
        </div>
        <Button
          variant={"default"}
          className="cursor-pointer rounded-full font-medium w-[295px] mx-auto my-8 sm:mt-11  border-gray-900 text-black flex gap-2"
          //onClick={() => {}}
        >
          Get press kit
        </Button>
      </div>
    </div>
  );
}

export default AnnouncementComponent
