# 陈祺新 · 个人网站

网站地址：https://1943432515.github.io/

这是使用 HTML、CSS 与 JavaScript 编写的静态个人网站，通过 GitHub Pages 发布。包含中英文切换、研究介绍、论文 PDF、CAFCL 项目入口和训练曲线，适配桌面与手机。

## 修改内容

- `index.html`：个人信息、研究介绍与链接；中英文文案分别位于 `data-zh` 和 `data-en` 属性。
- `styles.css`：配色、字体与响应式布局。
- `script.js`：语言切换。
- `paper/CAFCL.pdf`：论文全文。
- `assets/cafcl_loss_curve.png`：CAFCL 项目的训练曲线。

## 本地预览

```bash
python -m http.server 8765
```

浏览器打开 http://localhost:8765 。

## 发布

GitHub Pages 从 `main` 分支根目录发布。提交并推送修改后，GitHub 自动重新部署。
