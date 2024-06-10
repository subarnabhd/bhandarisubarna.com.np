import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <main className='bg-white p-20' id="about" >

      <div className=" text-center m-auto py-20 flex justify-center flex-col columns-md w-1/2">
        <Image className="center text-center m-auto mb-10 " src="/flavor-bakery-logo-circle.png" width={200} height={100} alt='' />
        <p className='text-xl text-gray-500'>The Flavor Bakery is a pastry shop as well as cafe established in 2021 to bring the bona fide taste of bakery and coffee items to Ghorahi, Dang.</p>
        <p className='text-xl text-gray-500'>We have assembled our notoriety on consolidating great quality conventional heating with great incentive for cash. We offer our clients a full scope of breads, forte breads, morning merchandise, cakes and baked goods. Mandip Giri, the owner, built up The Flavor Bakery idea in light of what he saw as an absence of any spots in Ghorahi to appreciate the essence of genuinely credible bakery items.</p>
        <p className='text-xl text-gray-500'>One of the key factors in The Flavor Bakery’s prosperity has been its ethos that cakes taste best when they’ve been naturally heated utilizing the very same fixings and methods as those utilized in home preparing.</p>
        <p className='text-xl text-gray-500'>FLAVOR Bakery’s philosophy is to offer simple and delicious desserts that are easily accessible to clients via location or delivery options. Our ingredients are high quality; each dessert is carefully made with only thefinest, all-natural ingredients.</p>
      </div>

    </main>
  )
}

export default About