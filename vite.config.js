import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import React from '@vitejs/plugin-react';
import vitePluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        React(),
        vitePluginSvgr(),
    ],
    resolve: {
        alias: {
            '@pages': '/resources/js/pages',
            '@components': '/resources/js/components',
            '@images': '/resources/images',
            '@configs': '/resources/js/configs',
            '@util': '/resources/js/util',
        }
    }
});
