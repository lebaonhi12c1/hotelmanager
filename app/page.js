import Image from 'next/image'
import HeadPage from '@/components/HeadPage'
import Infrastructure from '@/components/Infrastructure'
import Rooms from '@/components/Rooms'
import Position from '@/components/Position'
import Evalute from '@/components/Evalute'
import Overview from '@/components/Overview'
import QuestionAndAnwser from '@/components/QuestionAndAnwser'

export default function Home() {
  return (
    <main className="bg-white">
        <HeadPage/>
        <div className='lg:w-[90%] mx-auto flex flex-col gap-10 bg-slate-200 rounded-sm py-10'>
          <div className='root-container grid grid-cols-1 lg:grid-cols-5 gap-4'>
            <div className='flex flex-col gap-4 col-span-4'>
              <Overview/>
              <Infrastructure/>
              <Rooms/>
              <Position/>
              <Evalute/>
              <QuestionAndAnwser/>
            </div>
            <div className='lg:flex hidden flex-col gap-4'>
            </div>
          </div>
        </div>
    </main>
  )
}
