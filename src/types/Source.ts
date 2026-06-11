export type SourceType = "game-api" | "report-api" | "powerbi-cron";

export const SOURCE_ROUTES: Record<SourceType, string> = {
  "game-api": "/game-api/logs",
  "report-api": "/report-api/logs",
  "powerbi-cron": "/powerbi-cron/logs",
};
