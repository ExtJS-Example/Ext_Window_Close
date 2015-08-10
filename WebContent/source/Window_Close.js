Ext.onReady(function() {
	var win = new Ext.Window({
		title: '测试关闭',
		width: 500,
		height: 300,
		isClose: false,	
		listeners: {
			beforeclose: function(panel) {
				
				// 首先判断ifClose是否为true
				if(win.isClose) return true;
				
				Ext.Msg.confirm('警告', '您确定要退出?', function(btn) {
					if(btn=='yes') {
						win.isClose = true;
						win.close();	// 再次调用窗口的关闭函数
					}
				});
				
				// 异步时, 先不执行关闭函数.
				return false;
//				return confirm('您确定要退出?');
			}
		}
	});
	win.show();
});










