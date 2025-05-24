# 微信小程序截图控制演示

这是一个演示如何在微信小程序中控制截图和录屏功能的示例项目。通过使用 `wx.setVisualEffectOnCapture` API，实现了对页面截图和录屏功能的精确控制。

## 功能特点

- ✨ 一键禁用/启用截图和录屏功能
- 🔄 实时显示当前截图/录屏状态
- 🛡️ 自动保护：离开页面时自动恢复截图功能
- 📱 支持 Skyline 渲染引擎
- 🎨 美观的用户界面

## 技术实现

### 核心API

项目主要使用了微信小程序的 `wx.setVisualEffectOnCapture` API 来实现截图控制。这个 API 可以设置截屏/录屏时的表现，支持两个参数：

- `visualEffect`: 截屏/录屏时的表现，支持 `none`（正常）和 `hidden`（隐藏）
- `success/fail/complete`: 回调函数

### 项目结构

```
├── app.js                 # 应用程序入口，包含全局数据
├── app.json              # 全局配置文件
├── app.wxss              # 全局样式文件
├── components/           # 组件目录
│   └── navigation-bar/   # 自定义导航栏组件
├── pages/               # 页面目录
│   └── index/          # 主页面
│       ├── index.js    # 页面逻辑
│       ├── index.json  # 页面配置
│       ├── index.wxml  # 页面结构
│       └── index.wxss  # 页面样式
└── README.md           # 项目说明文档
```

### 设计思路

1. **状态管理**
   - 使用 `globalData` 存储截图禁用状态
   - 通过页面的生命周期函数管理状态变化

2. **用户界面**
   - 采用自定义导航栏提供一致的用户体验
   - 使用 flex 布局实现响应式界面
   - 清晰的状态提示和操作按钮

3. **安全考虑**
   - 页面隐藏时自动恢复截图功能
   - 页面卸载时确保截图功能被重置
   - 状态同步确保功能正常切换

## 使用方法

### 基础配置

1. 确保项目的 `app.json` 中包含必要的配置：

```json
{
  "renderer": "skyline",
  "window": {
    "navigationStyle": "custom"
  }
}
```

2. 在页面的 json 文件中添加配置：

```json
{
  "navigationStyle": "custom",
  "usingComponents": {
    "navigation-bar": "/components/navigation-bar/navigation-bar"
  }
}
```

### 功能使用

1. **禁用截图/录屏**
   - 点击"禁用截图和录屏"按钮
   - 状态文本会更新为"截图和录屏功能已禁用"
   - 此时无法对页面进行截图或录屏

2. **启用截图/录屏**
   - 点击"启用截图和录屏"按钮
   - 状态文本会更新为"截图和录屏功能已启用"
   - 可以正常截图或录屏

3. **自动保护**
   - 当用户离开页面时，截图功能会自动恢复
   - 当小程序退出时，截图功能会自动恢复

## API 示例

```javascript
// 禁用截图和录屏
wx.setVisualEffectOnCapture({
  visualEffect: 'hidden',
  success: () => {
    // 处理成功
  },
  fail: (error) => {
    // 处理错误
  }
});

// 启用截图和录屏
wx.setVisualEffectOnCapture({
  visualEffect: 'none',
  success: () => {
    // 处理成功
  },
  fail: (error) => {
    // 处理错误
  }
});
```

## 注意事项

1. **兼容性**
   - 需要基础库 2.11.0 或更高版本
   - 需要开启 Skyline 渲染引擎
   - 仅支持 iOS 和 Android 客户端

2. **生命周期**
   - 页面隐藏时会自动恢复截图功能
   - 建议在页面卸载时手动恢复截图功能

3. **性能考虑**
   - API 调用会略微影响性能
   - 建议避免频繁切换状态

## 开发环境

- 微信开发者工具 1.06.2412050
- 基础库版本 3.8.6
- 开发环境 Windows

## 贡献指南

欢迎提交问题和改进建议！如果你想贡献代码：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详细信息

## 参考资料

- [微信小程序官方文档 - wx.setVisualEffectOnCapture](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setVisualEffectOnCapture.html)
- [微信小程序官方文档 - Skyline 渲染引擎](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/introduction.html)