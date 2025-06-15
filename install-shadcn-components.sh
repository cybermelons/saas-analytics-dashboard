#!/bin/bash

echo "Installing all shadcn/ui components..."

# Core components
pnpm dlx shadcn-ui@latest init -y

# Install all components we're using
pnpm dlx shadcn-ui@latest add avatar -y
pnpm dlx shadcn-ui@latest add badge -y
pnpm dlx shadcn-ui@latest add button -y
pnpm dlx shadcn-ui@latest add card -y
pnpm dlx shadcn-ui@latest add dropdown-menu -y
pnpm dlx shadcn-ui@latest add input -y
pnpm dlx shadcn-ui@latest add navigation-menu -y
pnpm dlx shadcn-ui@latest add progress -y
pnpm dlx shadcn-ui@latest add select -y
pnpm dlx shadcn-ui@latest add separator -y
pnpm dlx shadcn-ui@latest add sheet -y
pnpm dlx shadcn-ui@latest add skeleton -y
pnpm dlx shadcn-ui@latest add tabs -y
pnpm dlx shadcn-ui@latest add tooltip -y
pnpm dlx shadcn-ui@latest add toast -y
pnpm dlx shadcn-ui@latest add sonner -y

echo "All components installed!"