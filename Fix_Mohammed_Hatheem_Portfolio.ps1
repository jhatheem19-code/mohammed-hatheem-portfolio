# Run this from the root of your React/Vite portfolio project.
$ErrorActionPreference = 'Stop'

$root = (Get-Location).Path
$files = @(
  'src\data\projects.js',
  'src\components\Footer.jsx',
  'src\components\ProjectCard.jsx',
  '.gitignore'
)

foreach ($file in $files) {
  if (-not (Test-Path -LiteralPath (Join-Path $root $file))) {
    throw "Missing $file. Open the mohammed-hatheem-portfolio folder in VS Code first."
  }
}

# Preserve the original files outside the project folder.
$backup = Join-Path (Split-Path $root -Parent) ('Portfolio-Backup-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
foreach ($file in $files) {
  $source = Join-Path $root $file
  $destination = Join-Path $backup $file
  New-Item -ItemType Directory -Force -Path (Split-Path $destination -Parent) | Out-Null
  Copy-Item -LiteralPath $source -Destination $destination
}

$utf8 = New-Object System.Text.UTF8Encoding($false)
function Save-Text([string]$relativePath, [string]$value) {
  [System.IO.File]::WriteAllText((Join-Path $root $relativePath), $value, $utf8)
}

# 1. Remove invalid placeholder GitHub URLs (2 project cards).
$path = 'src\data\projects.js'
$content = [System.IO.File]::ReadAllText((Join-Path $root $path))
$content = $content.Replace('githubUrl: "AI_FAQ_GITHUB_URL",', 'githubUrl: "",')
Save-Text $path $content

# 2. Match Footer WhatsApp with the existing number in Contact.jsx.
# IMPORTANT: Confirm this is your actual business WhatsApp number.
$path = 'src\components\Footer.jsx'
$content = [System.IO.File]::ReadAllText((Join-Path $root $path))
$content = $content.Replace('const whatsappNumber = "91XXXXXXXXXX";', 'const whatsappNumber = "919014758318";')
Save-Text $path $content

# 3. Display a truthful fallback when no live demo or GitHub link exists.
$path = 'src\components\ProjectCard.jsx'
$content = [System.IO.File]::ReadAllText((Join-Path $root $path))
$content = [regex]::Replace($content, '(<span className="project-status">\s*)Project Preview(\s*</span>)', '${1}Demo link coming soon${2}')
Save-Text $path $content

# 4. Prevent accidental committing of .env files.
$path = '.gitignore'
$content = [System.IO.File]::ReadAllText((Join-Path $root $path))
if ($content -notmatch '(?m)^\.env\.\*$') {
  $content = $content.TrimEnd() + "`r`n`r`n# Private configuration`r`n.env`r`n.env.*`r`n!.env.example`r`n"
}
Save-Text $path $content

Write-Host 'Portfolio fixes applied.' -ForegroundColor Green
Write-Host "Original files backed up to: $backup"
Write-Host 'NEXT: npm ci; npm run lint; npm run build; npm run dev'
