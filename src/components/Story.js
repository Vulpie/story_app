import React,{useEffect} from 'react'
import Header from './Header'
import Parallax from 'parallax-js'

const Story = () => {
	useEffect(() => {
		const scene = document.querySelector('#scene')
		const parallaxInstance = new Parallax(scene, {
			relativeInput: true,
		})
		parallaxInstance.friction(0.2, 0.2)
	}, [])
	return (
		<div className="story" data-depth="0.2" data-relative-input="true" id="scene">
			<Header />
			<p className="story__paragraph">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				turpis mi, placerat nec dui posuere, vestibulum consectetur
				odio. Ut quis leo sit amet est dignissim gravida. In hac
				habitasse platea dictumst. Donec sit amet aliquet neque. Mauris
				laoreet dolor sapien, nec vulputate orci eleifend sit amet.
				Curabitur non urna libero. Donec laoreet ut arcu quis lobortis.
			</p>
			<p className="story__paragraph">
				Maecenas congue ex nec libero placerat, sit amet tincidunt justo
				consequat. Curabitur ornare mauris at magna sagittis, ac commodo
				ipsum convallis. Aliquam in sapien quam. Nam accumsan odio
				pulvinar lobortis maximus. Donec dignissim eleifend interdum.
				Etiam congue nec nibh nec maximus. Sed ultrices elementum mi
				feugiat suscipit.
			</p>
			<p className="story__paragraph">
				Curabitur semper fermentum dolor vitae dictum. Aliquam consequat
				facilisis auctor. Donec consectetur fermentum justo vitae
				tempor. Pellentesque at dolor nisi. Donec et neque laoreet,
				consequat neque sit amet, luctus eros. Vivamus tincidunt risus
				at efficitur ultricies. Ut ut nunc ullamcorper velit efficitur
				semper. Proin elit elit, lobortis ut posuere non, cursus eget
				mauris. Suspendisse luctus porttitor enim vel congue. Nulla
				sagittis neque dui, et tempus diam fermentum et. Duis eros
				lectus, mollis ac libero accumsan, lobortis lacinia magna. Fusce
				vitae interdum lectus, vitae bibendum enim.
			</p>
			<p className="story__paragraph">
				Vestibulum laoreet enim eu neque consequat, eget venenatis velit
				facilisis. Vivamus vel est eu risus pellentesque auctor. Vivamus
				porttitor blandit arcu id faucibus. Etiam fringilla mi odio, ac
				fringilla quam tempus eleifend. Vestibulum condimentum suscipit
				lobortis. Cras dictum et eros vitae rutrum. Vivamus congue
				vulputate suscipit. Donec ac eros quis sapien aliquet tincidunt
				non nec nibh. Pellentesque dapibus turpis a urna auctor, et
				malesuada lacus fermentum. Aliquam in feugiat metus. Vestibulum
				faucibus nisl nec porta molestie. Morbi molestie pretium velit,
				eu lobortis magna elementum ut. Donec sit amet vehicula mauris.
				Nulla accumsan lectus hendrerit felis efficitur, non accumsan
				tortor ullamcorper. Nullam at leo egestas, condimentum est
				eleifend, aliquam lectus.
			</p>
		</div>
	)
}

export default Story
