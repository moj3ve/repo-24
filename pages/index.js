import { useRef } from 'react'

import { name as repoName } from '../loader!../repo'
import Page from '../components/Page'
import { getRepoUrl } from '../utils'

export default function Home({ repoURL }) {
	const inputRef = useRef()
	return (
		<Page>
			<style jsx>{`
				.profile {
					width: 150px;
					height: 150px;
					margin: 0 auto;
					display: block;
				}

				h1 {
					margin-top: 0;
					text-align: center;
					margin-bottom: 40px;
				}

				.package-manager {
					display: flex;
					align-items: center;
					color: white;
					text-align: center;
					background-color: #000000;
					border: 1px solid rgba(255, 255, 255, 0.5);
					margin: 10px auto;
					width: 200px;
					border-radius: 14px;
					font-size: 20px;
					text-decoration: none;
				}

				.package-manager > span {
					flex-grow: 1;
					margin-right: 8px;
				}

				.package-manager::before {
					content: '';
					background-repeat: no-repeat;
					width: 36px;
					height: 36px;
					margin: 6px 0 6px 6px;
					background-size: contain;
				}

				.package-manager.cydia::before {
					background-image: url('/assets/package-managers/Cydia.png');
				}
				.package-manager.zebra::before {
					background-image: url('/assets/package-managers/Zebra.png');
				}
				.package-manager.sileo::before {
					background-image: url('/assets/package-managers/Sileo.png');
				}

				.input-container {
					width: 320px;
					max-width: 90%;
					position: relative;
					margin: 32px auto;
				}

				.input-container > input {
					border: 0 none;
					padding: 0 68px 0 12px;
					font-size: 18px;
					height: 50px;
					width: 100%;
					border-radius: 12px;
					flex-grow: 1;
					background-color: #333333;
					color: #ffffff;
				}

				.input-container > button {
					font-size: 16px;
					position: absolute;
					height: 30px;
					right: 10px;
					top: 10px;
					padding: 6px 8px;
					border-radius: 6px;
					background-color: #1e90ff;
					color: #ffffff;
					border: 0 none;
					line-height: 16px;
				}

				.links {
					display: flex;
					justify-content: center;
				}

				.links > a {
					color: white;
					opacity: 0.7;
					transition: 300ms ease-out opacity;
					display: inline-block;
					padding: 12px;
				}

				.links > a:hover {
					opacity: 0.9;
				}

				.links > a > svg {
					display: block;
					width: 30px;
					height: 30px;
				}
			`}</style>

<img className="profile" src="/CydiaIcon.png" alt="Profile picture" />
			<h1>taki</h1>

			<a
				href={`cydia://url/https://cydia.saurik.com/api/share#?source=${repoURL}`}
				className="package-manager cydia"
			>
				<span>Add to Cydia</span>
			</a>
			<a href={`zbra://sources/add/${repoURL}`} className="package-manager zebra">
				<span>Add to Zebra</span>
			</a>
			<a href={`sileo://source/${repoURL}`} className="package-manager sileo">
				<span>Add to Sileo</span>
			</a>
			{/* <a href={`installer://add/repo=${repoURL}`}>Add to Installer</a> */}

			<div className="input-container">
				<input
					value={repoURL}
					readOnly
					ref={inputRef}
					onClick={() => {
						inputRef.current.select()
						inputRef.current.setSelectionRange(0, repoURL.length)
					}}
				/>
				<button
					onClick={() => {
						if (navigator.clipboard && navigator.clipboard.writeText) {
							navigator.clipboard.writeText(repoURL)
						} else {
							inputRef.current.select()
							inputRef.current.setSelectionRange(0, repoURL.length)
							document.execCommand('copy')
						}
					}}
				>
					Copy
				</button>
			</div>

			<div className="links">
				<a href="https://discordapp.com/users/219683710348427274" target="_blank" title="Let's chat on Discord" rel="noopener">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240">
						<path
							fill="currentColor"
							d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
						/>
						<path
							d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
							fill="currentColor"
						/>
					</svg>
				</a>
				<a
					href="https://twitter.com/74k1_"
					title="Follow me on Twitter"
					target="_blank"
					rel="noopener"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							fill="currentColor"
							d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
						/>
					</svg>
				</a>
				<a
					href="https://github.com/74k1"
					title="Check out my projects on GitHub"
					target="_blank"
					rel="noopener"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
						<path
							fill="currentColor"
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						/>
					</svg>
				</a>
			</div>
		</Page>
	)
}

Home.getInitialProps = ({ req }) => ({
	repoURL: getRepoUrl(req),
})
