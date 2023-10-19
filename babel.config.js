module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@screens": "./src/screens",
            "@models": "./src/models",
            "@providers": "./src/providers",
            "@routes": "./src/routes",
            "@assets": "./src/assets",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@contexts": "./src/contexts",
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@theme": "./src/theme",
          },
        },
      ],
    ],
  };
};
