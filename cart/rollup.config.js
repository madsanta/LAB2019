import lessModules from 'rollup-plugin-less-modules';
import copy from 'rollup-plugin-copy'
import litHtml from 'rollup-plugin-lit-html';
import nodeResolve from 'rollup-plugin-node-resolve';

export default [{
    input: 'src/app.js',
    output: {
        file: 'static/main.js',
        format: 'esm'
    },
    plugins: [
        // подключение less стилей
        lessModules({
            output: 'static/main.css'
        }),
        copy({
            targets: [
                'src/img'
            ],
            outputFolder: 'static'
        }),
        litHtml(),
        nodeResolve({
            jsnext: true
        })
    ]
}];