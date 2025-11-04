**NextKit Boilerplate 项目说明书**：
---
### **NextKit Boilerplate 项目概述**

**目标**：本文档旨在为 AI 助手提供关于 "NextKit" 项目的全面技术概览。NextKit 是一个基于 Next.js 的入门模板（Boilerplate），预先配置了身份验证、数据库 ORM、UI 组件库和支付集成等常用功能，旨在加速新项目的启动和开发。

**核心技术栈**:

*   **框架**: Next.js (src folder + App Router)
*   **语言**: TypeScript
*   **数据库**: SQLite (本地)
*   **ORM**: Drizzle ORM
*   **认证**: BetterAuth (邮箱/密码 + Google OAuth)
*   **UI**: Tailwind CSS + shadcn/ui + lucide-react
*   **表单**: React Hook Form + Zod
*   **支付**: Stripe
*   **环境变量**: T3 Env

---

### **项目结构概览**

```
/
├── drizzle.config.ts      # Drizzle ORM 配置文件，用于数据库迁移
├── next.config.mjs        # Next.js 配置文件
├── src/
│   ├── app/
│   │   ├── api/             # API 路由
│   │   │   ├── auth/        # BetterAuth 的认证路由
│   │   │   ├── credit/      # [示例] 管理用户积分的 API
│   │   │   └── user/        # [示例] 获取用户信息的 API
│   │   ├── layout.tsx       # 全局根布局
│   │   ├── page.tsx         # 首页 (着陆页)
│   │   ├── login/           # 登录页面
│   │   ├── signup/          # 注册页面
│   │   ├── privacy/         # 隐私政策页面
│   │   └── terms/           # 服务条款页面
│   ├── components/
│   │   ├── forms/           # 可复用的表单组件 (登录、注册)
│   │   ├── sections/        # 页面区块组件 (导航、页脚、英雄区等)
│   │   ├── ui/              # shadcn/ui 所有的组件
│   │   ├── sign-in.tsx      # 登录/注册按钮组合组件
│   │   └── sign-out.tsx     # 登出按钮组件
│   ├── lib/
│   │   ├── auth/            # 认证相关的辅助函数 (获取会话、用户操作)
│   │   ├── db/              # 数据库客户端实例和查询函数
│   │   ├── auth-client.ts   # BetterAuth 客户端实例
│   │   ├── auth-schema.ts   # Drizzle 数据库表结构定义
│   │   ├── auth.ts          # BetterAuth 核心配置 (服务端)
│   │   ├── openai.ts        # [示例] OpenAI 客户端封装
│   │   ├── stripe.ts        # Stripe 客户端封装
│   │   └── subscription.ts  # [示例] 订阅管理相关函数
│   ├── env.ts               # T3 Env，用于类型安全的环境变量
│   └── proxy.ts        # Next.js 中间件，用于保护路由
└── .env                   # 环境变量文件 (本地配置)
```

---

### **核心模块详解**

#### **1. 身份验证 (Authentication)**

*   **实现**: 基于 `better-auth` 库，提供了完整的身份验证流程。
*   **核心配置**: `src/lib/auth.ts` 文件是认证系统的核心，配置了数据库适配器（Drizzle for SQLite）、认证策略（邮箱密码、Google OAuth）以及会话管理。
*   **获取会话 (Session)**:
    *   **服务端 (Server Components/Route Handlers)**: 使用 `src/lib/auth/get-session.ts` 中封装的 `getServerSession` 函数。
        ```typescript
        import { getServerSession } from '@/lib/auth/get-session';

        const session = await getServerSession();
        if (session?.user) {
          console.log(session.user.email);
        }
        ```
    *   **客户端 (Client Components)**: 使用 `src/lib/auth-client.ts` 导出的 `useSession` hook。
        ```typescript
        "use client";
        import { useSession } from '@/lib/auth-client';

        const { data: session, status } = useSession();
        if (status === 'authenticated') {
          console.log(session.user.email);
        }
        ```

#### **2. 数据库 (Database)**

*   **实现**: 使用 `Drizzle ORM` 配合 `better-sqlite3` 驱动，连接到本地的 `local.db` 文件。
*   **Schema 定义**: `src/lib/auth-schema.ts` 文件定义了所有数据表的结构，是数据库的“真实来源”。当需要修改表结构时，应先修改此文件。
*   **数据库实例**: `src/lib/db/index.ts` 导出了一个名为 `db` 的 Drizzle 客户端实例，可用于在服务端执行数据库操作。
*   **辅助函数**: 此文件也包含一些预先封装好的数据库查询函数，例如：
    *   `updateUserCredit(userId: string, credit: number)`: 更新指定用户的积分。
    *   `getUserCredit(userId: string)`: 获取指定用户的积分。

#### **3. API 路由 (`src/app/api`)**

*   `/api/auth/[...all]/route.ts`: 这是 `better-auth` 的核心 API 路由，自动处理所有登录、注册、登出、回调等认证请求。
*   `/api/credit/*`: 这是一组受保护的示例 API，用于演示如何创建需要用户登录才能访问的接口。
    *   `get-credit`: 获取当前登录用户的积分。
    *   `update-credit`: 更新当前登录用户的积分。
*   `/api/user/get-plan`: 一个受保护的示例 API，用于获取用户的订阅计划。

#### **4. 可复用组件 (`src/components`)**

*   **`forms/`**:
    *   `login-form.tsx` 和 `signup-form.tsx`: 功能完整的客户端组件，内置了表单校验（Zod）和提交逻辑，可直接在登录/注册页面复用。
*   **`sections/`**:
    *   `Navbar.tsx`: 全局导航栏，能根据用户登录状态显示不同内容（如用户信息或登录/注册按钮）。
    *   `Footer.tsx`: 全局页脚。
    *   `Hero.tsx`, `Features.tsx`, `FAQ.tsx`: 构成着陆页的主要内容区块，易于修改和定制。
*   **`sign-in.tsx` & `sign-out.tsx`**:
    *   `sign-in.tsx`: 一个简洁的组件，包含指向登录和注册页面的链接按钮。
    *   `sign-out.tsx`: 提供用户登出功能的按钮。

---

### **典型开发工作流**

1.  **添加新页面**: 在 `src/app/` 目录下创建新文件夹和 `page.tsx`。
2.  **添加受保护的页面**: 在 `src/middleware.ts` 中的 `matcher` 数组里添加新页面的路由，即可实现访问控制。
3.  **修改数据库**:
    1.  在 `src/lib/auth-schema.ts` 中添加或修改表定义。
    2.  运行 `npx drizzle-kit generate` 生成新的迁移文件。
    3.  运行 `npx drizzle-kit push` 将更改应用到数据库。
4.  **添加新的 API**: 在 `src/app/api/` 目录下创建新的路由处理器。如果需要保护，确保其路径被 `middleware.ts` 覆盖。
5.  **环境变量**: 在 `.env` 文件中添加新的环境变量，并在 `src/env.ts` 中进行类型定义和校验。