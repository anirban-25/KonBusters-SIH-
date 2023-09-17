"use client";
import Link from "next/link";
import * as THREE from "three";
import ModelViewer from "../components/ModelViewer"; // Adjust the path as needed
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
	return (
		<main className=''>
			<ModelViewer />
			<VideoPlayer className=' fixed -z-10' />
			<div className='justify-center items-center w-screen min-h-screen bg-gradient-to-br from-slate-950 to-slate-800 flex  gap-4'>
				<Link href='/sign-up'>
					<button className='w-52 text-2xl font-bold bg-blue-400/30 rounded-xl px-4 py-2 hover:bg-green-500/40 transform hover:-translate-y-1 transition-all duration-300 ease-in-out'>
						SIGN UP(user)
					</button>
				</Link>
				<Link href='/sign-up'>
					<button className='w-52 text-2xl font-bold bg-blue-400/30 rounded-xl px-4 py-2 hover:bg-green-500/40 transform hover:-translate-y-1 transition-all duration-300 ease-in-out'>
						SIGN UP(org)
					</button>
				</Link>
			</div>
		</main>
	);
}
