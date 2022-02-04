import { motion, MotionProps } from 'framer-motion';
import React from 'react';

interface BackdropProps extends MotionProps {
	onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose, ...props }) => {
	return (
		<>
			<motion.div
				{...props}
				onClick={() => onClose()}
				className='fixed z-20 bg-dark-1 opacity-70 grid place-items-center h-full w-full lg:hidden'></motion.div>
		</>
	);
};

export default Backdrop;
