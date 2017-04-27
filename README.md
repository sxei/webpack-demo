# webpack-demo

使用webpack实现`html include`功能。

一直以来都想找一个前端预编译模板工具，`art-template`所谓的预编译竟然是编译成JS，不是我所想要的，找了一圈，最后发现`html-webpack-plugin`+`ejs`才是我所想要的。

克隆项目之后执行`npm install`初始化，然后执行`webpack`即可编译。

使用示例：

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<%= require('view/tpl/meta.html')({title: '首页', desc: '这是首页'}) %>
</head>
<body>
	<%= require('view/tpl/header.html')({name: '你好啊'}) %>

	<div class="container">
		<h2 id="page_title">这是标题</h2>
		<div class="row">
			<div class="col-sm-12">
				这里是正文内容
			</div>
		</div>
	</div>
	<%= require('view/tpl/footer.html')() %>
</body>
</html>

```