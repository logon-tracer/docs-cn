---
outline: deep
---

# LogonTracer 配置属性列表

## warn属性定义

| 参数名称 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| do-warn-exception | `List<String>` | null | 全局的检测警告异常 |
| max-retry-times | `Integer` | 3 | 最大重试次数 |
| retry-sleep-millis | `Integer` | 1000 | 发送失败的重试时长（单位：毫秒）默认一秒钟 |
| print-stack-trace | `Boolean` | false | 是否显示堆栈信息，false将不显示堆栈信息 |
| simple-warn-info | `Boolean` | false | 是否使用简单邮件样式，false将不使用简单样式 |
| warn-exception-extend | `Boolean` | false | 是否开启警告异常扩展，false将使用 do-warn-exception 所配置值为默认全局检测警告异常 |
| mail | `Object` | new MailConfig() | mail配置对象 |

### mail相关配置

| 参数名称 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| enabled | `Boolean` | false | 开启错误日志告警，默认不开启告警功能 |
| smtpHost | `String` | null | 邮件服务器地址，例：smtp.qq.com |
| smtpPort | `String` | null | 邮件服务器协议端口号，例：465 |
| to | `String` | null | 邮件接收者用户名，若有多个接收者使用`,`进行分隔 |
| from | `String` | null | 邮件发送者用户名 |
| username | `String` | null | 邮件服务器用户名 |
| password | `String` | null | 邮件服务器密码 |
| ssl | `Boolean` | true | 是否启用安全的ssl连接，默认开启ssl安全连接 |
| debug | `Boolean` | false | 是否启用debug功能，默认关闭debug功能 |
