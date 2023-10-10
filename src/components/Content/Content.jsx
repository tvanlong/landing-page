import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'

function Content() {
  return (
    <section className=''>
      <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center shadow-md rounded-[24px] bg-gradient-to-b from-white/40 to-transparent'>
        <div className='mt-12 gap-8 flex items-start'>
          <FaUser size={'24px'} className='mt-[12px]' />
          <p className='text-26'>
            10245
            <p className='text-13 font-semibold mb-[36px]'>Customers</p>
          </p>
        </div>
        <div className='mb-12 gap-8 flex items-start'>
          <BsFillCreditCardFill size={'24px'} className='mt-[12px]' />
          <p className='text-26'>
            12045
            <p className='text-13 font-semibold'>Cards Issues</p>
          </p>
        </div>
      </div>
      <div className='text-13 flex flex-col w-full mt-[90px] font-semibold'>
        <p className='check-content'>
          <img src={checkIconMobile} alt='Check Icon' />
          <p>Card reports sent to your phone every weeks</p>
        </p>
        <p className='check-content'>
          <img src={checkIconMobile} alt='Check Icon' />
          <p>No external fees</p>
        </p>
        <p className='check-content'>
          <img src={checkIconMobile} alt='Check Icon' />
          <p>Set spending limits and restriction</p>
        </p>
      </div>
    </section>
  )
}

export default Content
