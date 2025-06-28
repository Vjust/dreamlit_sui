# Walrus Sites Deployment Guide

Deploy your Next.js site on decentralized infrastructure in 10 minutes.

## Prerequisites
- ✓ Sui wallet with SUI tokens
- ✓ Node.js installed
- ✓ SuiNS name (optional)

## 1. Configure Next.js for Static Export

Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
```

## 2. Build Your Site

```bash
npm run build
```

Creates static files in `out/` directory.

## 3. Install Site Builder

**macOS (ARM):**
```bash
curl https://storage.googleapis.com/mysten-walrus-binaries/site-builder-mainnet-latest-macos-arm64 -o site-builder
chmod +x site-builder
sudo mv site-builder /usr/local/bin/

# Get config
curl https://raw.githubusercontent.com/MystenLabs/walrus-sites/refs/heads/mainnet/sites-config.yaml -o ~/.config/walrus/sites-config.yaml
```

## 4. Deploy

```bash
site-builder deploy ./out --epochs 1
```

**Output example:**
```
✓ Created Walrus Site object: 0x407a3081...
✓ Site available at: http://5qs1yp...wf.localhost:3000
```

💡 **Save your Site Object ID!**

## 5. Access Your Site

**Option 1 - Test locally:**
```
http://[your-site-hash].localhost:3000
```

**Option 2 - Production (requires SuiNS):**
1. Link your SuiNS name to Site Object ID (see below)
2. Access at: `https://your-name.wal.app`

## 6. Link SuiNS Name to Your Site

1. **Visit SuiNS:**
   - Mainnet: [suins.io](https://suins.io)
   - Testnet: [testnet.suins.io](https://testnet.suins.io)

2. **Go to "Names You Own"**
   - Find your SuiNS name
   - Click the three dots menu (⋮)

3. **Select "Link To Walrus Site"**
   - Paste your Site Object ID
   - Click "Apply"

4. **Approve transaction** in wallet

5. **Your site is now live at:** `https://your-name.wal.app`

💡 **No SuiNS?** Sites are also accessible via:
`https://[base36-object-id].walrus.site`

## Quick Reference

| Task | Command |
|------|---------|
| Build site | `npm run build` |
| Test locally | `npx serve out` |
| Deploy | `site-builder deploy ./out --epochs 1` |
| Update | `site-builder deploy ./out` |
| Extend duration | `site-builder deploy ./out --epochs 100` |

## Epochs & Costs

- 1 epoch = 1 day (testnet) / 2 weeks (mainnet)
- Max: 183 epochs (~1 year)
- Longer epochs = higher cost

## Troubleshooting

**Build fails?**
- Check for server-side features
- Ensure all pages export statically

**Deploy fails?**
- Verify wallet has SUI tokens
- Check `sites-config.yaml` exists

## Resources

- [Official Docs](https://docs.wal.app/walrus-sites/intro.html)
- [Example Sites](https://github.com/MystenLabs/example-walrus-sites)
- [Get Testnet SUI](https://discord.gg/sui)
- [SuiNS Names](https://suins.io)