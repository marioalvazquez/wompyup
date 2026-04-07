#!/bin/bash
set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "==> Pulling latest changes..."
cd "$PROJECT_DIR"
git pull origin main

echo "==> Rebuilding and restarting container..."
docker compose build --no-cache
docker compose up -d

echo "==> Cleaning up unused Docker images..."
docker image prune -f

echo "==> Deploy complete."
