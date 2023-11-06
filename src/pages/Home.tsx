import { Button } from '@ui/button'
import { ProjectCard } from '@ui/card'
import { CircleButton } from '@ui/circleButton'
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export const Home = () => {
   return (
      <div>
         <Button onClick={() => console.log('hello')} option='lg' color='black'>
            Click me <HiOutlineArrowNarrowRight />
         </Button>
         <CircleButton option='lg'>
            <AiFillHome />
         </CircleButton>
         <ProjectCard />
      </div>
   )
}
