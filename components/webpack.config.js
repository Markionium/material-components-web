module.exports = {
    entry: './index.js',
    output: {
        filename: 'components.js',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap',
            },
        ],
    },
};
