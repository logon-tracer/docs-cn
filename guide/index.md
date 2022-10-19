# 快速开始

## 总览

LogonTracer 是一个由Spring支持的轻量级日志监控框架。

您可以在 [简介](./why) 部分了解更多关于项目背后的基本原理。

## 添加 LogonTracer 到您的项目

你需要先设置 Maven 拥有 GitHub 的 Package 权限

1. 创建具有相应权限的新 [token](https://github.com/settings/tokens)。
2. 设置 read:packages 权限。

![GitHub Token](/github_token_read_packages.png)

3. 在 ~/.m2/setting.xml 服务器列表中添加 `server`

```xml
<server>
  <id>github</id>
  <username>github_用户名</username>
  <password>github_token</password>
</server>
```

Maven

在 pom .xml 中设置`repository`节点

```xml
<repositories>
  <repository>
    <id>github</id>
    <name>The Maven Repository on Github</name>
    <url>https://maven.pkg.github.com/logon-tracer/core/</url>
  </repository>
</repositories>
```

安装

```xml
<dependency>
  <groupId>logon.tracer</groupId>
  <artifactId>source</artifactId>
  <version>最新版本</version>
</dependency>
```

:::tip 提示
LogonTracer 要求 JDK >=v11.0.3 和 Maven >= v3.6.3
:::

## 配置 LogonTracer

LogonTracer的主要优点之一是它与Spring的统一配置。

如果存在，LogonTracer 将读取您的资源文件夹中 application.yml 文件来匹配插件并设置您的 Spring 应用程序。例如，您的邮件格式和拦截异常将开箱即用。如果你想在发送日志期间进行不同的配置，你可以:

- 添加 `alarm-log.warn.mail`, 这将具有更高的优先级

要配置 LogonTracer 本身, 它只能在 `alarm-log.warn.mail` 中配置。

```yaml
spring:
  alarm-log:
    warn:
      mail:
        # ......
```

参见 [配置参考](/config/settings) 中的配置选项列表

## 实例

| 实例 | 源 |
|---|---|
| `Log4j` | [GitHub](https://github.com/logon-tracer/core/tree/main/example/spring-boot-log4j) |
| `Log4j2` | [GitHub](https://github.com/logon-tracer/core/tree/main/example/spring-boot-log4j2) |
| `Logback` | [GitHub](https://github.com/logon-tracer/core/tree/main/example/spring-boot-logback) |

## 使用未发布的功能

如果你迫不及待想要体验最新的功能，可以自行克隆 [LogonTracer仓库](https://github.com/logon-tracer/core) 到本地机器上，然后自行构建和链接它(将需要 [Maven](https://maven.apache.org/index.html))：

```sh
git clone https://github.com/logon-tracer/core.git
cd core
mvn clean install -U
mvn install
```

然后转到使用 LogonTracer 的项目并安装依赖项(或用于全局链接 LogonTracer 的包管理器)。
