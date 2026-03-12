import environment from "@/lib/environment.ts";
import config from "@/lib/config.ts";
import "@/lib/initialize.ts";
import server from "@/lib/server.ts";
import routes from "@/api/routes/index.ts";

// 附加路由
server.attachRoutes(routes);

// 导出 Koa 的 callback，供 Vercel Serverless 调用
export default server.app.callback();
