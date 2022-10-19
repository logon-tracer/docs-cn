# 为什么是 LogonTracer

::: tip 注意
本指南假设您熟悉Spring。开始学习更多知识的一个好方法是阅读 [Why Spring Guide](https://spring.io/why-spring) 和 [SpringBoot从0到1](https://tanzu.vmware.com/content/springone-platform-2017/from-zero-to-hero-with-spring-boot-brian-clozel) ， [Brian Clozel](https://twitter.com/bclozel) 在其中做了一个演示解释了主要用法。
:::

## 需要Spring本地日志告警

Spring 对常见 web 模式的开箱即用的支持、控制倒置和依赖注入等特性以及它的许多插件和集成正在培育一个充满活力的生态系统。它的开发和构建故事是其成功的关键。不过，Spring 的日志警报故事还不清楚。

在开发过程中查看日志可以直接控制、快速、准确地捕获错误。然而，一旦开发逐渐完成，部署服务器上出现错误，就很难快速了解甚至定位错误生成的日志。如果我们在 Spring App 中发现了一些意想不到的错误，并发送电子邮件通知开发人员，那么这可以帮助开发人员快速定位和解决错误。

考虑到 Log4j2 和 LogBack 或 Log4j 的大规模采用，LogonTracer 提供了一个兼容的 API，可以与它们中的任何一个完美兼容，没有区别。并且有一个开箱即用的电子邮件模板，它可以准确地通知开发人员错误的详细位置。

![log template](/log_template.png)

LogonTracer 的目标是将自己定位为 Spring 项目的日志报警选择，甚至是不使用 Spring 的项目的可靠替代方案。

继续阅读 [快速起步](./index.html)
