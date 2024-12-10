import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const ProductSection = () => {
  return (

 <section>
 
 
<div className="product-box1 md:grid md:grid-cols-2 md:mt-[100px] md:mx-32 mt-10 mx-16">

<div className='md:h-[250px] md:w-[400px] w-[350px] h-[100px]'>
<Image src="/cotton.webp" alt='Cotton Secton' width={400} height={250} />
</div>

<div className='md:mt-4 text-center md:mx-12 mt-[280px] '>
<h2 className='text-3xl font-bold'>The Luxury Cotton</h2>
<p className='text-center mt-7 font-medium'>Find the luxury and sophistication at Zeeshan Cloth Store, The greatest destination for high-quality unstitched cotton fabrics specifically made for Eastern wear. This luxury cotton collection features remarkable quality and comfort, making it ideal for creating traditional attire with a contemporary flair. The perfect choice for formal event or celebrating a special occasion. Browse our diverse range of fabrics online and choose the perfect one to enhance your Eastern wear. Make your fashion statement with Zeeshan Cloth Store .</p>


<button 
style = {{
    backgroundImage: "url('/button.png')",
    backgroundSize: "cover",
    height: "50px",
    width: "35vh"
}}
className='mt-8 text-green-950 font-bold'
><Link href="/shop">Shop Now</Link>
</button>
</div>

</div>

<div className="product-box2 md:grid md:grid-cols-2 md:mt-[100px] md:mx-32 mt-10 mx-16">

<div className='md:h-[250px] md:w-[400px] w-[350px] h-[100px]'>
<Image src="/washNwear.webp" alt='Wash n Wear Secton' width={400} height={250} />
</div>

<div className='md:mt-5 text-center md:mx-4 mt-[280px] '>
<h2 className='text-3xl font-bold'>Wash & Wear Collection</h2>
<p className='text-center mt-6 font-medium'>Welcome to Zeeshan Cloth Store, Here we woven premium unstitched blended fabrics designed for you. Our blended collection is known for its excellence and sophistication with comfort, reflecting our commitment to superior quality and finesse. Our fabrics are perfect for those looking to infuse traditional attire with contemporary allure. From formal events to special celebrations, our unstitched blended fabrics are timeless and elegant. Browse our diverse range of fabrics online and select the perfect one to lift up your Eastern wear ensemble. Experience the epitome of fashion excellence with Zeeshan Cloth Store.</p>


<button 
style = {{
    backgroundImage: "url('/button.png')",
    backgroundSize: "cover",
    height: "50px",
    width: "35vh"
}}
className='mt-6 text-green-950 font-bold'
><Link href="/shop">Shop Now</Link>
</button>
</div>

</div>

<div className="product-box3 md:grid md:grid-cols-2 md:mt-[100px] md:mx-32 mt-6 mx-16">

<div className='md:h-[250px] md:w-[400px] w-[350px] h-[100px]'>
<Image src="/cutpiece.jpg" alt='Cut Piece Secton' width={400} height={250} />
</div>

<div className='md:mt-4 text-center md:mx-4 mt-[280px] '>
<h2 className='text-3xl font-bold'>Suit Pieces Collection</h2>
<p className='text-center mt-5 font-medium'>At Zeeshan Cloth Store, we proudly present a premium selection of men’s unstitched fabric cut pieces from a variety of trusted brands such as Admani, Grace, JNG, Puri, Shaffer, Asco and many other known brands, all at very reasonable prices. Our diverse collection of cotton and wash & wear allows you to wear original branded fabrics without breaking the bank. Whether you're designing formal, traditional, or casual attire, our high-quality materials offer the perfect foundation for your tailored outfits. Experience the luxury of authentic brands while enjoying affordability, and find the ideal fabric to express your unique style today !</p>


<button 
style = {{
    backgroundImage: "url('/button.png')",
    backgroundSize: "cover",
    height: "50px",
    width: "35vh"
}}
className='mt-6 text-green-950 font-bold'
><Link href="/shop">Shop Now</Link>
</button>
</div>

</div>

</section> 
  )
}

export default ProductSection;