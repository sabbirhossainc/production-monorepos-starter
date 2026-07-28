# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# ci
- Use Node 22 in CI configuration. Confidence: 0.75

# styling
- Prefers CSS-based styling over Tailwind utility classes for UI component variants. Confidence: 0.75

# versioning
- Uses Changesets for monorepo versioning. Confidence: 0.2

# workflow
- Prefers changes to be committed (not just applied) when completing a task — expects the full edit → stage → commit cycle. Confidence: 0.85
- Prefers root-cause fixes over workarounds — when a tool or workflow issue arises, expects the underlying problem to be diagnosed and resolved rather than bypassed. Confidence: 0.6
- On Windows, prefers Git Bash over PowerShell ConsoleHost for interactive CLI tools that use TUI prompts (e.g., Changesets' enquirer-based interface). Confidence: 0.55

