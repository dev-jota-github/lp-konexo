-- ============================================================
-- SUPABASE SCHEMA FOR DIAGNÓSTICO FORM
-- Run this in Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create diagnosticos table
CREATE TABLE IF NOT EXISTS diagnosticos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  instagram TEXT,
  interesse TEXT NOT NULL,
  investimento TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index for common queries
CREATE INDEX IF NOT EXISTS idx_diagnosticos_created_at ON diagnosticos(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_diagnosticos_whatsapp ON diagnosticos(whatsapp);

-- Enable Row Level Security (RLS)
ALTER TABLE diagnosticos ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON diagnosticos
  FOR INSERT TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all (for admin dashboard)
CREATE POLICY "Allow authenticated read" ON diagnosticos
  FOR SELECT TO authenticated
  USING (true);

-- Optional: Create a view for easy reading
CREATE OR REPLACE VIEW diagnosticos_recentes AS
SELECT
  id,
  nome,
  empresa,
  whatsapp,
  instagram,
  interesse,
  investimento,
  created_at,
  TO_CHAR(created_at AT TIME ZONE 'America/Sao_Paulo', 'DD/MM/YYYY HH24:MI') as created_at_br
FROM diagnosticos
ORDER BY created_at DESC;