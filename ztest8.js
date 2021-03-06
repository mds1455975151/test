/*
账号系统相关
	1. 用户列表
		a. admin用户可以查看所有用户
		b. delears可以查看自己的子商户列表
		c. 子商户没有查看用户列表权限
	2. 删除用户
		a. 只可以删除子商户级别用户
		b. 不可以删除delears级别商户
		c. 删除子商户时将已绑定设备所有权给还商户,同时清空已绑定围栏
--删除用户时用户创建的围栏也要删除
	3. 添加用户
		a. admin用户添加的用户为delears
		b. delears用户添加的用户为business
	4. 账户控制
		a. 多级控制时只能返回到上一级

地理围栏相关
	1. 修改围栏(删除同)
		a. admin可以修改任何人的围栏
		b. delears不能修改子商户的围栏

设备相关
	1. 总览(列表同)
		a. admin可以看到所有设备
		b. delears可以看到分配后和未分配的
		c. business只能看到自己的
	2. 更新设备信息(规则同上)
		a. 只能更新 设备名称 标签 单独报警人字段
	3. 删除设备
		a. business用户删除设备归还所有权,已绑定围栏置空
---设备上行数据同时标记删除
		b. delears和admin删除设备如何操作?
---admin不能删除设备,delears不能删除已经分配的设备,delears删除未分配的设备物理删除
	4. 绑定围栏(批量绑定同)
		a. 设备是否只能绑定设备所有者的围栏?
---谁得设备只能用谁的围栏,分配设备之前如果已绑定围栏则清除,围栏,周期,经销商不能代为修改
	5. 经销商收回子商户设备的所有权(是否需要?)
	6. 拉取设备
		a. 只有delears可以拉取IOT平台设备
		b. admin不可以代为拉取
		c. 拉取的设备无则插入,有则抛弃

通知相关、停留详情、围栏总览、围栏列表查看的是自己的,不包含子商户数据
*/