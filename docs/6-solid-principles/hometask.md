---
sidebar_position: 6
---

# 5. 📚 Home Task

1. Identify SOLID Principles

   Choose a large open source project written in TypeScript preferably (choose another OOP language if you want: Java, C#, Ruby). You may want to look at [Angular](https://github.com/angular) or [VS Code](https://github.com/microsoft/vscode) source code. A project may be considered large enough if it contains at least 30 classes.

   Try to identify **at least 1 (one)** example of each SOLID principle. Document them by filling in the table below. Note that you don't need to give code examples itself, just provide the link to file with line numbers range (or whatever you want to clearly recognize the example you describe, e.g. file hello.ts:15-36, class Foo), you can also write free text.

   | Principle                        | Examples                                                                                                                                                                                                                                                                          |
   | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Single Responsibility Principle  | [checksumService.ts:18-29, class ChecksumService](https://github.com/microsoft/vscode/blob/main/src/vs/platform/checksum/node/checksumService.ts)                                                                                                                                 |
   | Open / Closed Principle          | [commands.ts, 131, CommandsRegistry](https://github.com/microsoft/vscode/blob/main/src/vs/platform/commands/common/commands.ts)                                                                                                                                                   |
   | Liskov Substitution Principle    | [actionViewItems.ts:259, 410 , class ActionViewItem, class SelectActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/base/browser/ui/actionbar/actionViewItems.ts)                                                                                               |
   | Interface Seggregation Principle | [checksumService.ts:11-19, interface IChecksumService](https://github.com/microsoft/vscode/blob/main/src/vs/platform/checksum/common/checksumService.ts)                                                                                                                          |
   | Dependency Inversion Principle   | [lifecycle.ts:241, abstract class Disposable](https://github.com/microsoft/vscode/blob/main/src/vs/base/common/lifecycle.ts) [actionViewItems.ts:29, class BaseActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/base/browser/ui/actionbar/actionViewItems.ts) |

2. Violations of SOLID and Other Principles

   Try to find **at least 1 (one)** violations of each SOLID principle in the project you have chosen for Problem 1 and document it. Additionally, you can describe other (DRY/KISS/YAGNI/etc.) violations.

   You may provide short descriptions about how to refactor/improve such violations.

   Optionally, you can add small examples with results of such refactoring using pseudocode or real code.

   - Violates SRP
     - [actionViewItems.ts:29, class BaseActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/base/browser/ui/actionbar/actionViewItems.ts)
     - it has too many reasons for change
       - eg. tooltip, actions, render would be better to be separated
   - Violates OCP
     - [actionbar.ts:150, class ActionBar](https://github.com/microsoft/vscode/blob/main/src/vs/base/browser/ui/actionbar/actionbar.ts)
     - it hardcodes the different event conditions, every time if there is a new event, this code must be modified
   - Violates ISP
     - [actionbar.ts:23, interface IActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/base/browser/ui/actionbar/actionbar.ts)
     - `fromRight` parameter is not being utilized in [actionViewItems.ts:174, class BaseActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/base/browser/ui/actionbar/actionViewItems.ts)
   - Violates DIP
     - [menuEntryActionViewItem.ts:133, class MenuEntryActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/platform/actions/browser/menuEntryActionViewItem.ts)
     - `MenuEntryActionViewItem` should inherit from the an abstract class, since `ActionViewItem` class inherits from `BaseActionViewItem` class which inherits from `Disposable` abstract class
   - Violates LSP
     - [menuEntryActionViewItem.ts:133. class MenuEntryActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/platform/actions/browser/menuEntryActionViewItem.ts)
       - not every `BaseActionViewItem` has command actions
     - [class DropdownWithDefaultActionViewItem](https://github.com/microsoft/vscode/blob/main/src/vs/platform/actions/browser/menuEntryActionViewItem.ts)
       - similarly not every `BaseActionViewItem` has dropdown related options
