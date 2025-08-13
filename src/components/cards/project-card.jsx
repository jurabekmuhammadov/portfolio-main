import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

const ProjectCard = ({ img, name, category, description, github, live, tech_stacks }) => {
    return (
        <div data-aos="fade-up" className='flex flex-col gap-1 sm:gap-3 p-2 sm:p-4 border border-gray-300 rounded-xl'>
            <div className='hidden md:block relative group'>
                <div className='absolute h-full w-full bg-black bg-opacity-30 rounded-xl flex items-center flex-row lg:flex-col-reverse justify-center gap-3 lg:gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a href={github} target='_blank' className='bg-black p-1.5 rounded-md lg:rounded-xl flex items-center justify-center transition-all hover:bg-opacity-80 text-white gap-2 lg:w-44'>
                        <span className='hidden lg:block'>Go to Github repo</span>
                        <BsGithub className='w-4 h-4 sm:w-5 sm:h-5' color='white' />
                    </a>
                    <a href={live} target='_blank' className='bg-black p-1.5 rounded-md lg:rounded-xl flex items-center justify-center transition-all hover:bg-opacity-80 text-white gap-2 lg:w-44'>
                        <span className='hidden lg:block'>Visit to the project</span>
                        <FaEye className='w-4 h-4 sm:w-5 sm:h-5' color='white' />
                    </a>
                </div>
                <img src={img} alt={name} className='rounded-xl' />
            </div>
            <a href={live} target='_blank' className='md:hidden relative group'>
                <div className='absolute h-full w-full bg-black bg-opacity-30 rounded-xl flex items-center flex-row lg:flex-col-reverse justify-center gap-3 lg:gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a href={github} target='_blank' className='bg-black p-1.5 rounded-md lg:rounded-xl flex items-center justify-center transition-all hover:bg-opacity-80 text-white gap-2 lg:w-44'>
                        <span className='hidden lg:block'>Go to Github repo</span>
                        <BsGithub className='w-4 h-4 sm:w-5 sm:h-5' color='white' />
                    </a>
                    <a href={live} target='_blank' className='bg-black p-1.5 rounded-md lg:rounded-xl flex items-center justify-center transition-all hover:bg-opacity-80 text-white gap-2 lg:w-44'>
                        <span className='hidden lg:block'>Visit to the project</span>
                        <FaEye className='w-4 h-4 sm:w-5 sm:h-5' color='white' />
                    </a>
                </div>
                <img src={img} alt={name} className='rounded-xl' />
            </a>
            <p className='text-gray-500 text-xs sm:text-sm md:text-base'>{category}</p>
            <div className='flex flex-col gap-1'>
                <a href={live} className='text-gray-900 hover:underline font-semibold text-sm md::text-base'>{name}</a>
                <p className='text-gray-600 line-clamp-2 text-xs sm:text-sm md::text-base'>{description}</p>
            </div>
            <div className='flex items-center gap-1'>
                {tech_stacks.map((item) => (
                    <img className='w-4 h-4 sm:w-5 sm:h-5' key={item.id} src={item.icon} />
                ))}
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    github: PropTypes.string,
    live: PropTypes.string,
    tech_stacks: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
