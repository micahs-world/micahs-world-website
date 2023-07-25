import './footer-component.scss'

export function FooterComponent() {
	const today = new Date();

	return (
		<footer>
			<p>
				&copy; {today.getFullYear()} Micah. All rights reserved.
			</p>
		</footer>
	)
}