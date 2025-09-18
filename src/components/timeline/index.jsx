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
    const [aos, setAos] = useState({ item1: 'fade-right', item2: 'fade-left', item3: "fade-right" });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setAos({ item1: 'fade-up', item2: 'fade-up', item3: "fade-up" });
            } else {
                setAos({ item1: 'fade-right', item2: 'fade-left', item3: 'fade-right' });
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
                    <p className="text-xs sm:text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">September, 2024 - May, 2028</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-col gap-1.5'>
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">Kimyo International University In Tashkent</h1>
                    <p className='text-sm sm:text-body-4 lg:text-body-3 font-medium text-gray-900 underline'>BE - Information System Engineering</p>
                    <p className="text-xs leading-5 sm:text-body-4 mt-2 font-normal text-metal-600">
                        Focused on comprehensive computer science education, encompassing software development, data structures, algorithms, and theoretical foundations. Engaged in projects and research to foster practical and analytical skills.
                    </p>
                    <p className="block min-[600px]:hidden text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">Sep, 2024 - May, 2028</p>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='' data-aos={aos.item2}>
                <TimelineOppositeContent className='hidden min-[600px]:block'>
                    <p className="text-xs sm:text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">February, 2023 - August, 2023</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-col gap-1.5'>
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">Najot Ta'lim In Tashkent</h1>
                    <p className='text-sm sm:text-body-4 lg:text-body-3 font-medium text-gray-900 underline'>Frontend Web Development</p>
                    <p className="text-xs leading-5 sm:text-body-4 mt-2 font-normal text-metal-600">
                        During my studies at this training center in the field of Frontend Development, I gained not only in-depth knowledge of modern technologies but also developed essential soft skills. I learned to work with programming languages, frameworks, and libraries, while also improving my problem-solving abilities, teamwork, and time management. This experience not only strengthened my technical expertise but also built a solid foundation for my professional growth.
                    </p>
                    <p className="block min-[600px]:hidden text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">Feb, 2023 - Aug, 2023</p>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='' data-aos={aos.item3}>
                <TimelineOppositeContent className='hidden min-[600px]:block'>
                    <p className="text-xs sm:text-sm md:text-base lg:text-body-3 font-medium leading-[1.4] text-gray-900">February, 2025 - September, 2025</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex flex-col gap-1.5'>
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">Cheese Day LLC, Tashkent</h1>
                    <p className='text-sm sm:text-body-4 lg:text-body-3 font-medium text-gray-900 underline'>Price Monitoring Specialist</p>
                    <p className="text-xs leading-5 sm:text-body-4 mt-2 font-normal text-metal-600">
                        Monitored and analyzed daily product prices to maintain accurate and up-to-date market data. Improved pricing reports, enabling management to make better data-driven decisions. Identified competitor pricing strategies and market trends, supporting more competitive pricing. Developed strong skills in Excel, data analysis, and reporting, contributing to team efficiency.
                    </p>
                    <p className="block min-[600px]:hidden text-sm md:text-body-3 font-medium leading-[1.4] text-gray-900">Feb, 2025 - Sep, 2025</p>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    );
}
