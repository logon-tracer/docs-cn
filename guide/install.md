# 安装

## core

这是 LogonTracer 的核心包。LogonTracer是一个轻量级日志监控框架，兼容市场上的大多数日志框架，用户可定制邮件发送内容格式模板

## 下载源码或者安装包

你可以通过源码和发行包两种方式来获取 LogonTracer。

## 从 Github 上下载源码方式

```bash
git clone https://github.com/logon-tracer/core.git
```

## 使用方式

使用错误日志发送邮件功能共有如下两种方式：

- [采用注解方式(**推荐**)](./install#注解方式)
- [采用API方式](./install#api方式)

### 注解方式
:::warning
须知：不可用于接口([因素](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop-pointcuts-designators)-@within切入点指示符限制)

注解@Alarm用于实现类或方法上
:::

> 使用方式样例
> ```java
> @Service
> @Alarm(doWarnException = Exception.class, warnExceptionExtend = true)
> public class TestServiceImpl implements TestService {
>
>   @Override
>   public String test1() {
>       int num = 10 / 0;
>       return String.valueOf(num);
>   }
> }
> ```
> 结果异常（例：ArithmeticException）

### API方式

> 使用方式样例
> ```java
> @Service
> public class TestServiceImpl implements TestService {
>
>   @Override
>   public String test1() {
>       // 通过AlarmLogHelper获取实例，发送错误邮件
>       AlarmLogHelper.getPrintLogInstance(true).error("123", new RuntimeException());
>        ...
>   }
> }
> ```
> 结果异常（例：RuntimeException）

## 自定义模板

> 使用样例
> ```java
> @Component
> public class CustomAlarmMessageContext implements AlarmMessageContext {
>   /**
>   * Customize the content sent to mail.
>   *
>   * @param context   The alarm log info.
>   * @param throwable The throwable that was caught.
>   * @param config    The config context.
>   * @return Content sent to mail.
>   */
>   @Override
>   public AlarmMailContent mailContent(AlarmInfoContext context, Throwable throwable, AlarmLogSimpleConfig config) {
>       ...
>       return new AlarmMailContent(context.getMessage(), context.getClassName());
>   }
> }
> ```
> 实现 logon.tracer.context.AlarmMessageContext接口，自定义邮件内容格式，支持html标签
