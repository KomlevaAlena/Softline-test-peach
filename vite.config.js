import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default () => {
  return {
      plugins: [
          createSvgSpritePlugin({
              exportType: 'vanilla',
              include: '**/icons/*.svg'
          }),
      ],
  }
};
