# Gera o PDF do portfólio a partir de portfolio.html usando o Chrome em modo headless.
# Uso (PowerShell):  powershell -File portfolio\build.ps1
$dir  = $PSScriptRoot
$out  = Join-Path $dir "Danillo-Franccesco-Portfolio.pdf"
$prof = Join-Path $env:TEMP "df-portfolio-chrome"
$url  = "file:///" + ($dir -replace '\\', '/') + "/portfolio.html"
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"

$args = @(
  "--headless=new", "--disable-gpu", "--no-first-run",
  "--user-data-dir=`"$prof`"", "--no-pdf-header-footer",
  "--virtual-time-budget=15000",
  "--print-to-pdf=`"$out`"", "`"$url`""
)
Start-Process -FilePath $chrome -ArgumentList $args -Wait -NoNewWindow -RedirectStandardError (Join-Path $env:TEMP "df-portfolio-err.txt")
Get-Item $out | Select-Object Name, @{ n = "MB"; e = { [math]::Round($_.Length / 1MB, 1) } }
