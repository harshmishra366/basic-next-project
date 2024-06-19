"use client";
import React from 'react'
import Coursdata from "../app/data/music_courses.json"

import { BackgroundGradient } from "./ui/background-gradient";
import Link from 'next/link';
import { MovingBorder } from './ui/moving-border';
import { Button } from './ui/moving-border';
import { text } from 'stream/consumers';
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}


function FeatureCourses() {
    const feature= Coursdata.courses.filter((course:Course)=>course.isFeatured)
  return (

    <div className='py-12 bg-black-100'> 
      <div>
        <h1 className='text-center font-bold text-xxl '>Learn From the best</h1>
        <p className='text-center  '>Faatured Courses</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"> 
        {
            feature.map((course)=>(
              <div key={course.id} className="flex justify-center">
              <BackgroundGradient
              className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                      <Link href={`/courses/${course.slug}`}>
                      Learn More
                      </Link>
                  </div>
              </BackgroundGradient>
          </div>
            ))
        }
      </div>
      <div className='text-center'>
        <Link href={"/feature"}>
        
        <Button>
            View More
        </Button>
       
        </Link>
      </div>
    </div>
  )
}

export default FeatureCourses