# Copies the Checkout Lab functions from the shopify-checkout-lab repo so the site runs the exact same files.
# Usage: ./scripts/sync-lab.ps1 [-LabRepo <path>]
param(
  [string]$LabRepo = (Join-Path $PSScriptRoot '..\..\shopify-checkout-lab')
)

$ErrorActionPreference = 'Stop'
$functions = @('cod-guard', 'b2b-case-packs', 'wholesale-tiers')

foreach ($name in $functions) {
  $src = Join-Path $LabRepo "extensions\$name\src"
  $dest = Join-Path $PSScriptRoot "..\public\assets\lab\$name"
  New-Item -ItemType Directory -Force $dest | Out-Null
  Get-ChildItem $src -File | Where-Object { $_.Name -ne 'index.js' } | Copy-Item -Destination $dest -Force
  Write-Host "Synced $name"
}
