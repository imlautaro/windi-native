import plugin from 'windicss/plugin'

const windiNative = plugin(({ addBase }) => {
	addBase({
		html: {
			scrollBehavior: 'smooth',
			userSelect: 'none',
		},
		body: {
			'-webkit-tap-highlight-color': 'transparent',
		},
		'*, *:focus': {
			outline: 'none !important',
		},
	})
})

export default windiNative
