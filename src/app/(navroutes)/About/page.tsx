import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row  items-center justify-center min-h-screen bg-gray-100 p-4 md:p lg:p-16">
            {/* Content Section */}
            <div className="w-full  max-w-2xl bg-gray-100 rounded-xl tracking-wide p-6 md:p-8 lg:p-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
                <p className="text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur ex vitae aliquam incidunt reiciendis necessitatibus similique, tenetur blanditiis sequi.
                </p>
                <p className="text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut provident unde dicta veniam!
                </p>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ducimus autem sit sint aut deleniti ut!
                </p>
            </div>
            
            {/* Image Section */}
            <div className="flex justify-center w-full ">
                <div >
                    <Image 
                        src="/static/images/img2.png" 
                        alt="About Us Image"
                        layout="intrinsic"
                        width={600} 
                        height={450} 
                        className="rounded-xl hover:scale-110 transition-transform ease-in-out duration-300 "
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;
