import { TypeAnimation } from 'react-type-animation';

export const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
                "Jurabek Mukhammadov",
                2000,
                "Frontend Developer",
                2000,
                "Software Engineer",
                2000,
            ]}
            wrapper="p"
            speed={30}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};