import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/config';

// Порядок лоадеров важен!
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const bableLoader = {
        test: /\.(js|jsx|tsx)/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const sassLoader = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [fileLoader, svgLoader, bableLoader, typescriptLoader, sassLoader];
}
