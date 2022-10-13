# LogonTracer 快速起步
## 总览
在业务中，我们可能会请求目标服务器，目标服务器在处理请求的过程中可能会出现异常，导致业务无法正常执行，会给用户造成无法挽回的损失。
LogonTracer 应运而生，他能及时在目标服务器出现错误而导致业务无法继续执行时发送错误日志信息给运维人员，准确定位错误位置，便于运
维人员及时排查错误，及时止损。LogonTracer 还支持各种日志框架，使系统更好的接入进来。

## 环境支持
这是笔者写 LogonTracer 的环境，并不代表一定要在这个环境下运行，但是大家可以放心，下面的环境不会出错的。

- JDK >= 11.0.3
- Node >= 16.15.1
- pnpm >= 7.9.0
- vite >= 3