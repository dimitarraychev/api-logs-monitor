export type SourceType = "powerbi-cron";

export const SOURCE_ROUTES: Record<SourceType, string> = {
  "powerbi-cron": "/powerbi-cron/logs",
};
