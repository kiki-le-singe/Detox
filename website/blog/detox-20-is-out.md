---
authors:
  - noomorph
tags: [major-release, genymotion]
---

# Detox 20 is out

:::caution

This is a draft post about a future release.
Congrats if you found it earlier than we announced it.

:::

Today we're proud to announce the new major release, **Detox 20**, which brings:

* improved integration with test runners,
* official support for Genymotion SaaS,
* configurable logging subsystem,
* a few convenience features (`headless` for iOS, `reversePorts` for Android),
* and more optimizations to land in the next minor versions.

## Integration with test runners

**Highlights**: [`Config file > Test runner`], [`Internals API`], [`Dropping Mocha support`].

It took about a few months of work to formalize the contract between Detox and a test runner. While there's still a lot of place for improvement, the new Detox release refines their interaction and lays the groundwork for third-party integrations.

Mocha was our first supported test runner, but unfortunately, it could not keep up with our scaling requirements as the number of end-to-end tests grew. [By the time][Mocha 8] it acquired the ability to run tests in parallel, we already had [to place bets][Jest PR] on the next horse, Jest.

We attempted to keep compatibility with both Jest and Mocha, but the farther we went, the more obvious it was that we couldn't have it both ways. As it turned out, Jest wasn't easy to get along with – our first integration with it was too simplistic. Over a couple of years of use in production, we kept discovering various issues that forced us to rewrite our "glue" code from scratch twice, and this isn't over yet. All that combined didn't leave much time and energy for tinkering with Mocha again.

The new Detox release brings such improvements as [test runner config][`Config file > Test runner`] and [Internals API][`Internals API`]. However, in this transition, we had to leave behind our old Mocha integration due to a shortage of resources. If there's enough demand, it is up to the open-source community to build it.

## Genymotion SaaS

TODO: Genymotion SaaS

## Configurable logger

**Highlights**: [`Config file > Logger`], [`Logger API`].

The rigidity of the logging subsystem has been weighing on me ever [since I rewrote it][Logger rewrite] in the summer of 2019. Due to time constraints and subpar test runner integrations, it was impossible to do it right the first time, so we lived about three years with tech debt.

The problem wasn't fatal but quite discomforting, nevertheless. Here are a few examples you could have noticed if you have ever used Detox timeline and log artifacts, especially when running tests in parallel:

* an uncanny file array: `detox_pid_7505.log`, `detox_pid_7505.log.json`, `detox_pid_7506.log`;
* a relatively shallow `detox.trace.json`: test suites, test functions, and some user-defined segments.

The new release condenses all those numerous Detox logs into two files:

* the plain, human-readable `detox.log`;
* the raw, machine-readable `detox.trace.json` for Perfetto, Chrome Trace, and other programs.

\[here be the screenshot]

It becomes possible now to customize the console output of Detox too:

```js title="detox.config.js"
/** @type {Detox.DetoxConfig} */
module.exports = {
  // ...
  logger: {
    showDate: false,
    showProcess: false,
  },
};
```

\[here be the screenshot]

## Minor features

TODO: Minor features

## Afterword

Over the last year and a half, we have been establishing a centralized configuration system for more than 50 projects using Detox at Wix. While it never seemed to be a cakewalk, the entire experience of troubleshooting over a hundred issues across the organization did not leave us the same.

We clearly see there are numerous things to improve in Detox, but most of them boil down to the same thing – **scaling**. Surprisingly, "scaling" makes an excellent umbrella term for nearly every challenge we've been encountering lately:

* _scaling up the users count_ requires us to improve the onboarding and troubleshooting experience;
* _scaling up the projects count_ forces us to centralize scattered configs into flexible organization presets;
* _scaling up the tests count_ prompts us to optimize the codebase and incline it towards cloud and remote execution.

Our core team has been challenged with human resource constraints and scaling needs for a long time already, and, in many ways, that has shaped a specific mindset within our core team, where every feature is evaluated via asking a simple question: _is it going to save us and other people time to focus on more important things?_ Teaching how to fish is better than giving a fish, and our success at preventing support issues is more valuable than our success at solving them ourselves.

This is why the upcoming releases will be aimed at...

[`Config file > Test runner`]: /docs/next/config/testRunner
[`Internals API`]: /docs/next/api/internals
[`Dropping Mocha support`]: https://github.com/wix/Detox/issues/3193
[`Config file > Logger`]: /docs/next/config/logger
[`Logger API`]: /docs/next/api/logger
[Mocha 8]: https://github.com/mochajs/mocha/releases/tag/v8.0.0
[Jest PR]: https://github.com/wix/Detox/pull/609
[Logger rewrite]: https://github.com/wix/Detox/pull/835
