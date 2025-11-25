export type AnalyticsEvent = {
  eventName: string;
  userId: string;
  timestamp: number;
  properties?: Record<string, any>;
};

export type AnalyticsWorkerConfig = {
  apiKey: string;
  endpoint: string;
  flushIntervalMs?: number;
  maxBatchSize?: number;
};

export type Batch = AnalyticsEvent[];

export type StorageAdapter = {
  load(): Promise<Batch>;
  save(batch: Batch): Promise<void>;
  clear(): Promise<void>;
};

export type AnalyticsClient = {
  track(event: AnalyticsEvent): void;
  flush(): Promise<void>;
  shutdown(): Promise<void>;
};

export type RetryOptions = {
  maxRetries?: number;
  retryDelayMs?: number;
};

export type EventProcessingResult = {
  success: boolean;
  eventsSent?: number;
  error?: Error;
};