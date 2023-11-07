import { CardProps } from '@interface/card.interface'
import { FC } from 'react'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export const ProjectCard: FC<CardProps> = ({ imgUrl, link }) => {
   const navigate = useNavigate()
   return (
      <div className='card'>
         <img className='card__image' src={imgUrl} alt='' />
         <button onClick={() => navigate(link)} className='card__navigate'>
            <HiPlus />
         </button>
      </div>
   )
}
