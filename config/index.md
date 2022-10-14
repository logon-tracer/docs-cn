# 配置日志框架

## log4j

需在项目的resources中引入 `log4j.xml` 文件，配置示例如下：

```xml
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration>
  <!--添加控制台的Appender-->
  <appender name="Console" class="org.apache.log4j.ConsoleAppender">
    <!--使用log4j的PatternLayout布局并设置打印日志格式-->
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss,SSS} [%p] %m  >> %c:%L%n"/>
    </layout>
  </appender>

  <!--这里替换成AspectLog4jAsyncAppender-->
  <appender name="AlarmLog" class="logon.tracer.log4j.AlarmLogLog4jAsyncAppender">
    <!--设置AlarmLogLog4jAsyncAppender需接收的两个属性默认值-->
    <param name="warnExceptionExtend" value="false"/>
    <param name="doWarnException" value="java.lang.Exception,java.lang.RuntimeException"/>
  </appender>

  <!--异步打印日志到控制台-->
  <appender name="AsyncConsole" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="Console"/>
  </appender>

  <!--异步启用AlarmLogLog4jAsyncAppender-->
  <appender name="AsyncAlarmLog" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="AlarmLog"/>
  </appender>

  <!--收集所有的日志信息并根据配置的Appender进行输出-->
  <root>
    <priority value="info" />
    <appender-ref ref="AsyncConsole"/>
    <appender-ref ref="AsyncAlarmLog"/>
  </root>
</log4j:configuration>

```


