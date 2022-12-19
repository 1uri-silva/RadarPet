module.exports = function(api) {
  api.cache(true);
  return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: './',
					extensions: [
						'.js',
						'.jsx',
						'.ts',
						'.tsx',
						'.android.js',
						'.android.tsx',
						'.ios.js',
						'.ios.tsx',
					],
					alias: {
						'#hooks': './src/hooks',
						'#routes': './src/routes',
						'#models': './src/models',
						'#screens': './src/screens',
						'#contexts': './src/contexts',
						'#services': './src/services',
						'#functions': './src/functions',
						'#components': './src/components',
					},
				},
			],
		],
	};
};
