# 自定义邮件

有时邮件的默认格式可能不能满足我们的需求，我们想定制配置邮件的内容。

只需按照下面的步骤创建您自己的电子邮件格式

## 创建一个 `CustomAlarmMessageContext` class文件

- 使 `CustomAlarmMessageContext` 实现 `CustomAlarmMessageContext` 接口

```java
import logon.tracer.context.AlarmInfoContext;
import logon.tracer.context.AlarmMessageContext;
import logon.tracer.dto.AlarmLogSimpleConfig;
import logon.tracer.dto.AlarmMailContent;
import org.springframework.stereotype.Component;

@Component
public class CustomAlarmMessageContext1 implements AlarmMessageContext {
  /**
   * 自定义发送邮件的内容.
   *
   * @param context   {@link AlarmInfoContext} 告警日志信息.
   * @param throwable {@link Throwable} 被捕获的异常.
   * @param config    {@link AlarmLogSimpleConfig} 配置上下文.
   * @return {@link AlarmMailContent} 发送邮件的内容.
   */
  @Override
  public AlarmMailContent mailContent(AlarmInfoContext context, Throwable throwable, AlarmLogSimpleConfig config) {
    return new AlarmMailContent(context.getMessage(), context.getClassName());
  }
}
```

这将允许我们发送自定义电子邮件。
