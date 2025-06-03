# Chad Shared Types

Shared TypeScript types for Chad webapp and admin panel.

## Installation

```bash
# Create or edit .npmrc in your project root
echo "@thatalexay:registry=https://npm.pkg.github.com" >> .npmrc

# Install the package
npm install @that/chad-types
```

## Usage

```typescript
import { Chatroom, ChatMessage } from '@thatalexay/chad-types';

// Use the types in your code
const chatroom: Chatroom = {
  // ...
};
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Make changes to types in `src/`
4. Build: `npm run build`
5. Test locally: `npm link`
6. Publish: `npm publish` 