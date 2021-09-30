declare module 'windi-native' {
	import plugin from 'windicss/plugin'
	const foo: () => ReturnType<typeof plugin>
	export default foo
}
