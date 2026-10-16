#!/usr/bin/env bash
set -e

# bossofai unified monorepo build pipeline for Vercel

echo "=== [1/3] Building web ==="
cd web
npm install
npm run build
cd ..

echo "=== [2/3] Building aihub ==="
cd aihub
npm install --legacy-peer-deps
npm run build
rm -rf ../web/dist/aihub
cp -r dist ../web/dist/aihub
cd ..

echo "=== [3/3] Building learning-hub ==="
cd learning-hub
npm install
npm run build
rm -rf ../web/dist/learn
cp -r build ../web/dist/learn
cd ..

echo "=== Unified build complete! Output in web/dist ==="
