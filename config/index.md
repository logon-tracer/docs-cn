---
outline: deep
---

# 配置 LogonTracer

## SpringBoot 配置

SpringBoot 项目可以直接安装 SpringBoot 的解决方案。

```xml
<dependency>
  <groupId>logon.tracer</groupId>
  <artifactId>logon-tracer-spring-boot-starter</artifactId>
  <version>最新版本</version>
</dependency>
```

### 系统全局配置

```yaml
spring:
  alarm-log:
    warn:
      mail:
        enabled: true
        smtpHost: xxxxxxxxx # smtp服务器地址
        smtpPort: xxx # smtp服务器端口号
        to: xxx # 邮件接收者
        from: xxx # 邮件发送者
        username: xxx # smtp服务器 用户名
        password: xxx # smtp服务器 密码
      warn-exception-extend: false # 是否开启警告异常扩展
      simple-warn-info: false
      print-stack-trace: true
      max-retry-times: 1 # 最大重试次数
      retry-sleep-millis: 3000 # 每次重试的等待间隔，最终效果 [retrySleepMillis * ( 1 << maxRetryTimes )]
      do-warn-exception: # 获取日志中指定的异常类的完整路径信息
        - java.lang.Throwable
        - java.lang.Exception
```

### 属性配置

> 所有属性的基本描述

## warn 属性定义

| 参数名称 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| do-warn-exception | `List<String>` | null | 全局的检测警告异常 |
| max-retry-times | `Integer` | 3 | 最大重试次数 |
| retry-sleep-millis | `Integer` | 1000 | 发送失败的重试时长（单位：毫秒）默认一秒钟 |
| print-stack-trace | `Boolean` | false | 是否显示堆栈信息，`false`将不显示堆栈信息 |
| simple-warn-info | `Boolean` | false | 是否使用简单邮件样式，`false`将不使用简单样式 |
| warn-exception-extend | `Boolean` | false | 是否开启警告异常扩展，`false`将使用 `do-warn-exception` 所配置值为默认全局检测警告异常 |
| mail | `Object` | new MailConfig() | mail配置对象 |

### mail 相关配置

| 参数名称 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| enabled | `Boolean` | false | 开启错误日志告警，默认不开启告警功能 |
| smtpHost | `String` | null | 邮件服务器地址，例：`smtp.qq.com` |
| smtpPort | `String` | null | 邮件服务器协议端口号，例：`465` |
| to | `String` | null | 邮件接收者用户名，若有多个接收者则使用`,`进行分隔 |
| from | `String` | null | 邮件发送者用户名 |
| username | `String` | null | 邮件服务器用户名 |
| password | `String` | null | 邮件服务器密码 |
| ssl | `Boolean` | true | 是否启用安全的 ssl 连接，默认开启 ssl 安全连接 |
| debug | `Boolean` | false | 是否启用 debug 功能，默认关闭 debug 功能 |

## 日志框架

### Log4j

- log4j.xml
```xml
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration>
  <appender name="Console" class="org.apache.log4j.ConsoleAppender">
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss,SSS} [%p] %m  >> %c:%L%n"/>
    </layout>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.log4j.AlarmLogLog4jAsyncAppender">
    <param name="warnExceptionExtend" value="false"/>
    <param name="doWarnException" value="java.lang.Exception,java.lang.RuntimeException"/>
  </appender>

  <appender name="AsyncConsole" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root>
    <priority value="info" />
    <appender-ref ref="AsyncConsole"/>
    <appender-ref ref="AsyncAlarmLog"/>
  </root>
</log4j:configuration>
```

- log4j-sync.xml

```xml
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration>
  <appender name="Console" class="org.apache.log4j.ConsoleAppender">
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss,SSS} [%p] %m  >> %c:%L%n"/>
    </layout>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.log4j.AlarmLogLog4jAsyncAppender">
    <param name="warnExceptionExtend" value="false"/>
    <param name="doWarnException" value="java.lang.Exception,java.lang.RuntimeException"/>
  </appender>

  <root>
    <priority value="info" />
    <appender-ref ref="Console"/>
    <appender-ref ref="AlarmLog"/>
  </root>
</log4j:configuration>
```

- log4j-async.xml

```xml
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration>
  <appender name="Console" class="org.apache.log4j.ConsoleAppender">
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss,SSS} [%p] %m  >> %c:%L%n"/>
    </layout>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.log4j.AlarmLogLog4jAsyncAppender">
    <param name="warnExceptionExtend" value="false"/>
    <param name="doWarnException" value="java.lang.Exception,java.lang.RuntimeException"/>
  </appender>

  <appender name="AsyncConsole" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root>
    <priority value="info" />
    <appender-ref ref="AsyncConsole"/>
    <appender-ref ref="AsyncAlarmLog"/>
  </root>
</log4j:configuration>
```

### Log4j2

- log4j2-spring.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
  <appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>

    <AlarmLog name="AlarmLog">
      <warnExceptionExtend>false</warnExceptionExtend>
      <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    </AlarmLog>

    <Async name="AsyncConsole">
      <AppenderRef ref="Console"/>
    </Async>

    <Async name="AsyncAlarmLog">
      <AppenderRef ref="AlarmLog"/>
    </Async>

  </appenders>
  <loggers>
    <root level="INFO">
      <appender-ref ref="AsyncConsole"/>
      <appender-ref ref="AsyncAlarmLog" level="ERROR" />
    </root>
  </loggers>
</configuration>
```

- log4j2-spring-sync.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
  <appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>

    <AlarmLog name="AlarmLog">
      <warnExceptionExtend>false</warnExceptionExtend>
      <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    </AlarmLog>

  </appenders>
  <loggers>
    <root level="INFO">
      <appender-ref ref="Console"/>
      <appender-ref ref="AlarmLog" level="ERROR" />
    </root>
  </loggers>
</configuration>
```

- log4j2-spring-async.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
  <appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>

    <AlarmLog name="AlarmLog">
      <warnExceptionExtend>false</warnExceptionExtend>
      <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    </AlarmLog>

    <Async name="AsyncConsole">
      <AppenderRef ref="Console"/>
    </Async>

    <Async name="AsyncAlarmLog">
      <AppenderRef ref="AlarmLog"/>
    </Async>

  </appenders>
  <loggers>
    <root level="INFO">
      <appender-ref ref="AsyncConsole"/>
      <appender-ref ref="AsyncAlarmLog" level="ERROR" />
    </root>
  </loggers>
</configuration>
```

### Logback

- logback-spring.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">

  <appender name="Console" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
    </encoder>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.logback.AlarmLogLogbackAsyncAppender">
    <warnExceptionExtend>false</warnExceptionExtend>
    <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="ch.qos.logback.classic.AsyncAppender">
    <discardingThreshold>0</discardingThreshold>
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root level="INFO">
    <appender-ref ref="AsyncAlarmLog" level="ERROR" />
  </root>
</configuration>
```

- logback-spring-sync.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">

  <appender name="Console" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
    </encoder>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.logback.AlarmLogLogbackAsyncAppender">
    <warnExceptionExtend>false</warnExceptionExtend>
    <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    <includeCallerData>true</includeCallerData>
    <appender-ref ref="Console"/>
  </appender>

  <root level="INFO">
    <appender-ref ref="AlarmLog" level="ERROR" />
  </root>
</configuration>
```

- logback-spring-async.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">

  <appender name="Console" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
    </encoder>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.logback.AlarmLogLogbackAsyncAppender">
    <warnExceptionExtend>false</warnExceptionExtend>
    <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="ch.qos.logback.classic.AsyncAppender">
    <discardingThreshold>0</discardingThreshold>
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root level="INFO">
    <appender-ref ref="AsyncAlarmLog" level="ERROR" />
  </root>
</configuration>
```
