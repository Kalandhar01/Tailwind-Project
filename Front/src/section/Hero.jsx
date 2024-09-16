import React from 'react'
import '../index.css';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1, shoe4 } from '../assets/images';
import ShoeCard from './ShoeCard';




const Hero = () => {
  return (
    <>
      <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen  gap-10 border-2 border-red-400'>

          <div className='relative xl:w-2/4 flex flex-col justify-center ml-10 items-start w-full max-xl:padding-x pt-28'>  
          <p className='text-xl font-montserrat text-coral-red'>Our Summer Colleection</p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[720px]  max-sm:leading-[82px] font-bold z-10'>
            <span className='xl:bg-white xl:whitespace-nowrap x-10 pr-10'> Summer Colleection </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Nike</span>
            Shoes
          </h1>

          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm;max-w-sm'>Nike’s innovative technology ensures durability, whether you're hitting the gym or the streets.  h</p>

          <Button label="Shop Now" iconURl={arrowRight} />

          <div className='flex justify-start items-start w-full flex-wrap mt-20 gap-16'>
            {statistics.map((start) => (
              <div key={start.label}>
                <p className='text-4xl font-montserrat font-bold'>{start.value}</p>
                <p className='font-montserrat text-slate-gray'>{start.label}</p>
              </div>
            ))}



          </div>


        </div>

        <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          <img src={bigShoe1} alt=""  width={610}  height={500} 
          className='object-contain relative z-0'/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map( (shoe) =>(
            <div key={shoe}>
             <ShoeCard
             imgURL = {shoe}
             changeBigShoeImage ={ () => {}}
             bigShoeImg =" "
    
             />



            </div>
          ))}
        </div>





        </div>

        



        

      </section>

    </>
  )
}

export default Hero
