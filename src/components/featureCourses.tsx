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

    <div className='py-12 bg-gray-700'> 
      <div>
        <h1 className='text-center font-bold text-xxl '>Learn From the best</h1>
        <p className='text-center  '>Faatured Courses</p>
      </div>
      <div>
        {
            feature.map((course)=>(
                <div className='flex justify-center'>
                    <BackgroundGradient>
                      <p>{course.title}</p>
                      <p>{course.description}</p>
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