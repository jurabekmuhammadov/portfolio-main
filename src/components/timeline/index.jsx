import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

export default function OppositeContentTimeline() {
    const matches = useMediaQuery('(max-width:600px)');
    const [aos, setAos] = useState({ item1: 'fade-right', item2: 'fade-left' });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setAos({ item1: 'fade-up', item2: 'fade-up' });
            } else {
                setAos({ item1: 'fade-right', item2: 'fade-left' });
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Timeline position={matches ? 'right' : 'alternate-reverse'}
            className='p-0'
            sx={{ padding: 0 }}>
            <TimelineItem className='' data-aos={aos.item1}>
                <TimelineOppositeContent className='hidden min-[600px]:block'>
                    <p className="text-xs sm:text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">September, 2023 - May, 2027</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-col gap-1.5'>
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">Central Asian University</h1>
                    <p className='text-sm sm:text-body-4 lg:text-body-3 font-medium text-gray-900'>Bachelor of Engineering - BE, Computer Science</p>
                    <p className="text-xs leading-5 sm:text-body-4 mt-2 font-normal text-metal-600">
                        Focused on comprehensive computer science education, encompassing software development, data structures, algorithms, and theoretical foundations. Engaged in projects and research to foster practical and analytical skills.
                    </p>
                    <p className="block min-[600px]:hidden text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">September, 2023 - May, 2027</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='' data-aos={aos.item2}>
                <TimelineOppositeContent className='hidden min-[600px]:block'>
                    <p className="text-xs sm:text-sm md:text-base lg:text-body-3 font-medium leading-[1.4] text-gray-900">October, 2023 - May, 2024</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-col gap-1.5'>
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">Najot Ta&apos;lim, Tashkent</h1>
                    <p className='text-sm sm:text-body-4 lg:text-body-3 font-medium text-gray-900'>Standart, Frontend</p>
                    <p className="text-xs leading-5 sm:text-body-4 mt-2 font-normal text-metal-600">
                        Completed a comprehensive frontend development program, mastering key technologies such as HTML, CSS, and JavaScript. Developed practical skills through intensive hands-on projects and collaborative work, laying a strong foundation for a career in web development.
                    </p>
                    <p className="block min-[600px]:hidden text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">October, 2023 - May, 2024</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
