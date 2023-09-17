"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
function Navbar_user() {
	const [UserName, setuserName] = useState();
	console.log(UserName);
	return (
		<div className='px-5 '>
			<motion.nav
				variants={navVariants}
				initial='hidden'
				whileInView='show'
				className={`sm:px-16 px-6 py-8 relative`}
			>
				<div className='absolute w-[50%] inset-0 gradient-01' />
				<div className='flex-row flex-around mt-10'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-5'>
							<h1 className='text-white font-bold text-4xl pr-1'>KonBusters</h1>
						</div>
						<div>
							<UserButton afterSignOutUrl='/' />
						</div>

						<div>
							<div className=' flex space-x-3 items-center'>
								<h1 className='hidden lg:inline cursor-pointer text-sm text-violet-400 flex hover:underline hover:text-violet-500'>
									<a href='/recruitment'></a>
								</h1>
								<div>
									<div className='hidden sm:flex  border-none px-1 w-[250px] justify-between h-[40px] rounded-md items-center  shadow-violet-300 shadow-[5px_5px_10px_rgba(0,1,0.9)] '>
										<input
											type='text'
											required='required'
											value={UserName}
											onChange={(e) => setuserName(e.target.value)}
											className='text-secondary-white p-1 mr-2 rounded-md focus:outline-none bg-transparent valid:text-blue-200'
											placeholder='Username'
										/>
										<a href={`/mainpage/${UserName}`}>
											<SearchIcon className='w-5 h-5 text-gray-400' />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.nav>
		</div>
	);
}

export default Navbar_user;
