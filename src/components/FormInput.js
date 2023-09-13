import React, {useState} from 'react'
import {QRCodeCanvas} from 'qrcode.react';

const FormInput = () => {
  const [showText, setShowText] = useState(false);
  const [inputText, setInputText] = useState('');
  
  const generateQR = () => {
    setShowText(true)
  }

  const changeText = (e) => {
    setShowText(false)
    setInputText(e.target.value)
  }
  return (
    <>
    <div className='p-4 md:p-6 flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-xl md:text-2xl mt-2'>QR Code Generator 🔥</h1>
            <h2 className='text-sm font-medium md:font-normal md:text-xl mt-2'>
                Insert a link below to generate a QR Code
             </h2>
     
    </div>
     <form
     className='p-4 md:p-6 flex flex-col md:flex-row justify-center items-center gap-2'
     onSubmit={(e) => {
       e.preventDefault();
       generateQR();
     }}
   >
     <input
       type='text'
       name='link'
       className='text-white bg-black px-2 py-1 w-full md:w-2/6 h-9'
       value={inputText}
       onChange={changeText}
     />
     <button
       type='submit'
       className='text-white bg-blue-600 border-none px-2 py-1 cursor-pointer rounded-md md:ml-2'
       style={{ backgroundColor: 'rgb(41, 64, 121)' }}
     >
       Generate QR
     </button>
   </form>
   <div className='p-6 md:p-6 flex flex-col justify-center items-center'>
   {(showText &&
        <>
             <QRCodeCanvas value={inputText} size={180} />
             <p className='text-md md:text-xl mt-4'>Here is the qr that we generated for you 🚀</p>
             </>

        )}
   </div>
   </>
  )
}

export default FormInput
