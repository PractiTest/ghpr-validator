# GitHub PR validator

This action will validate whether the PR description conforms to the provided pattern or not.

## Inputs

### `pattern**

**Required** The regex pattern to validate the PR description with.

## Example usage

uses: PractiTest/ghpr-validator@v1
with:
  pattern: '^Fixes '
