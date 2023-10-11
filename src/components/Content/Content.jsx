import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { useSpring, animated } from '@react-spring/web'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'

function Content() {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } })
  const card = useSpring({ cards: 12045, from: { cards: 0 } })

  return (
    <section className='md:flex md:flex-row'>
      <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center shadow-md rounded-[24px] bg-gradient-to-b from-white/40 to-transparent md:w-1/5'>
        <div className='mt-12 gap-8 flex items-start'>
          <FaUser size={'24px'} className='mt-[12px]' />
          <div className='text-26'>
            <animated.div>{customer.customers.to((customers) => Math.floor(customers))}</animated.div>
            <p className='text-13 font-semibold mb-[36px] md:text-16'>Customers</p>
          </div>
        </div>
        <div className='mb-12 gap-8 flex items-start'>
          <BsFillCreditCardFill size={'24px'} className='mt-[12px]' />
          <div className='text-26'>
            <animated.div>{card.cards.to((cards) => Math.floor(cards))}</animated.div>
            <p className='text-13 font-semibold md:text-16'>Cards Issues</p>
          </div>
        </div>
      </div>
      <div className='text-13 flex flex-col w-full mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]'>
        <div className='check-content'>
          <img src={checkIconMobile} alt='Check Icon' />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt='Check Icon' />
          <p>No external fees</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt='Check Icon' />
          <p>Set spending limits and restriction</p>
        </div>
      </div>
    </section>
  )
}

export default Content
