// 自定义 Jest 配置
exports.node = (config) => {
  config.moduleNameMapper = {
    '^context-menu/(.+)$': '<rootDir>/$1',
    '^context-menu$': '<rootDir>',
  };
};

exports.client = (config) => {
  config.moduleNameMapper = {
    '^context-menu/(.+)$': '<rootDir>/$1',
    '^context-menu$': '<rootDir>',
  };
};
