/*
	A Plugin helper
	pass the env to PASS to other configs in the fn
*/
const wpMerge = require('webpack-merge')

const applyPresets = (env) => {
	const { presets } = env;

	//return arr of strs, arr of preset names
	const mergedPresets = [].concat(...[presets]);

	//loop through presets, by name, && require each preset
	//call each preset passing env to the preset
	const mergedConfigs = mergedPresets.map(presetName =>
		require(`./presets/webpack.${presetName}}`)(env);
	)

	//returns the MERGED wpConfing including the presets
	return wpMerge({}, ...mergedConfigs)
}

module.exports = applyPresets