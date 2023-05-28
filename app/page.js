import Image from 'next/image'
import HeadPage from '@/components/HeadPage'
import Infrastructure from '@/components/Infrastructure'
import Rooms from '@/components/Rooms'
import Position from '@/components/Position'
import Evalute from '@/components/Evalute'

export default function Home() {
  return (
    <main className="bg-white">
        <HeadPage/>
        <Infrastructure/>
        <Rooms/>
        <Position/>
        <Evalute/>
    </main>
  )
}
