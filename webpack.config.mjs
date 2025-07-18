import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: 'chunks/[name].js',
    },
    resolve: {
        alias: {
            '@logo': path.resolve(__dirname, 'style/logo/logo_images'),
            '@button': path.resolve(__dirname, 'style/button/button_images')
        }
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'sass-loader', options: {sassOptions: {
                        includePaths: [path.resolve(__dirname, 'style')]
                    }}
                }],
            },
        ],

    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin({ template: 'index.html' }),
    ]
};

// new CopyWebpackPlugin(),{ from: './style/unwrap/unwrap_images/unwrap.svg', to: './style/unwrap/unwrap_images' }, { from: './style/brends/brends_images', to: './style/brends/brends_images' },{ patterns: [ { from: './style/logo/logo_images', to: './style/logo/logo_images' }] }




// new CopyWebpackPlugin({ patterns: [ { from: './style/logo/logo_images', to: './style/logo/logo_images' }] })


// {
//     test: /\.(svg)$/i,
//     type: 'asset/resource',
//     generator: { filename: '[path][name][ext]'}
// },
// {
//     test: /\.(woff2?|ttf|otf|eot)$/i,
//     type: 'asset/resource',
//     generator: {
//         filename: 'style/fonts/[name][ext]'
//     }
// }