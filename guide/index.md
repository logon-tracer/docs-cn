---
outline: deep
---

# 快速起步

## 总览

在业务中，我们可能会请求目标服务器，目标服务器在处理请求的过程中可能会出现异常，导致业务无法正常执行，会给用户造成无法挽回的损失。

LogonTracer 应运而生，他能及时在目标服务器出现错误而导致业务无法继续执行时发送错误日志信息给运维人员，准确定位错误位置，便于运维人员及时排查错误，及时止损。LogonTracer 还支持各种日志框架，使系统更好的接入进来。

## 环境支持

这是写 LogonTracer 的环境，并不代表一定要在这个环境下运行，但是大家可以放心，下面的环境不会出错的。

- JDK >= 11.0.3
- Maven >= 3.6.3

## 安装

## 配置

## 使用

使用错误日志发送邮件功能共有如下两种方式：

- [采用注解方式(**推荐**)](#注解方式)
- [采用API方式](#api方式)

### 注解方式

:::warning 警告

- 不可用于接口

- 注解`@Alarm`用于实现类或方法上

:::

```java
@Service
@Alarm(doWarnException = Exception.class, warnExceptionExtend = true)
public class TestServiceImpl implements TestService {
  @Override
  public String test1() {
      int num = 10 / 0;
      return String.valueOf(num);
  }
}
```

### API方式

```java
@Service
public class TestServiceImpl implements TestService {
  @Override
  public String test1() {
      // 通过AlarmLogHelper获取实例，发送错误邮件
      AlarmLogHelper.getPrintLogInstance(true).error("123", new RuntimeException());
       ...
  }
}
```

## 自定义模板

```java
@Component
public class CustomAlarmMessageContext implements AlarmMessageContext {
  /**
  * Customize the content sent to mail.
  *
  * @param context   The alarm log info.
  * @param throwable The throwable that was caught.
  * @param config    The config context.
  * @return Content sent to mail.
  */
  @Override
  public AlarmMailContent mailContent(AlarmInfoContext context, Throwable throwable, AlarmLogSimpleConfig config) {
      ...
      return new AlarmMailContent(context.getMessage(), context.getClassName());
  }
}
```

## 使用未发布的功能

如果你迫不及待想要体验最新的功能，可以自行克隆 [LogonTracer](https://github.com/logon-tracer/core) 仓库 到本地机器上然后自行将其链接（将需要 Maven）：

```bash
git clone https://github.com/logon-tracer/core.git
```
