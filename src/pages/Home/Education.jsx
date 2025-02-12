import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Education = () => {
                    useEffect(() =>  {
                                        Aos.init({duration: 2000})
                                      },[])
                    return (
                                        <div className='mt-10' data-aos='fade-right'>
                                       <h1 className='text-4xl mb-4 font-bold text-center'>Education</h1>     
                                       <p className='text-xl font-medium text-center max-w-xl mx-auto'>I am studying BSS 🎓(Honours)  Department of Economics in National University Bangladesh. Started studying there from 2024. Graduation is expected in 2028.</p>                
                                        </div>
                    );
};

export default Education;