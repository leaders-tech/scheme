/*
This file keeps the small shared TypeScript types for users, scheme files, and API results.
Edit this file when backend JSON shapes or websocket message shapes change.
Copy a type pattern here when you add another shared API or websocket type.
*/

export type User = {
  id: number;
  username: string;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
};

export type SchemeFile = {
  id: number;
  user_id: number;
  name: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type SchemeDiagnostic = {
  severity: "error";
  message: string;
  line: number;
  column: number;
};

export type SchemeAnalysis = {
  mainSchemeName: string | null;
  inputs: string[];
  outputs: string[];
  diagnostics: SchemeDiagnostic[];
  isValid: boolean;
};

export type Task = {
  id: number;
  title: string;
  statement_markdown: string;
  input_count: number;
  output_count: number;
  created_at: string;
  updated_at: string;
};

export type AdminTask = Task & {
  expected_outputs_text: string | null;
  reference_solution: string | null;
};

export type TaskCheckMismatch = {
  case_index: number;
  input_bits: string;
  expected_output: string;
  actual_output: string;
};

export type TaskSubmitResult = {
  accepted: boolean;
  message: string;
  mismatch?: TaskCheckMismatch;
  diagnostics?: Array<{
    line: number;
    column: number;
    message: string;
  }>;
};

export type TaskSubmitRequest = {
  task_id: number;
  solution: string;
};

export type ApiOk<T> = {
  ok: true;
  data: T;
};

export type ApiFail = {
  ok: false;
  error: {
    code: string;
    message: string;
  };
};

export type ApiResponse<T> = ApiOk<T> | ApiFail;

export type WsMessage =
  | { type: "ws.ready"; user_id: number; connections: number }
  | { type: "pong" };
