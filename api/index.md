---
outline: deep
---

# API 参考

我们提供了许多类来方便您的自定义和扩展。下面我们将对这个类进行大致描述。

## MessageContext

### DefaultAlarmMessageContext

```java
import logon.tracer.context.AlarmInfoContext;
import logon.tracer.context.DefaultAlarmMessageContext;
import logon.tracer.dto.AlarmLogSimpleConfig;
import logon.tracer.dto.AlarmMailContent;
import org.springframework.stereotype.Component;

@Component
public class CustomAlarmMessageContext extends DefaultAlarmMessageContext {
  @Override
  public AlarmMailContent mailContent(AlarmInfoContext context, Throwable throwable, AlarmLogSimpleConfig config) {
    return super.mailContent(context, throwable, config);
  }
}
```

### AlarmMessageContext

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

## AlarmLogHelper

输出日志和可选发送邮件

```java
// 发送邮件
AlarmLogHelper.getPrintLogInstance().error("123");
AlarmLogHelper.getPrintLogInstance().error("123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error("123:{}", 456);
AlarmLogHelper.getPrintLogInstance().error("123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}:{}", 456, 789, "111", new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123");
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}", 456);
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111", new RuntimeException());
// 不发送邮件
AlarmLogHelper.getPrintLogInstance(false).error("123");
AlarmLogHelper.getPrintLogInstance(false).error("123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error("123:{}", 456);
AlarmLogHelper.getPrintLogInstance(false).error("123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}:{}", 456, 789, "111", new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123");
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}", 456);
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111", new RuntimeException());
```

## Exception

### AlarmLogException

这个类继承了 `java.lang.Exception` 类和 AlarmLogException 类，即在抛出日志事件时会触发警告事件。

### AlarmLogRuntimeException

这个类继承了 `java.lang.RuntimeException` 类和 AlarmLogException 类，即当抛出日志事件时，将触发警告事件。

### AlarmLogDoWarnException

实现 AlarmLogDoWarnException 接口，即抛出日志事件时，触发警告事件。注意: 目前这个接口还需要是 `java.lang.Throwable` 的子类。这一限制将在未来进行修改。由于 java 是单继承的，当当前项目中不方便继承 AlarmLog 异常时，可以使用实现该接口的方法。
