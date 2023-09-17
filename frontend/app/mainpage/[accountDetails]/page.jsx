"use client";
import React, { useState } from "react";
import { FlagIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import pfp from "../../../bg2.png";
import Image from "next/image";
import "../../App.css";
import { UserButton } from "@clerk/nextjs";
const page = ({ params }) => {
	function sendProps() {
		{
			first ? setfirst(false) : setfirst(true);
		}
	}
	const [first, setfirst] = useState(false);
	const ids = [
		"user1_id",
		"user2_id",
		"user3_id",
		"abc",
		"def",
		"xyz",
		"rtrt",
		"rtyr",
		"sdsa" /* ... */,
	];
	const ids2 = [
		"user1" /* ... */,
		,
		"user2" /* ... */,
		,
		"user3" /* ... */,
		,
		"user4" /* ... */,
		,
		"user5" /* ... */,
		,
		"user6" /* ... */,
		,
		"user7" /* ... */,
		,
		"user8" /* ... */,
		,
		"user9" /* ... */,
		,
	];
	const [isFlipped, setIsFlipped] = useState(false);

	const toggleFlip = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<div className=' min-h-screen min-w-screen flex items-center justify-between my-10 mx-10'>
			<div className='gradient-02'></div>
			<UserButton afterSignOutUrl='/' />
			<div className=' '>
				<div className='max-w-lg bg-gray-200 p-4 rounded-lg shadow-violet-300 shadow-[0px_0px_60px_rgba(0,0,0,0.5)]'>
					<Image
						src={pfp}
						alt='User Profile'
						className='w-24 h-24 rounded-full mx-auto'
					/>
					<h1 className='text-2xl font-semibold text-center mt-4 text-black'>
						<p className='text-gray-600 text-center'>
							@{params.accountDetails}
						</p>
					</h1>
					<div className='text-black flex justify-between '>
						<div className='items-center'>
							<p className='font-semibold'>Followers: </p>
							<p>3.7k</p>
						</div>
						<div className='items-center justify-center'>
							<p className='font-semibold'>Following: </p>
							<p>645</p>
						</div>
					</div>
					<div className='mt-4'>
						<p className='text-gray-700 font-semibold'>Bio:</p>
						<p className='text-gray-800'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							vehicula tortor in suscipit fermentum.
						</p>
					</div>
				</div>
				<div className=''>
					<div className='my-14 text-xl flex items-center text-violet-100'>
						Flag @{params.accountDetails} :{" "}
						{first ? (
							<FlagIcon
								className='h-5 w-10 text-red-400 hover:scale-110 transition transform duration-200 ease-in cursor-pointer '
								onClick={() => sendProps()}
							/>
						) : (
							<FlagIcon
								className='h-5 w-10 hover:text-red-300 hover:scale-110 transition transform duration-200 ease-in cursor-pointer '
								onClick={() => sendProps()}
							/>
						)}
					</div>
					{first ? (
						<>
							<div>Tell us why you want to flag this person?: </div>
							<div className='flex items-center '>
								<input
									type='text'
									className='bg-gray-900 text-gray-400 border-none p-2 outline-none rounded my-5'
								/>
								<div className='mx-2 bg-blue-950 p-1 px-2 hover:text-blue-300 hover:scale-105 transition transform duration-200 ease-in rounded-lg'>
									<button>submit</button>
								</div>
							</div>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default page;
