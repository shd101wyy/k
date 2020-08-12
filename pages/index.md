<a style="color:#F44336" href="./join_team.md">Join the K Team!</a>

<b style="font-size: 36px; line-height: 1;">K</b> is a rewrite-based
executable semantic framework in which programming languages, type
systems and formal analysis tools can be defined using
configurations, computations and rules. Configurations organize the
state in units called cells, which are labeled and can be nested.
Computations carry computational meaning as special nested list
structures sequentializing computational tasks, such as fragments of
program. Computations extend the original language abstract syntax.
K (rewrite) rules make it explicit which parts of the term they
read-only, write-only, read-write, or do not care about. This makes
K suitable for defining truly concurrent languages even in the
presence of sharing. Computations are like any other terms in a
rewriting environment: they can be matched, moved from one place to
another, modified, or deleted. This makes K suitable for defining
control-intensive features such as abrupt termination, exceptions or
call/cc.

## Overview

- A ten-minute overview video [slide presentation](./overview.md).
- A ninety-minute [tutorial video](https://youtu.be/3ovulLNCEQc?list=PLQMvp5V6ZQjOm4JZK15s-WJtQHxOmb2h7), given at ETAPS'16.
- [Optional] A high-level [interview](http://channel9.msdn.com/posts/ICSE-2011-Grigore-Rosu-The-Art-and-Science-of-Program-Verification) about rewrite-based semantics (Wolfram Schulte interviews Grigore Rosu at [ICSE'11](http://2011.icse-conferences.org/).
- [FAQ](./faq.md)

## K Tool Download and Online Interface

- The provided [K tool binaries](./downloads.md) are supported on Linux, OS X, and Windows. Other platforms may or may not work correctly. We welcome information about usability of unsupported platforms or bugs in the supported platforms.
- Try our [Editor Support](./editor_support.md) page for links to K syntax highlighting definitions for various popular editors/IDEs. Please feel free to contribute.
- The source code (Java) is available on [Github](https://github.com/kframework), where you can also [report bugs](http://github.com/kframework/k/issues)</a> (please do so).
- An experimental [online interface](http://kframework.org/kweb) to the K tool is also available.

## Learn K

- Do the <a style="font-size:24px" href="./tutorials.md">K Tutorial!</a>
- Read some papers about K (click on Publications in the left tab).

## Links

- [K and matching logic webpage](http://fsl.cs.uiuc.edu/index.php/K_and_Matching_Logic) at UIUC (USA).
- [K webpage](http://fmse.info.uaic.ro/projects/K/) at UAIC (Romania).
- [Matching logic](http://matching-logic.org/) webpage at UIUC (USA).
- [Online K Discussion Channel](https://riot.im/app/#/room/#k:matrix.org) for K users (Slack & Riot). This is the recommended way to ask questions about K and interact with the K community.
- [K user list](https://lists.cs.illinois.edu/lists/info/k-user) for general questions to the K user community (use the channel above if you want quick answers) and news on major tool updates.
- [info@kframework.org](mailto:info@kframework.org): when you cannot get your questions answered using the above channels.
