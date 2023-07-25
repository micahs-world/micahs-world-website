// 'use client'

import Link from "next/link";
import './nav-component.scss';
// import {useSelectedLayoutSegment} from "next/navigation";

export default function NavComponent() {
	let items = [
		{ label: 'Projects', href: '/projects', key: 'projects' },
		{ label: 'Personals', href: '/personals', key: 'personals' }
	];
	// const navSegment = useSelectedLayoutSegment('nav');

	return (
		<nav id="navs">
			<ul>
				{items.map(item => (
					<li key={item.key}>
						<Link href={item.href}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}