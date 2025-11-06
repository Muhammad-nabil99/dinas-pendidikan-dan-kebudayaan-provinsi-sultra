# TODO: Fix React + TypeScript Errors

## Issues Identified:
1. **Module import errors**: "Cannot find module … or its corresponding type declarations"
2. **LazyLoadImage import error**: "Module 'react-lazy-load-image-component' has no exported member 'LazyLoadImage'"
3. **Type error**: "Type 'number' is not assignable to type 'SetStateAction<null>'"
4. **Missing components**: ProfilCard, MekanismeForm, DipList components are missing

## Plan:
1. Fix LazyLoadImage import (downgraded to 1.6.0)
2. Fix useState type in Navbar.tsx (openMenu should be number | null)
3. Create placeholder components for missing ones
4. Fix import paths to use relative paths instead of absolute 'components/'

## Files to Edit:
- src/components/layout/Navbar.tsx
- Create src/components/ppid/ProfilCard.tsx (placeholder)
- Create src/components/ppid/MekanismeForm.tsx (placeholder)
- Create src/components/ppid/DipList.tsx (placeholder)
- Fix all import paths in files that use 'components/' to relative paths

## Status:
- [x] Downgraded react-lazy-load-image-component to 1.6.0
- [ ] Fix Navbar.tsx useState type
- [ ] Create placeholder components
- [ ] Fix import paths
- [ ] Test build
